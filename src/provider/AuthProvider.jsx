import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isToggle, setIsToggle] = useState(false);

  const handleAddOrderToggle = () => {
    setIsToggle(!isToggle);
  };
  const userInfo = { user: "User Name", handleAddOrderToggle, isToggle };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
