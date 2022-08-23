import logo from './logo.svg';
import './App.css';
import { Homepage } from './pages/Homepage/homepage';
import { Landingpage } from './pages/Landingpage/landingpage';
import { Route, Routes} from "react-router-dom";
import { PrivateRoute } from './pages/privateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/homepage" element={<PrivateRoute><Homepage /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
