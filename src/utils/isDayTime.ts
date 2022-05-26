import dayjs from 'dayjs';

const hours = Number(dayjs().format('HH'));
const isDayTime = hours > 6 && hours < 19;

export {isDayTime};
