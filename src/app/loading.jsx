export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full gap-4 p-8">
      <div className="relative w-12 h-12">
        <div className="absolute w-full h-full rounded-full border-4 border-gray-200 dark:border-gray-800 opacity-50"></div>
        <div className="absolute w-full h-full rounded-full border-4 border-t-blue-600 dark:border-t-blue-400 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
      </div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 animate-pulse">
        Loading...
      </p>
    </div>
  )
}
