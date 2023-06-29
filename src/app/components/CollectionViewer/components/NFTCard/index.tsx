import Image from 'next/image'
import SolanaIcon from './components/SolanaIcon'
import { useState } from 'react'

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
    <div className='m-8 bg-details rounded-xl border-[1px] border-card-border'>
      <div className='aspect-square relative'>
        <Image
          className='rounded-xl'
          src={img}
          alt={title}
          fill
          priority
          onLoad={handleImageLoad}
        />
      </div>

      <Details title={title} price={price} />
    </div>
  )
}

function Details({ title, price }: { title: string; price: number }) {
  return (
    <div className='z-10 h-10 flex justify-between items-center text-white p-4 py-8'>
      <div className='flex-grow'>{title}</div>
      <div className='flex justify-between items-center'>
        <div className='w-4 h-4'>
          <SolanaIcon />
        </div>
        <div className='pl-[2px]'>{price}</div>
      </div>
    </div>
  )
}
