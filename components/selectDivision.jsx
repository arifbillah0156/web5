import React from "react";

export default function SelectDivision({ all }) {
  return (
    <>
      {all ? <option value="allDivision">সকল</option> : ""}
      <option value="Dhaka">ঢাকা বিভাগ</option>
      <option value="Chattogram">চট্টগ্রাম বিভাগ</option>
      <option value="Rajshahi">রাজশাহী বিভাগ</option>
      <option value="Khulna">খুলনা বিভাগ</option>
      <option value="Barishal">বরিশাল বিভাগ</option>
      <option value="Sylhet">সিলেট বিভাগ</option>
      <option value="Rangpur">রংপুর বিভাগ</option>
      <option value="Mymensingh">ময়মনসিংহ বিভাগ</option>
    </>
  );
}
