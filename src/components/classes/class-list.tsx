import { useEffect, useState } from 'react';
import { YogaClass, db } from '../../lib/database';
import { ClassCard } from './class-card';

export function ClassList() {
  const [classes, setClasses] = useState<YogaClass[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchClasses() {
      try {
        const data = await db.classes.getAll();
        setClasses(data);
      } catch (err) {
        setError('Failed to load classes. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchClasses();
  }, []);

  const handleBookClass = async (classId: string) => {
    // TODO: Implement booking logic when user authentication is ready
    console.log('Booking class:', classId);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-sage-600">Loading classes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((yogaClass) => (
          <ClassCard
            key={yogaClass.id}
            yogaClass={yogaClass}
            onBookClass={handleBookClass}
          />
        ))}
      </div>
    </div>
  );
}