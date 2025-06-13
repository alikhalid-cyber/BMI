import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import Ionicons from 'react-native-vector-icons';
import MaterialIcons from 'react-native-vector-icons';
import LoginSVG from '../../assets/Svg/BMILogin.svg'
import Login2SVG from '../../assets/Svg/BMILogin2.svg'

const ProfileScreen = () => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
  
  return (
    <SafeAreaView style={{flex: 1, alignItems:"center",marginHorizontal:10,marginVertical:15}}>
     <LoginSVG
          height={200}
          width={200}
          style={{marginTop:"-25%"}}
        />
      
         <Text
        style={{
          fontFamily: 'Poppins',
          fontSize: 20,marginTop:"-25%",
            fontWeight: "bold"
        //  color: '#0000',
          //marginTop: -50,
        }}>
        Profile
      </Text>
      <View style={{marginVertical:15}}>
        <Text>Username:</Text>
            <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Username"
          keyboardType="email-address"
        />
        </View>
        <View style={{marginVertical:15}}>
        <Text>Email Address:</Text>
            <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Email "
          keyboardType="email-address"
        />
        </View>
        <View style={{marginVertical:15}}>
        <Text>Username:</Text>
            <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Password"
          keyboardType="visible-password"
          inputType="password"
        />
        </View>
        
      <TouchableOpacity style={{height:50,width:300,alignItems:"center",backgroundColor:'#D32020',justifyContent:"center",borderRadius:10,marginVertical:25}} onPress={()=> {}}>
          <Text style={{color: '#FFFFFF', fontWeight: '700',}}> Change Password  &gt;</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{height:50,width:300,alignItems:"center",backgroundColor:'#D32020',justifyContent:"center",borderRadius:10,marginVertical:15}} onPress={()=> {}}>
          <Text style={{color: '#FFFFFF', fontWeight: '700',}}> Saved Results  &gt; </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{height:50,width:300,alignItems:"center",backgroundColor:'#000000',justifyContent:"center",borderRadius:20,marginTop:"30%"}} onPress={()=> {}}>
          <Text style={{color: '#FFFFFF', fontWeight: '700',}}> Sign Out</Text>
        </TouchableOpacity>
        
  </SafeAreaView>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        justifyContent:"center"
      },
      input: {
        borderWidth: 1,width:300,borderRadius:15        
      },
})