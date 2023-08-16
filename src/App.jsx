import "./App.css";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import ChatBox from "./components/ChatBox/ChatBox";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: (
        <>
          <HomePage />
          <ChatBox />
        </>
      ),
    },
  ]);
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
