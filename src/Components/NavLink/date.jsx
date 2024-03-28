export function date(dates) {
  const dateStr = dates;
  const date = new Date(dateStr);
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true, // Use 24-hour format
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  console.log(formattedDate, "formattedDate"); // Output: "Saturday, March 25, 2023 14:30:00"

  return formattedDate;
}
