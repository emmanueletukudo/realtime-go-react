import { EventsTable } from 'component/EventsTable';
import StatsBar from 'component/StatsBar';
import useRealTimeEvents from 'hooks/useRealTImeEvents';

export function Welcome() {
  const events = useRealTimeEvents();
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">Real Time Event Monitor</h1>
        <StatsBar events={events} />
        <EventsTable events={events} />
      </div>
    </main>
  );
}
