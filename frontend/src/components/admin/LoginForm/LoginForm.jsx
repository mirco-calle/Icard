import "./LoginForm.scss";
import { Button, Form } from "semantic-ui-react";
export const LoginForm = () => {
  return (
    <Form className="login-form-admin">
      <Form.Input name="email" placeholder="Correo electrónico" />
      <Form.Input name="password" placeholder="Contraseña" type="password" />
      <Button type="submit" primary fluid content="Iniciar Sesion" />
    </Form>
  );
};
