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
    <div>
      <input
        type='text'
        className='rounded-xl px-4 py-2'
        onChange={handleChange}
      />
    </div>
  )
}
