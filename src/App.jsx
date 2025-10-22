import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import MainPage from "./pages/MainPage.jsx";
import ImageDetail from "./pages/ImageDetail.jsx";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"element={<MainPage/>}/>
        <Route path="/image/:id"element={<ImageDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App
