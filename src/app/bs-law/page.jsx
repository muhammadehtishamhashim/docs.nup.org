import Link from 'next/link';
import { FaBalanceScale, FaGavel, FaUniversity, FaBookOpen, FaLandmark, FaFileContract, FaUserTie, FaGlobe } from 'react-icons/fa';

const semesters = [
  { id: 1, name: 'Semester 1', icon: FaBalanceScale },
  { id: 2, name: 'Semester 2', icon: FaBalanceScale },
  { id: 3, name: 'Semester 3', icon: FaBalanceScale },
  { id: 4, name: 'Semester 4', icon: FaBalanceScale },
  { id: 5, name: 'Semester 5', icon: FaBalanceScale },
  { id: 6, name: 'Semester 6', icon: FaBalanceScale },
  { id: 7, name: 'Semester 7', icon: FaBalanceScale },
  { id: 8, name: 'Semester 8', icon: FaBalanceScale },
];

const activeSemesters = [];

export default function BSLawPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100 p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-red-800 to-amber-800 dark:from-red-600 dark:to-amber-600">
            BS Law
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the curriculum semester by semester.
          </p>
        </header>

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
                <div className="p-8 flex flex-col items-center text-center h-full">
                  <div className={`p-4 rounded-full mb-6 ${isActive ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500'}`}>
                    <sem.icon size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{sem.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    {isActive ? 'Explore core subjects.' : 'Coming Soon'}
                  </p>

                  {isActive ? (
                    <Link href={`/bs-law/sem-${sem.id}`} className="absolute inset-0 z-10" aria-label={`Go to ${sem.name}`} />
                  ) : (
                    <div className="absolute inset-0 z-10 bg-gray-50/10 dark:bg-neutral-900/20 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full shadow-lg">Coming Soon</span>
                    </div>
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
