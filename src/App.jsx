import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import InbodyInputPage from './pages/InbodyInputPage';
import BodyAnalysisPage from './pages/BodyAnalysisPage';
import WorkoutDetailPage from './pages/WorkoutDetailPage';
import DietDetailPage from './pages/DietDetailPage';
import PasswordScreen from './pages/PasswordScreen';
import RecommendedWorkoutListPage from './pages/RecommendedWorkoutListPage';
import RecommendedDietListPage from './pages/RecommendedDietListPage';
import CommunityPage from './pages/CommunityPage';
import EvaluationPage from './pages/EvaluationPage';
import SurveyPage from './pages/SurveyPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/inbody" element={<InbodyInputPage />} />
        <Route path="/analysis" element={<BodyAnalysisPage />} />
        <Route path="/workout/:id" element={<WorkoutDetailPage />} />
        <Route path="/diet/:id" element={<DietDetailPage />} />
        <Route path="/password" element={<PasswordScreen />} />
        <Route path="/workouts" element={<RecommendedWorkoutListPage />} />
        <Route path="/diets" element={<RecommendedDietListPage />} />
        <Route path="/evaluations" element={<EvaluationPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/evaluation" element={<EvaluationPage />} />
        <Route path="/survey" element={<SurveyPage />} />

      </Routes>
    </BrowserRouter>
  );
}