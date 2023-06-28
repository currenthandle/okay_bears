import { NextResponse } from 'next/server'
// import bears.json from the public folder
import bearData from '@/../public/bears.json'
// import bears from '../../../public/bears.json'

export async function GET(req: Request) {
  //   console.log('in api bears', bears)
  const url = new URL(req.url)
  const limit = parseInt(url.searchParams.get('limit') || '20')
  const offset = parseInt(url.searchParams.get('offset') || '0')
  const nextCursor = url.searchParams.get('nextCursor')
  const prevCursor = url.searchParams.get('prevCursor')

  const bears = bearData.results.slice(offset, offset + limit)

  //   console.log(bears)
  return NextResponse.json({
    results: bears,
    nextCursor: bears[bears.length - 1]?.mintAddress,
  })
}
