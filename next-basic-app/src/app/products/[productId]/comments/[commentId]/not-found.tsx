const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-orange-50 to-red-50">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-orange-600">404</h1>
        <h2 className="text-4xl font-semibold mt-4 text-orange-700">Comment Not Found</h2>
        <p className="text-lg text-orange-600 mt-2">This review or comment does not exist</p>
      </div>
    </div>
  )
}

export default NotFound
