import React from "react"
import { Button, Text, View } from "react-native"

export default function SignUpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign Up?</Text>
      <Button title="Login" onPress={() => navigation.push("Login")} />
    </View>
  )
}
