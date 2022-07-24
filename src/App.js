import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Body from './components/body';
import Workout from './components/Workout';
import Nutrition from './components/Nutrition';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />}/>
        <Route path="userId/workout" element={<Workout/>}/>
        <Route path="userId/nutrition" element={<Nutrition />}/>
      </Routes>
    </Router>
  );
}

export default App;
