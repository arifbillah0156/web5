export default function FormInput({ type, id, placeholder }) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      maxLength={100}
      className="mt-1 px-2 py-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-300 focus:outline-none text-black"
    />
  );
}
