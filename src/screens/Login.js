import React, { useState, useContext } from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native"
import CustomButton from "../shared/button"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Entypo from "react-native-vector-icons/Entypo"
import { globalStyles } from "../styles/globalStyles"
import AppContext from "../global/context"
import { useRef } from "react"
import { useEffect } from "react"

export default function Signup({ navigation }) {
  const myContext = useContext(AppContext)
  const [userLogin, setUserLogin] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const inputRef = useRef(null)
  const [isInfoEmpty, setIsInfoEmpty] = useState(true)

  const hadnlePasswordFocus = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    userLogin === "" || password === "" || password.length < 6
      ? setIsInfoEmpty(true)
      : setIsInfoEmpty(false)
  })

  useEffect(() => {
    inputRef.current.setNativeProps({
      style: { fontFamily: "roboto-regular" },
    })
  })

  return (
    <TouchableWithoutFeedback
      accessible={false}
      onPress={() => Keyboard.dismiss()}>
      <View style={[styles.container, globalStyles.secondaryBackground]}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons size={120} color="#26CABF" name="account" />
        </View>
        <View style={styles.main}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={e => setUserLogin(e)}
              value={userLogin}
              maxLength={255}
              placeholder="Phone number, email or username"
              onSubmitEditing={
                !isInfoEmpty
                  ? () => myContext.handleIsLoggedIn(true)
                  : hadnlePasswordFocus
              }
              autoFocus
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.inputPassword]}
              onChangeText={e => setPassword(e)}
              value={password}
              placeholder="Password"
              secureTextEntry={!showPassword}
              onSubmitEditing={
                !isInfoEmpty
                  ? () => myContext.handleIsLoggedIn(true)
                  : hadnlePasswordFocus
              }
              ref={inputRef}
            />
            <View styles={styles.inputContainerIcon}>
              {showPassword ? (
                <Entypo
                  onPress={() => setShowPassword(!showPassword)}
                  size={25}
                  color={globalStyles.primaryColor.color}
                  name="eye"
                />
              ) : (
                <Entypo
                  onPress={() => setShowPassword(!showPassword)}
                  size={25}
                  color="grey"
                  name="eye-with-line"
                />
              )}
            </View>
          </View>
          <CustomButton
            text="next"
            onPress={
              !isInfoEmpty ? () => myContext.handleIsLoggedIn(true) : null
            }
            isDisabled={isInfoEmpty}
          />
          <View style={styles.inputHelp}>
            <Text style={styles.colorGrey}>Forgot your login details? </Text>
            <Text
              style={styles.textLink}
              onPress={() => navigation.replace("ResetPassword")}>
              Get help logging in.
            </Text>
          </View>
          <View style={styles.inputHelp}>
            <Text
              style={[
                styles.colorGrey,
                globalStyles.secondaryBackground,
                styles.borderMiddleText,
              ]}>
              OR
            </Text>
          </View>
          <View style={styles.borderMiddle}></View>
          <View style={[styles.inputHelp, styles.inputHelpIcon]}>
            <MaterialCommunityIcons
              onPress={() => navigation.replace("ResetPassword")}
              size={35}
              color="#26CABF"
              name="github"
            />
            <Text
              onPress={() => navigation.replace("ResetPassword")}
              style={[globalStyles.primaryColor]}>
              {" "}
              Log in with Github
            </Text>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <Text
            style={styles.textLink}
            onPress={() => navigation.replace("Signup")}>
            Sign up.
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
export const styles = StyleSheet.create({
  container: {
    ...globalStyles.centered,
    padding: 20,
    marginBottom: 0,
  },
  iconContainer: { flex: 1, justifyContent: "center" },
  main: {
    width: "100%",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    flex: 2,
  },
  inputContainer: {
    backgroundColor: "ghostwhite",
    marginBottom: 18,
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: globalStyles.primaryColor.color,
  },
  inputContainerPassword: {
    flexDirection: "row",
  },
  input: { flex: 1, fontSize: 20, fontFamily: "roboto-regular" },
  inputHelp: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  inputHelpIcon: { alignItems: "center" },
  colorGrey: {
    color: "darkgrey",
  },
  borderMiddleText: { lineHeight: 20, paddingHorizontal: 5, zIndex: 1 },
  borderMiddle: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    position: "relative",
    bottom: 10,
  },
  footerContainer: {
    ...globalStyles.centered,
    ...globalStyles.secondaryBackground,
    flexDirection: "row",
    width: "100%",
    borderTopColor: "gainsboro",
    borderTopWidth: 2,
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
  footerText: {
    color: "darkgrey",
  },
  textLink: { fontWeight: "bold", color: "grey" },
})
