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
import { globalStyles } from "../styles/globalStyles"
import AppContext from "../global/context"

export default function Signup({ navigation }) {
  const myContext = useContext(AppContext)
  const [isPhone, setIsPhone] = useState(true)
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  return (
    <TouchableWithoutFeedback
      accessible={false}
      onPress={() => Keyboard.dismiss()}>
      <View style={[styles.container, globalStyles.secondaryBackground]}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons size={120} color="#26CABF" name="account" />
        </View>
        <View style={styles.main}>
          <TouchableOpacity
            style={styles.divider}
            onPress={() => setIsPhone(!isPhone)}>
            <Text
              style={[
                styles.dividerItem,
                globalStyles.primaryColor,
                isPhone ? styles.active : null,
              ]}>
              PHONE
            </Text>
            <Text
              style={[
                styles.dividerItem,
                globalStyles.primaryColor,
                !isPhone ? [styles.active] : null,
              ]}>
              EMAIL
            </Text>
          </TouchableOpacity>
          {isPhone && (
            <>
              <View style={styles.inputContainer}>
                <Text style={[styles.inputTextLeft, styles.inputText]}>
                  LT +370
                </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={e => setPhone(e.substring(0, 8))}
                  value={phone}
                  placeholder="Phone"
                  keyboardType="numeric"
                  autoFocus
                />
                <Text onPress={e => setPhone("")} style={styles.inputText}>
                  ✖
                </Text>
              </View>
              <View>
                <Text style={styles.misc}>
                  You may receive SMS updates from Kilo and can opt out at any
                  time.
                </Text>
              </View>
              <CustomButton
                text="next"
                onPress={() => myContext.handleIsLoggedIn(true)}
              />
            </>
          )}
          {!isPhone && (
            <>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={email.length < 320 ? e => setEmail(e) : null}
                  value={email}
                  placeholder="Email"
                  autoFocus
                />
                <Text onPress={e => setEmail("")} style={styles.inputText}>
                  ✖
                </Text>
              </View>
              <View>
                <Text style={styles.misc}>
                  You may receive SMS updates from Kilo and can opt out at any
                  time.
                </Text>
              </View>
              <CustomButton
                text="next"
                onPress={() => myContext.handleIsLoggedIn(true)}
              />
            </>
          )}
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <Text
            style={styles.footerTextLink}
            onPress={() => navigation.replace("Login")}>
            Log in.
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
  iconContainer: { flex: 1, justifyContent: "flex-end" },
  main: { flex: 2 },
  divider: {
    flexDirection: "row",
  },
  dividerItem: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    paddingBottom: 12,
    borderBottomColor: globalStyles.primaryColor.color,
    borderBottomWidth: 2,
  },
  active: {
    fontWeight: "bold",
    borderBottomColor: globalStyles.primaryColor.color,
    borderBottomWidth: 3,
  },
  inputContainer: {
    backgroundColor: "ghostwhite",
    margin: 18,
    padding: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    color: globalStyles.primaryColor.color,
  },
  inputText: {
    fontSize: 20,
    color: "darkgrey",
    paddingHorizontal: 10,
  },
  inputTextLeft: {
    borderRightColor: "gainsboro",
    borderRightWidth: 2,
  },
  input: { fontSize: 20, paddingLeft: 10, flex: 1 },
  misc: {
    color: "darkgrey",
    marginBottom: 15,
    marginHorizontal: 18,
    textAlign: "center",
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
  footerTextLink: { fontWeight: "bold", color: "grey" },
})
