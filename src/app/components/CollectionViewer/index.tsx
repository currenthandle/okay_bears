'use client'
import MainGrid from './components/Grid'
import Header from './components/Header'
import Provider from '@/utils/Provider'

export default function CollectionViewer() {
  return (
    <Provider>
      <div className='w-8/12 flex flex-col items-center'>
        <Header />
        <MainGrid />
      </div>
    </Provider>
  )
}
