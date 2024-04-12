import type { SearchResult } from "@/types/SearchResult"

export default async function submitSearch(
	searchName: string
): Promise<SearchResult> {
	const res = await fetch(`${import.meta.env.VITE_API}?name=${searchName}`)

	if (!res.ok) {
		const errorMessage = await res.json()
		throw new Error("An unexpected error occurred " + errorMessage)
	}

	const searchResult = await res.json()

	return searchResult
}
