export type RealTimeEvent = {
  id: string;
  createdAt: string;
  deadlineMs: number;
  processedAt: string;
  status: 'on-time' | 'late';
};
