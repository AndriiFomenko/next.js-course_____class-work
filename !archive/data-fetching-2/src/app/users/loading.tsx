export default function Loading() {
  return (
    <div className="absolute z-10 top-0 right-0 bottom-0 left-0 flex items-center justify-center h-screen bg-white bg-opacity-50">
      <div className="relative">
        <div className="h-32 w-32 rounded-full border-t-4 border-b-4 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-32 w-32 rounded-full border-t-4 border-b-4 border-black animate-spin"></div>
      </div>
    </div>
  )
}
