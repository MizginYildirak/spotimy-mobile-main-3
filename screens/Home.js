import React, { useState, useRef, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { SongsContext } from "../components/context/SongsProvider";

const width = Dimensions.get("window").width;

const musicGenres = [
  { title: "Rock", color: "#131312" },
  { title: "Pop", color: "#131312" },
  { title: "Jazz", color: "#131312" },
  { title: "Classical", color: "#131312" },
  { title: "Hip Hop", color: "#131312" },
  { title: "Electronic", color: "#131312" },
  { title: "Metal", color: "#131312" },
];

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const progress = useSharedValue(0);
  const refMiddle = useRef(null);
  const refSmall = useRef(null);
  const refSmaller = useRef(null);
  const { songs } = useContext(SongsContext);

  const onChangeSearch = (query) => setSearchQuery(query);

  const onPressPagination = (index) => {
    if (ref.current) {
      ref.current.scrollTo({ index, animated: true });
    }
  };

  const handlePress = () => {
    console.log("Button Pressed!");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/Logo.png")}
      />

      <Searchbar
        placeholder="Artist, müzik veya albüm ara..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />

      <View style={styles.carouselContainer}>
        <View style={styles.carouselLabelContainer}>
          <Text style={styles.carouselLabel}>Son Dinlenenler</Text>
        </View>
        <Carousel
          ref={refMiddle}
          width={width - 160}
          height={160}
          data={songs}
          loop={true}
          pagingEnabled={true}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 0,
            parallaxAdjacentItemScale: 0.9,
          }}
          style={styles.carousel}
          renderItem={({ index }) => (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: songs[index].songPhoto }}
                style={styles.image}
              />
              <View style={styles.overlay}>
                <Text style={styles.artistName}>{songs[index].artist}</Text>
                <Text style={styles.songName}>{songs[index].song}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <View style={styles.carouselContainer}>
        <View style={styles.carouselLabelContainer}>
          <Text style={styles.carouselLabel}>Albümler</Text>
        </View>
        <Carousel
          ref={refSmall}
          width={width * 0.44}
          height={160}
          data={songs}
          loop={true}
          pagingEnabled={true}
          style={styles.carousel}
          renderItem={({ index }) => (
            <View style={styles.carouselItem}>
              <Image
                source={{ uri: songs[index].songPhoto }}
                style={{ width: 160, height: 120, borderRadius: 4 }}
              />
              <Text style={styles.artist}>{songs[index].artist}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.carouselContainer}>
        <View style={styles.carouselLabelContainer}>
          <Text style={styles.carouselLabel}>Oynatma Listesi</Text>
        </View>
        <Carousel
          ref={refSmaller}
          width={width * 0.32}
          height={160}
          data={musicGenres}
          loop={true}
          pagingEnabled={true}
          style={[styles.carousel, styles.shadowEffect]}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.carouselItem,
                {
                  backgroundColor: item.color,
                  borderWidth: 1,
                  borderColor: "#ffcd00",
                  transform: [{ scale: 0.9 }],
                  width: 120,
                  height: 100,
                  borderRadius: 4,
                },
              ]}
            >
              <TouchableOpacity
                onPress={() =>
                  item.title === "Metal" &&     navigation.navigate("Songs")
                }
              >
                <Text style={styles.itemText}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={styles.emptyBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#131312",
    paddingTop: 50,
    alignItems: "center", // Tüm içerikleri yatayda ortalar
  },
  logo: {
    width: 100, // Logo boyutunu kontrol edebiliriz
    height: 100,
    resizeMode: "contain",
  },
  searchbar: {
    marginBottom: 20,
    borderRadius: 80,
    backgroundColor: "#ffcd00",
    width: "100%", // Ekranı kaplaması için
  },
  carouselContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
    marginBottom: 20, // Bölümler arası boşluk
  },
  carousel: {
    overflow: "visible",
  },
  artist: {
    fontSize: 13,
    color: "#FFFFFF",
    fontWeight: "600",
    textAlign: "center",
    marginTop: 5,
  },
  image: {
    height: 150,
    width: 250,
    borderRadius: 4,
    resizeMode: "cover",
  },
  emptyBox: {
    flex: 1,
  },
  carouselLabelContainer: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  carouselLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#EAEAEA",
    textAlign: "left",
  },
  carouselItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    padding: 5,
  },
  artistName: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
  },
  songName: {
    fontSize: 11,
    color: "#fff",
  },
  shadowEffect: {
    shadowColor: "#000",
    shadowOffset: {
      width: 15,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
  },
  itemText: {
    color: "#ffcd00",
  },
  button: {
    padding: 20,
    borderRadius: 10,
  },
});

export default Home;
