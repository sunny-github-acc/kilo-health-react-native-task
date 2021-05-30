import React, { useState } from "react"
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { userScreens, authScreens } from "./src/routes/route"

const Stack = createStackNavigator()

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#26CABF",
          },
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}>
        {Object.entries({
          ...(isLoggedIn ? userScreens : authScreens),
        }).map(([name, component]) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            // animationTypeForReplace={"pop"} or push
          />
        ))}

        {/* <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            title: "Chat",
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            title: "Login",
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
