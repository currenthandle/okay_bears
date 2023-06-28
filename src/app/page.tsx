import Image from 'next/image'
import CollectionViewer from './components/CollectionViewer'

export default function Home() {
  return (
    <main className='flex justify-center min-h-screen min-w-screen bg-red-300'>
      <CollectionViewer />
    </main>
  )
}
