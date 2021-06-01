import React from "react"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import Chat from "../screens/Chats"
import Profile from "../screens/Profile"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { globalStyles } from "../styles/globalStyles"
import CustomButton from "../shared/button"

const Tab = createMaterialBottomTabNavigator()

export default function MainTab() {
  const ProfileStack = createStackNavigator()
  const ChatStack = createStackNavigator()

  function ProfileStackScreen() {
    return (
      <ProfileStack.Navigator
        screenOptions={{
          headerStyle: globalStyles.primaryBackground,
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}>
        <ProfileStack.Screen name="Profile" component={Profile} />
      </ProfileStack.Navigator>
    )
  }

  function ChatStackScreen() {
    const icon = {
      name: "chat-plus-outline",
      color: "white",
      size: 30,
    }

    return (
      <ChatStack.Navigator
        screenOptions={{
          headerStyle: globalStyles.primaryBackground,
          headerTintColor: "white",
        }}>
        <ChatStack.Screen
          name="Chats"
          component={Chat}
          options={{
            headerTitle: "Friends",
            headerRight: () => (
              <CustomButton
                onPress={() => alert("This is a button!")}
                icon={icon}
                customStyles={[
                  globalStyles.primaryBackground,
                  { paddingRight: 10 },
                ]}
              />
            ),
          }}
        />
      </ChatStack.Navigator>
    )
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName

          if (route.name === "Chats") {
            iconName = "chat"
          } else {
            iconName = "account"
          }

          return (
            <MaterialCommunityIcons
              style={{
                height: 30,
                width: 30,
              }}
              name={iconName}
              size={30}
              color={color}
            />
          )
        },
      })}
      labeled={false}
      activeColor="white"
      inactiveColor="grey"
      barStyle={{
        backgroundColor: globalStyles.primaryColorLighten.color,
      }}>
      <Tab.Screen name="Chats" component={ChatStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  )
}
