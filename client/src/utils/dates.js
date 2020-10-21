export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function addZeroes(num) {
  const str = num.toString();
  return "0".repeat(2 - str.length) + str;
}

export function formatDates(dateObj) {
  if (!dateObj) return "";

  const date = new Date(dateObj);
  return `${addZeroes(date.getHours())}:${addZeroes(date.getMinutes())} - ${
    DAYS[date.getDay()]
  } ${date.getDate()}/${date.getMonth() + 1}`;
}
