import React from 'react';
import { FlatList,StyleSheet, Text, View } from "react-native";
import { Stack } from 'expo-router';

const PB = []
const NewB = []

export default function Menu() {
    return (
        <View style={styles.container}>
            <Text style={styles.PB}>Popular Books</Text>
            <Text style={styles.NewB}>Newest</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  PB: {
    textAlign: 'left',
    fontSize: 24,
    fontWeight: "bold",
  },
  NewB: {
    textAlign: 'left',
    fontSize: 24,
    fontWeight: "bold",
  }
});