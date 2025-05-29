import { OnsColors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: OnsColors.onsColorButton,
    borderWidth: 0,
    borderRadius: 4, // $input-radius, adjust as needed
    // cursor: pointer, // Not supported in React Native
    display: "flex",
    alignItems: "center",
    margin: 0,
    paddingVertical: 12, // 0.75rem
    paddingHorizontal: 16, // 1rem
    position: "relative",
    verticalAlign: "top",
    shadowColor: OnsColors.onsColorButtonShadow,
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 3 }, // $button-shadow-size
    // whiteSpace: 'nowrap', // Not supported in React Native
  },
  buttonText: {
    color: OnsColors.onsColorTextInverse,
    fontFamily: undefined, // inherit by default
    textAlign: "center",
    textDecorationLine: "none",
    // textRendering: 'optimizelegibility', // Not supported in React Native
  },
  buttonIcon: {
    tintColor: OnsColors.onsColorTextInverse,
    height: 18,
    width: 18,
  },
  buttonSmall: {
    lineHeight: 20, // 1.25rem
  },
  buttonSmallInner: {
    paddingVertical: 8, // 0.5rem
    paddingHorizontal: 12, // 0.75rem
  },
  buttonSmallIcon: {
    height: 16,
    width: 16,
  },
  buttonSecondaryInner: {
    shadowColor: OnsColors.onsColorButtonSecondaryShadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    backgroundColor: OnsColors.onsColorButtonSecondary,
    color: OnsColors.onsColorText,
    fontWeight: "400", // $font-weight-regular
  },
  buttonGhostInner: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.6)",
    shadowOpacity: 0,
    color: OnsColors.onsColorTextInverse,
  },
  buttonGhostDarkInner: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: OnsColors.onsColorBlack,
    shadowOpacity: 0,
    color: OnsColors.onsColorText,
  },
  buttonDisabledInner: {
    opacity: 0.4,
  },
  buttonDropdownInner: {
    backgroundColor: OnsColors.onsColorBrandedTint,
    borderWidth: 0,
    borderRadius: 0,
    shadowOpacity: 0,
    color: OnsColors.onsColorBrandedText,
    display: "flex",
    fontWeight: "400",
    paddingVertical: 10, // 0.6rem
    paddingHorizontal: 16, // 1rem
    textAlign: "left",
  },
  buttonDropdownIcon: {
    tintColor: OnsColors.onsColorBrandedText,
    alignSelf: "flex-end",
    marginTop: 4,
  },
  buttonNeutralInner: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: 0,
    shadowOpacity: 0,
    color: OnsColors.onsColorBlack,
    fontWeight: "400",
    padding: 2,
  },
  buttonMenu: {
    alignItems: "center",
    display: "flex",
    padding: 16, // 1rem
    borderBottomWidth: 4,
    borderBottomColor: "rgba(0,0,0,0)",
  },
  buttonMenuInner: {
    backgroundColor: "rgba(0,0,0,0)",
    shadowOpacity: 0,
    color: OnsColors.onsColorTextLink,
    padding: 0,
  },
  buttonMenuIcon: {
    tintColor: OnsColors.onsColorTextLink,
    height: 16,
    width: 16,
    marginTop: 0,
  },
  buttonMenuText: {
    height: 24,
  },
  buttonSearchIcon: {
    borderBottomWidth: 4,
    borderBottomColor: "transparent",
    alignItems: "center",
    display: "flex",
    padding: 16,
  },
  buttonSearchIconInner: {
    backgroundColor: "rgba(0,0,0,0)",
    shadowOpacity: 0,
    padding: 0,
  },
  buttonSearchIconIcon: {
    tintColor: OnsColors.onsColorTextLink,
    height: 24,
    width: 24,
    margin: 0,
  },
  buttonClose: {
    borderBottomWidth: 4,
    borderBottomColor: "transparent",
    alignItems: "center",
    display: "flex",
    padding: 16,
  },
  buttonCloseInner: {
    backgroundColor: "rgba(0,0,0,0)",
    shadowOpacity: 0,
    padding: 0,
  },
  buttonCloseIcon: {
    tintColor: OnsColors.onsColorTextLink,
    height: 24,
    width: 24,
    margin: 0,
  },
  buttonTextLinkInner: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: 0,
    shadowOpacity: 0,
    color: OnsColors.onsColorTextLink,
    fontWeight: "400",
    padding: 0,
  },
  buttonTextLinkInverseInner: {
    color: OnsColors.onsColorTextInverseLink,
  },
  buttonLoaderInner: {
    position: "relative",
    color: "transparent",
  },
  buttonLoaderIcon: {
    height: 27,
    width: 27,
    position: "absolute",
    left: "50%",
    top: "50%",
    margin: 0,
    opacity: 1,
    transform: [{ translateX: -13.5 }, { translateY: -13.5 }],
  },
  buttonLoaderSmallIcon: {
    height: 24,
    width: 24,
  },
  buttonGroup: {
    alignItems: "baseline",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 24, // .ons-u-mb-l
  },
  buttonGroupButton: {
    marginRight: 24,
    marginBottom: 16,
  },
  searchBtn: {
    height: "92.5%",
  },
  searchBtnInnerWithIcon: {
    paddingRight: 12, // 0.75rem
    height: "100%",
  },
});
