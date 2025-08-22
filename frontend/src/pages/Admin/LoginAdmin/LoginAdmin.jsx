import "./LoginAdmin.scss";
import { LoginForm } from "../../../components/admin";
export const LoginAdmin = () => {
  return (
    <div className="login-admin">
      <div className="login-admin__container">
        <h1>Entrar al Panel</h1>
        <LoginForm />
      </div>
    </div>
  );
};
