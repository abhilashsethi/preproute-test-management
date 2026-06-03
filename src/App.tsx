import { useEffect } from "react";
import { login } from "./api/auth.api";

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

  return <div>Preproute Test Management</div>;
}

export default App;