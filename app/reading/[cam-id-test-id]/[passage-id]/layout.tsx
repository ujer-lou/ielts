import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Reading Test | Bob Here',
  description: 'Reading Sub Page of Bob Here',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }