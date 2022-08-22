import React from "react";
import { item } from "./styles.module.css";
const ExperienceItem = ({
  job_stack,
  company,
  start_date,
  end_date,
  is_current,
  description,
}) => {
  const monthNames = [
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
  const date = new Date(start_date);
  return (
    <div className={item}>
      <span>
        {date.getDate()} {monthNames[date.getMonth()]} - {date.getFullYear()} / {" "}
        {is_current ? "Current" : end_date}
      </span>
      <h3>
        {job_stack} at {company}
      </h3>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
