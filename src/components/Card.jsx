// src/components/Card.jsx
export default function Card({ title, children }) {
  return (
    <div className="card">
      {title && <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>}
      {children}
    </div>
  );
}