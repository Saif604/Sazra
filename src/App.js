import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Dashboard, Home, SharedLayout } from "./pages";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
