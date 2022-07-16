import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from "./pages/start";
import Exam from "./pages/exam";
import Result from "./pages/result";

import { ScoreProvider } from "./Context/Context";

function App() {
  return (
    <ScoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Exam" element={<Exam />} />
          <Route path="/Result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </ScoreProvider>
  );
}

export default App;