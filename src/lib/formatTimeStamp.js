const daysArray = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const formatTimeStamp = (timeStamp) => {
  const dateObject = new Date(timeStamp * 1000);
  const formattedDate = `${daysArray[dateObject.getDay()]}, ${dateObject.getDate()} ${
    monthArray[dateObject.getMonth()]
  } ${dateObject.getFullYear()} ${dateObject.toLocaleTimeString()}`;
  return formattedDate;
};
