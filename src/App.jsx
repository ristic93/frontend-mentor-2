import "./App.css";
import Navbar from "./components/Navbar";
import Followers from "./components/Followers";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="px-10 py-5 max-w-[80%] sm:max-w-[95%] mx-auto">
      <div
        className="bg-light-lightCardBg dark:bg-dark-darkCardBg h-52 w-full absolute top-0 left-0 rounded-b-3xl"
        style={{
          zIndex: -2,
        }}
      ></div>
      <Navbar />
      <Followers />
      <Overview />
    </div>
  );
}

export default App;
