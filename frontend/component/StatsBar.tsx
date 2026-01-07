import { type FC } from 'react';
import type { RealTimeEvent } from 'types/types';

const StatsBar: FC<{ events: RealTimeEvent[] }> = ({ events }) => {
  const late = events.filter((e) => e.status === 'late').length;
  return (
    <div className="flex flex-row gap-2 bg-gray-500 w-full py-2.5 px-2">
      <strong>Events: {events.length} | </strong>
      <strong>Late: {late}</strong>
    </div>
  );
};

export default StatsBar;
