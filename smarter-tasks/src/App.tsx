// src/App.tsx
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Signin from "./pages/Signin";
import NotFound from "./pages/Notfound"; // Import NotFound page
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "tasks",
        element: <TaskListPage />,
      },
      {
        path: "tasks/:id",
        element: <TaskDetailsPage />,
      },
    ],
  },
  {
    path: "/notfound",
    element: <NotFound />, // Route for NotFound page
  },
  {
    path: "*",
    element: <Navigate to="/notfound" replace />, // Redirect all other routes to NotFound
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
