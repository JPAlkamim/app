import React, { useEffect } from 'react'
import { View, Dimensions } from 'react-native'
import Api from '../../services/api'
import { HStack, VStack } from 'native-base'
import Header from '../../components/Header'
import { BoardGameView } from './BoardGameView'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { FlashList } from '@shopify/flash-list'

type FilterProps = {

}

export default function BoardGame() {
  const [response, setResponse] = React.useState<any>('')
  const [search, setSearch] = React.useState<string>('0')
  const [loading, setLoading] = React.useState<boolean>(true)
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    handleSearchApi()
  }, [])

  const handleSearchApi = async () => {
    await Api.get('search?order_by=rank&limit=10&skip=' + search + '&client_id=wv5Ijw7bki')
      .then(response => {
        setResponse(response.data.games)
      })
    setLoading(false)
  }

  const handleSearch = async () => {
    setLoading(true)
    const nextSearch = parseInt(search) + 10
    await Api.get('search?order_by=rank&limit=10&skip=' + String(nextSearch) + '&client_id=wv5Ijw7bki')
      .then(response => {
        setResponse((prevGames: any) => [...prevGames, ...response.data.games])
      })
    setSearch(String(nextSearch))
    setLoading(false)
  }

  const handleFilter = async (filter: string) => {
    setLoading(true)
    await Api.get('search?order_by=' + filter + '&limit=10&skip=' + search + '&client_id=wv5Ijw7bki')
      .then(response => {
        setResponse(response.data.games)
      })
    setLoading(false)
  }

  const renderItem = (item: any) => {
    return (
      <HStack w={'96%'} p={2} m={2} backgroundColor={'white'} borderRadius={10}>
        <BoardGameView item={item} />
      </HStack>
    )
  }

  const loadBlue = () => {
    return (
      <View style={{ position: 'absolute', left: (windowWidth - 30) / 2, top: (windowHeight - 200) / 2 }}>
        {loading && response.length === 0 ? <ActivityIndicator size="large" color="#0e7490" /> : null}
      </View>
    )
  }

  const getShowMore = () => {
    if (response.length > 0) {
      return (
        <VStack justifyContent="center" alignItems="center" flex={1} position={'relative'} bottom={5}>
          {loading ? <ActivityIndicator color="black" size={20} /> : null}
        </VStack>
      )
    }
  }

  return (
    <>
      <Header color={'#0891b2'} isListBoardGame={true} filter={handleFilter} />
      <HStack backgroundColor={'info.100'} h={'89%'}>
        {loadBlue()}
        <FlashList
          data={response}
          renderItem={({ item }) => renderItem(item)}
          estimatedItemSize={170}
          onEndReached={handleSearch}
          onEndReachedThreshold={0.1}
        />
      </HStack>
      {getShowMore()}
    </>
  )
}