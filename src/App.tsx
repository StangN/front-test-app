import { App2 } from './features/app2/app2';
import { List } from './features/list/list';
import { Navbar } from './components/navbar/navbar';
import './App.scss';
import {
  BrowserRouter as Router, Routes ,Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<List />}/>
          <Route path='/app2' element={<App2 />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
