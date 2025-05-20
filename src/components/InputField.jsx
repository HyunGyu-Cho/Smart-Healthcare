// src/components/InputField.jsx
export default function InputField({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-800 font-medium">{label}</label>
      <input
        className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        {...props}
      />
    </div>
  );
}