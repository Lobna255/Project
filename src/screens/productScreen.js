import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';

import products from '../data/products';

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>Bienvenue dans notre boutique Nike</Text>
      <Text style={styles.subtitle}>
      Découvrez nos produits
      </Text>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="contain"
            />

            <Text style={styles.name}>{item.name}</Text>

            <Text style={styles.price}>
              {item.price} DT
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111111',
  },
  subtitle: {
    fontSize: 15,
    color: '#666666',
    marginTop: 5,
    marginBottom: 15,
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    width: '50%',
    padding: 8,
    marginBottom: 12,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#222222',
  },
  price: {
    fontSize: 14,
    marginTop: 4,
    color: '#555555',
  },
});

export default ProductScreen;