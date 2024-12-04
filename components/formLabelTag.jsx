export default function FormLabelTag({ text }) {
  return (
    <>
      <label htmlFor="" className="block text-2xl font-medium text-purple-700">
        {text}
      </label>
    </>
  );
}
