
import ListeningTest from '@/app/listening/[listening-id]/page'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Listening Test | Bob Here',
  description: 'Listening Sub Page of Bob Here',
}

function layout() {
  return (
    <><ListeningTest/></>
  )
}

export default layout