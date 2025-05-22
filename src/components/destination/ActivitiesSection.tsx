
// src/components/ActivitiesSection.tsx

import { Activity } from '@/types/destination';

interface ActivitiesSectionProps {
  destinationName: string;
  activities: Activity[];
}

export default function ActivitiesSection({ destinationName, activities }: ActivitiesSectionProps) {
  return (
    <section className="py-16 bg-secondary-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary-dark text-center mb-12">
          Activités à {destinationName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-background-alt p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-primary mb-3">
                {activity.name}
              </h3>
              <p className="text-text-secondary mb-4">
                {activity.description}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-secondary-dark font-medium">{activity.duration}</span>
                <span className="text-primary font-semibold">{activity.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
