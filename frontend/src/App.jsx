import { Navigation } from "./routes";

import { ClientLayout } from "./layouts";
const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">Hola mundo a todos los bolas y a mi </h1>
      <Navigation />
      <ClientLayout />
    </div>
  );
};

export default App;
