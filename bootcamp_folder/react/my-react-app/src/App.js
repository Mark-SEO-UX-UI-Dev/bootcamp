import Election from "./Election-react/Election";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Routes>
      <Route
        path="/election"
        element={
          <>
            <Election />
          </>
        }
      />
    </Routes>
  );
}

export default App;
