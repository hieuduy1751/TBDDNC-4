import React from 'react'
import { Button, View, Text, StyleSheet, Image, SafeAreaView, TextInput, Pressable } from 'react-native'
import NumberPicker from '../components/NumberPicker'

const Checkout = ({
  productProps
}: any) => {
  const priceFormatter = (price: number): string => {
    const sPrice = price.toString()
    let res = ''
    let currentIndex = 0
    let nextIndex = sPrice.length % 3 === 0 ? 3 : sPrice.length % 3
    while (nextIndex < sPrice.length) {
      res = res.concat(sPrice.slice(currentIndex, nextIndex)).concat('.')
      currentIndex = nextIndex
      nextIndex += 3
    }
    res = res.concat(sPrice.slice(-3))
    return res
  }

  return (
    <SafeAreaView style={{
      width: '100%',
      height: '100%'
    }}>
      <View style={styles.viewContainer}>
        <View style={styles.productContainer}>
          <Image style={styles.productImg} source={productProps.source} />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>
              {productProps.title}
            </Text>
            <Text style={{ ...styles.productTitle, marginVertical: 10 }}>
              Cung cấp bởi
              {' ' + productProps.provider}
            </Text>
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#ee0d0d',
            }}>
              {priceFormatter(productProps.promoPrice) + ' ' + 'đ'}
            </Text>
            <Text style={{
              fontSize: 12,
              fontWeight: 'bold',
              textDecorationLine: 'line-through',
              color: '#808080',
            }}>
              {priceFormatter(productProps.price) + ' ' + 'đ'}
            </Text>
            <View style={styles.productCtl}>
              <NumberPicker />
              <Button title="Mua sau" />
            </View>
          </View>
        </View>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: 60,
          paddingHorizontal: 20
        }}>
          <Text style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginRight: 20
          }}>Mã giảm giá đã lưu</Text>
          <Button title="Xem tại đây" />
        </View>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: 20,
          marginTop: 20,
          marginBottom: 30
        }}>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 2,
            borderColor: '#808080',
            width: 240,
            height: 45,
          }}>
            <View style={{
              width: 32,
              height: 16,
              backgroundColor: '#f2dd1b',
              marginHorizontal: 10
            }} />
            <TextInput style={{
              fontSize: 18,
              fontWeight: 'bold',
            }} value="Mã giảm giá"
            />
          </View>
          <Pressable>
            <View style={{
              width: 100,
              height: 45,
              borderRadius: 2,
              backgroundColor: '#0a5eb7',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white'
              }}>Áp dụng</Text>
            </View>
          </Pressable>
        </View>
        <View style={{
          width: '100%',
          backgroundColor: '#c4c4c4',
          height: 20
        }} />
        <View style={{
          paddingHorizontal: 20,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 12,
            fontWeight: 'bold'
          }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Button title="Nhập tại đây?" />
        </View>
        <View style={{
          width: '100%',
          backgroundColor: '#c4c4c4',
          height: 20
        }} />
        <View style={{
          paddingHorizontal: 20,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 50
        }}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold'
          }}>Tạm tính</Text>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#ee0d0d',
          }}>
            {priceFormatter(productProps.promoPrice) + ' ' + 'đ'}
          </Text>
        </View>
        <View style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',

        }}>
          <View style={{
            width: '100%',
            backgroundColor: '#c4c4c4',
            flexGrow: 1
          }} />
          <View>
            <View style={{
              paddingHorizontal: 20,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 50,
              marginBottom: 10
            }}>
              <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#808080'
              }}>Thành tiền</Text>
              <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#ee0d0d',
              }}>
                {priceFormatter(productProps.promoPrice) + ' ' + 'đ'}
              </Text>
            </View>
            <View style={{
              paddingHorizontal: 20
            }}>
              <Pressable>
                <View style={{
                  width: '100%',
                  height: 45,
                  borderRadius: 2,
                  backgroundColor: '#e53935',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white'
                  }}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    height: '100%',
    paddingVertical: 10,
  },
  productContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  productImg: {
    width: 130,
    height: 160
  },
  productInfo: {
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 160,
  },
  productCtl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  productTitle: {
    fontSize: 12,
    fontWeight: 'bold'
  }
})

export default Checkout
