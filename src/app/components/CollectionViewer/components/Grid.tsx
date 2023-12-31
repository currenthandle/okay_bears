import {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { AutoSizer, Grid, WindowScroller } from 'react-virtualized'

import { BearItem } from '@/app/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import getBears from '@/utils/getBears'
import { useSearch } from './Header'
import NFTCard from './NFTCard'

type CellProps = {
  columnIndex: number
  key: string
  rowIndex: number
  style: CSSProperties
}
const COLUMN_WIDTH = 300
export const DETAILS_HEIGHT = 24 * 3

export default function MainGrid() {
  const parentRef = useRef<HTMLDivElement>(null)

  const [numColumns, setNumColumns] = useState(3)
  const [items, setItems] = useState<BearItem[]>([])
  const search = useSearch((state) => state.search)
  const filteredItems = items.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.price.toString().includes(search) ||
      search === ''
    )
  })

  const getItemIndex = (rowIndex: number, columnIndex: number) => {
    return rowIndex * numColumns + columnIndex
  }

  const { data, isLoading, isFetching, error, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['hydrate-bears'],
      queryFn: ({ pageParam = 0 }) => getBears(pageParam),
      getNextPageParam: (lastPage, pages) => {
        return pages.length * 20
      },
    })

  useEffect(() => {
    if (data) {
      const newItems = data.pages.flat()
      setItems(newItems)
    }
  }, [data])

  useEffect(() => {
    const handleResize = () => {
      const width = parentRef.current?.clientWidth
      if (width) {
        let newNumColumns = Math.floor(width / COLUMN_WIDTH)
        newNumColumns = newNumColumns > 0 ? newNumColumns : 1

        setNumColumns(newNumColumns)
      } else {
        setNumColumns(1)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function cellRenderer({ columnIndex, key, rowIndex, style }: CellProps) {
    const itemIndex = getItemIndex(rowIndex, columnIndex)
    const item = filteredItems[itemIndex]
    if (!item) {
      return null
    }
    // fetch next page if we're at the end of the list
    if (itemIndex === filteredItems.length - 1 && !isFetching) {
      fetchNextPage()
    }
    return (
      <div key={key} style={style} className='p-4'>
        <NFTCard
          id={item?.id}
          img={item?.img}
          price={item?.price}
          title={item?.title}
        />
      </div>
    )
  }
  return (
    <div className='w-full relative' ref={parentRef}>
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <AutoSizer disableHeight>
            {({ width }) => (
              <Grid
                autoHeight
                columnCount={numColumns}
                rowCount={Math.ceil(filteredItems.length / numColumns)}
                columnWidth={width / numColumns}
                rowHeight={DETAILS_HEIGHT + width / numColumns}
                width={width}
                height={height}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                scrollTop={scrollTop}
                cellRenderer={cellRenderer}
              ></Grid>
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    </div>
  )
}
