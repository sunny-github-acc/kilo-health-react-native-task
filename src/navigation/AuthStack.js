import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { authScreens } from "../routes/authRoute"
import { globalStyles } from "../styles/globalStyles"

const Stack = createStackNavigator()

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: globalStyles.primaryBackground,
        headerTitleAlign: "center",
        headerTintColor: "white",
      }}>
      {Object.entries({ ...authScreens }).map(([name, component]) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          // animationTypeForReplace={"pop"} or push
        />
      ))}
    </Stack.Navigator>
  )
}
