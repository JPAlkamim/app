import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { NativeBaseProvider } from 'native-base'
import Home from '../screens/Home/Home'
import Login from '../screens/Login/Login'

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
}

export type StackType = NativeStackNavigationProp<RootStackParamList>;

export default function Routes() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}