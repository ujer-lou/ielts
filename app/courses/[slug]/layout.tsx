import CoursePage from '@/app/courses/[slug]/page'
import { Metadata } from 'next'

interface Course {
    title: string
    duration: string
    classes: number
    clubAccess: string
    classLength: string
    mockTests: number
    image: string
  }

// Simulated API function
async function getCourseBySlug(slug: string): Promise<Course | null> {
  // In a real application, this would be an API call or database query
  const courses = {
    'ielts-academic': {
      title: 'IELTS Academic Course',
      duration: '3 months',
      classes: 36,
      clubAccess: '6 months free club access',
      classLength: '1.5 hours',
      mockTests: 1,
      image: '/images/course.jpg'
    },
    'ielts-general': {
      title: 'IELTS General Training',
      duration: '3 months',
      classes: 48,
      clubAccess: '6 months free club access',
      classLength: '2 hours',
      mockTests: 2,
      image: '/images/course.jpg'
    },
    'spoken-english': {
      title: 'Spoken English',
      duration: '2 months',
      classes: 24,
      clubAccess: '3 months free club access',
      classLength: '1.5 hours',
      mockTests: 0,
      image: '/images/course.jpg'
    },
    'ielts-sprint': {
      title: 'IELTS Final Sprint',
      duration: '1 month',
      classes: 26,
      clubAccess: '2 months free club access',
      classLength: '3 hours',
      mockTests: 0,
      image: '/images/course.jpg'
    }
  }

  return courses[slug as keyof typeof courses] || null
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = await getCourseBySlug(params.slug)

  if (!course) {
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found.',
    }
  }

  return {
    title: `${course.title} | Bob Here`,
    description: `Learn about our ${course.title}. Duration: ${course.duration}, Classes: ${course.classes}, Club Access: ${course.clubAccess}`,
    openGraph: {
      title: course.title,
      description: `Learn about our ${course.title}. Duration: ${course.duration}, Classes: ${course.classes}, Club Access: ${course.clubAccess}`,
      images: [{ url: course.image }],
    },
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  return <CoursePage params={params} />
}