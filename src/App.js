import {HashRouter as Router, Routes, Route} from "react-router-dom";
import { Dashboard, Home, SharedLayout } from "./pages";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>
    </Router>
  );
}

export default App;
