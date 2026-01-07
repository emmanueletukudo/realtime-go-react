import { type FC } from 'react';
import type { RealTimeEvent } from 'types/types';

export const EventsTable: FC<{ events: RealTimeEvent[] }> = ({ events }) => {
  const formatDate = (date: string) => new Date(date).toLocaleString();
  return (
    <div className="w-full">
      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                ID
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Satus
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Processed At
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Deadline
              </th>
            </tr>
          </thead>
          <tbody>
            {events.map((e, i) => (
              <tr
                key={e.id + i}
                className="bg-neutral-primary border-b border-default"
              >
                <td className="px-6 py-4">{e.id.slice(0, 6)}</td>
                <td className="px-6 py-4">{e.status}</td>
                <td className="px-6 py-4">{formatDate(e.createdAt)}</td>
                <td className="px-6 py-4">{formatDate(e.processedAt)}</td>
                <td className="px-6 py-4">{e.deadlineMs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
