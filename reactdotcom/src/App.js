import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyled } from './global/globalStyled';

import { GetStarted } from './../src/views/get-started';
import { Home } from './views/home';
import { PageLayout } from './global/PageLayout';


function App() {
  return (
    <div>
      <GlobalStyled />
      <Router>
        <Routes>
          <Route path='/' element={<GetStarted />} />
        </Routes>
      </Router>
      <PageLayout>
        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />
          </Routes>
        </Router>
      </PageLayout>
    </div>
  );
}

export default App;
