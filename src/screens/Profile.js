import React, { useContext } from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import AppContext from "../global/context"
import CustomButton from "../shared/button"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default function Profile({ navigation }) {
  const myContext = useContext(AppContext)

  return (
    <>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons size={90} color="#26CABF" name="account" />
        <Text style={styles.textName}>{myContext.userInfo.username}</Text>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.textGrey}>PROFILE INFORMATION</Text>
          <TouchableOpacity
            style={styles.infoContainer}
            onPress={() => navigation.navigate("Edit Username")}>
            <Text style={styles.text}>Username</Text>
            <Text style={[styles.text, styles.textGrey]}>
              {myContext.userInfo.username}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.infoContainer}
            onPress={() => navigation.navigate("Edit Email")}>
            <Text style={styles.text}>Email</Text>
            <Text style={[styles.text, styles.textGrey]}>
              {myContext.userInfo.email}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.infoContainer}
            onPress={() => navigation.navigate("Edit Phone")}>
            <Text style={styles.text}>Phone</Text>
            <Text style={[styles.text, styles.textGrey]}>
              {myContext.userInfo.phone && (
                <Text style={[styles.text, styles.textGrey]}>+370 </Text>
              )}
              {myContext.userInfo.phone}
            </Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          text="Log out"
          onPress={() => myContext.handleIsLoggedIn(false)}
        />
      </View>
    </>
  )
}

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "ghostwhite",
    paddingHorizontal: 20,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  text: { fontSize: 20 },
  textName: { fontSize: 25 },
  textGrey: { color: "grey", fontSize: 20, padding: 10 },
})
