import React , { useEffect } from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css'
import { Navbar , Footer , Sidebar , ThemeSettings , LineChart , Introduction , Common} from './components';
import { Line , ColorPicker , Calendar , Changes } from './pages';
import { Datatable } from './pages';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000'}}>
            <TooltipComponent content="Settings" position="Top">
              <button type="button" className="text-3xl p-3 hover:drop-shadow-xl text-white"
               style={{ background:'blue',
               borderRadius: '50%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div className={
            activeMenu ? 'dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full':
            'dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2'
          }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg
            navbar w-full">
              <Navbar />
            </div>
            <div>
              <Routes>
                {/* Homepage */}
                <Route path="/" element={<Introduction />} />
                <Route path="/introduction" element={<Introduction />} />
                {/* Charts component */}
                <Route path="/line" element={(<Line />)} />
                <Route path="/datatable" element={<Datatable />} />
                <Route path="/dailychanges" element={<Changes />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App