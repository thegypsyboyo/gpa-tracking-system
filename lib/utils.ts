import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();

  // Helper function to calculate time units
  const calculateTimeUnit = (unit: number, singular: string, plural: string): string => {
    const roundedUnit = Math.round(unit);
    return roundedUnit === 1 ? `${roundedUnit} ${singular}` : `${roundedUnit} ${plural}`;
  };

  if (timeDifference < 1000) {
    return 'Just now';
  } else if (timeDifference < 60000) {
    const seconds = timeDifference / 1000;
    return calculateTimeUnit(seconds, 'sec', 'secs') + ' ago';
  } else if (timeDifference < 3600000) {
    const minutes = timeDifference / 60000;
    return calculateTimeUnit(minutes, 'min', 'mins') + ' ago';
  } else if (timeDifference < 86400000) {
    const hours = timeDifference / 3600000;
    return calculateTimeUnit(hours, 'hour', 'hours') + ' ago';
  } else if (timeDifference < 2592000000) {
    // Less than 30 days, show days
    const days = timeDifference / 86400000;
    return calculateTimeUnit(days, 'day', 'days') + ' ago';
  } else if (timeDifference < 31536000000) {
    // Less than a year, show months
    const months = timeDifference / 2592000000;
    return calculateTimeUnit(months, 'month', 'months') + ' ago';
  } else {
    // Over a year, show years
    const years = timeDifference / 31536000000;
    return calculateTimeUnit(years, 'year', 'years') + ' ago';
  }
};


export const formatBigNumber = (number: number): string => {
  if (Math.abs(number) >= 1e6) {
    return (number / 1e6).toFixed(1) + 'M';
  } else if (Math.abs(number) >= 1e3) {
    return (number / 1e3).toFixed(1) + 'K';
  } else {
    return number.toString();
  }
};