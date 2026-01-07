import { useEffect, useRef, useState } from 'react';
import type { RealTimeEvent } from 'types/types';

function useRealTimeEvents() {
  const [events, setEvents] = useState<RealTimeEvent[]>([]);
  const buffer = useRef<RealTimeEvent[]>([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080/ws');
    ws.onmessage = (msg) => {
      buffer.current.push(JSON.parse(msg.data));
    };

    let raf: number;

    const flush = () => {
      if (buffer.current.length > 0) {
        const pendingEvents = buffer.current.slice(0);

        setEvents((prev) => {
          const next = [...prev, ...pendingEvents];
          return next.slice(-50);
        });
      }
      raf = requestAnimationFrame(flush);
    };

    raf = requestAnimationFrame(flush);

    return () => {
      ws.close();
      cancelAnimationFrame(raf);
    };
  }, []);
  return events;
}

export default useRealTimeEvents;
