import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../hooks/AuthContext'
import { AppRoutes } from './app.routes'
import { PublicRoutes } from './public.routes'

export function Routes() {
  const {user} = useAuth()
  return (
    <NavigationContainer>
      {
        user?.id ? <AppRoutes/> : <PublicRoutes/>
      }
    </NavigationContainer>
  )
}