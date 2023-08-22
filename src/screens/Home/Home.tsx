import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { StackType } from '../../routes/Index'
import { Center, StatusBar, VStack } from 'native-base'

export default function Home() {
  const navigation = useNavigation<StackType>()
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <Center height={'full'}>
        <VStack width={'60%'} height={'50%'}>
          <Button
            title='Jogos de Tabuleiro'
            mb={3}
            onPress={() => navigation.navigate('BoardGame')}
          />
          <Button
            title='Perfil'
            mb={3}
            onPress={() => navigation.navigate('Perfil')}
          />
          <Button title='Configurações' mb={3} />
          <Button
            title='Sair'
            onPress={() => navigation.navigate('Login')}
          />
        </VStack>
      </Center>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbf4ff'
  }
})