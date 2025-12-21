import Link from 'next/link';

export function MajorGrid({ items, activeIds = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => {
        const isActive = activeIds.includes(item.id);
        
        return (
          <div
            key={item.id}
            className={`group relative bg-white rounded-2xl shadow-sm transition-all duration-300 overflow-hidden border
              ${isActive 
                ? 'border-green-400' 
                : 'border-gray-200 opacity-90'
              }`}
          >
            {/* Link Wrapper */}
            {isActive ? (
               <Link href={item.href} className="absolute inset-0 z-20" aria-label={`Go to ${item.name}`} />
            ) : null}

            {/* Card Content */}
            <div className="relative p-6 text-center">
              <h3 className={`text-2xl font-bold mb-2 transition-all duration-300
                ${isActive ? 'text-green-600' : 'text-gray-400 group-hover:blur-[2px]'}
              `}>
                {item.name}
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
