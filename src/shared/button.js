import React from "react"
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"
import { globalStyles } from "../styles/globalStyles"
import LinearGradient from "react-native-linear-gradient"

export default function CustomButton({
  isDisabled,
  text,
  onPress,
  customStyles,
}) {
  return (
    <TouchableOpacity disabled={isDisabled} onPress={onPress}>
      <LinearGradient
        style={customStyles}
        colors={
          isDisabled
            ? ["silver", "gainsboro"]
            : [
                globalStyles.primaryColor.color,
                globalStyles.primaryColorLighten.color,
              ]
        }
        useAngle={true}
        angle={220}
        angleCenter={{ x: 0.2, y: 0.5 }}>
        <View style={[styles.button, customStyles]}>
          <Text style={[styles.buttonText, customStyles]}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  button: {
    borderRadius: 0,
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
})
