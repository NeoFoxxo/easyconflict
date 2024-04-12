import type { ConflictDetail } from "@/types/ConflictDetail"

export default async function getConflictDetails(
	conflictID: string
): Promise<ConflictDetail> {
	const res = await fetch(`${import.meta.env.VITE_API}?name=${conflictID}`)

	if (!res.ok) {
		const errorMessage = await res.json()
		throw new Error("An unexpected error occurred " + errorMessage)
	}

	const conflictResult = await res.json()

	return conflictResult
}
