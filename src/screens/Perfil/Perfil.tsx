import { SafeAreaView } from "react-native-safe-area-context"
import { Text, StyleSheet } from "react-native"
import Header from "../../components/Header"

export default function Perfil() {
  return (
    <>
      <Header />
      <SafeAreaView style={styles.container}>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbf4ff'
  }
})