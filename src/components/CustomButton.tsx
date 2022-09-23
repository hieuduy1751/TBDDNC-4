import { View, Text, GestureResponderEvent, Pressable } from 'react-native'

interface CustomButtonStyles {
  buttonContainer: any
  buttonText: any
}

export interface CustomButtonProps {
  title: string,
  styles: CustomButtonStyles,
  callback: Function
}

export default function CustomButton({ title, styles, callback }: CustomButtonProps) {
  const handleOnPress = (e: GestureResponderEvent) => {
    callback && callback(e)
  }

  return (
    <Pressable onPress={handleOnPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </Pressable>
  )
}