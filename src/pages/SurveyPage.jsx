import { useState } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

export default function SurveyPage() {
  const [input, setInput] = useState('');
  const [keywords, setKeywords] = useState([]);
  const navigate = useNavigate();

  // 예시: 간단한 키워드 추출(실제 서비스에서는 더 정교한 NLP 적용 가능)
  const extractKeywords = (text) => {
    const keywordList = [];
    if (text.includes('허리')) keywordList.push('통증 부위: 허리');
    if (text.includes('어깨')) keywordList.push('통증 부위: 어깨');
    if (text.includes('하체')) keywordList.push('운동 부위: 하체');
    if (text.includes('상체')) keywordList.push('운동 부위: 상체');
    if (text.includes('단백질')) keywordList.push('식단 선호: 단백질');
    // ...추가 키워드 규칙
    return keywordList;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const extracted = extractKeywords(input);
    setKeywords(extracted);
    // 여기서 extracted(키워드 리스트)를 추천 엔진에 전달하면 됨
    // 예: recommendWorkout({ keywords: extracted });

    navigate('/analysis');
  };

  return (
    <Layout>
      <div className="max-w-xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">설문조사</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-semibold">자유롭게 의견을 입력해 주세요</label>
            <textarea
              className="w-full border rounded p-2 min-h-[100px]"
              placeholder="예: 허리 통증이 있어요. 하체 위주로 운동하고 싶어요. 단백질 섭취를 늘리고 싶어요."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-3 rounded">요약 및 추천</button>
        </form>
        {keywords.length > 0 && (
          <div className="mt-8 bg-gray-50 p-4 rounded shadow">
            <h3 className="font-semibold mb-2">요약된 키워드</h3>
            <ul className="list-disc pl-5">
              {keywords.map((kw, i) => <li key={i}>{kw}</li>)}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
}