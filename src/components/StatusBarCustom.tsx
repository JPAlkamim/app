import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

type StatusBarCustomProps = {
  backgroundColor: string
  barStyle: 'light-content' | 'dark-content'
}

export default function StatusBarCustom({ backgroundColor, barStyle }: StatusBarCustomProps) {
  const insets = useSafeAreaInsets();


  return (
    <>
      <View style={{ height: insets.top, backgroundColor }}>
        <StatusBar barStyle={barStyle}
          backgroundColor={backgroundColor}
          animated={true}
        />
      </View>
    </>
  )
}