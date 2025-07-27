import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import ActionQuiz from './pages/qoutes/ActionQuiz';
import ComedyQuiz from './pages/qoutes/ComedyQuiz';
import BollywoodQuiz from './pages/qoutes/BollywoodQuiz';
import Result from './pages/Result';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/action" element={<ActionQuiz />} />
        <Route path="/quiz/comedy" element={<ComedyQuiz />} />
        <Route path="/quiz/bollywood" element={<BollywoodQuiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
