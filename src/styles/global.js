import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: "#26CABF",
  },
  backgroundTransparent: { backgroundColor: "transparent" },
  centered: { flex: 1, alignItems: "center", justifyContent: "center" },
  button: {
    borderRadius: 0,
    padding: 10,
    backgroundColor: "#26CABF",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
  secondaryButton: { backgroundColor: "transparent" },
  secondaryButtonText: {
    color: "#26CABF",
  },
})
