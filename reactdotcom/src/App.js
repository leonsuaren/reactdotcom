import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyled } from './global/globalStyled';

import { GetStarted } from './../src/views/get-started';
import { Home } from './views/home';


function App() {
  return (
    <div>
      <GlobalStyled />
        
        <Router>
          <Routes>
            <Route path='/' element={<GetStarted />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
