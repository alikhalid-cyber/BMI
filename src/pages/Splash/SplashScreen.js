import { View, Text,SafeAreaView } from 'react-native';
import React,{useEffect} from 'react';
import LoginSvg from '../../assets/Svg/BMILogin';
const SplashScreen = (props) => {
    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate('LoginScreen');
             },1000);
    },[])
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center',alignItems:"center"  }}>
    <LoginSvg width={'170px'} height={'234px'} />
</SafeAreaView>
  )
}

export default SplashScreen;