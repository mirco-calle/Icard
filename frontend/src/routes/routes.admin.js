//AQUI VA GESTIONAR LAS RUTAS DE LA PARTE DEL ADMINISTRADOR
import { AdminLayout } from "../layouts";
import { HomeAdmin } from "../pages/Admin";

const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: HomeAdmin,
    exact: true,
  },
];
export default routesAdmin;
