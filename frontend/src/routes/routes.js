//ESTE VA GESTIONAR y COMBINAR LAS RUTAS
import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";
//no es necesario poner llaves porque esta exportado por default
import { BasicLayout } from "../layouts";
import { Error404 } from "../pages";
const routes = [
  ...routesAdmin,
  ...routesClient,
  {
    layout: BasicLayout,
    component: Error404,
  },
];
export default routes;
