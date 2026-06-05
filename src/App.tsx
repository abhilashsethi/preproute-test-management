import { useEffect } from "react";
import { login } from "./api/auth.api";
import Login from "./pages/auth/Login";

function App() {
  useEffect(() => {
    const testLogin = async () => {
      try {
        const data = await login(
          "vedant-admin",
          "vedant123"
        );

        console.log("Login Success:", data);
      } catch (error) {
        console.error("Login Error:", error);
      }
    };

    testLogin();
  }, []);

  return <div><Login /></div>;
}

export default App;