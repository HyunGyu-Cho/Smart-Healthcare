import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Header() {
  const navItems = [
    { name: '홈', to: '/' },
    { name: '인바디 입력', to: '/inbody' },
    { name: '설문조사', to: '/survey' },
    { name: '체형분석결과', to: '/analysis' },
    { name: '추천운동', to: '/workouts' },
    { name: '추천식단', to: '/diets' },
    { name: '별점', to: '/evaluations' },
    { name: '커뮤니티', to: '/community' },
  ];

  return (
    <Disclosure as="nav" className="bg-white/90 shadow-lg backdrop-blur-sm sticky top-0 z-30">
      {({ open }) => (
        <>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* 로고 */}
              <Link to="/" className="flex items-center gap-2 text-2xl font-black text-primary tracking-tight">
                <span role="img" aria-label="logo">💪</span> Smart Healthcare
              </Link>
              {/* 모바일 메뉴 버튼 */}
              <div className="sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary">
                  {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </Disclosure.Button>
              </div>
              {/* 네비게이션 + 버튼 */}
              <div className="hidden sm:flex items-center space-x-2">
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="px-3 py-1.5 rounded-full text-sm font-semibold text-gray-700 hover:bg-primary hover:text-white transition whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ))}
                {/* 로그인/회원가입 버튼 */}
                <Link to="/login" className="ml-2 bg-blue-900 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 whitespace-nowrap">로그인</Link>
                <Link to="/signup" className="bg-white text-primary px-3 py-1.5 rounded text-sm border border-primary hover:bg-primary hover:text-white whitespace-nowrap">회원가입</Link>
              </div>
            </div>
            {/* 모바일 메뉴 드롭다운 */}
            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="block px-4 py-2 rounded text-base font-semibold text-gray-700 hover:bg-primary hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/login" className="block mt-2 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">로그인</Link>
                <Link to="/signup" className="block mt-2 bg-white text-primary px-4 py-2 rounded border border-primary hover:bg-primary hover:text-white">회원가입</Link>
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}