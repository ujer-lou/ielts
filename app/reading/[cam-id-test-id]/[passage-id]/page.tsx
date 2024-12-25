'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { readingTests, type Question } from '@/lib/readingPassage'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

interface FormData {
  [key: string]: string;
}

export default function PassagePage() {
  const params = useParams()
  const camIdTestId = params["cam-id-test-id"] as string
  const passageId = params["passage-id"] as string

  const [camId, testId] = camIdTestId.split("-test-")
  const camYear = camId.split("cam-")
  const passageNumber = parseInt(passageId.replace('passage-', ''))

  const testIndex = parseInt(testId) - 1
  const currentPassage = readingTests[testIndex].passages[passageNumber - 1]
  const lastLetter = Object.keys(
    readingTests[testIndex]?.passages?.[passageNumber - 1]?.paragraphs || {}
  ).pop();
  const totalQuestion = readingTests[testIndex]?.passages[passageNumber - 1].total

  const { control, handleSubmit } = useForm<FormData>()
  const [results, setResults] = useState<{ [key: number]: boolean }>({})
  const [score, setScore] = useState<number | null>(null)
  const [showAnswers, setShowAnswers] = useState(false)

  useEffect(() => {
    setResults({})
    setScore(null)
    setShowAnswers(false)
  }, [passageId])
  const onSubmit = (data: FormData) => {
    const allQuestions = Object.values(currentPassage.questions).flat()
    const newResults = allQuestions.reduce((acc, question) => {
      let userAnswer;
      const userSummaryAnswer: string[] = [];
      if (question.type === 'fillin') {
        userAnswer = data[`question${question.id}`]?.trim().toLowerCase()
      } else if (question.type !== 'summary' && question.type !== 'wordlist') {
        userAnswer = data[`question${question.id}`];
      } else {
        for (let i = 0; i < (question?.number?.length || 0); i++) {
          userSummaryAnswer.push(data[`question${question?.number?.[i]}`]);
        }
      }
      if (question.type === 'wordlist') {
        const correctAnswers = question.correctAnswer;
        const answerMatches = userSummaryAnswer.map((userAnswer, index) => {
          return correctAnswers[index] === userAnswer;
        });
        // @ts-expect-error: Not code breaking error
        acc[question.id] = answerMatches;
      } else if (question.type === 'multipleletterchoice') {
        const userAnswers = userAnswer
        const correctAnswers = question.correctAnswer
        acc[question.id] = userAnswers === correctAnswers
      } else if (question.type === 'fillin') {
        const userAnswers = userAnswer
        const correctAnswers = question.correctAnswer
        acc[question.id] = userAnswers === correctAnswers
      } else if (question.type === 'summary') {
        const correctAnswers = question.correctAnswer;
        const answerMatches = userSummaryAnswer.map((userAnswer, index) => {
          return correctAnswers[index] === userAnswer;
        });
        // @ts-expect-error: Not code breaking error
        acc[question.id] = answerMatches;
      }
      else {
        acc[question.id] = Boolean(
          userAnswer &&
          typeof question.correctAnswer === 'string' &&
          userAnswer.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase()
        );
      }
      return acc
    }, {} as { [key: number]: boolean })
    setResults(newResults)
    const newScore = Object.values(newResults)
      .flatMap(result => Array.isArray(result) ? result : [result])
      .filter(Boolean)
      .length;
    setScore(newScore)
  }

  const renderQuestions = (questions: Question[], type: string) => {
    if (!questions || questions.length === 0) return null;
    console.log(questions)
    return (
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>{type} Questions</CardTitle>
        </CardHeader>
        <CardContent>
          {type === 'True/False/Not Given' && (
            <p className="mb-4">Do the following statements agree with the information given in Reading Passage {passageNumber}?</p>
          )}
          {type === 'Fill in the Blank' && (
            <p className="mb-4">Complete the sentences below. Choose <span className="font-semibold">ONE WORD ONLY</span> from the passage for each answer.</p>
          )}
          {type === 'Multiple Choice' && (
            <p className="mb-4">Choose the correct letter, A, B, C or D.</p>
          )}
          {type === 'Word List' && (
            <div className="mb-4">
              <p>Complete the summary using the list of phrases, A-J, below</p>
              <p className="text-sm text-muted-foreground">Write the correct letter, A-J, in boxes on your answer sheet.</p>
              <div className=" mt-4 text-center font-semibold text-xl">
                <h3>{questions[0].title}</h3>
              </div>
            </div>
          )}
          {type === 'Paragraph Matching' && (
            <div className="mb-4">
              <p>Reading Passage {passageNumber} has several paragraphs, A-{lastLetter}.</p>
              <p>Which paragraph contains the following information?</p>
              {!questions[0]?.allowMultipleUse &&
                <p className="text-sm text-muted-foreground">Use each letter only once.</p>
              }
              {questions[0]?.allowMultipleUse &&
                <p className="text-sm text-muted-foreground">You may use any letter more than once.</p>
              }
            </div>
          )}
          {type === 'Multiple Letter Choice' && (
            <div className="mb-4">
              <p>Choose {questions[0]?.requiredAnswers} letters, A-E.</p>
              <p>Write the correct letters in boxes {questions[0]?.id}-{questions[questions.length - 1]?.id} on your answer sheet.</p>
              <p className="text-sm text-muted-foreground">Write your answers as comma-separated letters (e.g., A,B)</p>
            </div>
          )}
          {type === 'Summary' && (
            <div className="mb-4">
              <p>Complete the summary below.</p>
              <p>Choose <span className="font-semibold">ONE WORD ONLY</span> from the passage for each answer.</p>
              <p className="text-sm text-muted-foreground">Write your answers in boxes {questions[0]?.number?.[0]}-{questions[0]?.number?.[questions[0]?.number?.length - 1]} on your answer sheet.</p>
              <div className=" mt-4 text-center font-semibold text-xl">
                <h3>{questions[0].title}</h3>
              </div>
            </div>
          )}
          {questions.map((question) => (
            <div key={question.id} className="mb-4">
              <Label htmlFor={`question${question.id}`} className="mb-2">
                {question.type !== 'summary' && question.type !== 'wordlist' && `${question.id}. `} {
                  question.type === 'fillin' || question.type === 'summary' || question.type === 'wordlist'
                    ? (question?.summaryText || question?.question || 'Default Text').split('________').map((part, index, array) => (
                      <span className="font-normal text-[15px]" key={index}>
                        {part}
                        <span className="font-semibold">{((question?.type === 'summary' || question?.type === 'wordlist') && (question.number?.length || 0) > index) && `${question?.number?.[index]}.`}</span>
                        {(index < array.length - 1 && question.type !== 'fillin') && (
                          <Controller
                            name={`question${question?.number?.[index]}`}
                            control={control}
                            render={({ field }) => (
                              <Input
                                {...field}
                                maxLength={question?.type === 'wordlist' ? 1 : undefined}
                                className={`px-1 inline-block py-0 h-6 w-32 mx-1 border-b border-t-0 border-l-0 border-r-0 rounded-none focus:outline-none ${question?.type === 'wordlist' ? 'uppercase' : ''}`}
                                placeholder={question?.type === 'wordlist' ? "E.G. A" : "Answer"}
                              />
                            )}
                          />
                        )}
                        {(index < array.length - 1 && question.type === 'fillin') && (
                          <Controller
                            name={`question${question.id}`}
                            control={control}
                            render={({ field }) => (
                              <Input
                                {...field}
                                className="px-1 inline-block py-0 h-6 w-32 mx-1 border-b border-t-0 border-l-0 border-r-0 rounded-none focus:outline-none"
                                placeholder="Answer"
                              />
                            )}
                          />
                        )}
                      </span>
                    ))
                    : <span className="font-normal text-[15px]">{question.question}</span>
                }
              </Label>
              {question.type === 'wordlist' && (
                <div className="space-y-6 mt-6">
                  <Card className="p-4 border-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(question.wordList || {}).map(([letter, word]) => (
                        <div key={letter} className="flex gap-2">
                          <span className="font-bold min-w-[1.5rem]">{letter}</span>
                          <span>{word}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              )}
              {question.type !== 'fillin' && question.type !== 'summary' && question.type !== 'wordlist' && (
                <Controller
                  name={`question${question.id}`}
                  control={control}
                  render={({ field }) => {
                    switch (question.type) {
                      case 'truefalse':
                        return (
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="mt-1" id={`question${question.id}`}>
                              <SelectValue placeholder="Select an answer" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="TRUE">TRUE</SelectItem>
                              <SelectItem value="FALSE">FALSE</SelectItem>
                              <SelectItem value="NOT GIVEN">NOT GIVEN</SelectItem>
                            </SelectContent>
                          </Select>
                        )
                        case 'yesno':
                        return (
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="mt-1" id={`question${question.id}`}>
                              <SelectValue placeholder="Select an answer" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="YES">YES</SelectItem>
                              <SelectItem value="NO">NO</SelectItem>
                              <SelectItem value="NOT GIVEN">NOT GIVEN</SelectItem>
                            </SelectContent>
                          </Select>
                        )
                      case 'multiplechoice':
                        return (
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1 mt-1"
                          >
                            {question.options?.map((option) => (
                              <div key={option} className="flex items-center space-x-2">
                                <RadioGroupItem value={option} id={`question${question.id}-option-${option}`} />
                                <Label className="font-normal" htmlFor={`question${question.id}-option-${option}`}>
                                  <span className="font-semibold">{option.slice(0, 2)}</span>{option.slice(2)}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        )
                      case 'paragraphmatching':
                        return (
                          <Input
                            {...field}
                            className="w-20 uppercase mt-1"
                            maxLength={1}
                            onChange={(e) => {
                              const value = e.target.value.toUpperCase();
                              if (/^[A-G]?$/.test(value)) {
                                field.onChange(value);
                              }
                            }}
                          />
                        )
                      case 'multipleletterchoice':
                        return (
                          <div className="space-y-4 text-[15px]">
                            <Input
                              {...field}
                              className="w-20 uppercase mt-1"
                              placeholder="e.g. A,B"
                              onChange={(e) => {
                                const value = e.target.value.toUpperCase().replace(/[^A-E,]/g, '');
                                const answers = value.split(',').filter(Boolean);
                                if (answers.length <= (question.requiredAnswers || 2)) {
                                  field.onChange(value);
                                }
                              }}
                            />
                            <div className="space-y-2">
                              {question.statements && Object.entries(question.statements).map(([letter, statement]) => (
                                <div key={letter} className="flex gap-2">
                                  <span className="font-bold">{letter}</span>
                                  <p>{statement}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      default:
                        return <div>Unsupported question type</div>
                    }
                  }}
                />
              )}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${results[question.id] !== undefined || showAnswers ? 'max-h-20 mt-2' : 'max-h-0'
                  }`}
              >
                {results[question.id] !== undefined && (
                  (question.type !== 'summary' && question.type !== 'wordlist') ? (
                    <p className={results[question.id] ? "text-green-600" : "text-red-600"}>
                      {results[question.id] ? "Correct" : "Incorrect"}
                    </p>
                  ) : (
                    <p>
                      {Array.isArray(results[question.id]) ? (
                        results[question.id]
                           // @ts-expect-error: Not code breaking error
                          .map((result: boolean, index: number) => (
                            <span key={index} className={result ? "text-green-600" : "text-red-600"}>
                              {question?.number?.[index]}. {result ? "Correct" : "Incorrect"}
                            </span>
                          ))
                          .reduce((prev: string, curr: string) => [prev, ', ', curr])
                      ) : (
                        <span className={results[question.id] ? "text-green-600" : "text-red-600"}>
                          {results[question.id] ? "Correct" : "Incorrect"}
                        </span>
                      )}
                    </p>
                  )
                )}
                {showAnswers && (
                  <p className="text-blue-600">Answer: {question.type !== 'summary' && question.type !== 'wordlist'
                    ? question.correctAnswer
                    : Array.isArray(question.correctAnswer) && Array.isArray(question.number)
                      ? question.correctAnswer.map((answer, index) => `${question?.number?.[index]}. ${answer}`).join(', ')
                      : question.correctAnswer
                  }</p>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    )
  }

  const NavigationButtons = ({ isTop = false }) => (
    <div className={`flex justify-between items-center ${isTop ? 'mb-4' : 'mt-6'}`}>
      {passageNumber > 1 ? (
        <Link href={`/reading/${camIdTestId}/passage-${passageNumber - 1}`}>
          <Button className="transition-all duration-300 bg-black text-white hover:text-white hover:bg-gray-800">
            Previous Passage
          </Button>
        </Link>
      ) : (
        <Button
          className="transition-all duration-300 bg-gray-600 text-white cursor-not-allowed"
          disabled
        >
          Previous Passage
        </Button>
      )}

      {passageNumber < 3 ? (
        <Link href={`/reading/${camIdTestId}/passage-${passageNumber + 1}`}>
          <Button className="transition-all duration-300 bg-black text-white hover:text-white hover:bg-gray-800">
            Next Passage
          </Button>
        </Link>
      ) : (
        <Button
          className="transition-all duration-300 bg-gray-600 text-white cursor-not-allowed"
          disabled
        >
          Next Passage
        </Button>
      )}
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <NavigationButtons isTop={true} />
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">
          Cambridge {camYear} Test {testId} Passage {passageNumber}
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>READING PASSAGE {passageNumber}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            You should spend about 20 minutes on Questions 1-{totalQuestion}, which are based on Reading Passage {passageNumber} below.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-center">{currentPassage.title}</h2>
          {currentPassage.subtitle && <p className="italic text-center mb-4">{currentPassage.subtitle}</p>}
          {currentPassage.paragraphs ? (
            Object.entries(currentPassage.paragraphs).map(([key, content]) => (
              <div key={key} className="mb-4">
                <strong>{key}</strong>
                <p>{content}</p>
              </div>
            ))
          ) : (
            currentPassage.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))
          )}
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-8">
        {renderQuestions(currentPassage.questions.truefalse || [], 'True/False/Not Given')}
        {renderQuestions(currentPassage.questions.yesno || [], 'Yes/No/Not Given')}
        {renderQuestions(currentPassage.questions.fillin || [], 'Fill in the Blank')}
        {renderQuestions(currentPassage.questions.multiplechoice || [], 'Multiple Choice')}
        {renderQuestions(currentPassage.questions.wordlist || [], 'Word List')}
        {renderQuestions(currentPassage.questions.paragraphmatching || [], 'Paragraph Matching')}
        {renderQuestions(currentPassage.questions.multipleletterchoice || [], 'Multiple Letter Choice')}
        {renderQuestions(currentPassage.questions.summary || [], 'Summary')}

        <div
          className={`text-center text-xl font-bold mb-4 overflow-hidden transition-all duration-300 ease-in-out ${score !== null ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          Your Score: {score} out of {totalQuestion}
        </div>

        <div className="flex justify-between items-center gap-4 mt-8">
          <Button type="submit" className="flex-grow">Check Answers</Button>
          <Button
            type="button"
            variant="outline"
            className="flex-grow"
            onClick={() => setShowAnswers(!showAnswers)}
          >
            {showAnswers ? "Hide Answers" : "Show Answers"}
          </Button>
        </div>
      </form>

      <NavigationButtons />
    </div>
  )
}

