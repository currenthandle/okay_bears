import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { create } from 'zustand'

type SearchState = {
  search: string
  setSearch: (search: string) => void
}

export const useSearch = create<SearchState>((set) => ({
  search: '',
  setSearch: (search: string) => set({ search }),
}))

export default function Header() {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }
  const setSearch = useSearch((state) => state.setSearch)
  return (
    <div className='pt-12 pb-4'>
      <input
        type='text'
        placeholder='Search item'
        className='outline-none rounded-full px-4 py-2 bg-search text-search-text pr-[32px]'
        onChange={handleChange}
      />
      <FontAwesomeIcon
        color='#544563'
        icon={faMagnifyingGlass}
        className='-translate-x-[27px]'
      />
    </div>
  )
}
