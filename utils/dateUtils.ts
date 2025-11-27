const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short'
};

const presentText = 'Present';
const monthText = 'mes | meses';
const yearText = 'ano | anos';

/**
 * Receives a date in format YYYY-MM and returns a parsed date
 * @param stringDate a String date with format 'YYYY-MM'
 * @returns Locale Date String
 * @example
 * getDate('2024-01') // returns Jan 2024
 * getDate('2024-09') // returns Sep 2024
 */
export function getDate(stringDate: string) {
  if (stringDate === presentText) return stringDate;
  const [year, month] = stringDate.split('-').map(Number);
  const toDate = new Date(year, month - 1);
  return toDate.toLocaleDateString('pt-BR', dateOptions);
}

/**
 * Takes two dates and returns the time between in a locale format
 * @param startDate The start of period in format 'YYYY-MM'
 * @param endDate The end of period in format 'YYYY-MM'
 * @returns a string containing the number of months and years between two dates
 * @example
 * getTimeBetween('2023-07','2024-01') // returns "7 meses"
 * getTimeBetween('2022-01','2024-03') // returns "2 anos, 3 meses"
 */
export function getTimeBetween(startDate: string, endDate: string) {
  const isPresent = endDate === presentText;
  const start = parseDate(startDate);
  const end = isPresent ? new Date() : parseDate(endDate);
  
  const total_months = 
    end.getMonth() - start.getMonth() + 12 * (end.getFullYear() - start.getFullYear());
  const months = total_months % 12;
  const years = Math.floor(total_months / 12);
  
  if (years === 0) {
    return `${months} ${months === 1 ? 'mes' : 'meses'}`;
  }
  return `${years} ${years === 1 ? 'ano' : 'anos'}${months > 0 ? `, ${months} ${months === 1 ? 'mes' : 'meses'}` : ''}`;
}

function parseDate(dateString: string): Date {
  const [year, month] = dateString.split('-').map(Number);
  return new Date(year, month - 1);
}

