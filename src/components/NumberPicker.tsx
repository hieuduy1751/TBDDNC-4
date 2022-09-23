import React, { useRef, useState } from 'react'
import { Pressable, StyleSheet, View, Text, TextInput } from 'react-native'

const NumberPicker = () => {
  const inputRef = useRef<any>()
  const [no, setNo] = useState('1')
  const handleMinus = () => {
    console.log('minus', inputRef.current)
    if (parseInt(inputRef.current.value) > 1) {
      inputRef.current.value = (parseInt(inputRef.current.value) - 1).toString()
    }
  }

  const handlePlus = () => {
    console.log('plus')
    inputRef.current.value = (parseInt(inputRef.current.value) + 1).toString()
  }

  return (
    <View style={styles.pickerContainer}>
      <Pressable onPress={handleMinus}>
        <View style={styles.btn}>
          <Text style={styles.text}>-</Text>
        </View>
      </Pressable>
      <TextInput ref={inputRef} style={{ ...styles.input, ...styles.text}} value={no} onChangeText={setNo} />
      <Pressable onPress={handlePlus}>
        <View style={styles.btn}>
          <Text style={styles.text}>+</Text>
        </View>
      </Pressable>
    </View>
  ) 
}

const styles = StyleSheet.create({
  pickerContainer: {
    width: 100,
    display: 'flex',
    flexDirection: 'row'
  },
  btn: {
    width: 20,
    height: 20,
    backgroundColor: '#c4c4c4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export default NumberPicker