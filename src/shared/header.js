import React from "react"
import { StyleSheet, Text } from "react-native"

export default function Header({ route }) {
  const { first, last } = route.params
  return (
    <Text style={styles.headerText}>
      {first} {last}
    </Text>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    letterSpacing: 1,
  },
})
