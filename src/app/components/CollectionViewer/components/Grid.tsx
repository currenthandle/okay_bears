'use client'
import {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { AutoSizer, Grid, WindowScroller } from 'react-virtualized'

import bears from '@/../public/bears.json'
import { BearItem } from '@/app/types'
import NFTCard from './NFTCard'
import { useInfiniteQuery } from '@tanstack/react-query'
import getBears from '@/utils/getBears'

type CellProps = {
  columnIndex: number
  key: string
  rowIndex: number
  style: CSSProperties
}

export default function MainGrid() {
  const [items, setItems] = useState<BearItem[]>([])
  const COLUMN_WIDTH = 300

  const parentRef = useRef<HTMLDivElement>(null)
  const [numColumns, setNumColumns] = useState(3)

  // write a function that take the numColumns, a rowIndex, and a columnIndex
  // and returns the index of the item in the items array
  const getItemIndex = (rowIndex: number, columnIndex: number) => {
    return rowIndex * numColumns + columnIndex
  }

  const {
    data,
    isLoading,
    isFetching,
    error,
    fetchNextPage,
    // fetchPreviousPage,
  } = useInfiniteQuery({
    queryKey: ['bears'],
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

  console.log(data)

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
    const item = items[itemIndex]
    if (!item) {
      return null
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
                rowCount={Math.ceil(items.length / numColumns)}
                columnWidth={width / numColumns}
                rowHeight={width / numColumns}
                width={width}
                height={height}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                scrollTop={scrollTop}
                cellRenderer={cellRenderer}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    </div>
  )
}
