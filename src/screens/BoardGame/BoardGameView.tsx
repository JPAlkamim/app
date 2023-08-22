import React from 'react'
import { HStack, VStack, Text, Image } from 'native-base'

export function BoardGameView({ item }: any) {
  return (
    <HStack w={'96%'} p={2} m={2} backgroundColor={'white'} borderRadius={10}>
      <VStack justifyContent={'center'} w={'65%'} >
        <VStack>
          <HStack>
            <Text bold>Nome: </Text>
            <Text>{item.name}</Text>
          </HStack>
          <HStack>
            <Text bold>Jogadores: </Text>
            <Text>{item.min_players} a {item.max_players}</Text>
          </HStack>
          <HStack>
            <Text bold>Tempo de jogo: </Text>
            <Text>{item.min_playtime} a {item.max_playtime} minutos</Text>
          </HStack>
          <HStack>
            <Text bold>Preço: </Text>
            <Text>${item.price}</Text>
          </HStack>
        </VStack>
      </VStack>
      <VStack flex={1} ml={3}>
        <Image size={120} source={{ uri: item.thumb_url }} alt={'Imagem do jogo: ' + item.name} />
      </VStack>
    </HStack>
  )
}