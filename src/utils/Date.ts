import { log } from "console";
import dayjs from "dayjs";

function creatCalenderWithMonthAndYear(year: number, month: number) {
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let listOfDay = new Array(6).fill([]).map((row, i) => {
    return new Array(7).fill(null).map((day, j) => {
      if (i === 0 && firstDayOfMonth >= 0) {
        if (j < firstDayOfMonth) {
          return null;
        }
      }
      const dateOfDay = dayjs(
        new Date(year, month, i * 7 + (j + 1 - firstDayOfMonth))
      );

      return dateOfDay.month() === month ? dateOfDay : null;
    });
  });

  return listOfDay.filter((week) => !week.every((item) => item === null));
}

export function calenderCreator(currentDate: dayjs.Dayjs) {
  const month = currentDate.month();
  const year = currentDate.year();
  return creatCalenderWithMonthAndYear(year, month);
}
export function isToDay(date: dayjs.Dayjs) {
  if (date.format("DD/MM/YYYY") === dayjs(new Date()).format("DD/MM/YYYY")) {
    return true;
  }
  return false;
}
export function difrenceBetweenTwoTime(
  date: dayjs.Dayjs,
  start: string,
  end: string
) {
  const startTime = dayjs(`${date.format("YYYY-MM-DD")} ${start}`);
  const endTime = dayjs(`${date.format("YYYY-MM-DD")} ${end}`);
  const mins = endTime.diff(startTime, "minutes", true);
  return mins;
}
