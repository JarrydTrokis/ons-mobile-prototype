import { OnsColors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: OnsColors.onsColorButton,
    borderWidth: 0,
    borderRadius: 4, // $input-radius, adjust as needed
    color: OnsColors.onsColorTextInverse,
    // cursor: pointer, // Not supported in React Native
    display: "flex",
    alignItems: "center",
    fontFamily: undefined, // inherit by default
    margin: 0,
    paddingVertical: 12, // 0.75rem
    paddingHorizontal: 16, // 1rem
    position: "relative",
    textAlign: "center",
    textDecorationLine: "none",
    // textRendering: 'optimizelegibility', // Not supported in React Native
    verticalAlign: "top",
    shadowColor: OnsColors.onsColorButtonShadow,
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 3 }, // $button-shadow-size
    // whiteSpace: 'nowrap', // Not supported in React Native
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
    shadowColor: "var(--ons-color-button-secondary-shadow)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    backgroundColor: "var(--ons-color-button-secondary)",
    color: "var(--ons-color-text)",
    fontWeight: "400", // $font-weight-regular
  },
  buttonGhostInner: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.6)",
    shadowOpacity: 0,
    color: "var(--ons-color-text-inverse)",
  },
  buttonGhostDarkInner: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "var(--ons-color-black)",
    shadowOpacity: 0,
    color: "var(--ons-color-text)",
  },
  buttonDisabledInner: {
    opacity: 0.4,
  },
  buttonDropdownInner: {
    backgroundColor: "var(--ons-color-branded-tint)",
    borderWidth: 0,
    borderRadius: 0,
    shadowOpacity: 0,
    color: "var(--ons-color-branded-text)",
    display: "flex",
    fontWeight: "400",
    paddingVertical: 10, // 0.6rem
    paddingHorizontal: 16, // 1rem
    textAlign: "left",
  },
  buttonDropdownIcon: {
    tintColor: "var(--ons-color-branded-text)",
    alignSelf: "flex-end",
    marginTop: 4,
  },
  buttonNeutralInner: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: 0,
    shadowOpacity: 0,
    color: "var(--ons-color-black)",
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
    color: "var(--ons-color-text-link)",
    padding: 0,
  },
  buttonMenuIcon: {
    tintColor: "var(--ons-color-text-link)",
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
    tintColor: "var(--ons-color-text-link)",
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
    tintColor: "var(--ons-color-text-link)",
    height: 24,
    width: 24,
    margin: 0,
  },
  buttonTextLinkInner: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: 0,
    shadowOpacity: 0,
    color: "var(--ons-color-text-link)",
    fontWeight: "400",
    padding: 0,
  },
  buttonTextLinkInverseInner: {
    color: "var(--ons-color-text-inverse-link)",
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
