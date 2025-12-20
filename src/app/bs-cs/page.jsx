import Link from 'next/link';
import { FaBook, FaCode, FaLaptopCode, FaDatabase, FaNetworkWired, FaRobot, FaLock, FaChartBar } from 'react-icons/fa';

const semesters = [
  { id: 1, name: 'Semester 1', icon: FaBook },
  { id: 2, name: 'Semester 2', icon: FaCode },
  { id: 3, name: 'Semester 3', icon: FaLaptopCode },
  { id: 4, name: 'Semester 4', icon: FaDatabase },
  { id: 5, name: 'Semester 5', icon: FaNetworkWired },
  { id: 6, name: 'Semester 6', icon: FaRobot },
  { id: 7, name: 'Semester 7', icon: FaLock },
  { id: 8, name: 'Semester 8', icon: FaChartBar },
];

const activeSemesters = [1, 3]; // Add IDs here to enable them

export default function BSCSPagina() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100 p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            BS Computer Science
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your roadmap to mastering Computer Science. Explore the curriculum semester by semester.
          </p>
        </header>

        {/* Semesters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {semesters.map((sem) => {
             const isActive = activeSemesters.includes(sem.id);

             return (
              <div
                key={sem.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-800 transition-all duration-300 
                  ${isActive 
                    ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer' 
                    : 'opacity-75 cursor-not-allowed'}`}
              >
                {/* Content */}
                <div className="p-8 flex flex-col items-center text-center h-full">
                  <div className={`p-4 rounded-full mb-6 ${isActive ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500'}`}>
                    <sem.icon size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{sem.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    {isActive ? 'Explore core subjects & resources.' : 'Coming Soon'}
                  </p>

                  {isActive ? (
                    <Link href={`/bs-cs/sem-${sem.id}`} className="absolute inset-0 z-10" aria-label={`Go to ${sem.name}`} />
                  ) : (
                    <div className="absolute inset-0 z-10 bg-gray-50/10 dark:bg-neutral-900/20 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full shadow-lg">Coming Soon</span>
                    </div>
                  )}

                  {/* Decorative Elements for Active Cards */}
                  {isActive && (
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-blue-500/10 to-transparent rounded-tl-full -mr-4 -mb-4 pointer-events-none" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
