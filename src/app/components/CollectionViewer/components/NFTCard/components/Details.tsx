import SolanaIcon from './SolanaIcon'
export default function Details({
  title,
  price,
}: {
  title: string
  price: number
}) {
  return (
    <div className='z-10 h-14 flex justify-between items-center bg-[#120c18] text-white'>
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
