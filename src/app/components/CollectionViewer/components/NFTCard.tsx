import Image from 'next/image'
import SolanaIcon from './SolanaIcon'
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
    <div className='p-4 bg-white rounded-lg shadow-md flex flex-col h-full'>
      <div className='relative h-full w-full mb-4'>
        <div
          className={`transition-opacity duration-500 ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          } absolute inset-0 flex items-center justify-center`}
        >
          <div className='w-full h-full bg-gray-300 animate-pulse'></div>
        </div>
        <div
          className={`transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } absolute inset-0`}
        >
          <Image
            src={img}
            alt={title}
            fill={true}
            style={{ objectFit: 'cover' }}
            sizes='60vw'
            onLoad={handleImageLoad}
            // loading='eager'
            priority={true}
          />
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex-grow'>{title}</div>
        <div className='flex justify-between items-center'>
          <div className='w-4 h-4'>
            <SolanaIcon />
          </div>
          <div className='pl-[2px]'>{price}</div>
        </div>
      </div>
    </div>
  )
}
