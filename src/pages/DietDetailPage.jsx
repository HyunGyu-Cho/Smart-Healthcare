import Layout from '../components/Layout';
import BackButton from '../components/BackButton';
import Card from '../components/Card';
import { useParams } from 'react-router-dom';

// 예시: 실제로는 DB/API에서 불러오거나 props/context로 전달
const dietDB = [
  {
    id: 1,
    title: '닭가슴살 샐러드',
    nutrition: {
      탄수화물: 20,
      단백질: 35,
      지방: 8,
      포화지방: 2,
      콜레스테롤: 60
    },
    effect: '단백질 보충, 체중 감량, 근육 유지'
  },
  // ...다른 식단
];

export default function DietDetailPage() {
  const { id } = useParams();
  const diet = dietDB.find(d => String(d.id) === String(id));

  if (!diet) {
    return (
      <Layout>
        <div className="text-center py-16">식단 정보를 찾을 수 없습니다.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <BackButton onClick={() => window.history.back()} />
      <Card title={diet.title}>
        <div className="flex flex-col gap-8">
          {/* 식단 사진 없음! */}
          <div className="flex-1 space-y-4">
            {/* 영양소 정보 */}
            <div>
              <span className="font-semibold">영양소 정보:</span>
              <ul className="ml-4 mt-2 space-y-1 text-gray-700">
                <li>탄수화물: <span className="font-bold">{diet.nutrition.탄수화물}g</span></li>
                <li>단백질: <span className="font-bold">{diet.nutrition.단백질}g</span></li>
                <li>지방: <span className="font-bold">{diet.nutrition.지방}g</span></li>
                <li>포화지방: <span className="font-bold">{diet.nutrition.포화지방}g</span></li>
                <li>콜레스테롤: <span className="font-bold">{diet.nutrition.콜레스테롤}mg</span></li>
              </ul>
            </div>
            {/* 기대 효과 */}
            <div>
              <span className="font-semibold">기대 효과:</span>
              <span className="ml-2">{diet.effect}</span>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}