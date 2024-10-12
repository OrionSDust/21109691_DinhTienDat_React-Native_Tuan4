import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState('');

  const applyPromoCode = () => {
    alert('Mã giảm giá đã áp dụng: ' + promoCode);
  };

  const handleCheckout = () => {
    alert('Đặt hàng thành công!');
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Thông tin sản phẩm */}
      <View style={styles.productSection}>
        <View style={styles.productInfoContainer}>
          <Image
            source={{
              uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4706a17caf400f669160fa20e14addff',
            }}
            style={styles.productImage}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>Nguyên hàm, tích phân và ứng dụng</Text>
            <Text style={styles.productProvider}>Cung cấp bởi Tiki Trading</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.newPrice}>141.800 đ</Text>
              <Text style={styles.oldPrice}>141.800 đ</Text>
            </View>
          </View>
        </View>

        {/* Nút tăng/giảm số lượng */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.quantityInput}
            keyboardType="numeric"
            value={String(quantity)}
            onChangeText={(text) => setQuantity(Number(text))}
          />

          <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.buyLater}>Mua sau</Text>
          </TouchableOpacity>
        </View>

        {/* Mã giảm giá */}
        <View style={styles.promoSection}>
          <View style={styles.promoContainer}>
            <View style={styles.yellowBlock} />
            <TextInput
              style={styles.promoInput}
              placeholder="Mã giảm giá"
              value={promoCode}
              onChangeText={(text) => setPromoCode(text)}
            />
          </View>
          <TouchableOpacity style={styles.applyButton} onPress={applyPromoCode}>
            <Text style={styles.applyButtonText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>

        {/* Phiếu quà tặng */}
        <TouchableOpacity style={styles.giftCardLink}>
          <Text style={styles.giftCardText}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox? Nhập tại đây</Text>
        </TouchableOpacity>
      </View>

      {/* Tổng tiền */}
      <View style={styles.summarySection}>
        <Text style={styles.summaryText}>Tạm tính</Text>
        <Text style={styles.totalAmount}>141.800 đ</Text>
      </View>

      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  productSection: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  productInfoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  productImage: {
    width: 90,
    height: 120,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  productProvider: {
    fontSize: 12,
    color: '#555',
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
    marginRight: 5,
  },
  newPrice: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  buyLater: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
    marginLeft: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 18,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    width: 50,
    height: 30,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  promoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  promoContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  yellowBlock: {
    width: 32,
    height: 16,
    backgroundColor: 'yellow',
    marginRight: 5,
  },
  promoInput: {
    flex: 1,
  },
  applyButton: {
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  giftCardLink: {
    marginTop: 10,
  },
  giftCardText: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
  summarySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default ShoppingCart;
