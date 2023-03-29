import { intervalToDuration } from 'date-fns';

const getDateByString = (date: string) => (date ? new Date(date) : Date.now());

export const getTime = (startTime: string, endTime: string) => {
  const duration = intervalToDuration({
    start: getDateByString(startTime),
    end: getDateByString(endTime)
  });

  return `${duration.hours}h ${duration.minutes}m`;
};
