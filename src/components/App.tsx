import NavBar from "./Navbar";
import Home from "./Home";
import Code from "./Code";
import Models from "./Models";
import Contact from "./Contact";
import NoMatch from "./NoMatch";
import { Routes, Route, Outlet } from "react-router-dom";
import "../style/App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="code" element={<Code />} />
          <Route path="models" element={<Models />} />
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
