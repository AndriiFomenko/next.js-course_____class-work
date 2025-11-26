/**
 * Sorts an array of objects by a specified field
 * @param data - Array of objects to sort
 * @param sortQuery - Sort field name, prefix with '-' for descending order (e.g., '-id')
 * @returns Sorted array
 */
export function sortByField<T extends Record<string, any>>(data: T[], sortQuery: string): T[] {
  const isDescending = sortQuery.startsWith('-')
  const sortField = isDescending ? sortQuery.slice(1) : sortQuery
  const direction = isDescending ? -1 : 1

  return [...data].sort((a, b) => {
    if (a[sortField] < b[sortField]) return -1 * direction
    if (a[sortField] > b[sortField]) return 1 * direction
    return 0
  })
}
