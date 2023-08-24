import { useState, useEffect } from 'react'
import { View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import Api from '../../services/api'
import { HStack, VStack, Text } from 'native-base'
import Header from '../../components/Header'
import { BoardGameView } from './BoardGameView'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { FlashList } from '@shopify/flash-list'
import BoardGameService from './services/BoardGameService'
import * as Animatable from 'react-native-animatable'

export default function BoardGame() {
  const [response, setResponse] = useState<any>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [filter, setFilter] = useState<string>('')
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    handleSearchApi()
  }, [])

  const handleSearchApi = async () => {
    await Api.get(`search?order_by=rank&limit=4&client_id=wv5Ijw7bki`)
      .then(response => {
        setResponse(response.data.games)
      })
    setLoading(false)
  }

  const handleSearch = async (page: string) => {
    setLoading(true)
    if (filter === '') {
      await Api.get(`search?order_by=rank&limit=4&skip=${page}&client_id=wv5Ijw7bki`)
        .then(response => {
          setResponse(response.data.games)
        })
    } else {
      await Api.get(`search?order_by=${filter}&limit=4&skip=${page}&client_id=wv5Ijw7bki`)
        .then(response => {
          setResponse(response.data.games)
        })
    }
    setLoading(false)
  }

  const handleFilter = async (filter: string) => {
    setFilter(filter)
    await Api.get(`search?order_by=${filter}&limit=4&&client_id=wv5Ijw7bki`)
      .then(response => {
        setResponse(response.data.games)
      })
  }

  const renderItem = (item: any) => {
    return (
      <HStack w={'96%'} p={2} m={2} backgroundColor={'white'} borderRadius={10}>
        <BoardGameView item={item} />
      </HStack>
    )
  }

  const setPage = (page: string) => {
    handleSearch(page)
  }

  const renderFooterPage = () => {
    if (!loading) {
      return (
        <HStack justifyContent={'center'} >
          <TouchableOpacity onPress={() => setPage('0')}>
            <Text p={5} fontSize={24}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPage('4')}>
            <Text p={5} fontSize={24}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPage('8')}>
            <Text p={5} fontSize={24}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPage('12')}>
            <Text p={5} fontSize={24}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPage('16')}>
            <Text p={5} fontSize={24}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPage('20')}>
            <Text p={5} fontSize={24}>5</Text>
          </TouchableOpacity>
        </HStack>
      )
    } else {
      return (
        <View>
          <ActivityIndicator size="large" color='#0891b2' />
        </View>
      )
    }
  }

  return (
    <>
      <Header color={'#0891b2'} isListBoardGame={true} filter={handleFilter} />
      <HStack backgroundColor={'info.100'} height={'100%'} maxHeight={windowHeight - 100}>
        <FlashList
          data={response}
          renderItem={({ item }) => renderItem(item)}
          estimatedItemSize={170}
          ListFooterComponent={renderFooterPage()}
        />
      </HStack>
    </>
  )
}