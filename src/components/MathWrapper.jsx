export default function MathWrapper({ children }) {
  return (
    <div className="overflow-x-auto bg-gray-100 [.dark_&]:bg-neutral-800 rounded-md p-4 my-4">
      {children}
    </div>
  );
}
