import { useContext, useEffect } from "react";
import React from "react";
import BaseLayout from "./layout/BaseLayout.jsx";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingPage from "../components/setting/SettingsPage.jsx";
import HelpSupportPage from "../components/helpsupport/HelpSupportPage.jsx";
//import Dashboard from "./screen/dashboard/DashBoardScreen.jsx";
import PageNotFound from "./screen/error/PageNotFound.jsx";
import ReportPage from "../components/report/ReportPage.jsx";

function App() {
  return (
    // <>
    // <BaseLayout />
    // </>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<ReportPage />} />
          {/* <Route path="user-management" element={<UserManagement />} />
          <Route path="property-management" element={<PropertyManagement />} />*/}
          <Route path="settings" element={<SettingPage />} />
          <Route path="help-support" element={<HelpSupportPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
  );
}

// function App() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

  
//   // adding dark-mode class if the dark mode is set on to the body tag
//   useEffect(() => {
//     if (theme === DARK_THEME) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   }, [theme]);

//   return (
//     <>
//       <Router>
//         <Routes>
//           <BaseLayout />
//           {/* <Route element={<BaseLayout />} >
//              <Route path="/" element={<Dashboard />} /> 
//             <Route path="*" element={<PageNotFound />} /> 
//           </Route> */}
//         </Routes>
//         <button
//           type="button"
//           className="theme-toggle-btn"
//           onClick={toggleTheme}
//         >
//         {theme === LIGHT_THEME ? <IoSunnyOutline/> : <FaRegMoon/>}
//         </button>
//       </Router>
      
//     </>
//   );
// }

export default App;

// const App = () => {
//   return (
//     <div className='flex h-screen bg-white dark:bg-slate-900'>
//       <section className='w-[10%] sm:w-[15%]'>
//         <Sidebar/>
//       </section>
//     </div>
//   )
// }

//export default App