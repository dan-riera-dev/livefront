import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/HomeScreen";
import { ErrorScreen } from "./pages/ErrorScreen";
import { FactionScreen } from "./pages/FactionScreen";
import { CharacterDetail } from "./pages/CharacterDetailScreen";
import { LoadingScreen } from "./pages/LoadingScreen";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorScreen />,
    },
    {
      path: "/faction",
      element: <FactionScreen />,
    },
    {
      path: "/details",
      element: <CharacterDetail />,
    },
    {
      path: "/loading",
      element: <LoadingScreen />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
