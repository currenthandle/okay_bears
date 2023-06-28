import { dehydrate, Hydrate } from '@tanstack/react-query'
import getQueryClient from '@/utils/getQueryClient'
import getBears from '@/utils/getBears'
import CollectionViewer from './CollectionViewer'

export default async function HydratedPosts() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['hydrate-bears'], () => getBears(0))
  const dehydratedState = dehydrate(queryClient)

  return (
    // <Hydrate state={dehydratedState}>
    <CollectionViewer />
    // </Hydrate>
  )
}
