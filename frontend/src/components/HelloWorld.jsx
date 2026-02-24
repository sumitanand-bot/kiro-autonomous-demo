import { useState, useEffect } from 'react'

function HelloWorld() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchHello = async () => {
      try {
        const response = await fetch('/api/hello')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setMessage(data.message)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchHello()
  }, [])

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-3 text-gray-600">Loading...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-2">⚠️ Error</div>
          <p className="text-gray-600">{error}</p>
          <p className="text-sm text-gray-400 mt-2">
            Make sure the backend server is running on port 8000
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          API Response
        </h1>
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-2xl text-blue-600 font-semibold">
            {message}
          </p>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          Fetched from /api/hello endpoint
        </p>
      </div>
    </div>
  )
}

export default HelloWorld
