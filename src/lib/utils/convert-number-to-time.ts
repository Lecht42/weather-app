export default function convertNumberToTime(hour: number): string {
    if (hour < 0 || hour >= 24) {
      throw new Error("Hour must be between 0 and 23");
    }

    const period = hour < 12 ? "AM" : "PM";

    const hour12 = hour % 12 || 12; 

    return `${hour12} ${period}`;
  }