import { Routes, Route } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";

function App() {
  return (
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      <Route
        basename={process.env.PUBLIC_URL}
        path="/detail/:id"
        element={<Detail />}
      />
    </Routes>
  );
}
export default App;
