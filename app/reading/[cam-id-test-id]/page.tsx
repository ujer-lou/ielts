"use client"
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useParams } from 'next/navigation';

export default function ReadingPassage() {
    const { "cam-id-test-id": camIdTestId } = useParams();
    const param = camIdTestId as string;
    const [camId, testId] = param.split("-test-");
    console.log(camId, testId);
    const cambridgeTests = [
    {
      passages: [1, 2, 3]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-wider text-red-500 mb-2">reading practice</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Reading Passages</h1>
        <p className="text-xl text-gray-600">Select a passage to begin</p>
      </div>

      {cambridgeTests.map((test, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {test.passages.map((passageId) => (
            <Card key={passageId} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Link 
                  href={`/reading/${camId}-test-${testId}/passage-${passageId}`} 
                  passHref 
                  legacyBehavior
                >
                  <Button
                    variant="ghost"
                    className="w-full h-full py-6 text-lg font-semibold"
                  >
                    Reading Passage {passageId}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}

      {/* Decorative elements */}
      <div className="absolute top-16 left-3 w-24 h-24 bg-blue-100 rounded-full -z-10 opacity-50" />
      <div className="absolute top-1/4 right-3 w-32 h-32 bg-yellow-100 rounded-full -z-10 opacity-50" />
      <div className="absolute bottom-3 right-1/4 w-40 h-40 bg-purple-100 rounded-full -z-10 opacity-50" />
    </div>
  )
}