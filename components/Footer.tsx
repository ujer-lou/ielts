import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Bob Here</h2>
            <p className="mb-4">We are dedicated to providing the best teaching to our students.</p>
            <div className="flex space-x-4">
              <a target='_blank' href="https://www.facebook.com/profile.php?id=61553812451352" className="hover:text-white"><Facebook size={24} /></a>
              <a href="#" className="hover:text-white"><Twitter size={24} /></a>
              <a href="#" className="hover:text-white"><Instagram size={24} /></a>
              <a href="#" className="hover:text-white"><Linkedin size={24} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/reading" className="hover:text-white">Reading</Link></li>
              <li><Link href="/listening" className="hover:text-white">Listening</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><Link href="/courses/ielts-academic" className="hover:text-white">IELTS Academic Course</Link></li>
              <li><Link href="/courses/ielts-general" className="hover:text-white">IELTS General Training</Link></li>
              <li><Link href="/courses/spoken-english" className="hover:text-white">Spoken English</Link></li>
              <li><Link href="/courses/ielts-sprint" className="hover:text-white">IELTS Final Sprint</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
            <p>House no. : Uzbekistan Toshkent Yunusobod</p>
            <p>Phone: +998880505502</p>
            <p>Email: polatdjorayev@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-left">
          <p>&copy; {new Date().getFullYear()} Bob Here. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}