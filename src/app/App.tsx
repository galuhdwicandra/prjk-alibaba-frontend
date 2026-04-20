import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { useCurrentUser } from "@/modules/auth/hooks/useCurrentUser";

export default function App() {
  useCurrentUser();

  return <RouterProvider router={router} />;
}