import DashboardHeader from '@/components/dashboard/DashboardHeader';
import ChatStats from '@/components/dashboard/ChatStats';
// import MessageTimeline from '@/components/dashboard/MessageTimeline';
import CommonPhrases from '@/components/dashboard/CommonPhrases';
import TasksOverview from '@/components/dashboard/TasksOverview';
import PlatformToggle from '@/components/dashboard/PlatformToggle';
import ImportantHighlights from '@/components/dashboard/ImportantHighlights';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        <DashboardHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PlatformToggle />
          <div className="md:col-span-2">
            <ChatStats />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <MessageTimeline /> */}
          <CommonPhrases />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <TasksOverview />
          </div>
          <ImportantHighlights />
        </div>
      </div>
    </div>
  );
}