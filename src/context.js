import { createContext } from "react"

export const userContextDefault = {
  user: null,
  setUser: () => {},

}


export const UserContext = createContext(userContextDefault)


