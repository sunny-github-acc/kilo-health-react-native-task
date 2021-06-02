import React, { useContext, useState } from "react"
import { View, StyleSheet, TextInput, Text } from "react-native"
import AppContext from "../global/context"
import CustomButton from "../shared/button"

export default function EditPhone({ navigation }) {
  const myContext = useContext(AppContext)
  const [input, setInput] = useState(myContext.userInfo.phone)

  const handleSubmit = () => {
    myContext.handlePhone(input)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>LT +370</Text>
        <TextInput
          style={[styles.input, styles.inputMain]}
          onChangeText={e => setInput(e)}
          value={input}
          maxLength={255}
          placeholder="Phone"
          onSubmitEditing={handleSubmit}
          keyboardType="numeric"
          autoFocus
        />
      </View>
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
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    backgroundColor: "ghostwhite",
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    marginHorizontal: "5%",
  },
  input: {
    fontSize: 20,
    padding: 15,
  },
  inputText: {
    borderRightColor: "gainsboro",
    borderRightWidth: 2,
    fontSize: 20,
    color: "darkgrey",
    paddingHorizontal: 10,
  },
})
