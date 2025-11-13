import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./routes/Layout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Gallery from "./pages/Gallery";
import NotFound from "./routes/NotFound";
import About from "./pages/About";
import Summary from "./pages/Summary";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='gallery/detail/:id' element={<Detail />} />
          <Route path='summary' element={<Summary />} />
          <Route path='about' element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
