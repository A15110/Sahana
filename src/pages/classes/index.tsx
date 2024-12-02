import { ClassList } from '../../components/classes/class-list';
import { ClassesHero } from '../../components/classes/classes-hero';

export function ClassesPage() {
  return (
    <div className="min-h-screen">
      <ClassesHero />
      <ClassList />
    </div>
  );
}