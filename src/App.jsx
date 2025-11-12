import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./routes/Layout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='gallery' element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
