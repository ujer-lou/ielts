"use client"

import { useEffect, useState } from "react"
import { Book, Headphones, GraduationCap, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { reviews } from "@/lib/review"

const aboutImages = [
  "/images/a.jpg",
  "/images/aa.jpg",
  "/images/aaa.jpg",
]

export default function Component() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Master IELTS with Confidence</h1>
          <p className="text-xl text-gray-600 mb-8">Unlock global opportunities with our comprehensive IELTS preparation courses</p>
          <Button asChild size="lg">
            <Link href="/courses">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Book className="mr-2 h-5 w-5" />
                Reading
              </CardTitle>
            </CardHeader>
            <CardContent>
              Enhance your reading comprehension skills with our targeted exercises and strategies.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Headphones className="mr-2 h-5 w-5" />
                Listening
              </CardTitle>
            </CardHeader>
            <CardContent>
              Improve your listening skills with our diverse range of audio materials and practice tests.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" />
                Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              Access our comprehensive courses designed to boost your IELTS performance across all sections.
            </CardContent>
          </Card>
        </section>

        <section className="bg-blue-900 text-white rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Why IELTS is important?</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-4 w-4" />
              Open doors to international education opportunities
            </li>
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-4 w-4" />
              Enhance your career prospects globally
            </li>
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-4 w-4" />
              Prove your English proficiency for immigration purposes
            </li>
          </ul>
        </section>

        <section className="mb-16 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 mb-4">
              Hello! I&apos;m Bob, an experienced IELTS instructor dedicated to helping students achieve their language goals. With over a decade of teaching experience, I specialize in crafting personalized learning experiences that cater to each student&apos;s unique needs.
            </p>
            <p className="text-gray-600 mb-4">
              My approach combines proven teaching methods with innovative techniques, ensuring that you not only prepare for the IELTS exam but also develop lifelong language skills. Whether you&apos;re aiming for academic pursuits or professional growth, I&apos;m here to guide you every step of the way.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact With Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="w-full md:w-1/2 h-[400px] relative overflow-hidden rounded-lg">
            {aboutImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`About Muhammad Amin ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What My Students Say</h2>
          <div className="relative w-full max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col h-full ">
                        <CardContent className="flex flex-col items-center p-6 flex-grow">
                          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 flex-shrink-0">
                            <Image
                              src={review.image}
                              alt={review.name}
                              width={80}
                              height={80}
                              className="object-cover object-top w-full h-full"
                            />
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{review.name}</h3>
                          <p className="text-center text-gray-600 text-sm flex-grow md:h-[153px] overflow-y-auto hide-scrollbar">{review.review}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white hover:bg-gray-100 rounded-full shadow-md" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white hover:bg-gray-100 rounded-full shadow-md" />
            </Carousel>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to start your IELTS journey?</h2>
          <p className="text-gray-600 mb-8">Join thousands of successful test-takers who have achieved their goals with our expert guidance.</p>
          <Button asChild>
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact With Me
            </Link>
          </Button>
        </section>
      </main>
    </div>
  )
}