import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ExploreScreen from "./tuiter/explore";
import HomeScreen from "./tuiter/home";

import "./vendors/fontawesome/css/all.min.css";
import "./vendors/bootstrap/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="tuiter" element={<Tuiter />}>
            <Route index element={<HomeScreen />} />
            <Route path="explore" element={<ExploreScreen />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
