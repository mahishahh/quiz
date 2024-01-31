import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Layout from "./pages/layout/Layout";
import Quiz from './pages/quiz/Quiz';
import QuizStart from './pages/quiz/QuizStart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quiz/" element={<Layout />}>
          <Route index element={<QuizStart />} />
          <Route path="start" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
