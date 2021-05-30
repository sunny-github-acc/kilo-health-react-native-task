import React from "react"
import { StyleSheet, Text, View } from "react-native"
import CustomButton from "../shared/button"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { globalStyles } from "../styles/global"
import { useState } from "react/cjs/react.development"

export default function Signup({ navigation }) {
  const [isPhone, setIsPhone] = useState(true)

  return (
    <View style={globalStyles.centered}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons size={124} color="#26CABF" name="account" />
      </View>

      {isPhone && (
        <View style={styles.main}>
          <Text>PHONE</Text>
          <CustomButton
            text="next"
            // onPress={() => navigation.replace("ResetPassword")}
          />
        </View>
      )}
    </View>
  )
}
export const styles = StyleSheet.create({
  container: {},
  iconContainer: { flex: 1, justifyContent: "center" },
  icon: { flex: 1 },
  main: { flex: 2, justifyContent: "flex-start" },
})
