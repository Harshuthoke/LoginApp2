import { Image, ImageBackground, StyleSheet, Platform, View, Text } from 'react-native'
import React from 'react'
import MyButton from '../components/MyButton'
import MyTextInput from '../components/MyTextInput'
import SocialMedia from '../components/SocialMedia'

const LoginScreen = () => {
  return (
    <View style = {styles.container}>
      <ImageBackground source={require("../assets/SocialMediaIcons/background.png")}
      style = {styles.imageBackground}>  
        <Image 
            source={require("../assets/food/food.png")}
            style={styles.foodImage}/>

            <Text style= {styles.title}>Fatmore</Text>

            <View style={styles.inputcontainer}>
                <MyTextInput placeholder="Enter Email or User Name"/>
                <MyTextInput placeholder="Password" secureTextEntry/>
                <Text style={styles.textdonthave}>Don't have an account</Text>
                <MyButton  title={"Login"}/>
                <Text style={styles.ortext}>OR</Text>

                <SocialMedia />

            </View>
      </ImageBackground>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    imageBackground:{
        height:"100%",
        paddingHorizontal: 20,
        alignItems: "center"
    },

    foodImage:{
        height: 50,
        width: 90,
        resizeMode: "stretch",
        position: "absolute",
        right: 20,
        top: Platform.OS == "android" ?  20 : 50,
    },
    title:{
        fontSize: 40,
        color: "white",
        marginTop: Platform.OS == "android" ? 60 : 110,
        fontFamily: "Audiowide-Regular"


    },
    inputcontainer:{
        height: 450,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 20
    },
    textdonthave:{
        alignSelf: 'flex-end',
        marginRight: 10,
        color: 'black',
        marginBottom: 15

    },
    ortext:{
        fontSize: 20,
        color: 'gray',
        marginTop: 20,
        fontFamily: 'Audiowide-Regular'
    }

})