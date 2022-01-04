import "./App.css";
import Header from "./components/Header/Header";
import Navmenu from "./components/Navmenu/Navmenu";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="page">
        <Navmenu />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
