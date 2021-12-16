import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

function Logout() {
    const router = useRouter()
  useEffect(() => {
    const logout = async () => {
      try {
        await axios.get("/api/user/logout");
        router.push("/user/login")
      } catch (error) {
        Swal.fire({
          title: "error",
          text: "we have an error on server",
          icon: "error",
        });
      }
    };

    logout();
  }, []);
  return <></>;
}

export default Logout;
