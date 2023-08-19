import { Box, HStack, StatusBar } from 'native-base'
import { View, Text } from 'react-native'
import StatusBarCustom from '../components/StatusBarCustom'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Header() {
  return (
    <>
      <StatusBarCustom backgroundColor='#0e7490' barStyle='dark-content' />
    </>
  )
}