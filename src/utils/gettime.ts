const getTime = (): string => {
  const hours = new Date().getHours();
  let msg = "";
  if (hours >= 6 && hours <= 11) {
    msg = "早上好";
  } else if (hours > 11 && hours <= 14) {
    msg = "中午好";
  } else if (hours > 14 && hours <= 18) {
    msg = "下午好";
  } else if (hours > 18) {
    msg = "晚上好";
  }
  return msg;
};

export default getTime;
