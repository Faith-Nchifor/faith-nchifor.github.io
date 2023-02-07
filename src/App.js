import { Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Projects from "./pages/projects";
import TopNav from './components/nav'

function App() {
  return (
    
      <div>
        <TopNav/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
   
  );
}

export default App;
