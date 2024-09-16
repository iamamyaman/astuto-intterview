import React from "react";
import styles from "./DatePicker.module.scss";

const DatePicker = () => {
  const weeks = ["S", "M", "T", "W", "T", "F", "S"];

  const firstDateOfMonth = new Date("2024-8-1");
  const lastDateOfMonth = new Date("");
  const firstDayOfMonth = firstDateOfMonth.getDay();

  var date = new Date("2024-8-1");
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  var daysInCurrentMonth = new Date(
    new Date("2024-8-1").getFullYear(),
    new Date("2024-8-1").getMonth() + 1,
    0
  ).getDate();
  console.log(daysInCurrentMonth);
  console.log(firstDay, lastDay);

  const getDateArray = () => {
    let dateArray = [];
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      const date = new Date(`2024-8-${i}`);
      const day = date.getDay();

      dateArray.push({ dateCount: i, day: day });
    }

    return dateArray;
  };

  const emptyBoxesBeforeStarting =
    firstDayOfMonth > 1 ? firstDayOfMonth : firstDayOfMonth;

  const emptyBoxesAfterTheMonth =
    lastDay > 1 && lastDay < 6 ? 6 - lastDay : lastDay;

  const emptyBoxArrayBeforeTheMonth = () => {
    let array = [];
    for (let i = 1; i <= emptyBoxesBeforeStarting; i++) {
      array.push(i);
    }
    console.log(array);
    return array;
  };

  const emptyBoxArrayAfterTheMonth = () => {
    let array = [];
    for (let i = 1; i <= emptyBoxesAfterTheMonth; i++) {
      array.push(i);
    }

    return array;
  };

  console.log(emptyBoxArrayAfterTheMonth());

  return (
    <div className={styles.DatePicker}>
      <div className={styles.WeekRow}>
        {weeks?.map((w, idx) => {
          return (
            <div className={styles.Week} key={idx}>
              {w}
            </div>
          );
        })}
      </div>

      <div className={styles.DateWrapper}>
        {emptyBoxArrayBeforeTheMonth().map((box) => {
          return <div className={styles.Date}></div>;
        })}
        {getDateArray()?.map((date) => {
          return (
            <div className={styles.Date} key={date?.dateCount}>
              {date?.dateCount}
            </div>
          );
        })}
        {emptyBoxArrayAfterTheMonth().map((box) => {
          return <div className={styles.Date}></div>;
        })}
      </div>
    </div>
  );
};

export default DatePicker;
