import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../styles/global";

const posts = [
  {
    id: "1",
    image: require("../../assets/forests.png"),
    title: "Ліс",
    location: "Ivano-Frankivsk Region, Ukraine",
  },
  {
    id: "2",
    image: require("../../assets/sunsets.png"),
    title: "Захід сонця",
    location: "Odesa Region, Ukraine",
  },
];

const PostsScreen = () => {
  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      {/* <Image source={{ uri: item.image }} style={styles.postImage} /> */}
      <Image source={item.image} style={styles.postImage} />
      <Text style={styles.postTitle}>{item.title}</Text>
      <View style={styles.postFooter}>
        <Ionicons name="chatbubble-outline" size={18} color="#aaa" />
        <Text style={styles.commentsCount}>0</Text>
        <Text style={styles.postLocation}>{item.location}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/profile_photo.png")}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>Natali Romanova</Text>
          <Text style={styles.profileEmail}>email@example.com</Text>
        </View>
      </View>

      {/* Posts */}
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        style={styles.postList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    // padding: 16,
    marginTop: 32,
    backgroundColor: colors.white,
    // borderBottomWidth: 1,
    // borderBottomColor: "#eee",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "600",
  },
  profileEmail: {
    fontSize: 14,
    color: "#777",
  },
  postList: {
    flex: 1,
  },
  postContainer: {
    marginTop: 32,
    backgroundColor: colors.white,
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
    padding: 8,
  },
  postFooter: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  commentsCount: {
    marginHorizontal: 8,
    fontSize: 14,
    color: "#aaa",
  },
  postLocation: {
    fontSize: 14,
    color: colors.black_primary,
    textDecorationLine: "underline",
  },
});

export default PostsScreen;
