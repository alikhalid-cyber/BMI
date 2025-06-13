import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export default function InputField({
  label,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
      }}>
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 3,}}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 3}}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#AD40AF', fontWeight: '700'}}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}