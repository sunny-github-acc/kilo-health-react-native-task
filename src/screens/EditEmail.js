import React, { useContext, useState } from "react"
import { View, StyleSheet, TextInput } from "react-native"
import AppContext from "../global/context"
import CustomButton from "../shared/button"

export default function EditEmail({ navigation }) {
  const myContext = useContext(AppContext)
  const [input, setInput] = useState(myContext.userInfo.email)

  const handleSubmit = () => {
    myContext.handleEmail(input)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={e => setInput(e)}
        value={input}
        maxLength={255}
        placeholder="Email"
        onSubmitEditing={handleSubmit}
        customStyles={{ marginHorizontal: 20 }}
        autoFocus
      />
      <CustomButton
        text="Update"
        onPress={handleSubmit}
        customStyles={{ marginHorizontal: 20 }}
      />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  input: {
    backgroundColor: "ghostwhite",
    margin: 20,
    fontSize: 20,
    padding: 15,
  },
})
