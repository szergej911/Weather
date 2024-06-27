import { FC } from "react";

import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
