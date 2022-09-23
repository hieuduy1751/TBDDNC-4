import React from "react"
import { Image, TextInput, StyleSheet, Text, View } from "react-native"


const CustomInput = ({ inputProps, viewProps, imageProps }: any) => {
  return (
    <View {...viewProps} >
      <Image {...imageProps} />
      <TextInput {...inputProps} />
    </View>
  )
}

export default CustomInput
