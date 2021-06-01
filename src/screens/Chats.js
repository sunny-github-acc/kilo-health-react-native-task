import React, { useContext } from "react"
import { Button, FlatList, Text, View } from "react-native"
import ListItem from "../components/ListItem"
import AppContext from "../global/context"

export default function Profile() {
  const myContext = useContext(AppContext)

  return (
    <View style={{ paddingVertical: 5 }}>
      <FlatList
        data={myContext.friends}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            key={item.id}
            // deleteItem={deleteFriend}
            // editItem={editFriend}
            // isEditing={editStatus}
            // saveEditItem={saveEditFriend}
            // editItemDetail={editItemDetail}
            // handleEditChange={handleEditChange}
            // itemChecked={itemChecked}
            // checkedItems={checkedItems}
          />
        )}
      />
    </View>
  )
}
