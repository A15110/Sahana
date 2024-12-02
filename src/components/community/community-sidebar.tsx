import { Users, Award, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';

export function CommunitySidebar() {
  return (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-lg font-medium text-sage-900 mb-4">Community Stats</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <Users className="w-5 h-5 text-sage-500 mr-2" />
            <span className="text-sage-600">1,234 Members</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="w-5 h-5 text-sage-500 mr-2" />
            <span className="text-sage-600">567 Discussions</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-medium text-sage-900 mb-4">Upcoming Events</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Calendar className="w-5 h-5 text-sage-500" />
            <div>
              <p className="font-medium text-sage-900">Community Meditation</p>
              <p className="text-sm text-sage-600">Tomorrow, 9:00 AM</p>
            </div>
          </div>
          <Button variant="outline" className="w-full">View All Events</Button>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-medium text-sage-900 mb-4">Top Contributors</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center space-x-3">
              <img
                src={`https://via.placeholder.com/32`}
                alt={`Top contributor ${i}`}
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1">
                <p className="font-medium text-sage-900">Member Name</p>
                <div className="flex items-center text-sm">
                  <Award className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-sage-600">Level {4 - i}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}