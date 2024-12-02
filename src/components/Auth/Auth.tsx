//import React, { useState } from "react";
import "./Auth.css";
// import CustomInputLogin from "./CustomInputLogin/CustomInputLogin";
// import { ReactComponent as EmailSvg } from "../../assets/icons/email.svg";
// import { ReactComponent as PasswordSvg } from "../../assets/icons/password.svg";
// import { ReactComponent as LogoSvg } from "../../assets/icons/logo.svg";
import Logo from "../../assets/images/logo.png";
import authT from "../../assets/images/authText.png";

export default function Auth() {
  return (
    <div className="mainAuth">
      <img src={Logo}  width="295" height="120.55"></img>
      <p className='nameAuth'>Найди своего <p className="nameAuth">идеального соседа</p></p>
      <img src={authT}  width="331" height="370"></img>
      <div className="AuthDown">
        <p className='OpisAuth'>Нажимая на кнопку "Начать", вы соглашаетесь с</p>
        
        <div className="texti">
          <a href='https://dev.vk.com/ru/user-agreement' className="Link">
              <p className='OpisAuth'>правилами использования сервиса</p>
          </a>
          <div className='OpisAuth'>и</div>
          <a href='https://dev.vk.com/ru/privacy-policy' className="Link">
              <div className='OpisAuth'>правилами защиты</div>
          </a>
        </div>

        <a href='https://dev.vk.com/ru/privacy-policy' className="Link">
            <p className='OpisAuth'>информации о пользователях сервиса</p>
        </a>
        <button className='AuthButton'>Начать</button>
      </div>
    </div>
  );
};