import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { NativeBaseProvider } from 'native-base'
import Home from '../screens/Home/Home'
import Login from '../screens/Login/Login'
import Perfil from '../screens/Perfil/Perfil'
import BoardGame from '../screens/BoardGame/BoardGame'

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Login: undefined
  Home: undefined
  Perfil: undefined
  BoardGame: undefined
}

export type StackType = NativeStackNavigationProp<RootStackParamList>;

export default function Routes() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
          <Stack.Screen name="BoardGame" component={BoardGame} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}