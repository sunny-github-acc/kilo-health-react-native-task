import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { globalStyles } from "../styles/globalStyles"

const ListItem = ({
  item,

  //   deleteItem,
  //   editItem,
  //   isEditing,
  //   editItemDetail,
  //   saveEditItem,
  //   handleEditChange,
  //   itemChecked,
  //   checkedItems,
}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: item.photo }} style={styles.photo} />
        <View style={{ paddingLeft: 10 }}>
          <Text>
            {item.first} {item.last}
          </Text>
          <Text style={{ color: "grey" }}>Offline</Text>
        </View>
      </View>
      <MaterialCommunityIcons
        name="chat-outline"
        size={30}
        color={globalStyles.primaryColor.color}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    paddingHorizontal: 25,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
  },
  checkedItemText: {
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "green",
  },
  iconView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 70,
  },
  editItemInput: {
    padding: 0,
    fontSize: 18,
  },
  photo: { width: 40, height: 40, borderRadius: 50 },
})

export default ListItem
