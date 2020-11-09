import ButtonIcon from "core/components/button-icon";
import React from "react";
import { Link } from "react-router-dom";
import AuthCard from "../Card";
import "./styles.scss";

const Login = () => {
  return (
    <AuthCard title="login">
      <form className="login-form">
        <input
          type="email"
          className="form-control form-base margin-bottom-30"
          placeholder="Email"
        />
        <input
          type="password"
          className="form-control form-base"
          placeholder="Senha"
        />
        <Link to="/admin/auth/recover" className="login-link-recover">
          Esqueci a senha?
        </Link>
        <div className="login-button">
          <ButtonIcon text="Logar" />
        </div>
        <div className="text-center">
          <span className="not-registered">Não tem cadastro?</span>
          <Link to="/admin/auth/register" className="login-link-register">  
            CADASTRAR
          </Link>
        </div>
      </form>
    </AuthCard>
  );
};

export default Login;
