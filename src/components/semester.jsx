import Link from 'next/link';

export function SemesterGrid({ semesters, activeSemesters = [], majorId }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {semesters.map((sem) => {
        const isActive = activeSemesters.includes(sem.id);
        const href = `/${majorId}/sem-${sem.id}`;

        return (
          <div
            key={sem.id}
            className={`group relative bg-white rounded-2xl shadow-sm transition-all duration-300 overflow-hidden border
              ${isActive 
                ? 'border-green-400 shadow-md' 
                : 'border-gray-200 opacity-90'
              }`}
          >
            {/* Link Wrapper */}
             {isActive ? (
               <Link href={href} className="absolute inset-0 z-20" aria-label={`Go to ${sem.name}`} />
            ) : null}

            {/* Card Content */}
            <div className="relative p-6 text-center h-full flex items-center justify-center">
              <h3 className={`text-xl font-bold transition-all duration-300
                ${isActive ? 'text-green-600' : 'text-gray-400 group-hover:blur-[2px]'}
              `}>
                {sem.name}
              </h3>

              {/* Coming Soon Badge (Only for inactive) */}
              {!isActive && (
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-gray-100 text-gray-500 text-sm font-medium rounded-full border border-gray-200 shadow-sm cursor-not-allowed">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
