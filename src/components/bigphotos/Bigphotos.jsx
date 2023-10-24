{
  /*导入基础部分 */
}
import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";
{
  /*导入本组件样式 和 图标 */
}
import "./bigphotos.scss";
{
  /*导入灯箱 */
}
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
{
  /*导入图片数据 */
}
import datas from "../json/photos.json";
{
  /*灯箱，销毁 */
}
export const Bigphotos = () => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="viewer"]', {});
    return () => {
      Fancybox.destroy();
    };
  }, []);
  {
    /*懒加载：到固定高度，显示一页，加载下一页 */
  }
  return (
    <div className="photos">
      {datas.map((item) => (
        <LazyLoad height={605} key={item.id}>
          <section>
            <div className="content">
              <a data-fancybox="viewer" href={item.img}>
                <img src={item.img} />
              </a>
              <div className="info">
                <ul className="items">
                  <li className="aperture">
                    <h5>参数</h5>
                    <ul className="aperture-items">
                      <li className="aperture-items">
                        <i className="iconfont icon-yanjing"></i>
                        <span>{item.aperture}</span>
                      </li>
                      <li className="aperture-items">
                        <i className="iconfont icon-pengyouquan"></i>
                        <span>{item.shutter}</span>
                      </li>
                      <li className="aperture-items">
                        <i className="iconfont icon-jishiqi"></i>
                        <span>{item.length}</span>
                      </li>
                      <li className="aperture-items">
                        <i className="iconfont icon-iso"></i>
                        <span>{item.iso}</span>
                      </li>
                    </ul>
                  </li>
                  <li className="place">
                    <h5>地点</h5>
                    <span>{item.place}</span>
                  </li>
                  <li className="time">
                    <h5>时间</h5>
                    <span>{item.time}</span>
                  </li>
                  <li className="equipment">
                    <h5>设备</h5>
                    <span>{item.equipment}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </LazyLoad>
      ))}
    </div>
  );
};
