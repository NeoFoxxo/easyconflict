import type { SearchItem } from "./SearchItem"

export interface SearchResult {
	count: number
	country: SearchItem[]
	name: string
}
