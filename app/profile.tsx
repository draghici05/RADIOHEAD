import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image, ImageSourcePropType, TouchableOpacity } from "react-native";


const { width, height } = Dimensions.get("window");
const data: { id: number; title: string; image: ImageSourcePropType }[] = [
  { id: 1, title: "Album 1", image: require("../assets/covers/pablo-honey.jpg") },
  { id: 2, title: "Album 2", image: require("../assets/covers/the-bends.png") },
  { id: 3, title: "Album 3", image: require("../assets/covers/ok-computer.png") },
  { id: 4, title: "Album 4", image: require("../assets/covers/kid-a.png") },
  { id: 5, title: "Album 5", image: require("../assets/covers/amnesiac.png") },
  { id: 6, title: "Album 6", image: require("../assets/covers/hail-to-the-theif.png") },
  { id: 7, title: "Album 7", image: require("../assets/covers/in-rainbows.png") },
  { id: 8, title: "Album 8", image: require("../assets/covers/theking.png") },
  { id: 9, title: "Album 9", image: require("../assets/covers/a-moon-shaped-pool.png") },
];

const Slideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Radiohead are an English rock band formed in Abingdon, Oxfordshire, in 1985. They comprise Thom Yorke (vocals, guitar, piano, keyboards); brothers Jonny Greenwood (guitar, keyboards, other instruments) and Colin Greenwood (bass); Ed O'Brien (guitar, backing vocals); and Philip Selway (drums, percussion). They have worked with the producer Nigel Godrich and the cover artist Stanley Donwood since 1994. Radiohead's experimental approach is credited with advancing the sound of alternative rock. 
        </Text>
      <Image source={data[activeIndex].image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{data[activeIndex].title}</Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={prevSlide} style={styles.button}>
          <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={nextSlide} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        
  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  image: {
    width: width * 0.8,
    height: height * 0.5, 
  },

  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },

  controls: {
    flexDirection: "row",
    marginTop: 10,
  },

  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  text: {
    fontFamily: 'Poppins', 
    fontSize: 12, 
  },
  


});

export default Slideshow;
