{
  /*导入基础部分 */
}
import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
{
  /*导入灯箱 */
}
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
{
  /*导入图片数据 和 本组件样式 */
}
import datas from "../json/photos.json";
import "./flow.scss";

{
  /*灯箱和销毁 */
}
export const Flow = () => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="viewer"]', {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="waterfall">
      {datas.map((item) => (
        <LazyLoad height={605} key={item.id}>
          <div className="content" key={item.id}>
            <a className="imgdiv" data-fancybox="viewer" href={item.img}>
              <img src={item.img} className="waterfall-image" />
            </a>
          </div>
        </LazyLoad>
      ))}
    </div>
  );
};
