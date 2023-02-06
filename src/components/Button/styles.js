import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#58cc02",
    height: 50,
    marginVertical: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: "#57a600",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",

    borderColor: "white",
    borderBottomWidth: 2,
  },
  disableContainer: {
    backgroundColor: "grey",
    borderColor: "lightgrey",
  },
});
