import React from "react"
import { StyleSheet, Image, View } from "react-native"
import CustomButton from "../shared/button"
import { globalStyles } from "../styles/globalStyles"

export default function Welcome({ navigation }) {
  return (
    <View style={[globalStyles.centered, globalStyles.secondaryBackground]}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require("../images/logo.png")} />
      </View>
      <CustomButton
        text="create new account"
        onPress={() => navigation.navigate("Signup")}
      />
      <CustomButton
        customStyles={[
          globalStyles.secondaryBackground,
          globalStyles.primaryColor,
        ]}
        text="login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 10,
    justifyContent: "flex-end",
  },
  logo: {
    width: 100,
    height: 100,
    margin: 40,
  },
})
