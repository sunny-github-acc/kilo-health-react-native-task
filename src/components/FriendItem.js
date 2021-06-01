import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { globalStyles } from "../styles/globalStyles"

const ListItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() =>
        navigation.push("Chat", {
          id: item.id,
          first: item.first,
          last: item.last,
        })
      }>
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
  photo: { width: 40, height: 40, borderRadius: 50 },
})

export default ListItem
