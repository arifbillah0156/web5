export default function FormLabel({ text, require }) {
  return (
    <>
      <label htmlFor="" className="block text-xl font-medium text-purple-900">
        {text} {require ? <span className="text-red-600">*</span> : ""}
      </label>
    </>
  );
}
