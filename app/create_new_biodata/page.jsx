"use client";
// pages/biodata.js
import { useState } from "react";
import { push, ref, set } from "firebase/database";
import { database } from "@/lib/firebase";
import SelectDivision from "@/components/selectDivision";
import SelectMarriedStatus from "@/components/selectMarriedStatus";
import SubmitWelcome from "./submitWelcomePage";
import SubmitBtn from "./submitBtn";
import FormLabel from "./formLabelTag";
import HeadText from "./headText";
import FormInput from "./formInput";
import FormAgreement from "./formAgreement";

export default function BiodataForm() {
  const [submitted, setSubmitted] = useState(false);
  const [boyOrGirl, setBoyOrGirl] = useState("");
  const [marriedStatus, setMarriedStatus] = useState("অবিবাহিত");
  const [division, setDivision] = useState("ঢাকা");

  const options = [
    { id: "পাত্র", label: "পাত্র" },
    { id: "পাত্রী", label: "পাত্রী" },
  ];

  const handleChange = (id) => {
    setBoyOrGirl(null);
    setBoyOrGirl(id);
  };

  const marriedHandleChange2 = (e) => {
    setMarriedStatus(e.target.value);
  };
  const handleChange3 = (e) => {
    setDivision(e.target.value);
  };

  const handleSubmit = async (e) => {
    let FormDataObject = {
      id: `#${Date.now() + Math.floor(Math.random() * 30)}`,
      boyOrGirl: boyOrGirl,
      name: e.target[2].value,
      mobile: e.target[3].value,
      age: e.target[4].value,
      height: e.target[5].value,
      birthID: e.target[6].value,
      birthDate: e.target[7].value,
      address: e.target[8].value,
      marriedStatus,
      division,
      education: e.target[11].value,
      occupation: e.target[12].value,
      personalDetails: e.target[13].value,
      familyDetails: e.target[14].value,
      partnerDetails: e.target[15].value,
      fbLink: e.target[16].value,
      extra: e.target[17].value,
    };

    try {
      const usersRef = ref(database, "AllBiodata");
      const newDataRef = await push(usersRef);

      set(newDataRef, FormDataObject);
      e.preventDefault();
      setSubmitted(true);
    } catch (error) {
      alert("Your Data is not submitted!!");
    }
  };

  return (
    <div>
      <p className="mt-2"></p>
      <hr />
      <p className="mt-2"></p>
      <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 flex items-start justify-center p-4 rounded-3xl">
        <div className="bg-white shadow-xl rounded-xl w-full max-w-lg p-6 animate-fadeIn mt-8 border border-x-0 border-purple-700 border-y-[12px] mb-4 ">
          {submitted ? "" : <HeadText />}

          {submitted ? (
            <SubmitWelcome />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-6 bg-gray-50 rounded-lg shadow-md max-w-md mx-auto">
                <h2 className="text-2xl text-purple-700 mb-4 underline">
                  আমি একজন:
                </h2>
                <div className="space-y-3">
                  {options.map((option) => (
                    <label
                      key={option.id}
                      htmlFor={option.id}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer transition-transform duration-200 ${
                        boyOrGirl === option.id
                          ? "bg-blue-500 text-white shadow-lg transform scale-105"
                          : "bg-white text-gray-800 hover:bg-blue-100 hover:shadow-md border border-purple-300"
                      }`}
                    >
                      <input
                        type="radio"
                        id={option.id}
                        name="radio-group"
                        value={option.id}
                        checked={boyOrGirl === option.id}
                        onChange={() => handleChange(option.id)}
                        className="hidden"
                      />
                      <span
                        className={`w-5 h-5 mr-3 flex items-center justify-center rounded-full border-2 ${
                          boyOrGirl === option.id
                            ? "border-white bg-white"
                            : "border-gray-300"
                        }`}
                      >
                        {boyOrGirl === option.id && (
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                        )}
                      </span>
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>
              <hr />
              {/* নাম */}
              <div>
                <FormLabel text={"নাম"} require="true" />
                <FormInput
                  type="text"
                  id="name"
                  placeholder="NID অনুযায়ি নাম লিখুন...."
                />
              </div>{" "}
              <hr />
              {/* মোবাইল নাম্বার */}
              <div>
                <FormLabel text={"মোবাইল নাম্বার"} require="true" />
                <FormInput
                  type="tel"
                  id="phone"
                  placeholder="আপনার মোবাইল নাম্বার লিখুন...."
                />
              </div>
              <hr />
              {/* বয়স */}
              <div>
                <FormLabel text={"আপনার বয়স"} require="true" />
                <FormInput
                  type="number"
                  id="age"
                  placeholder="আপনার বয়স লিখুন...."
                />
              </div>
              <hr />
              {/* আপনার উচ্চতা */}
              <div>
                <FormLabel text={"আপনার উচ্চতা"} require="true" />
                <FormInput
                  type="text"
                  id="height"
                  placeholder="এভাবে লিখুন = 5.05"
                />
              </div>
              <hr />
              {/* জন্ম নিবন্ধন নাম্বার */}
              <div>
                <FormLabel text={"আপনার জন্ম নিবন্ধন নাম্বার"} />
                <FormInput
                  type="number"
                  id="birthNumber"
                  placeholder="(অনলাইন হতে হবে) ....."
                />
              </div>
              <hr />
              {/* জন্ম তারিখ */}
              <div>
                <FormLabel text={"জন্ম তারিখ"} />
                <FormInput
                  type="tel"
                  id="phone"
                  placeholder="দিন/মাস/বছর (01/01/2001)"
                />
              </div>
              <hr />
              {/* ঠিকানা */}
              <div>
                <FormLabel text={"আপনার ঠিকানা"} require="true" />
                <textarea
                  id="address"
                  rows="3"
                  maxLength={300}
                  placeholder="গ্রাম/শহর:-..., থানা:-...., জেলা:...।"
                  className="mt-1 px-2 py-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-300 focus:outline-none text-black"
                ></textarea>
              </div>{" "}
              <hr />
              {/* বৈবাহিক অবস্থা */}
              <div>
                <FormLabel text={"আপনার বৈবাহিক অবস্থা"} require="true" />
                <select
                  id="marriedStatus"
                  name="marriedStatus"
                  value={marriedStatus}
                  onChange={marriedHandleChange2}
                  className="w-full border border-purple-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 px-2 py-3 text-xl  bg-white text-black"
                >
                  <SelectMarriedStatus />
                </select>
              </div>
              <hr />
              {/* বিভাগ */}
              <div>
                <FormLabel text={"আপনার বিভাগ"} require="true" />
                <select
                  id="division"
                  name="division"
                  value={division}
                  onChange={handleChange3}
                  className="w-full border border-purple-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 px-2 py-3 text-xl  bg-white text-black"
                >
                  <SelectDivision />
                </select>
              </div>{" "}
              <hr />
              {/* শিক্ষাগত যোগ্যতা */}
              <div>
                <FormLabel text={"শিক্ষাগত যোগ্যতা"} require="true" />
                <FormInput
                  type="text"
                  id="education"
                  placeholder="বিস্তারিত ভাবে লিখুন..."
                />
              </div>{" "}
              <hr />
              {/* পেশা */}
              <div>
                <FormLabel text={"পেশা"} require="true" />
                <FormInput
                  type="text"
                  id="occupation"
                  placeholder="আপনার পেশা..., বিস্তারিত লিখুন।"
                />
              </div>{" "}
              <hr />
              {/* আপনার ব্যাক্তিগত বিস্তারিত তথ্য */}
              <div>
                <FormLabel
                  text={"আপনার ব্যাক্তিগত বিস্তারিত তথ্য"}
                  require="true"
                />
                <textarea
                  id="address"
                  rows="4"
                  maxLength={300}
                  placeholder="আপনার ব্যাক্তিগত তথ্য দিন, যেমন- নামাজ পড়েন কিনা, ইসলামী শরীয়াহ্ মোতাবেক চলার সর্বোচ্চ চেষ্টা করেন কিনা, আপনার শখ ইত্যাদি।"
                  className="mt-1 px-2 py-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-300 focus:outline-none text-black"
                ></textarea>
              </div>{" "}
              <hr />
              {/* পারিবারিক বিস্তারিত তথ্য */}
              <div>
                <FormLabel
                  text={"আপনার পারিবারিক বিস্তারিত তথ্য"}
                  require="true"
                />
                <textarea
                  id="address"
                  rows="3"
                  maxLength={300}
                  placeholder="আপনার বাবা-মা কে কি করেন উল্লেখসহ আপনার পারিবারিক বিস্তারিত তথ্য লিখুন..."
                  className="mt-1 px-2 py-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-300 focus:outline-none text-black"
                ></textarea>
              </div>{" "}
              <hr />
              {/* আপনি কেমন জীবনসঙ্গী চান */}
              <div>
                <FormLabel text={"আপনি কেমন জীবনসঙ্গী চান"} require="true" />
                <textarea
                  id="address"
                  rows="3"
                  maxLength={300}
                  placeholder="আপনি কেমন জীবনসঙ্গী চান বিস্তারিত ভাবে লিখুন..."
                  className="mt-1 px-2 py-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none text-black"
                ></textarea>
              </div>{" "}
              <hr />
              {/* ফেসবুক আইডি লিংক */}
              <div>
                <FormLabel text={"ফেসবুক আইডি লিংক"} />
                <FormInput
                  type="text"
                  id="name"
                  placeholder="আপনার ফেসবুক আইডির লিংক দিন..."
                />
              </div>{" "}
              <hr />
              {/* এক্সট্রা লেখা */}
              <div>
                <FormLabel text={"এক্সট্রা কিছু লিখতে পারেন"} />
                <textarea
                  id="address"
                  rows="3"
                  maxLength={300}
                  placeholder="আমাদের নিকট আপনার এক্সট্রা কিছু লেখার থাকলে এখানে লিখুন...."
                  className="mt-1 px-2 py-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none text-black"
                ></textarea>
              </div>{" "}
              <hr />
              {/* সম্মতি */}
              <FormAgreement />
              {/* Submit Button */}
              <SubmitBtn />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
