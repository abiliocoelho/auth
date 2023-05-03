import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAuth } from '../hooks/AuthContext'

export function SignIn() {
  const {signIn} =  useAuth()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignIn</Text>
      <TouchableOpacity style={styles.button} onPress={()=> signIn(1,"Abilio")}>
        <Text style={styles.title}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:10
  },
  title: {
  fontSize:30
  },
  button: {
    height: 56,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0,0.3)',
    borderRadius: 6,
  }

})