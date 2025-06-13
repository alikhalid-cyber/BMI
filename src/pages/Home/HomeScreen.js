import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native';
import React,{useState} from 'react';
import LoginSVG from '../../assets/Svg/BMILogin.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dropdown } from 'react-native-element-dropdown';
const HomeScreen = (props) => {
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
    <SafeAreaView style={{flex: 1,marginHorizontal:wp('2%'),marginVertical:hp('1%'),justifyContent:"space-between"}}>
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
        <View style={{height:hp('80%'),justifyContent:"space-evenly"}}>
                <Text
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: 20,
                            fontWeight: "semibold",alignSelf:"center"
                        }}>
                        Let's help you get started !
                      </Text>
                      
                      <View style={{}}>
                           <Text      style={{fontFamily: 'Poppins',fontSize: 20,fontWeight: "medium",   }}>
                                Select Gender :
                           </Text>    

                        <View style={{flexDirection:"row",justifyContent:"space-evenly",marginVertical:hp('2%'),height:hp('10%'),}}> 
                          <TouchableOpacity style={{width:"20%",alignItems:"center",justifyContent:"center",borderRadius:10,backgroundColor:"#FFFFFF"}}>
                          <Icon name="male-sharp" size={30} color={'#D32020'}      />
                          <Text>Male</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{width:"20%",alignItems:"center",justifyContent:"center",borderRadius:10,backgroundColor:"#FFFFFF"}}>
                          <Icon name="female-sharp" size={30} color={'#D32020'}      />
                          <Text>Female</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{width:"20%",alignItems:"center",justifyContent:"center",borderRadius:10,backgroundColor:"#FFFFFF"}}>
                          <Icon name="male-female-sharp" size={30} color={'#D32020'}      />
                          <Text>Others</Text>
                          </TouchableOpacity>    
                        </View>
                      </View>
                         
                      <View style={{}}>
                           <Text      style={{fontFamily: 'Poppins',fontSize: 20,fontWeight: "medium",   }}>
                                Enter Your Weight :
                           </Text>    

                        <View style={{flexDirection:"row",justifyContent:"space-evenly",marginVertical:hp('2%'),height:hp('8%'),}}> 
                        <TextInput style={{backgroundColor:"#FFFFFF",width:"50%",alignSelf:"center",textAlign:"center",borderRadius:20,}}
                                    keyboardType='numeric'
                                    placeholder='Enter Your Weight'
                        />
                        <Dropdown
                        style={{width:"40%",borderRadius:20,backgroundColor:"#FFFFFF",height:"70%",alignSelf:"center", }}
                        selectedTextStyle={{textAlign:"center",}}
                        data={data} 
                        value={value}
                        onChange={setValue}
                        defaultIndex={1}
                        labelField="label"
                        valueField="value"
                        placeholder=""
                        />
                        </View>
                      </View>

                      <View style={{}}>
                           <Text      style={{fontFamily: 'Poppins',fontSize: 20,fontWeight: "medium",marginVertical:hp('2%')   }}>
                                Enter Your Age :
                           </Text>    

                        <TextInput style={{backgroundColor:"#FFFFFF",width:"80%",alignSelf:"center",textAlign:"center",borderRadius:20}}
                                    keyboardType='numeric'
                                    placeholder='Enter Your Age'
                        />
                      </View>

                      <View style={{}}>
                           <Text      style={{fontFamily: 'Poppins',fontSize: 20,fontWeight: "medium",   }}>
                                Enter Your Height :
                           </Text>    

                        <View style={{flexDirection:"row",justifyContent:"space-evenly",marginVertical:hp('2%'),height:hp('8%'),}}> 
                        <TextInput style={{backgroundColor:"#FFFFFF",width:"50%",alignSelf:"center",textAlign:"center",borderRadius:20,}}
                                    keyboardType='numeric'
                                    placeholder='Enter Your Height'
                        />
                       <Dropdown
                        style={{width:"40%",borderRadius:20,backgroundColor:"#FFFFFF",height:"70%",alignSelf:"center", }}
                        selectedTextStyle={{textAlign:"center",}}
                        data={data2} 
                        value={value}
                        onChange={setValue}
                        defaultIndex={1}
                        labelField="label"
                        valueField="value"
                        placeholder=""
                        />
                        </View>
                      </View>
        </View>
        
    
         <TouchableOpacity style={{height:hp('7%'),width:wp('70%'),backgroundColor:'#D32020',borderRadius:20,alignSelf:"center",justifyContent:"center",marginVertical:hp('2%')}} onPress={()=> props.navigation.navigate('ResultScreen')}>
                  <Text style={{color: '#FFFFFF', fontWeight: '700',textAlign:"center"}}> Calculate</Text>
                </TouchableOpacity>
        
    
        
        
  </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        justifyContent:"center"
      },
      input: {
        borderWidth: 1,width:300,borderRadius:15        
      },
})