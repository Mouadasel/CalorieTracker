import "./CalorieRecordDate.css";
import StyledRecordCell from "./styledRecordCell";
function CalorieRecordDate(props) {
  const month = props.date.toLocaleDateString("default", { month: "long" });
  const day = props.date.getDay();
  const year = props.date.getFullYear();
  return (
    <StyledRecordCell>
      <div className="record-date-month">{month}</div>
      <div className="record-date-day">{day}</div>
      <div className="record-date-year">{year}</div>
    </StyledRecordCell>
  );
}
export default CalorieRecordDate;
