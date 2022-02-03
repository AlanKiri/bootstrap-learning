import "./styles/App.css";
import "./styles/Shared.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./components/TopHeader";
import BtcDisplay from "./components/BtcDisplay";

function App() {
  return (
    <div className="App">
      {
        <div>
          <TopHeader />
          <BtcDisplay />
        </div>
      }
    </div>
  );
}

export default App;
