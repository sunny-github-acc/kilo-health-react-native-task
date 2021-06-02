import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Message = ({ item, photo }) => {
  let isUser = item[0].includes("userText")

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.containerChild,
          !isUser ? styles.alignLeft : styles.alignRight,
        ]}>
        {!photo && isUser && (
          <MaterialCommunityIcons
            style={styles.icon}
            size={25}
            color="#26CABF"
            name="account"
          />
        )}
        {photo && isUser && (
          <Image source={{ uri: photo }} style={styles.image} />
        )}
        <Text
          style={[
            styles.text,
            !isUser ? styles.textAlignRight : styles.textAlignLeft,
          ]}>
          {item[1]}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  containerChild: {
    marginHorizontal: 10,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: "95%",
  },
  alignLeft: {
    justifyContent: "flex-end",
    backgroundColor: "aliceblue",
  },
  alignRight: {
    justifyContent: "flex-start",
    backgroundColor: "lightblue",
  },
  text: {
    fontSize: 18,
    padding: 5,
    paddingHorizontal: 15,
  },
  textAlignRight: { textAlign: "right" },
  textAlignLeft: { textAlign: "left" },
  icon: { paddingVertical: 5 },
  image: { width: 40, height: 40, borderRadius: 50 },
})

export default Message
