import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

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

  goBackText: {
    fontSize: 19,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.darkGray,
    margin: 16,
  },

  productDetailsName: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.darkGray,
    marginTop: 10,
  },

  productDescription: {
    fontSize: 16,
    color: colors.mediumGray,
    fontWeight: "400",
  },
  loginTitle: {
    fontSize: 30,
    fontWeight: "400",
  },
  logoutText:{
    color: colors.white,
  },
  addButtonText:{
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  deleteTxt: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: colors.red,
  },
  editTxt: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: colors.mediumGray,
  },
  saveTxt:{
    textTransform: "uppercase",
    fontWeight: "bold",
    color: colors.white,
  }
});

const theme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
      height: 2,
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
      height: 2,
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
      height: 2,
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
  },

  //PRODUCT DETAILS
  detailContainer: {
    backgroundColor: colors.white,
    padding: 20,
  },
  detailCard: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: "space-around",

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    padding: 20,
  },
  productImageContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.lightGray,
    alignItems: "center",
    borderRadius: 20,
  },
  productDetailsImage: {
    height: 220,
    width: 220,
  },
  goBackContainer: {
    width: 290,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "flex-start",
  },
  scrollTextContainer: {
    marginVertical: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: colors.mediumGray,
  },

  //LOGIN

  loginCard: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: 10,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginVertical: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  textInput: {
    width: 290,
    height: 50,
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: 10,
    padding: 10,
  },
  toggle: {
    margin: -40,
  },
  buttonTextContainer: {
    flex: 1,
    alignItems: "center",
  },
  eyes: {
    width: 30,
    height: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  deleteBtn: {
    width: "48%",
    height: 40,
    borderWidth: 1,
    borderColor: colors.red,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  editBtn:{ 
    width: "48%",
    height: 40,
    borderWidth: 1,
    borderColor: colors.mediumGray,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  //ADMIN PRODUCTS FORM
  formContainer: {
    width:deviceWidth,
    padding: 20,
  },
  formCard: {
    width: "100%",
    height: "90%",
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset:{
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: "space-around",
  },
  modalContainer:{
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: "#00000033",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent:{
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset:{
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalItem:{
    width: "100%",
    backgroundColor: colors.lightGray,
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
  formInput:{
    width: 290,
    height: 50,
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
  },
  textArea: {
    width: "100%",
    maxWidth: "100%",
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 15,
    height: 200,
  },
  selectInput: {
    width: 290,
    height: 50,
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
    justifyContent: "center",
  },
  saveBtn:{
    width: "48%",
    height: 40,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.primary,
  }
});

const nav = StyleSheet.create({
  leftText: {
    color: colors.white,
    fontWeight: "bold",
    marginLeft: 20,
    fontSize: 20,
  },
  drawer: {
    marginRight: 20,
  },
  options: {
    width: deviceWidth,
    height: 120,
    backgroundColor: colors.primary,
    marginTop: 125,
    marginRight: -20,
    padding: 20,
    justifyContent: "space-between",
    
  },
  option: {
    paddingVertical: 5,
  },
  textOption: {
    color: colors.white,
    textTransform: "uppercase",
  },
  textActive: {
    fontWeight: "bold",
  },
  logoutBtn: {
    width: 60,
    height: 30,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center",
    marginRight: 20,
  },
  
});

const tabBar = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: 80,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  pill: {
    padding: 15,
    backgroundColor: colors.lightGray,
    borderRadius: 30,
  },
  pillActive: {
    backgroundColor: colors.bluePill,
  },
  pillText: {
    fontWeight: "bold",
    color: colors.mediumGray,
  },
  pillTextActive: {
    color: colors.primary,
  },
});

const admin = StyleSheet.create({
  container: {
    padding: 10,
  },
  addButton: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  
})

export { colors, theme, text, nav, tabBar, admin };
