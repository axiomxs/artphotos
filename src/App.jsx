{
  /*导入基础部分 */
}
import { React } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
{
  /*导入本组件样式和图标样式 */
}
import "./app.scss";
import "./components/photos/icon.scss";
{
  /*导入组件 */
}
import { ToggleIcon } from "./components/toggleicon/ToggleIcon";
{
  /*遍历生成导航栏 */
}
export const App = () => {
  const [highlightedTag, setHighlightedTag] = useState(1);
  const tags = [
    {
      id: 1,
      tag: "精选",
      link: "#",
    },
    {
      id: 2,
      tag: "最新",
      link: "#",
    },
    {
      id: 3,
      tag: "最新",
      link: "#",
    },
  ];
  return (
    <div>
      <div className="home">
        <div className="backgroundblur">
          <div className="wrapper">
            <div className="header-items">
              {tags.map((item) => (
                <ul key={item.id}>
                  <li key={item.id}>
                    <a
                      href={item.link}
                      style={{
                        color: highlightedTag === item.id ? "black" : "#d0d0d0",
                      }}
                      onClick={() => setHighlightedTag(item.id)}
                    >
                      {item.tag}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
            <ul className="header-tags">
              <ToggleIcon />
            </ul>
          </div>
        </div>
        <div></div>
        {/*子路由组件插槽 */}
        <Outlet />
      </div>
    </div>
  );
};
