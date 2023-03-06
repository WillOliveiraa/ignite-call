export function convertTimeStringToMinutes(timeString: string) {
  // item => Number(item)
  const [hours, minutes] = timeString.split(':').map(Number);

  return hours * 60 + minutes;
}
