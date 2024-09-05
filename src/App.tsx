import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { ErrorScreen } from "./pages/ErrorScreen";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorScreen />,
    },
    {
      path: "/error",
      element: <ErrorScreen />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
