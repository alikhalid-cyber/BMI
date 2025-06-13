import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import Ionicons from 'react-native-vector-icons';
import MaterialIcons from 'react-native-vector-icons';
import LoginSVG from '../../assets/Svg/BMILogin.svg'
import Login2SVG from '../../assets/Svg/BMILogin2.svg'

const LoginScreen = (props) => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
  
  return (
    <SafeAreaView style={{flex: 1, alignItems:"center",marginHorizontal:10,marginVertical:10}}>
    <View style={{ alignItems:"center",marginTop:"-20%"}}>
      <LoginSVG
          height={200}
          width={200}
          style={{}}
        />
      <Text
        style={{
          fontFamily: 'Poppins',
          fontSize: 20,
          //fontWeight: '500',
        //  color: '#0000',
          //marginBottom: 30,
        }}>
        Welcome Back !!!
      </Text>
      <Login2SVG
          height={226}
          width={310}
        />
        </View>  

      <View style={{marginHorizontal:10,alignItems:"center",marginVertical:"25"}}>
            <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Password"
          //keyboardType="numeric"
          inputType="password"
        />
            
     
     <TouchableOpacity onPress={()=> {}}>
          <Text style={{color: '#6C63FF', fontWeight: '700'}}> Forgot Password</Text>
        </TouchableOpacity>
      <TouchableOpacity style={{height:50,width:340,alignItems:"center",backgroundColor:'#D32020',justifyContent:"center",borderRadius:20,marginVertical:15}} onPress={()=> props.navigation.navigate('HomeScreen')}>
          <Text style={{color: '#FFFFFF', fontWeight: '700',}}> Sign In</Text>
        </TouchableOpacity>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={()=> props.navigation.navigate('SignScreen')}>
          <Text style={{color: '#D32020', fontWeight: '700'}}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    
  </SafeAreaView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        justifyContent:"center"
      },
      input: {
        borderWidth: 1,width:300,marginVertical:"15",borderRadius:15        
      },
})