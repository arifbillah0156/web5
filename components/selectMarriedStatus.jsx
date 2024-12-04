import React from "react";

export default function SelectMarriedStatus({ all }) {
  return (
    <>
      {all ? <option value="allStatus">সকল</option> : ""}
      <option value="unmarried">অবিবাহিত</option>
      <option value="divorced">ডিভোর্সড</option>
      <option value="bidhoba">বিধবা</option>
    </>
  );
}
