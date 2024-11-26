import "./CalorieRecord.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyledRecordCell from "./styledRecordCell";
function CalorieRecord(props) {
  return (
    <ul className="record">
      <li>
        <CalorieRecordDate date={props.date} />
      </li>
      <li>{props.meal}</li>
      <li>{props.content}</li>
      <li className="record-calories">
        <StyledRecordCell>{props.calories}</StyledRecordCell>
      </li>
    </ul>
  );
}

export default CalorieRecord;
