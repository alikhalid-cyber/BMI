import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native';
import React,{useState} from 'react';
import LoginSVG from '../../assets/Svg/BMILogin.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dropdown } from 'react-native-element-dropdown';
import CircularProgress from 'react-native-circular-progress-indicator';

const ResultScreen = (props) => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const data = [
      { label: 'Kg', value: '1' },
      { label: 'Lb', value: '2' },      
    ];
    const data2 = [
      { label: 'cm', value: '1' },
      { label: 'ft', value: '2' },      
    ];
    const [value, setValue] = useState(1);
  return (
    <SafeAreaView style={{flex: 1,marginHorizontal:wp('2%'),marginVertical:hp('1%'),}}>
        <View style={{flexDirection:"row",height:hp('5%'),justifyContent:"space-between",}}        >
            <View style={{alignSelf:"flex-start"}}>
            <Icon name="person" size={30} color={'#D32020'}         />
            </View>
            <View style={{alignSelf:"center",}}>
            <LoginSVG width={200} height={150} />
            </View>
            <View style={{alignSelf:"flex-end"}}>
            <Icon name="options-outline" size={30} color={'#D32020'} style={{transform: [{ rotate: '90deg' }]}}  />
            </View>
        </View>
        <View style={{height:hp('80%'),marginVertical:hp('2%')}}>
                <Text
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: 25,
                            fontWeight: "bold",alignSelf:"center"
                        }}>
                        BMI Result !
                      </Text>
                      
                      <CircularProgress value={58} />

                      

                      
                      
        </View>
        
    
         <TouchableOpacity style={{height:hp('7%'),width:wp('70%'),backgroundColor:'#D32020',borderRadius:20,alignSelf:"center",justifyContent:"center",}} onPress={()=> {}}>
                  <Text style={{color: '#FFFFFF', fontWeight: '700',textAlign:"center"}}> Calculate</Text>
                </TouchableOpacity>
        
    
        
        
  </SafeAreaView>
  )
}

export default ResultScreen;

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        justifyContent:"center"
      },
      input: {
        borderWidth: 1,width:300,borderRadius:15        
      },
})