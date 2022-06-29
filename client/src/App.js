import React, { setGlobal } from "reactn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import NoPage from "./pages/NoPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Setting the initial state
 */
setGlobal({
  userList: [],
  albumList: [],
  photoList: [],
  albumPageNumber: 0,
  albumPageSize: 20,
  totalAlbums: 100,
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="/album/:id" element={<Photos />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
