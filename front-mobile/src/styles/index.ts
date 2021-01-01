import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const colors = {
  white: "#FFF",
  lightGray: "#f2f2f2",
  mediumGray: "#9e9e9e",
  borderGray: "#e1e1e1",
  darkGray: "#263238",
  black: "#000",
  primary: "#407bee",
  secondary: "#33569b",
  bluePill: "#407bff61",
  red: "#df5753",
};

const text = StyleSheet.create({
  regular: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: colors.mediumGray,
  },
  
  bold: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: colors.darkGray,
  },

  primaryText: {
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "bold",
    color: colors.white,
    marginLeft: 20,
  },

  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },

  currency: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.mediumGray,
  },

  productPrice: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: "bold",
  },

})

const theme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:20,
  },

  //HOME
  card: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height:2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },

  draw: {
    width: 313,
    height: 225,
  },

  textContainer: {
    paddingHorizontal: 20,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    width: 290,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,

  },

  arrowContainer: {
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  scrollContainer: {
    padding: 10,
  },

  //CARD
  productCard: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: 10,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height:2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    alignItems: "center",
    justifyContent: "space-around",

  },

  productDescription: {
    width: "100%",
    padding: 20,
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
  },

  priceContainer: {
    flexDirection: "row",
    marginTop: 10,
  },

  //SEARCH INPUT
  inputContainer: {
    width: "100%",
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: 12.5,
    paddingVertical: 10,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height:2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    alignItems: "center",
  },

  searchInput: {
    width: "90%",
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderGray,
  },

  //PRODUCT IMAGE
  productImage: {
    width: 140,
    height: 140,
    margin: 16,
  }

});

export { colors, theme, text };
