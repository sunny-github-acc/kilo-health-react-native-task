import React, { useState } from "react"
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import AppContext from "./src/global/context"
import MainTab from "./src/navigation/MainTab"
import AuthStack from "./src/navigation/AuthStack"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [friends] = useState([
    {
      id: 1,
      first: "Alice",
      last: "Cooper",
      photo: "https://randomuser.me/api/portraits/med/men/13.jpg",
      binId: "60b6a97a2d9ed65a6a7c9a25",
    },
    {
      id: 2,
      first: "Johny",
      last: "Cage",
      photo: "https://randomuser.me/api/portraits/med/men/69.jpg",
      binId: "60b6d854b104de5acddd217f",
    },
    {
      id: 3,
      first: "Taras",
      last: "Shevchenko",
      photo: "https://randomuser.me/api/portraits/med/men/42.jpg",
      binId: "60b6d8ae2d9ed65a6a7cd1a4",
    },
  ])
  const [userInfo, setUserInfo] = useState({
    username: "Johny Bravo",
    email: "slick@mail.com",
  })

  const handleIsLoggedIn = e => {
    setIsLoggedIn(e)
  }

  const handleUsername = e => {
    setUserInfo(prev => {
      return { ...prev, username: e }
    })
  }

  const handleEmail = e => {
    setUserInfo(prev => {
      return { ...prev, email: e }
    })
  }

  const handlePhone = e => {
    setUserInfo(prev => {
      return { ...prev, phone: e }
    })
  }

  const authInfo = {
    isLoggedIn,
    handleIsLoggedIn,
    friends,
    userInfo,
    handleUsername,
    handleEmail,
    handlePhone,
  }

  return (
    <AppContext.Provider value={authInfo}>
      <NavigationContainer>
        {isLoggedIn ? <MainTab /> : <AuthStack />}
      </NavigationContainer>
    </AppContext.Provider>
  )
}
