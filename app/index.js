import React from 'react';
import { FlatList,StyleSheet, Text, View } from "react-native";
import { Stack } from 'expo-router';

//popular books
const PB = [
  {
    id: '1',
    title: 'Fashionopolis',
    author: 'Dana Thomas',
    description:'A Special Edition of Vogue on the Future of Fashion',
    image: require('../img/PB1.png'),
  },
  {
    id: '2',
    title: 'Chanel',
    author: 'Patrick Mauri?s',
    description:'The Legend and the Life of Coco Chanel',
    image: require('../img/PB2.png'),
  },
  {
    id: '3',
    title: 'Calligraphy',
    author: 'June & Lucy',
    description:'An Introduction to the Art of Beautiful Writing',
    image: require('../img/PB3.png'),
  }
]
//newest books
const NewB = [
   {
    id: '4',
    title: 'Yves Saint Laurent',
    author: 'Suzy Menkes',
    description:'A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.',
    image: require('../img/NB1.png'),
    score: 4,
    price:46.99,
  },
  {
    id: '5',
    title: 'The Book of Signs',
    author: 'Rudolf Koch',
    description:'A Comprehensive Guide to the Language of Symbols',
    image: require('../img/NB2.png'),
    score: 3,
    price: 29.99,
  },
  {
    id: '6',
    title: 'Stitched Up',
    author: 'Tansy E. Hoskins',
    description:'A Global History of the Fast Fashion Industry',
    image: require('../img/NB3.png'),
    score: 3,
    price: 19.99,
  }
]

//上面按鈕，搜尋和旁邊的drawer
const Header = () => {
  //按鈕
   const topbutton = [
    {
      id: "1",
      label: "menu",
      image: require("../icon/icon_menu.png"),
      touched: require("../icon/icon_menu.png"),
    },
    {
      id: "2",
      label: "search",
      image: require("img/icon/icon_search.png"),
      touched: require("../icon/icon_search.png"),
    },
  ];

  return (
    <View style={styles.header}>
      {topbutton.map((button) => (
        <TouchableOpacity key={button.id} onPress={() => console.log(`${button.label} button pressed`)}>
          <Image source={button.image} style={styles.icon} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
//主要畫面
export default function Menu() {
    return (
      <Header>
        <View style={styles.container}>
            //pb
            <Text style={styles.PB}>Popular Books</Text>
             <ScrollView horizontal showsVerticalScrollIndicator={false}>
                {PB.map((book) => (
                    <View key={book.id} style={styles.bookContainer}>
                        <Image source={book.image} style={styles.bookImage} />
                    </View>
                ))}
             </ScrollView>

            //nb
            <Text style={styles.NewB}>Newest</Text>
             <ScrollView horizontal showsVerticalScrollIndicator={false}>
                {NewB.map((book) => (
                    <View key={book.id} style={styles.bookContainer}>
                        <Image source={book.image} style={styles.bookImage} />
                    </View>
                ))}
             </ScrollView>
        </View>

      </Header>

    );
}

//格式設定
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