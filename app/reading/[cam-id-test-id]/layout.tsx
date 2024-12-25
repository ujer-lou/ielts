
// import ReadingPassage from '@/app/reading/[cam-id-test-id]/page'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Reading Test | Muhammad Amin',
  description: 'Reading Sub Page of Muhammad Amin',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}