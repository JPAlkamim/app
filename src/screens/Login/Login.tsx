import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar, StyleSheet } from 'react-native'
import { VStack, Text, Center } from 'native-base'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'

import { StackType } from '../../routes/Index'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


type FormDataProps = {
  usuario: string
  senha: string
}

export default function Login() {
  const navigation = useNavigation<StackType>()

  const objectLogin: FormDataProps = {
    usuario: 'JPAlkamim',
    senha: '123456'
  }
  const { control, formState: { errors }, handleSubmit } = useForm<FormDataProps>()

  const handleLogin = (data: FormDataProps) => {
    if (data.usuario === objectLogin.usuario && data.senha === objectLogin.senha) {
      navigation.navigate('Home')
    } else {
      alert('Usuário ou senha incorretos')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <VStack px={10}>
        <StatusBar barStyle="dark-content" />
        <Center height={'full'}>
          <Controller
            control={control}
            name="usuario"
            rules={{
              required: 'Informe o Nome'
            }}
            render={({ field: { onChange } }) => (
              <Input
                placeholder='Usuário'
                onChangeText={onChange}
                mb={2}
              />
            )}
          />

          <Controller
            control={control}
            name="senha"
            rules={{
              required: 'Informe a Senha'
            }}
            render={({ field: { onChange } }) => (
              <Input
                placeholder='Senha'
                secureTextEntry={true}
                onChangeText={onChange}
              />
            )}
          />

          <Button
            title='Entrar'

            mt={10}
            onPress={handleSubmit(handleLogin)}
          />
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