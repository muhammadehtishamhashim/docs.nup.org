import { MajorGrid } from '../components/major';

const programs = [
  { id: 'bs-cs', name: 'BS Computer Science', href: '/bs-cs' },
  { id: 'bs-phy', name: 'BS Physics', href: '/bs-phy' },
  { id: 'bs-math', name: 'BS Mathematics', href: '/bs-math' },
  { id: 'bs-eng', name: 'BS English', href: '/bs-eng' },
  { id: 'bs-urdu', name: 'BS Urdu', href: '/bs-urdu' },
  { id: 'bs-law', name: 'BS Law', href: '/bs-law' },
];

const activeMajors = ['bs-cs']; // Only BS CS is active for now

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">
              NUP Docs
            </h1>
            <span className="text-sm text-gray-500">Official Portal</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Bachelor Programs
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Select a program to view its curriculum
          </p>
        </div>

        {/* Modular Grid Component */}
        <MajorGrid items={programs} activeIds={activeMajors} />

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} National University of Pakistan.</p>
        </div>
      </footer>
    </div>
  )
}

