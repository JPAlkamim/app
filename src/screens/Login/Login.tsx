import { useNavigation } from '@react-navigation/native'
import { StackType } from '../../routes/Index'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar, StyleSheet } from 'react-native'
import { VStack, Text, Center } from 'native-base'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export default function Login() {
  const navigation = useNavigation<StackType>()

  return (
    <SafeAreaView style={styles.container}>
      <VStack px={10}>
        <StatusBar barStyle="dark-content" />
        <Center mt={'50%'}>
          <Input placeholder='Usuário' />
          <Input placeholder='Senha' />
          <Button title='Entrar' />
        </Center>
      </VStack>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a1a1aa",
  }
})