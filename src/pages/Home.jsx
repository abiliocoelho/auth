import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAuth } from '../hooks/AuthContext'

export function Home() {
  const {signOut} = useAuth()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity style={styles.button} onPress={()=> signOut()}>
        <Text style={styles.title}>Sair</Text>
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