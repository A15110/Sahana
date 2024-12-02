import { YogaClass } from '../../lib/database';
import { Button } from '../ui/button';

interface ClassCardProps {
  yogaClass: YogaClass;
  onBookClass: (classId: string) => void;
}

export function ClassCard({ yogaClass, onBookClass }: ClassCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="card hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-sage-900">{yogaClass.title}</h3>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${getLevelColor(yogaClass.level)}`}>
            {yogaClass.level.charAt(0).toUpperCase() + yogaClass.level.slice(1)}
          </span>
        </div>
        <span className="text-sage-600">{yogaClass.duration} min</span>
      </div>
      
      <p className="mt-4 text-sage-600">{yogaClass.description}</p>
      
      <div className="mt-6">
        <Button
          onClick={() => onBookClass(yogaClass.id)}
          className="w-full"
        >
          Book Class
        </Button>
      </div>
    </div>
  );
}