import Image from 'next/image'
import SolanaIcon from './components/SolanaIcon'
import { useState } from 'react'
import { ScaleLoader } from 'react-spinners'

type NFTCardProps = {
  id: string
  img: string
  price: number
  title: string
}

export default function NFTCard({ id, img, price, title }: NFTCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <div className='bg-details rounded-xl border-[1px] border-card-border'>
      <div className='aspect-square relative'>
        <div
          className={`transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } absolute inset-0`}
        >
          <Image
            className='rounded-xl'
            src={img}
            alt={title}
            fill
            priority
            onLoad={handleImageLoad}
          />
        </div>
        <div
          className={`transition-opacity duration-500 ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          } w-full h-full bg-loading-bear bg-cover  rounded-xl flex flex-col justify-center`}
        >
          <ScaleLoader className='m-auto' color='gray' />
        </div>
      </div>

      <Details title={title} price={price} />
    </div>
  )
}

function Details({ title, price }: { title: string; price: number }) {
  return (
    <div className='z-10 flex justify-between items-center text-white p-4 py-6'>
      <div className='flex-grow'>{title}</div>
      <div className='flex justify-between items-center'>
        <div className='w-4 h-4 mr-1 '>
          <SolanaIcon />
        </div>
        <div className='pl-[2px]'>{price}</div>
      </div>
    </div>
  )
}
