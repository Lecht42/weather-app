export default function convertNumberToTime(hour: number): string {
    if (hour < 0 || hour >= 24) {
      throw new Error("Hour must be between 0 and 23");
    }

    const period = hour < 12 ? "AM" : "PM";

    const hour12 = hour % 12 || 12; // Converts 0 and 12 to 12, for 12AM and 12PM

    return `${hour12} ${period}`;
  }