import React from "react"
import { Pressable } from "react-native"
import { Menu, HamburgerIcon } from "native-base"

type Props = {
  filter: Function
}

export default function Filter({ filter }: Props) {
  const handlePress = (id: string) => {
    filter(id)
  }

  return (
    <Menu w="190" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
        <HamburgerIcon size={7} color={'white'} />
      </Pressable>;
    }}>
      <Menu.Item onPress={() => handlePress('rank')}>Rank</Menu.Item>
      <Menu.Item onPress={() => handlePress('price')}>Preço (Dólar)</Menu.Item>
      <Menu.Item onPress={() => handlePress('discount')}>Desconto</Menu.Item>
      <Menu.Item onPress={() => handlePress('year_publisher')}>Ano Publicado</Menu.Item>
    </Menu>
  )
}