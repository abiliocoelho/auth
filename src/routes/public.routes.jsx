import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignIn } from '../pages/SignIn'

const { Navigator, Screen } = createNativeStackNavigator()

export function PublicRoutes(){
  return (
    <Navigator>
      <Screen name="signin" component={SignIn}/>
    </Navigator>
  )
}