import { QueryClient } from '@tanstack/react-query'
// import { QueryClient } from '@tanstack/query-core'
// import { cache } from 'react'

// const getQueryClient = cache(() => new QueryClient())
const getQueryClient = () => new QueryClient()
export default getQueryClient
