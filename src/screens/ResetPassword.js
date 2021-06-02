import React from "react"
import { Button, Text, View } from "react-native"

export default function ResetPassword({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Reset Password"
        onPress={() => navigation.replace("Login")}
      />
    </View>
  )
}
