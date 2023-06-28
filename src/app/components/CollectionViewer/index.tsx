import MainGrid from './components/Grid'
import Header from './components/Header'

export default function CollectionViewer() {
  return (
    <div className='w-8/12 flex flex-col items-center'>
      <Header />
      <MainGrid />
    </div>
  )
}
