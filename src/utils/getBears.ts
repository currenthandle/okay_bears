import { BearItem, OkBear } from '@/app/types'
type Response = {
  results: OkBear[]
  nextCursor: string
}

export default async function getBears(offset: number = 0) {
  const res = await fetch(
    `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=${offset}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch bears')
  }

  const bearsResponse: Response = await res.json()

  const handleMapping = ({
    id,
    title,
    price,
    img,
  }: {
    id: string
    title: string
    price: number
    img: string
  }) => ({
    id,
    title: title.replace('Okay Bear ', ''),
    price,
    img,
  })

  const preparedBears: BearItem[] = bearsResponse.results.map(handleMapping)

  console.log('preparedBears', preparedBears)

  return preparedBears
}
