import { useState } from 'react'
import './App.css'

const analyticsData = [
  { label: 'Total Reach', value: '125,430', change: '+12.5%', color: 'from-purple-500 to-pink-500' },
  { label: 'Profile Views', value: '89,210', change: '+8.2%', color: 'from-blue-500 to-cyan-500' },
  { label: 'Post Impressions', value: '245,680', change: '+15.3%', color: 'from-orange-500 to-red-500' },
  { label: 'Engagement Rate', value: '4.2%', change: '+0.5%', color: 'from-green-500 to-emerald-500' },
]

const postsData = [
  { id: 1, image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=instagram%20post%20photo%20of%20a%20beautiful%20sunset&image_size=square', likes: '12.5K', comments: '890', reach: '45.2K', date: '2 days ago' },
  { id: 2, image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=instagram%20post%20photo%20of%20city%20architecture&image_size=square', likes: '9.8K', comments: '560', reach: '32.1K', date: '5 days ago' },
  { id: 3, image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=instagram%20post%20photo%20of%20nature%20landscape&image_size=square', likes: '15.2K', comments: '1.2K', reach: '58.3K', date: '1 week ago' },
]

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Instagram Analytics
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-white p-1 rounded-xl shadow-sm">
          {['overview', 'content', 'audience'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all capitalize ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {analyticsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <p className="text-gray-500 text-sm mb-1">{item.label}</p>
              <p className="text-3xl font-bold text-gray-800 mb-2">{item.value}</p>
              <span className="inline-flex items-center gap-1 text-green-600 text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                {item.change}
              </span>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Reach & Views Trend</h2>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 px-4">
            {[65, 45, 78, 52, 85, 60, 90].map((height, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs text-gray-500">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Posts Performance */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Top Performing Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {postsData.map(post => (
              <div key={post.id} className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <img src={post.image} alt="Post" className="w-full aspect-square object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-gray-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span className="font-medium">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="font-medium">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Reach: <span className="font-medium text-gray-800">{post.reach}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{post.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
