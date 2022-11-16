import {StyleSheet} from "react-native";

export const AuthStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    bgImage: {
        flex: 1,
        justifyContent: "center",
    },
    formContainer: {
        position: "relative",
        width: "100%",
        minHeight: '70%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: 'auto',
    },
    imageContainer: {
        position: "absolute",
        alignSelf: 'center',
        top: -60,
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    icon:{
        position:"absolute",
        top:75,
        right:-11,
    },
    formTitle: {
        marginTop: 92,
        fontWeight: "bold",
        fontSize: 30,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: "#212121",
    },
    form: {
        marginTop: 33,
    },
    input: {
        margin: 16,
        // placeholderTextColor: '#BDBDBD',
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#E8E8E8",
        borderRadius: 8,
        paddingLeft: 16,
        height: 50,
    },
    passInput: {
        position: "relative",
    },
    showPassBtn: {
        position: 'absolute',

        top: 30,
        right: 34,
    },
    showPassBtnText:{
        fontSize: 16,
        color: '#1B4371',
    },
    submitBtn: {
        marginTop: 27,
        fontWeight: 400,
        fontSize: 16,
        color: '#FFFFFF',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 16,
        width: "90%",
        height: 50,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
alignContent:"center",
    },
    submitBtnText:{
        fontSize: 16,
        color: '#FFFFFF',
    },
    changeScreen:{
        marginTop:16,
        paddingBottom:16,
        alignSelf: "center",
        backgroundColor:'transparent',
    },
    changeScreenText:{
        fontSize: 16,
        color: '#1B4371'
    },

});