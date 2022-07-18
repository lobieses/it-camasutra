import React from "react";
import preloader from "../../../assets/images/preloader.svg";
import style from "./preloader.module.css";

const SideBar = ({ tryVPN = false }) => {
  return (
    <div className={style.preloader}>
      <div className={style.tryVPN}>
        <span className={tryVPN && style.active}>
          You can try turn on VPN if you are in Ukraine!
        </span>
      </div>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default SideBar;
