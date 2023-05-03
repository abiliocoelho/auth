import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../pages/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
  return (
    <Navigator>
      <Screen name="home" component={Home}/>
    </Navigator>
  )
}