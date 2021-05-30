import React from "react"
import { TouchableOpacity, Text, View } from "react-native"
import { globalStyles } from "../styles/global"

export default function CustomButton({ text, onPress, customStyles }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[globalStyles.button, customStyles]}>
        <Text style={[globalStyles.buttonText, customStyles]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
