import axios from "axios";
import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

function UserIsLoginProvider({ children }) {
  /**
   * Check if the user is Logged in
   */
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  /**
   * Get user Who Is Logged in
   */
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function GetUserWhoIsLogged() {
      const id = localStorage.getItem("userId");

      try {
        const res = await axios.get(
          `http://localhost:4500/api/user/getUserById/${id}`
        );
        if (res) {
          setUser(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    GetUserWhoIsLogged();
  }, []);

  const [user2, setUser2] = useState([]);

  async function GetUserFromHisId(id) {
    try {
      const result = await axios.get(
        `http://localhost:4500/api/user/getUserById/${id}`
      );
      if (result) {
        setUser2(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <UserContext.Provider
      value={{
        isLogin,
        setIsLogin,
        user,
        GetUserFromHisId,
        user2,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserIsLoginProvider };
