import React, { useState } from "react"
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import AppContext from "./src/global/context"
import MainTab from "./src/navigation/MainTab"
import AuthStack from "./src/navigation/AuthStack"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [friends, setFriends] = useState([
    {
      id: 1,
      first: "Alice",
      last: "Cooper",
      photo: "https://randomuser.me/api/portraits/med/men/13.jpg",
    },
    {
      id: 2,
      first: "Johny",
      last: "Cage",
      photo: "https://randomuser.me/api/portraits/med/men/69.jpg",
    },
    {
      id: 3,
      first: "Taras",
      last: "Shevchenko",
      photo: "https://randomuser.me/api/portraits/med/men/42.jpg",
    },
    {
      id: 11,
      first: "Alice",
      last: "Cooper",
      photo: "https://randomuser.me/api/portraits/med/men/13.jpg",
    },
    {
      id: 21,
      first: "Johny",
      last: "Cage",
      photo: "https://randomuser.me/api/portraits/med/men/69.jpg",
    },
    {
      id: 31,
      first: "Taras",
      last: "Shevchenko",
      photo: "https://randomuser.me/api/portraits/med/men/42.jpg",
    },
  ])

  const handleIsLoggedIn = e => {
    setIsLoggedIn(e)
  }

  const authInfo = {
    isLoggedIn,
    handleIsLoggedIn,
    friends,
    setFriends,
  }

  return (
    <AppContext.Provider value={authInfo}>
      <NavigationContainer>
        {isLoggedIn ? <MainTab /> : <AuthStack />}
      </NavigationContainer>
    </AppContext.Provider>
  )
}
