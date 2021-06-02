import React, { useContext, useState } from "react"
import { View, StyleSheet, TextInput } from "react-native"
import AppContext from "../global/context"
import CustomButton from "../shared/button"

export default function EditUsername({ navigation }) {
  const myContext = useContext(AppContext)
  const [input, setInput] = useState(myContext.userInfo.username)

  const handleSubmit = () => {
    myContext.handleUsername(input)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={e => setInput(e)}
        value={input}
        maxLength={255}
        placeholder="Username"
        onSubmitEditing={handleSubmit}
        autoFocus
      />
      <CustomButton
        customStyles={{ marginHorizontal: 20 }}
        text="Update"
        onPress={handleSubmit}
      />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  input: {
    backgroundColor: "ghostwhite",
    margin: 20,
    fontSize: 20,
    padding: 15,
  },
})
