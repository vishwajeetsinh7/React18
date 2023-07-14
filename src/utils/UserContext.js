import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "vish",
    email: "vish@gmail.com",
  },
});

UserContext.displayName = "UserContext-me-named-it";

export default UserContext;
