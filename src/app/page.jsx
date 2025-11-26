import Link from 'next/link'

const programs = [
  { id: 'bs-computer-science', name: 'BS Computer Science', icon: '💻', color: 'from-blue-500 to-cyan-500' },
  { id: 'bs-physics', name: 'BS Physics', icon: '⚛️', color: 'from-purple-500 to-pink-500' },
  { id: 'bs-mathematics', name: 'BS Mathematics', icon: '📐', color: 'from-green-500 to-emerald-500' },
  { id: 'bs-english', name: 'BS English', icon: '📚', color: 'from-orange-500 to-red-500' },
  { id: 'bs-urdu', name: 'BS Urdu', icon: '📖', color: 'from-yellow-500 to-amber-500' },
  { id: 'bs-law', name: 'BS Law', icon: '⚖️', color: 'from-indigo-500 to-blue-500' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div>
            <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              National University of Pakistan
            </h1>
            <p className="text-sm text-gray-600">Official Documentation Portal</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Bachelor Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore comprehensive documentation for all our undergraduate programs
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Link
              key={program.id}
              href={`/${program.id}`}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:scale-105"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-linear-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Card Content */}
              <div className="relative p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl">{program.icon}</span>
                  <svg 
                    className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-1 transition-all" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {program.name}
                </h3>
                
                <p className="text-gray-600">
                  Access course materials, syllabus, and resources
                </p>

                {/* Semester Count Badge */}
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  8 Semesters
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            Select a program to view semester-wise documentation and course materials
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} National University of Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
