const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const formatTimeStamp = (timeStamp) => {
  const dateObject = new Date(timeStamp * 1000);
  const formattedDate = `${daysArray[dateObject.getDay()]}, ${dateObject.getDate()} ${
    monthArray[dateObject.getMonth()]
  } ${dateObject.getFullYear()} ${dateObject.toLocaleTimeString()}`;
  return formattedDate;
};
