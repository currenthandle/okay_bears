import Image from 'next/image'
import CollectionViewer from './components/CollectionViewer'
import Provider from '@/utils/Provider'

export default function Home() {
  return (
    <main className='flex justify-center min-h-screen min-w-screen bg-main'>
      <CollectionViewer />
    </main>
  )
}
