export const sortByTimeStamp = (arr) =>
  arr.sort((a, b) => {
    if (a.timeStamp < b.timeStamp) {
      return 1;
    } else {
      return -1;
    }
  });
