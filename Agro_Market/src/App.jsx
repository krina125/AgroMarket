import { RouterProvider } from "react-router-dom";
import routes from "./routes"; // Import your routes
import "./index.css";
function App() {
  return(
  <>
    <RouterProvider router={routes} />
    </>
 
  ) 
}

export default App;
