{
  /*导入基础部分 */
}
import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
{
  /*导入本组件样式 */
}
import "./main.scss";
{
  /*导入组件 */
}
import { App } from "./App.jsx";
import { Photos } from "./components/photos/Photos.jsx";
import { Flow } from "./components/flow/Flow.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Suspense fallback={<div>加载中...</div>}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Photos />}></Route>
          <Route path="/flow" element={<Flow />}></Route>
        </Route>
      </Routes>
    </Suspense>
  </HashRouter>
);
