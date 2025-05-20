import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

function StarRating({ value, onChange }) {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(star => (
        <button
          key={star}
          type="button"
          className={`
            text-3xl
            ${star <= value ? "text-yellow-400" : "text-gray-300"}
            focus:outline-none
          `}
          onClick={() => onChange(star)}
          aria-label={`${star}점`}
        >★</button>
      ))}
    </div>
  );
}

export default function EvaluationPage() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        <form className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">서비스 평가하기</h2>
          <div className="flex flex-col items-center gap-2">
            <span className="text-lg text-gray-700">별점을 선택해 주세요</span>
            <StarRating value={rating} onChange={setRating} />
          </div>
          <textarea
            className="border border-blue-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            rows={4}
            placeholder="의견을 남겨주세요"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition"
          >
            평가 제출
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}