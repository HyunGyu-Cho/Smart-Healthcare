import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const days = ['월요일','화요일','수요일','목요일','금요일'];

const workoutData = {
  월요일: [{ id:1, title:'스쿼트', desc:'3세트×12회', kcal:150, image:'/assets/squat.jpg' }],
  화요일: [{ id:2, title:'푸쉬업', desc:'3세트×10회', kcal:100, image:'/assets/pushup.jpg' }],
  수요일: [{ id:3, title:'런지', desc:'3세트×12회', kcal:140, image:'/assets/lunge.jpg' }],
  목요일: [{ id:4, title:'플랭크', desc:'3세트×60초', kcal:80, image:'/assets/plank.jpg' }],
  금요일: [{ id:5, title:'버피', desc:'3세트×15회', kcal:160, image:'/assets/burpee.jpg' }],
};

export default function RecommendedWorkoutListPage() {
  const [selectedDay, setSelectedDay] = useState(days[0]);

  return (
    <Layout>
      <div className="flex gap-8">
        {/* 사이드바 */}
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

        {/* 추천 운동 목록 */}
        <div className="flex-1 grid md:grid-cols-2 gap-6">
          { (workoutData[selectedDay] || []).map((w) => (
            <Card key={w.id} title={w.title}>
              {/* 썸네일 이미지 추가 */}
              <img src={w.image} alt={w.title} className="w-full h-40 object-cover rounded-xl mb-2" />
              <p className="text-gray-700 mb-1">{w.desc}</p>
              <p className="text-blue-600 font-semibold">{w.kcal} kcal</p>
              <Link
                to={`/workout/${w.id}`}
                className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark text-center"
              >
                상세보기
              </Link>
            </Card>
          )) }
        </div>
      </div>
    </Layout>
  );
}