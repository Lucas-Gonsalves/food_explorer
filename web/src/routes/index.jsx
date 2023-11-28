import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";


export function Routes() {
  const user = false;

  return(
    <BrowserRouter>
      {
        user ? "" : <AuthRoutes />
      }
    </BrowserRouter>
  );
};