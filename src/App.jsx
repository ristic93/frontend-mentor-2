import "./App.css";
import Navbar from "./components/Navbar";
import Followers from "./components/Followers";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="px-10 py-5 max-w-[80%] sm:max-w-[95%] mx-auto">
      <Navbar />
      <Followers />
      <Overview />
    </div>
  );
}

export default App;
