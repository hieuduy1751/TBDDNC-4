import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Checkout from './src/views/Checkout';

export default function App() {
  const bookImg = require('./assets/book.png')
  const productProps = {
    source: bookImg,
    title: 'Nguyên hàm tích phân và ứng dụng',
    provider: 'Tiki Trading',
    price: 141800,
    promoPrice: 141800
  }

  return (
    <View style={styles.container}>
      <Checkout productProps={productProps} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
