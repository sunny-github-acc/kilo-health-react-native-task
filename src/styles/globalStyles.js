import { StyleSheet } from "react-native"

const primaryColor = "#26CABF"
const primaryColorLighten = "#4CEDE2"
const secondaryColor = "#E7F6F3"

export const globalStyles = StyleSheet.create({
  primaryColor: {
    color: primaryColor,
  },
  primaryColorLighten: {
    color: primaryColorLighten,
  },
  primaryBackground: {
    backgroundColor: "#26CABF",
  },
  secondaryColor: { color: secondaryColor },
  secondaryBackground: { backgroundColor: secondaryColor },
  backgroundTransparent: { backgroundColor: "transparent" },
  centered: { flex: 1, alignItems: "center", justifyContent: "center" },
})
