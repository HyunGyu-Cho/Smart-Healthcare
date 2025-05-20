// src/pages/RecommendedDietListPage.jsx
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const days = ['월요일','화요일','수요일','목요일','금요일'];

// 예시 데이터: 실제 API 결과에 맞춰서 대체하세요.
const dietData = {
  월요일: [
    { id: 1, title: '닭가슴살 샐러드', desc: '단백질 풍부, 350 kcal', image: '/assets/chicken_salad.jpg' },
    { id: 2, title: '현미밥 + 구운 야채', desc: '섬유질 보충, 300 kcal', image: '/assets/grilled_veggies.jpg' },
  ],
  화요일: [
    { id: 3, title: '연어 스테이크', desc: '오메가-3, 400 kcal', image: '/assets/salmon_steak.jpg' },
    { id: 4, title: '아보카도 토스트', desc: '건강 지방, 320 kcal', image: '/assets/avocado_toast.jpg' },
  ],
  수요일: [
    { id: 5, title: '두부 스테이크', desc: '식물성 단백질, 300 kcal', image: '/assets/tofu_steak.jpg' },
    { id: 6, title: '퀴노아 샐러드', desc: '전체 곡물, 330 kcal', image: '/assets/quinoa_salad.jpg' },
  ],
  목요일: [
    { id: 7, title: '시금치 달걀말이', desc: '철분 보충, 280 kcal', image: '/assets/spinach_egg.jpg' },
    { id: 8, title: '고구마구이', desc: '복합 탄수화물, 260 kcal', image: '/assets/sweet_potato.jpg' },
  ],
  금요일: [
    { id: 9, title: '닭가슴살 볶음밥', desc: '균형 잡힌 한 끼, 370 kcal', image: '/assets/chicken_fried_rice.jpg' },
    { id: 10, title: '그릭 요거트', desc: '프로바이오틱스, 150 kcal', image: '/assets/greek_yogurt.jpg' },
  ],
};

export default function RecommendedDietListPage() {
  const [selectedDay, setSelectedDay] = useState(days[0]);

  return (
    <Layout>
      <div className="flex gap-8">
        {/* 사이드바: 요일 버튼 */}
        <aside className="w-32 space-y-2">
          {days.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDay(d)}
              className={`w-full py-2 rounded ${
                d === selectedDay
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {d}
            </button>
          ))}
        </aside>

        {/* 식단 콘텐츠 영역 */}
        <div className="flex-1 grid md:grid-cols-2 gap-6">
          {(dietData[selectedDay] || []).map((d) => (
            <Card key={d.id} title={d.title}>
              <img src={d.image} alt={d.title} className="w-full h-40 object-cover rounded-xl mb-2" />
              <p className="text-gray-700 mb-1">{d.desc}</p>
              <Link
                to={`/diet/${d.id}`}
                className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark text-center"
              >
                상세보기
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
