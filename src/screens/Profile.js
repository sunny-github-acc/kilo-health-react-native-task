import React, { useState, useContext } from "react"
import { Button, Text, View } from "react-native"
import AppContext from "../global/context"
import CustomButton from "../shared/button"

export default function Profile() {
  const myContext = useContext(AppContext)

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ss</Text>
      <CustomButton
        text="Log out"
        onPress={() => myContext.handleIsLoggedIn(false)}
      />
    </View>

    // <Tab.Navigator>
    //   <Tab.Screen name="Feed" component={Feed} />
    //   <Tab.Screen name="Messages" component={Messages} />
    // </Tab.Navigator>
  )
}
