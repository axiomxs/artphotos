{
  /*导入基础部分 */
}
import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
{
  /*导入本组件样式 和 图标 */
}
import "./photos.scss";
import "./icon.scss";
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
  /*
const items = [
  {
    id: 1,
    img: "http://forevers.love/upload/WechatIMG816-ygul.webp",
    aperture: "f1.78",
    shutter: "1/164s",
    length: "24mm",
    iso: "64",
    time: "2023/7/12",
    equipment: "iphone 14 Pro Max",
    place: "中国 · 阿坝松潘县",
  },
  {
    id: 2,
    img: "https://forevers.love/upload/WechatIMG823.webp",
    aperture: "f1.78",
    shutter: "1/218s",
    length: "24mm",
    iso: "64",
    time: "2023/8/14",
    equipment: "iphone 14 Pro Max",
    place: "中国 · 九寨沟",
  },
  {
    id: 3,
    img: "http://forevers.love/upload/Mix_20221013_002847.webp",
    aperture: "f2.2",
    shutter: "1/1111s",
    length: "15mm",
    iso: "50",
    time: "2023/7/11",
    equipment: "Xiaomi 10",
    place: "中国 · 贵州",
  },
  {
    id: 4,
    img: "http://forevers.love/upload/Mix_20221013_003352.webp",
    aperture: "f1.79",
    shutter: "1/417s",
    length: "25mm",
    iso: "50",
    time: "2023/7/11",
    equipment: "Xiaomi 10",
    place: "中国 · 贵州",
  },
  {
    id: 5,
    img: "http://forevers.love/upload/Mix_20221013_122204.webp",
    aperture: "f1.79",
    shutter: "1/417s",
    length: "25mm",
    iso: "50",
    time: "2023/7/11",
    equipment: "Xiaomi 10",
    place: "中国 · 贵州",
  },
  {
    id: 6,
    img: "http://forevers.love/upload/WechatIMG804.webp",
    aperture: "f1.78",
    shutter: "1/228s",
    length: "44mm",
    iso: "80",
    time: "2023/8/12",
    equipment: "iphone 14 Pro Max",
    place: "中国 · 都江堰",
  },
  {
    id: 7,
    img: "http://forevers.love/upload/WechatIMG815.webp",
    aperture: "f2.8",
    shutter: "1/523s",
    length: "200mm",
    iso: "32",
    time: "2023/8/13",
    equipment: "iphone 14 Pro Max",
    place: "中国 · 阿坝松潘县",
  },
  {
    id: 8,
    img: "http://forevers.love/upload/WechatIMG808.webp",
    aperture: "f1.78",
    shutter: "1/121s",
    length: "45mm",
    iso: "200",
    time: "2023/8/12",
    equipment: "iphone 14 Pro Max",
    place: "中国 · 都江堰",
  },
  {
    id: 9,
    img: "http://forevers.love/upload/WechatIMG836.webp",
    aperture: "f2.2",
    shutter: "1/437s",
    length: "14mm",
    iso: "40",
    time: "2023/8/14",
    equipment: "iphone 14 Pro Max",
    place: "中国 · 九寨沟",
  },
  {
    id: 10,
    img: "http://forevers.love/upload/WechatIMG846.webp",
    aperture: "f2.8",
    shutter: "1/204s",
    length: "124mm",
    iso: "32",
    time: "2023/8/15",
    equipment: "iphone 14 Pro Max",
    place: "中国 · 黄龙",
  },
  {
    id: 11,
    img: "http://forevers.love/upload/WechatIMG848.webp",
    aperture: "f2.8",
    shutter: "1/334s",
    length: "121mm",
    iso: "32",
    time: "2023/8/15",
    equipment: "iphone 14 Pro Max",
    place: "中国 · 阿坝松潘县",
  },
  {
    id: 12,
    img: "http://forevers.love/upload/WechatIMG1358.webp",
    aperture: "f1.78",
    shutter: "1/1339s",
    length: "24mm",
    iso: "80",
    time: "2023/9/11",
    equipment: "iphone 14 Pro Max",
    place: "中国 · 防灾科技学院",
  },
  {
    id: 13,
    img: "http://forevers.love/upload/WechatIMG880.webp",
    aperture: "f1.78",
    shutter: "1/186s",
    length: "24mm",
    iso: "80",
    time: "2023/8/17",
    equipment: "iphone 14 Pro Max",
    place: "中国 · 峨眉山",
  },
];
*/
}
{
  /*灯箱，销毁 */
}
export const Photos = () => {
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
