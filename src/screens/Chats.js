import React, { useContext } from "react"
import { FlatList, View } from "react-native"
import ListItem from "../components/FriendItem"
import AppContext from "../global/context"

export default function Profile({ navigation }) {
  const myContext = useContext(AppContext)

  return (
    <View style={{ paddingVertical: 5 }}>
      <FlatList
        data={myContext.friends}
        renderItem={({ item }) => (
          <ListItem item={item} key={item.id} navigation={navigation} />
        )}
      />
    </View>
  )
}
