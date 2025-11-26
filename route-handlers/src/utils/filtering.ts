/**
 * Filters an array of objects based on a search query.
 * Checks if any of the specified fields contain the query string (case-insensitive).
 *
 * @param data - Array of objects to filter
 * @param query - Search query string
 * @param fields - Array of keys in the object to search within
 * @returns Filtered array
 */
export function filterByQuery<T extends Record<string, any>>(data: T[], query: string, fields: (keyof T)[]): T[] {
  if (!query) return data

  const lowerCaseQuery = query.toLowerCase()

  return data.filter((item) => {
    return fields.some((field) => {
      const value = item[field]
      if (typeof value === 'string' || typeof value === 'number') {
        return String(value).toLowerCase().includes(lowerCaseQuery)
      }
      return false
    })
  })
}
