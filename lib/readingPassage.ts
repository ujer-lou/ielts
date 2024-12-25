export interface Question {
  id: number;
  type: 'truefalse' | 'yesno' | 'fillin' | 'multiplechoice' | 'wordlist' | 'paragraphmatching' | 'multipleletterchoice' | 'summary';
  question?: string;
  correctAnswer: string | string[];
  options?: string[];
  title?: string;
  wordList?: {
    [key: string]: string;
  };
  allowMultipleUse?: boolean;
  requiredAnswers?: number;
  statements?: {
    [key: string]: string;
  };
  summaryText?: string;
  number?: number[];
}

export interface ReadingPassage {
  id: number;
  total: number;
  title: string;
  subtitle?: string;
  content: string;
  paragraphs?: {
    [key: string]: string;
  };
  questions: {
    truefalse?: Question[];
    yesno?: Question[];
    fillin?: Question[];
    multiplechoice?: Question[];
    wordlist?: Question[];
    paragraphmatching?: Question[];
    multipleletterchoice?: Question[];
    summary?: Question[];
  };
}

export interface ReadingTest {
  id: string;
  passages: ReadingPassage[];
}

export const readingTests: ReadingTest[] = [
  {
    id: "cam-19-test-1",
    passages: [
      {
        id: 1,
        total: 13,
        title: "How tennis rackets have changed",
        content: "In 2016, the British professional tennis player Andy Murray was ranked as the world’s number one. It was an incredible achievement by any standard – made even more remarkable by the fact that he did this during a period considered to be one of the strongest in the sport’s history, competing against the likes of Rafael Nadal, Roger Federer and Novak Djokovic, to name just a few. Yet five years previously, he had been regarded as a talented outsider who entered but never won the major tournaments.\n\nOf the changes that account for this transformation, one was visible and widely publicised: in 2011, Murray invited former number one player Ivan Lendl onto his coaching team – a valuable addition that had a visible impact on the player’s playing style. Another change was so subtle as to pass more or less unnoticed. Like many players, Murray has long preferred a racket that consists of two types of string: one for the mains (verticals) and another for the crosses (horizontals). While he continued to use natural string in the crosses, in 2012 he switched to a synthetic string for the mains. A small change, perhaps, but its importance should not be underestimated.\n\nThe modification that Murray made is just one of a number of options available to players looking to tweak their rackets in order to improve their games. ‘Touring professionals have their rackets customised to their specific needs,’ says Colin Triplow, a UK-based professional racket stringer. ‘It’s a highly important part of performance maximisation.’ Consequently, the specific rackets used by the world’s elite are not actually readily available to the public; rather, each racket is individually made to suit the player who uses it. Take the US professional tennis players Mike and Bob Bryan, for example: ‘We’re very particular with our racket specifications,’ they say. ‘All our rackets are sent from our manufacturer to Tampa, Florida, where our frames go through a . . . thorough customisation process.’ They explain how they have adjusted not only racket length, but even experimented with different kinds of paint. The rackets they use now weigh more than the average model and also have a denser string pattern (i.e. more crosses and mains).\n\nThe primary reason for these modifications is simple: as the line between winning and losing becomes thinner and thinner, even these slight changes become more and more important. As a result, players and their teams are becoming increasingly creative with the modifications to their rackets as they look to maximise their competitive advantage.\n\nRacket modifications mainly date back to the 1970s, when the amateur German tennis player Werner Fischer started playing with the so-called spaghetti-strung racket. It created a string bed that generated so much topspin that it was quickly banned by the International Tennis Federation. However, within a decade or two, racket modification became a regularity. Today it is, in many ways, an aspect of the game that is equal in significance to nutrition or training.\n\nModifications can be divided into two categories: those to the string bed and those to the racket frame. The former is far more common than the latter: the choice of the strings and the tension with which they are installed is something that nearly all professional players experiment with. They will continually change it depending on various factors including the court surface, climatic conditions, and game styles. Some will even change it depending on how they feel at the time.\n\nAt one time, all tennis rackets were strung with natural gut made from the outer layer of sheep or cow intestines. This all changed in the early 1990s with the development of synthetic strings that were cheaper and more durable. They are made from three materials: nylon (relatively durable and affordable), Kevlar (too stiff to be used alone) or co-polyester (polyester combined with additives that enhance its performance). Even so, many professional players continue to use a ‘hybrid set-up’, where a combination of both synthetic and natural strings are used.\n\nOf the synthetics, co-polyester is by far the most widely used. It’s a perfect fit for the style of tennis now played, where players tend to battle it out from the back of the court rather than coming to the net. Studies indicate that the average spin from a co-polyester string is 25% greater than that from natural string or other synthetics. In a sense, the development of co-polyester strings has revolutionised the game.\n\nHowever, many players go beyond these basic adjustments to the strings and make changes to the racket frame itself. For example, much of the serving power of US professional player Pete Sampras was attributed to the addition of four to five lead weights onto his rackets, and today many professionals have the weight adjusted during the manufacturing process.\n\nOther changes to the frame involve the handle. Players have individual preferences for the shape of the handle and some will have the handle of one racket moulded onto the frame of a different racket. Other players make different changes. The professional Portuguese player Gonçalo Oliveira replaced the original grips of his rackets with something thinner because they had previously felt uncomfortable to hold.\n\nRacket customisation and modification have pushed the standards of the game to greater levels that few could have anticipated in the days of natural strings and heavy, wooden frames, and it’s exciting to see what further developments there will be in the future.",
        questions: {
          truefalse: [
            {
              id: 1,
              type: "truefalse",
              question: "People had expected Andy Murray to become the world’s top tennis player for at least five years before 2016.",
              correctAnswer: "FALSE"
            },
            {
              id: 2,
              type: "truefalse",
              question: "The change that Andy Murray made to his rackets attracted a lot of attention.",
              correctAnswer: "FALSE"
            },
            {
              id: 3,
              type: "truefalse",
              question: "Most of the world’s top players take a professional racket stringer on tour with them.",
              correctAnswer: "NOT GIVEN"
            },
            {
              id: 4,
              type: "truefalse",
              question: "Mike and Bob Bryan use rackets that are light in comparison to the majority of rackets.",
              correctAnswer: "FALSE"
            },
            {
              id: 5,
              type: "truefalse",
              question: "Werner Fischer played with a spaghetti-strung racket that he designed himself.",
              correctAnswer: "NOT GIVEN"
            },
            {
              id: 6,
              type: "truefalse",
              question: "The weather can affect how professional players adjust the strings on their rackets.",
              correctAnswer: "TRUE"
            },
            {
              id: 7,
              type: "truefalse",
              question: "It was believed that the change Pete Sampras made to his rackets contributed to his strong serve.",
              correctAnswer: "TRUE"
            }
          ],
          fillin: [
            {
              id: 8,
              type: "fillin",
              question: "Mike and Bob Bryan made changes to the types of ________ used on their racket frames.",
              correctAnswer: "paint"
            },
            {
              id: 9,
              type: "fillin",
              question: "Players were not allowed to use the spaghetti-strung racket because of the amount of ________ it created.",
              correctAnswer: "topspin"
            },
            {
              id: 10,
              type: "fillin",
              question: "Changes to rackets can be regarded as being as important as players’ diets or the ________ they do.",
              correctAnswer: "training"
            },
            {
              id: 11,
              type: "fillin",
              question: "All rackets used to have natural strings made from the ________ of animals.",
              correctAnswer: "intestines"
            },
            {
              id: 12,
              type: "fillin",
              question: "Pete Sampras had metal ________ put into the frames of his rackets.",
              correctAnswer: "weights"
            },
            {
              id: 13,
              type: "fillin",
              question: "Gonçalo Oliveira changed the ________ on his racket handles.",
              correctAnswer: "grips"
            }
          ]
        }
      },
      {
        id: 2,
        total: 11,
        title: "The pirates of the ancient Mediterranean",
        subtitle: 'In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers',
        content: "In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers",
        paragraphs: {
          "A": "When one mentions pirates, an image springs to most people’s minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea. Yet from the first to the third millennium BCE, thousands of years before these swashbucklers began spreading fear across the Caribbean, pirates prowled the Mediterranean, raiding merchant ships and threatening vital trade routes. However, despite all efforts and the might of various ancient states, piracy could not be stopped. The situation remained unchanged for thousands of years. Only when the pirates directly threatened the interests of ancient Rome did the Roman Republic organise a massive fleet to eliminate piracy. Under the command of the Roman general Pompey, Rome eradicated piracy, transforming the Mediterranean into ‘Mare Nostrum’ (Our Sea).",
          "B": "Although piracy in the Mediterranean is first recorded in ancient Egypt during the reign of Pharaoh Amenhotep III (c 1390–1353 BCE), it is reasonable to assume it predated this powerful civilisation. This is partly due to the great importance the Mediterranean held at this time, and partly due to its geography. While the Mediterranean region is predominantly fertile, some parts are rugged and hilly, even mountainous. In the ancient times, the inhabitants of these areas relied heavily on marine resources, including fish and salt. Most had their own boats, possessed good seafaring skills, and unsurpassed knowledge of the local coastline and sailing routes. Thus, it is not surprising that during hardships, these men turned to piracy. Geography itself further benefited the pirates, with the numerous coves along the coast providing places for them to hide their boats and strike undetected. Before the invention of ocean-going caravels* in the 15th century, ships could not easily cross long distances over open water. Thus, in the ancient world most were restricted to a few well-known navigable routes that followed the coastline. Caught in a trap, a slow merchant ship laden with goods had no other option but to surrender. In addition, knowledge of the local area helped the pirates to avoid retaliation once a state fleet arrived.",
          "C": "One should also add that it was not unknown in the first and second millennia BCE for governments to resort to pirates’ services, especially during wartime, employing their skills and numbers against their opponents. A pirate fleet would serve in the first wave of attack, preparing the way for the navy. Some of the regions were known for providing safe harbours to pirates, who, in return, boosted the local economy.",
          "D": "The first known record of a named group of Mediterranean pirates, made during the rule of ancient Egyptian Pharaoh Akhenaten (c 1353–1336 BCE), was in the Amarna Letters. These were extracts of diplomatic correspondence between the pharaoh and his allies, and covered many pressing issues, including piracy. It seems the pharaoh was troubled by two distinct pirate groups, the Lukka and the Sherden. Despite the Egyptian fleet’s best efforts, the pirates continued to cause substantial disruption to regional commerce. In the letters, the king of Alashiya (modern Cyprus) rejected Akhenaten’s claims of a connection with the Lukka (based in modern-day Turkey). The king assured Akhenaten he was prepared to punish any of his subjects involved in piracy.",
          "E": "The ancient Greek world’s experience of piracy was different from that of Egyptian rulers. While Egypt’s power was land-based, the ancient Greeks relied on the Mediterranean in almost all aspects of life, from trade to warfare. Interestingly, in his works the Iliad and the Odyssey, the ancient Greek writer Homer not only condones, but praises the lifestyle and actions of pirates. The opinion remained unchanged in the following centuries. The ancient Greek historian Thucydides, for instance, glorified pirates’ daring attacks on ships or even cities. For Greeks, piracy was a part of everyday life. Even high-ranking members of the state were not beyond engaging in such activities. According to the Greek orator Demosthenes, in 355 BCE, Athenian ambassadors made a detour from their official travel to capture a ship sailing from Egypt, taking the wealth found onboard for themselves! The Greeks’ liberal approach towards piracy does not mean they always tolerated it, but attempts to curtail piracy were hampered by the large number of pirates operating in the Mediterranean.",
          "F": "The rising power of ancient Rome required the Roman Republic to deal with piracy in the Mediterranean. While piracy was a serious issue for the Republic, Rome profited greatly from its existence. Pirate raids provided a steady source of slaves, essential for Rome’s agriculture and mining industries. But this arrangement could work only while the pirates left Roman interests alone. Pirate attacks on grain ships, which were essential to Roman citizens, led to angry voices in the Senate, demanding punishment of the culprits. Rome, however, did nothing, further encouraging piracy. By the 1st century BCE, emboldened pirates kidnapped prominent Roman dignitaries, asking for a large ransom to be paid. Their most famous hostage was none other than Julius Caesar, captured in 75 BCE.",
          "G": "By now, Rome was well aware that pirates had outlived their usefulness. The time had come for concerted action. In 67 BCE, a new law granted Pompey vast funds to combat the Mediterranean menace. Taking personal command, Pompey divided the entire Mediterranean into 13 districts, assigning a fleet and commander to each. After cleansing one district of pirates, the fleet would join another in the next district. The process continued until the entire Mediterranean was free of pirates. Although thousands of pirates died at the hands of Pompey’s troops, as a long-term solution to the problem, many more were offered land in fertile areas located far from the sea. Instead of a maritime menace, Rome got productive farmers that further boosted its economy."
        },
        questions: {
          paragraphmatching: [
            {
              id: 1,
              type: "paragraphmatching",
              question: "A reference to a denial of involvement in piracy",
              correctAnswer: "D",
              allowMultipleUse: true
            },
            {
              id: 2,
              type: "paragraphmatching",
              question: "Details of how a campaign to eradicate piracy was carried out",
              correctAnswer: "G",
              allowMultipleUse: true
            },
            {
              id: 3,
              type: "paragraphmatching",
              question: "A mention of the circumstances in which states in the ancient world would make use of pirates",
              correctAnswer: "C",
              allowMultipleUse: true
            },
            {
              id: 4,
              type: "paragraphmatching",
              question: "A reference to how people today commonly view pirates",
              correctAnswer: "A",
              allowMultipleUse: true
            },
            {
              id: 5,
              type: "paragraphmatching",
              question: "An explanation of how some people were encouraged not to return to piracy",
              correctAnswer: "G",
              allowMultipleUse: true
            },
            {
              id: 6,
              type: "paragraphmatching",
              question: "A mention of the need for many sailing vessels to stay relatively close to land",
              correctAnswer: "B",
              allowMultipleUse: true
            }
          ],
          multipleletterchoice: [
            {
              id: 7,
              type: "multipleletterchoice",
              question: "Which TWO of the following statements does the writer make about inhabitants of the Mediterranean region in the ancient world?",
              correctAnswer: "B,D",
              requiredAnswers: 2,
              statements: {
                "A": "They often used stolen vessels to carry out pirate attacks.",
                "B": "They managed to escape capture by the authorities because they knew the area so well.",
                "C": "They paid for information about the routes merchant ships would take.",
                "D": "They depended more on the sea for their livelihood than on farming.",
                "E": "They stored many of the goods taken in pirate attacks in coves along the coastline."
              }
            },
            {
              id: 8,
              type: "multipleletterchoice",
              question: "Which TWO of the following statements does the writer make about piracy and ancient Greece?",
              correctAnswer: "C,E",
              requiredAnswers: 2,
              statements: {
                "A": "The state estimated that very few people were involved in piracy.",
                "B": "Attitudes towards piracy changed shortly after the Iliad and the Odyssey were written.",
                "C": "Important officials were known to occasionally take part in piracy.",
                "D": "Every citizen regarded pirate attacks on cities as unacceptable.",
                "E": "A favourable view of piracy is evident in certain ancient Greek texts."
              }
            }
          ],
          summary: [
            {
              id: 9,
              type: "summary",
              summaryText: "Piracy was an issue ancient Rome had to deal with, but it also brought some benefits for Rome. For example, pirates supplied slaves that were important for Rome's industries. However, attacks on vessels transporting ________ to Rome resulted in calls for ________ for the pirates responsible. Nevertheless, piracy continued, with some pirates demanding a ________ for the return of the Roman officials they captured.",
              title: 'Ancient Rome and piracy',
              number: [9,10, 11],
              correctAnswer: ['grain', 'punishment', 'ransom']
            },
          ]
        }
      },
      {
        id: 3,
        total: 14,
        title: "The persistence and peril of misinformation",
        subtitle: 'Brian Southwell looks at how human brains verify information and discusses some of the challenges of battling widespread falsehoods',
        content: "Misinformation – both deliberately promoted and accidentally shared – is perhaps an inevitable part of the world in which we live, but it is not a new problem. People likely have lied to one another for roughly as long as verbal communication has existed. Deceiving others can offer an apparent opportunity to gain strategic advantage, to motivate others to action, or even to protect interpersonal bonds. Moreover, people inadvertently have been sharing inaccurate information with one another for thousands of years.\n\nHowever, we currently live in an era in which technology enables information to reach large audiences distributed across the globe, and thus the potential for immediate and widespread effects from misinformation now looms larger than in the past. Yet the means to correct misinformation might, over time, be found in those same patterns of mass communication and of the facilitated spread of information.\n\nThe main worry regarding misinformation is its potential to unduly influence attitudes and behavior, leading people to think and act differently than they would if they were correctly informed, as suggested by the research teams of Stephan Lewandowsky of the University of Bristol and Elizabeth Marsh of Duke University, among others. In other words, we worry that misinformation might lead people to hold misperceptions (or false beliefs) and that these misperceptions, especially when they occur among large groups of people, may have detrimental, downstream consequences for health, social harmony, and the political climate.\n\nAt least three observations related to misinformation in the contemporary mass-media environment warrant the attention of researchers, policy makers, and really everyone who watches television, listens to the radio, or reads information online. First of all, people who encounter misinformation tend to believe it, at least initially. Secondly, electronic and print media often do not block many types of misinformation before it appears in content available to large audiences. Thirdly, countering misinformation once it has enjoyed wide exposure can be a resource-intensive effort.\n\nKnowing what happens when people initially encounter misinformation holds tremendous importance for estimating the potential for subsequent problems. Although it is fairly routine for individuals to come across information that is false, the question of exactly how – and when – we mentally label information as true or false has garnered philosophical debate. The dilemma is neatly summarized by a contrast between how the 17th-century philosophers René Descartes and Baruch Spinoza described human information engagement, with conflicting predictions that only recently have been empirically tested in robust ways. Descartes argued that a person only accepts or rejects information after considering its truth or falsehood; Spinoza argued that people accept all encountered information (or misinformation) by default and then subsequently verify or reject it through a separate cognitive process. In recent decades, empirical evidence from the research teams of Erik Asp of the University of Chicago and Daniel Gilbert at Harvard University, among others, has supported Spinoza’s account: people appear to encode all new information as if it were true, even if only momentarily, and later tag the information as being either true or false, a pattern that seems consistent with the observation that mental resources for skepticism physically reside in a different part of the brain than the resources used in perceiving and encoding.\n\nWhat about our second observation that misinformation often can appear in electronic or print media without being preemptively blocked? In support of this, one might consider the nature of regulatory structures in the United States: regulatory agencies here tend to focus on post hoc detection of broadcast information. Organizations such as the Food and Drug Administration (FDA) offer considerable monitoring and notification functions, but these roles typically do not involve preemptive censoring. The FDA oversees direct-to-consumer prescription drug advertising, for example, and has developed mechanisms such as the ‘Bad Ad’ program, through which people can report advertising in apparent violation of FDA guidelines on drug risks. Such programs, although laudable and useful, do not keep false advertising off the airwaves. In addition, even misinformation that is successfully corrected can continue to affect attitudes.\n\nThis leads us to our third observation: a campaign to correct misinformation, even if rhetorically compelling, requires resources and planning to accomplish necessary reach and frequency. For corrective campaigns to be persuasive, audiences need to be able to comprehend them, which requires either effort to frame messages in ways that are accessible or effort to educate and sensitize audiences to the possibility of misinformation. That some audiences might be unaware of the potential for misinformation also suggests the utility of media literacy efforts as early as elementary school. Even with journalists and scholars pointing to the phenomenon of ‘fake news’, people do not distinguish between demonstrably false stories and those based in fact when scanning and processing written information.\n\nWe live at a time when widespread misinformation is common. Yet at this time many people also are passionately developing potential solutions and remedies. The journey forward undoubtedly will be a long and arduous one. Future remedies will require not only continued theoretical consideration but also the development and maintenance of consistent monitoring tools – and a recognition among fellow members of society that claims which find prominence in the media that are insufficiently based in scientific consensus and social reality should be countered. Misinformation arises as a result of human fallibility and human information needs. To overcome the worst effects of the phenomenon, we will need coordinated efforts over time, rather than any singular one-time panacea we could hope to offer.",
        questions: {
          yesno: [
            {
              id: 1,
              type: "yesno",
              question: "Campaigns designed to correct misinformation will fail to achieve their purpose if people are unable to understand them.",
              correctAnswer: "YES"
            },
            {
              id: 2,
              type: "yesno",
              question: "Attempts to teach elementary school students about misinformation have been opposed.",
              correctAnswer: "NOT GIVEN"
            },
            {
              id: 3,
              type: "yesno",
              question: "It may be possible to overcome the problem of misinformation in a relatively short period.",
              correctAnswer: "NO"
            },
            {
              id: 4,
              type: "yesno",
              question: "The need to keep up with new information is hugely exaggerated in today’s world.",
              correctAnswer: "NOT GIVEN"
            }
          ],
          multiplechoice: [
            {
              id: 5,
              type: "multiplechoice",
              question: "What point does the writer make about misinformation in the first paragraph?",
              correctAnswer: "D",
              options: [
                "A. Misinformation is a relatively recent phenomenon.",
                "B. Some people find it easy to identify misinformation.",
                "C. Misinformation changes as it is passed from one person to another.",
                "D. There may be a number of reasons for the spread of misinformation."
              ]
            },
            {
              id: 6,
              type: "multiplechoice",
              question: "What does the writer say about the role of technology?",
              correctAnswer: "A",
              options: [
                "A. It may at some point provide us with a solution to misinformation.",
                "B. It could fundamentally alter the way in which people regard information.",
                "C. It has changed the way in which organisations use misinformation.",
                "D. It has made it easier for people to check whether information is accurate."
              ]
            },
            {
              id: 7,
              type: "multiplechoice",
              question: "What is the writer doing in the fourth paragraph?",
              correctAnswer: "C",
              options: [
                "A. comparing the different opinions people have of misinformation.",
                "B. explaining how the effects of misinformation have changed over time.",
                "C. outlining which issues connected with misinformation are significant today.",
                "D. describing the attitude of policy makers towards misinformation in the media."
              ]
            },
            {
              id: 8,
              type: "multiplechoice",
              question: "What point does the writer make about regulation in the USA?",
              correctAnswer: "D",
              options: [
                "A. The guidelines issued by the FDA need to be simplified.",
                "B. Regulation does not affect people’s opinions of new prescription drugs.",
                "C. The USA has more regulatory bodies than most other countries.",
                "D. Regulation fails to prevent misinformation from appearing in the media."
              ]
            }
          ],          
          wordlist: [
            {
              id: 1,
              type: "wordlist",
              title: 'What happens when people encounter misinformation?',
              summaryText: "Although people have ________ to misinformation, there is debate about precisely how and when we label something as true or untrue. The philosophers Descartes and Spinoza had ________ about how people engage with information. While Descartes believed that people accept or reject information after considering whether it is true or not, Spinoza argued that people accepted all information they encountered (and by default misinformation) and did not verify or reject it until afterwards. Moreover, Spinoza believes that a distinct ________ is involved in these stages. Recent research has provided ________ for Spinoza's theory and it would appear that people accept all encountered information as if it were true, even if this is for an extremely ________, and do not label the information as true or false until later. This is consistent with the fact that the resources for scepticism and the resources for perceiving and encoding are in ________ in the brain.",
              number: [9, 10, 11, 12, 13, 14],
              correctAnswer: ["G", "J", "H", "B", "E", "C"],
              wordList: {
                "A": "constant conflict",
                "B": "additional evidence",
                "C": "different locations",
                "D": "experimental subjects",
                "E": "short period",
                "F": "extreme distrust",
                "G": "frequent exposure",
                "H": "mental operation",
                "I": "dubious reason",
                "J": "different ideas"
              }
            }
          ]
        }
      }
    ]
  }
];