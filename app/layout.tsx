import ReactQueryProvider from '@/lib/ReactQueryProvider'
import { StoreProvider } from '@/redux/StoreProvider'
import { Metadata } from 'next'
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bob is Here',
  description: 'Home Page of Bob is Here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <StoreProvider>
          <ReactQueryProvider>
            <Navbar />
            <main className='flex-grow'>
              {children}
            </main>
            <Footer />
          </ReactQueryProvider>
        </StoreProvider>
      </body>
    </html>
  )
}