import Layout from '../components/Layout';
import BackButton from '../components/BackButton';
import Card from '../components/Card';
import { useParams } from 'react-router-dom';

// 예시: 실제로는 DB/API에서 불러오거나 props/context로 전달
const workoutDB = [
  {
    id: 1,
    title: '스쿼트',
    kcal: 150,
    exampleUrl: 'https://www.youtube.com/watch?v=aclHkVaku9U',
    effect: '하체 근력 강화, 코어 안정성 향상',
    desc: '3세트×12회'
  },
  // ...다른 운동
];

export default function WorkoutDetailPage() {
  const { id } = useParams();
  const workout = workoutDB.find(w => String(w.id) === String(id));

  if (!workout) {
    return (
      <Layout>
        <div className="text-center py-16">운동 정보를 찾을 수 없습니다.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <BackButton onClick={() => window.history.back()} />
      <Card title={workout.title}>
        <div className="flex flex-col gap-8">
          {/* 운동 사진 없음! */}
          <div className="flex-1 space-y-4">
            {/* 칼로리 정보 */}
            <div>
              <span className="font-semibold">칼로리 소모:</span>
              <span className="ml-2 text-blue-600 font-bold">{workout.kcal} kcal</span>
            </div>
            {/* 운동 예시 링크 */}
            <div>
              <span className="font-semibold">운동 예시:</span>
              <a
                href={workout.exampleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-primary underline"
              >
                영상 보기
              </a>
            </div>
            {/* 운동 효과 */}
            <div>
              <span className="font-semibold">운동 효과:</span>
              <span className="ml-2">{workout.effect}</span>
            </div>
            {/* 추가 설명 */}
            <div>
              <span className="font-semibold">세트/반복:</span>
              <span className="ml-2">{workout.desc}</span>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}