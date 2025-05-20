// src/pages/InbodyInputPage.jsx
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function InbodyInputPage() {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // 여기에 입력값 저장/검증 로직 추가 가능
    navigate('/survey');
  };

  return (
    <Layout>
      {/* Hero/Intro Section */}
      <section className="bg-gradient-to-tr from-blue-50 via-blue-100 to-pink-50 rounded-3xl p-8 mb-10 shadow-xl flex flex-col items-center">
        <img src="/assets/inbodyData.jpg" alt="인바디 데이터" className="w-28 h-28 mb-4" />
        <h2 className="text-3xl font-bold text-primary mb-2">인바디 데이터 입력</h2>
        <p className="text-gray-700 text-center">정확한 건강 분석을 위해 인바디 데이터를 입력해 주세요.</p>
      </section>

      {/* Form Section */}
      <section className="bg-white rounded-2xl shadow-md p-8 w-full max-w-3xl mx-auto mb-10">
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* 기본 정보 */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-primary">기본 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1">성별</label>
                <select className="w-full border rounded p-2">
                  <option>선택하세요</option>
                  <option>남성</option>
                  <option>여성</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">나이</label>
                <input type="number" className="w-full border rounded p-2" placeholder="나이를 입력하세요" />
              </div>
            </div>
          </div>
          {/* 신체 데이터 */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-primary">신체 데이터</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1">체중(kg)</label>
                <input className="w-full border rounded p-2" placeholder="체중을 입력하세요" />
              </div>
              <div>
                <label className="block mb-1">체지방률(%)</label>
                <input className="w-full border rounded p-2" placeholder="체지방률을 입력하세요" />
              </div>
              <div>
                <label className="block mb-1">골격근량(kg)</label>
                <input className="w-full border rounded p-2" placeholder="골격근량을 입력하세요" />
              </div>
              <div>
                <label className="block mb-1">BMI</label>
                <input className="w-full border rounded p-2" placeholder="BMI를 입력하세요" />
              </div>
              <div>
                <label className="block mb-1">기초대사량(kcal)</label>
                <input className="w-full border rounded p-2" placeholder="기초대사량을 입력하세요" />
              </div>
              <div>
                <label className="block mb-1">복부지방률(%)</label>
                <input className="w-full border rounded p-2" placeholder="복부지방률을 입력하세요" />
              </div>
            </div>
          </div>
          {/* 부위별 근육량 및 지방량 */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-primary">부위별 근육량 및 지방량</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 왼팔 */}
              <div>
                <label className="block mb-1">왼팔 근육량(kg)</label>
                <input className="w-full border rounded p-2" placeholder="근육량을 입력하세요" />
                <label className="block mb-1 mt-2">왼팔 지방량(kg)</label>
                <input className="w-full border rounded p-2" placeholder="지방량을 입력하세요" />
              </div>
              {/* 오른팔 */}
              <div>
                <label className="block mb-1">오른팔 근육량(kg)</label>
                <input className="w-full border rounded p-2" placeholder="근육량을 입력하세요" />
                <label className="block mb-1 mt-2">오른팔 지방량(kg)</label>
                <input className="w-full border rounded p-2" placeholder="지방량을 입력하세요" />
              </div>
              {/* 왼다리 */}
              <div>
                <label className="block mb-1">왼다리 근육량(kg)</label>
                <input className="w-full border rounded p-2" placeholder="근육량을 입력하세요" />
                <label className="block mb-1 mt-2">왼다리 지방량(kg)</label>
                <input className="w-full border rounded p-2" placeholder="지방량을 입력하세요" />
              </div>
              {/* 오른다리 */}
              <div>
                <label className="block mb-1">오른다리 근육량(kg)</label>
                <input className="w-full border rounded p-2" placeholder="근육량을 입력하세요" />
                <label className="block mb-1 mt-2">오른다리 지방량(kg)</label>
                <input className="w-full border rounded p-2" placeholder="지방량을 입력하세요" />
              </div>
              {/* 복부 근육량 */}
              <div>
                <label className="block mb-1">복부 근육량(kg)</label>
                <input className="w-full border rounded p-2" placeholder="근육량을 입력하세요" />
              </div>
              {/* 복부 지방량 */}
              <div>
                <label className="block mb-1">복부 지방량(kg)</label>
                <input className="w-full border rounded p-2" placeholder="지방량을 입력하세요" />
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full bg-primary text-white py-3 rounded mt-8">저장하기</Button>
        </form>
      </section>

      {/* 안내/배너 Section */}
      <section className="flex flex-col items-center gap-4">
        <img src="/assets/inbodyData.jpg" alt="인바디" className="w-20 h-20" />
        <p className="text-lg text-center">정확한 인바디 입력은 맞춤 건강 분석의 시작입니다!</p>
      </section>
    </Layout>
  );
}