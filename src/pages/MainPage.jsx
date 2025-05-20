// src/pages/MainPage.jsx
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';

// lucide-react에서 실제 존재하는 아이콘만 import!
import { Dumbbell, PieChart, Utensils, Apple, Salad } from 'lucide-react';

// Swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function FeatureCard({ icon: Icon, title, desc, cta }) {
  return (
    <div className="card w-full">
      <div className="bg-primary/10 rounded-full p-4 mb-5">
        <Icon className="h-9 w-9 text-primary mx-auto" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 mb-6 text-center">{desc}</p>
      <Link to={cta.to}><Button>{cta.text}</Button></Link>
    </div>
  );
}

export default function MainPage() {
  return (
    <Layout>
      {/* Hero Section - Swiper 슬라이드 */}
      <section className="bg-gradient-to-tr from-blue-50 via-blue-100 to-pink-50 rounded-3xl p-12 mb-20 shadow-xl flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-2 text-center">Smart Healthcare</h1>
        <p className="text-lg text-gray-700 mb-4 text-center">
          인바디 & 생활관리 솔루션<br />건강한 몸, 꾸준한 삶, 당신을 위한 맞춤 관리
        </p>
        <div className="w-full max-w-lg mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className="rounded-2xl shadow-lg"
          >
            <SwiperSlide>
              <img src="/assets/inbodyData.jpg" alt="슬라이드1" className="w-full h-64 object-cover rounded-2xl" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/image2.png" alt="슬라이드2" className="w-full h-64 object-cover rounded-2xl" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/slide3.jpg" alt="슬라이드3" className="w-full h-64 object-cover rounded-2xl" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* 주요 기능 (3-Card) */}
      <section className="space-y-20 mb-24">
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard
            icon={PieChart}
            title="인바디 데이터 입력"
            desc="근육량, 체지방률, 부위별 분포까지 정확히 입력해보세요."
            cta={{ text: '지금 시작하기', to: '/inbody' }}
          />
          <FeatureCard
            icon={Dumbbell}
            title="체형 분석"
            desc="입력한 데이터를 바탕으로 AI가 체형을 분석합니다."
            cta={{ text: '분석하러 가기', to: '/analysis' }}
          />
          <FeatureCard
            icon={Utensils}
            title="맞춤 플랜"
            desc="AI가 추천하는 나만의 운동/식단 루틴을 받아보세요."
            cta={{ text: '추천 받기', to: '/workouts' }}
          />
        </div>
      </section>

      {/* 서비스 특징 */}
      <section>
        <h2 className="text-3xl font-extrabold text-center text-primary mb-10">Why Choose Smart Healthcare</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: PieChart, text: 'AI 체형 분석' },
            { icon: Dumbbell, text: '맞춤형 운동 루틴' },
            { icon: Utensils, text: '맞춤 식단 제공' },
            { icon: Apple, text: '진행상황 추적' },
            { icon: Dumbbell, text: '전문가 피드백' },
            { icon: Salad, text: '커뮤니티 지원' },
          ].map((f, i) => (
            <div key={f.text} className="card group hover:bg-primary/5 transition cursor-pointer">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow mb-3 mx-auto group-hover:bg-primary/10 transition">
                <f.icon className="h-7 w-7 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 text-center">{f.text}</h4>
              <p className="text-gray-500 text-sm text-center mt-2">
                최신 AI와 전문가가 함께하는 헬스케어 솔루션!
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}