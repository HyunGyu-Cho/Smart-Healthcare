// src/pages/BodyAnalysisPage.jsx
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';

export default function BodyAnalysisPage() {
  const navigate = useNavigate();
  const handleRecommend = () => navigate('/workouts');

  return (
    <Layout>
      <Card title="체형 분석 결과">
        <div className="bg-blue-50 rounded-xl p-4 mb-4">
          <div className="text-gray-700">당신의 체형 분류는</div>
          <div className="text-2xl font-bold text-blue-600">근력 강화 필요형</div>
        </div>
        <div className="mb-4">
          <div className="font-semibold text-gray-800 mb-2">설문조사 결과</div>
          <ul className="list-disc pl-6 text-gray-700">
            <li>운동 빈도: 주 2회 이하</li>
            <li>식단 관리: 미흡</li>
          </ul>
        </div>
        <Button onClick={handleRecommend}>맞춤 운동/식단 추천받기</Button>
      </Card>
    </Layout>
  );
}