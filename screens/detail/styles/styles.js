import { StyleSheet } from "react-native";
import { COLORS, SIZES, STYLES } from "../../../common/Theme";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    icon: {
        width: 24,
        height: 24
    },
    icon16: {
        width: 16,
        height: 16
    },
    appbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: SIZES.padding * 2
    },
    appbar__title: {
        backgroundColor: "#F6F6F6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.radius,
        width: "70%",
        height: 50
    },
    content: {
        backgroundColor: COLORS.lightGray
    },
    content__img: {
        width: "100%",
        height: 250
    },
    content__btn: {
        padding: SIZES.padding * 1.5,
        backgroundColor: COLORS.white,
        flexDirection: "row",
        width: 100,
        justifyContent: "space-between",
        borderRadius: SIZES.padding * 5,
        position: "absolute",
        bottom: -25,
        left: "35%",
        ...STYLES.shadow,
    },
    content__btn_text: {
        fontSize: 15,
        fontWeight: "500"
    },
    content__desc: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: SIZES.padding * 5,
    },
    text20W5: {
        fontSize: 20,
        fontWeight: "500"
    },
    content__desc__cal: {
        flexDirection: "row"
    },
    mTop: {
        marginTop: SIZES.padding * 2,
    },
    order: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
        borderTopLeftRadius: SIZES.padding * 4,
        borderTopRightRadius: SIZES.padding * 4,
        padding:SIZES.padding
        // ...STYLES.shadow
    },
    order__item: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: SIZES.padding * 3,
    },
    text15W5: {
        fontSize: 15,
        fontWeight: "500"
    },
    line: {
        height: 1,
        width: "100%",
        backgroundColor: "black",
    },
    order__location: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: SIZES.padding * 3,
    },
    row: {
        flexDirection: "row"
    },
    mLeft: {
        marginLeft: SIZES.padding
    },
    btnOrder: {
        marginLeft: SIZES.padding * 3,
        marginRight: SIZES.padding * 3,
        marginTop: SIZES.padding,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.padding,
        justifyContent: 'center',
        alignItems: "center",
        height: 56
    },
    textColorWhite:{
        color:COLORS.white
    }
})