import "./App.css";
import Header from "./components/Header/Header";
import Navmenu from "./components/Navmenu/Navmenu";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navmenu />
      <Profile />
    </div>
  );
}

export default App;
