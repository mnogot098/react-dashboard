import "./App.css";
import MainDashboard from "./components/mainDashboard/MainDashboard";
import RightSide from "./components/rightSide/RightSide";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <div className="AppClass">
        <SideBar />
        <MainDashboard />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
