import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  async function signIn(id, name) {
    setUser({id, name})
  }
  async function signOut() {
    setUser(null)
  }
  return (
    <AuthContext.Provider value={{user,signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}


export function useAuth() {
  const context = useContext(AuthContext)
  return context
}