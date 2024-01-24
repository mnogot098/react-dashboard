import "./App.css";
import MainDashboard from "./components/mainDashboard/MainDashboard";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <div className="AppClass">
        <SideBar />
        <MainDashboard />
      </div>
    </div>
  );
}

export default App;
