import React, { useState } from "react";
import "./Auth.css";
import CustomInputLogin from "../CustomInputLogin/CustomInputLogin";
import { ReactComponent as EmailSvg } from "../../assets/icons/email.svg";
import { ReactComponent as PasswordSvg } from "../../assets/icons/password.svg";
import { ReactComponent as LogoSvg } from "../../assets/icons/logo.svg";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <div className="logo-wrapper">
        <LogoSvg className="logo" />
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="email-input">
            <EmailSvg />
            <CustomInputLogin
              type="email"
              value={email}
              placeholder="Логин"
              onChange={setEmail}
            />
          </div>

          <div className="password-input">
            <PasswordSvg />
            <CustomInputLogin
              type="password"
              value={password}
              placeholder="Пароль"
              onChange={setPassword}
            />
          </div>

          <a href="#" className="forgot-password">
            Забыли пароль?
          </a>

          <button type="submit" className="login">
            Отправить
          </button>

          <div
            style={{
              textAlign: "center",
            }}
          >
            <a href="#" className="registration">
              Зарегестрироватся
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
