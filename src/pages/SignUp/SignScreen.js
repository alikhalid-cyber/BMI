import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import Ionicons from 'react-native-vector-icons';
import MaterialIcons from 'react-native-vector-icons';
import SignSVG from '../../assets/Svg/BMISign.svg'

const SignScreen = (props) => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
  
  return (
    <SafeAreaView style={{flex: 1, alignItems:"center",marginHorizontal:10,marginVertical:10}}>
    <View style={{ alignItems:"center",}}>
      <SignSVG
          height={200}
          width={200}
          style={{}}
        />
      <Text
        style={{
          fontFamily: 'Poppins',
          fontSize: 20,fontWeight:"bold"
        }}>
        Welcome Onboard !!!
      </Text>
      
        </View>  

      <View style={{marginHorizontal:10,alignItems:"center",marginVertical:"35"}}>
            <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter your Full Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={text}
          placeholder="Email Id"
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
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Password"
          //keyboardType="numeric"
          inputType="password"
        />
            
      <TouchableOpacity style={{height:50,width:300,alignItems:"center",backgroundColor:'#D32020',justifyContent:"center",borderRadius:20,marginVertical:"15%"}} onPress={()=> props.navigation.navigate('ProfileScreen')}>
          <Text style={{color: '#FFFFFF', fontWeight: '700',}}> Sign Up</Text>
        </TouchableOpacity>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={()=> props.navigation.navigate('LoginScreen')}>
          <Text style={{color: '#D32020', fontWeight: '700'}}> Sign In</Text>
        </TouchableOpacity>
      </View>
    
  </SafeAreaView>
  )
}

export default SignScreen;

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        justifyContent:"center"
      },
      input: {
        borderWidth: 1,width:300,marginVertical:"10",borderRadius:15        
      },
})