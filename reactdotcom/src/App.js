import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyled } from './global/globalStyled';

import { GetStarted } from './../src/views/get-started';
import { Home } from './views/home';
import { Components } from './views/components';
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
      <Router>
        <PageLayout>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/components' element={<Components />} />
          </Routes>
        </PageLayout>
      </Router>
    </div>
  );
}

export default App;
