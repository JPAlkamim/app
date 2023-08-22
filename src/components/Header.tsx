import { Box, HStack, HamburgerIcon, Menu, Pressable, StatusBar } from 'native-base'
import { View, Text } from 'react-native'
import StatusBarCustom from '../components/StatusBarCustom'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Filter from '../screens/BoardGame/Filter'

type Props = {
  color: string
  isListBoardGame?: boolean
  filter?: Function
}

export default function Header({ color, isListBoardGame, filter }: Props) {
  const navigation = useNavigation()

  const isBoardGame = () => {
    return isListBoardGame
  }

  const addFilter = (id: string) => {
    filter?.(id)
  }

  return (
    <>
      <StatusBarCustom backgroundColor={color} barStyle='dark-content' />
      <Box bg={color} height={50} width={'100%'}>
        <HStack>
          <HStack ml={4} mt={2}>
            <Ionicons name="arrow-back-sharp" size={24} color="black" onPress={
              () => navigation.goBack()
            } />
          </HStack>
          <HStack flex={1} justifyContent='center' mt={2} mr={isBoardGame() ? null : 4}>
            <Text style={{ color: '#fff', fontSize: 20 }}>BoardGame</Text>
          </HStack>
          <HStack mr={4} mt={2}>
            {isListBoardGame ? <Filter filter={addFilter} /> : null}
          </HStack>
        </HStack>
      </Box>
    </>
  )
}