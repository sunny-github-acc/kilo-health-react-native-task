import React from "react"
import { Button, Text, View } from "react-native"

export default function Profile() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login</Text>
      <Button title="Login" onPress={() => navigation.push("Details")} />
    </View>
    // <Tab.Navigator>
    //   <Tab.Screen name="Feed" component={Feed} />
    //   <Tab.Screen name="Messages" component={Messages} />
    // </Tab.Navigator>
  )
}
