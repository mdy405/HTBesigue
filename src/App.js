import SideBar from "./components/SideBar";
import Main from "./components/Main";
import "./scss/styles.scss";
function App() {
  return (
    <>
      <div className="dashboard">
        <SideBar />
        <Main />
      </div>
      <div className="shapes__1"></div>
      <div className="shapes__2"></div>
    </>
  );
}

export default App;
