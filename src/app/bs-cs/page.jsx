import { SemesterGrid } from '../../components/semester';

const semesters = [
  { id: 1, name: 'Semester 1' },
  { id: 2, name: 'Semester 2' },
  { id: 3, name: 'Semester 3' },
  { id: 4, name: 'Semester 4' },
  { id: 5, name: 'Semester 5' },
  { id: 6, name: 'Semester 6' },
  { id: 7, name: 'Semester 7' },
  { id: 8, name: 'Semester 8' },
];

const activeSemesters = [1, 3];

export default function BSCSPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-900 tracking-tight">
            BS Computer Science
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Curriculum Roadmap
          </p>
        </header>

        {/* Semesters Grid */}
        <SemesterGrid 
          semesters={semesters} 
          activeSemesters={activeSemesters} 
          majorId="bs-cs" 
        />
      </div>
    </div>
  );
}

