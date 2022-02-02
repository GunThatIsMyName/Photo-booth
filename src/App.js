import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gifs from "./components/Gifs";
import Main from "./components/Main";
import Photos from "./components/Photos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="" element={<Gifs />} />
          <Route path="photo" element={<Photos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
