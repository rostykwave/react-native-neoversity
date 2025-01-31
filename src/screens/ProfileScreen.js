import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const { width: SCREEN_WIDTH } = Dimensions.get("screen");
import { colors } from "../../styles/global";

const posts = [
  {
    id: "1",
    image: require("../../assets/forests.png"),
    title: "Ліс",
    comments: 8,
    likes: 153,
    location: "Ukraine",
  },
  {
    id: "2",
    image: require("../../assets/sunsets.png"),
    title: "Захід на Чорному морі",
    comments: 3,
    likes: 200,
    location: "Ukraine",
  },
  {
    id: "3",
    image: require("../../assets/old_house.png"),
    title: "Старий будиночок у Венеції",
    comments: 50,
    likes: 200,
    location: "Italy",
  },
];

const ProfileScreen = () => {
  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Image source={item.image} style={styles.postImage} />
      <Text style={styles.postTitle}>{item.title}</Text>
      <View style={styles.postFooter}>
        <View style={styles.postInfo}>
          <Ionicons name="chatbubble-outline" size={16} color="#ff5722" />
          <Text style={styles.postStats}>{item.comments}</Text>
          <Ionicons name="heart-outline" size={16} color="#ff5722" />
          <Text style={styles.postStats}>{item.likes}</Text>
        </View>
        <Text style={styles.postLocation}>{item.location}</Text>
      </View>
    </View>
  );

  return (
    <>
      <Image
        source={require("../../assets/background_photo.png")}
        style={styles.headerBackground}
      />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: "https://example.com/profile.jpg" }}
              style={styles.profileImage}
            />
            <Ionicons
              name="add-circle-outline"
              size={24}
              color="#ff5722"
              style={styles.editIcon}
            />
          </View>
          <Text style={styles.profileName}>Natali Romanova</Text>
        </View>

        {/* Posts List */}
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.postsList}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // paddingTop: 92,
    width: SCREEN_WIDTH,
    height: "68%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // paddingHorizontal: 16,
    paddingTop: 60,
  },
  header: {
    position: "relative",
    alignItems: "center",
    marginBottom: 16,
  },
  headerBackground: {
    // width: "100%",
    // height: 150,
    // resizeMode: "cover",
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },
  profileContainer: {
    position: "absolute",
    bottom: -40,
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: -10,
  },
  profileName: {
    marginTop: 48,
    fontSize: 20,
    fontWeight: "600",
  },
  postsList: {
    paddingBottom: 100,
  },
  postContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  postImage: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 8,
    marginHorizontal: 12,
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  postInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  postStats: {
    marginHorizontal: 4,
    fontSize: 14,
    color: "#555",
  },
  postLocation: {
    fontSize: 14,
    color: "#aaa",
  },
});

export default ProfileScreen;
