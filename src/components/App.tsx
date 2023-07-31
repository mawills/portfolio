import NavBar from "./Navbar";
import Home from "./HomePage";
import Resume from "./ResumePage";
import Contact from "./ContactPage";
import NoMatch from "./NoMatchPage";
import { Routes, Route, Outlet } from "react-router-dom";
import "../style/App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
