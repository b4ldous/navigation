import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import First from "./pages/First";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Second from "./pages/Second";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="first" element={<First/>} />
        <Route path="second" element={<Second/>} />
        <Route path="*" element={<NoPage/>} />
              
      </Route>
      
    </Routes>
  </BrowserRouter>
    
     
    </>
  );
}

export default App;
