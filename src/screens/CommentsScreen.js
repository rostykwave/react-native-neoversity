import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const CommentsScreen = ({ navigation, route }) => {
  const imageSrc = route?.params?.imageSrc;

  const [comments, setComments] = useState([
    {
      id: "1",
      text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
      time: "09 червня, 2020 | 08:40",
      avatar: require("../../assets/avatar1.png"),
    },
    {
      id: "2",
      text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
      time: "09 червня, 2020 | 09:14",
      avatar: require("../../assets/avatar2.png"),
    },
    {
      id: "3",
      text: "Thank you! That was very helpful!",
      time: "09 червня, 2020 | 09:20",
      avatar: require("../../assets/avatar1.png"),
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.commentContainer}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.commentContent}>
        <Text style={styles.commentText}>{item.text}</Text>
        <Text style={styles.commentTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image source={imageSrc} style={styles.image} />

      {/* Comments */}
      <FlatList
        data={comments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.commentsList}
      />

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Коментувати..." style={styles.input} />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>↑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100% ",
    paddingHorizontal: 16,
    marginTop: 42,
    borderRadius: 8,
    height: 200,
    resizeMode: "cover",
  },
  commentsList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  commentContainer: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "flex-start",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 10,
  },
  commentText: {
    fontSize: 14,
    marginBottom: 5,
  },
  commentTime: {
    fontSize: 12,
    color: "#888",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
  },
  sendButton: {
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6600",
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CommentsScreen;
