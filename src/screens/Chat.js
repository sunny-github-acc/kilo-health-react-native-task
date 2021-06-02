import React, { useState } from "react"
import { useEffect } from "react"
import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { API } from "../api/api"
import Message from "../components/Message"

export default function Chat({ route }) {
  const { binId } = route.params
  const [message, setMessage] = useState("")
  const [conversation, setConversation] = useState()
  const [prevJSON, setPrevJSON] = useState()

  const handleGetConversation = ({ id }) => {
    let req = new XMLHttpRequest()

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        let result = JSON.parse(req.responseText).record
        setConversation(Object.entries(result))
        setPrevJSON(JSON.stringify(result))
      }
    }

    req.open("GET", "https://api.jsonbin.io/v3/b/" + id + "/latest", true)
    req.setRequestHeader("X-Master-Key", API)
    req.send()
  }

  const handleUpdateConversation = () => {
    setMessage("")
    let req = new XMLHttpRequest()
    let prevJSONValue = prevJSON.substring(1).slice(0, -1)
    let JSONText = `{"text${new Date()
      .toString()
      .substring(4, 25)
      .replace(/[:,\s]/g, "")}":"${message}",${prevJSONValue}}`

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        handleGetConversation({ id: binId })
      }
    }
    req.open("PUT", "https://api.jsonbin.io/v3/b/" + binId, true)
    req.setRequestHeader("Content-Type", "application/json")
    req.setRequestHeader("X-Master-Key", API)
    req.send(JSONText)
  }

  useEffect(() => {
    if (!conversation) handleGetConversation({ id: binId })
  })

  return (
    <TouchableWithoutFeedback
      accessible={false}
      onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <FlatList
          inverted
          contentContainerStyle={styles.flatList}
          data={conversation}
          renderItem={({ item }) => <Message item={item} id={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={e => setMessage(e)}
            onSubmitEditing={handleUpdateConversation}
            value={message}
            placeholder="Aa"
            multiline
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleUpdateConversation}>
            <MaterialCommunityIcons size={30} color="#26CABF" name="send" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    padding: 20,
  },
  flatList: {
    justifyContent: "flex-start",
    paddingVertical: 20,
  },
  inputContainer: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    paddingHorizontal: 25,
    marginLeft: 10,
    borderRadius: 30,
    backgroundColor: "ghostwhite",
    flex: 1,
    fontSize: 20,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  iconContainer: { paddingLeft: 20 },
})
