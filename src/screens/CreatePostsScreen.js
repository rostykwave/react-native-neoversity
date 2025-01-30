import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";

import { colors } from "../../styles/global";

const CreatePostsScreen = () => {
  const onPostPublish = () => {
    console.log("onPostPublish");
  };

  return (
    <View style={styles.container}>
      {/* Upload Photo Section */}
      <TouchableOpacity style={styles.photoContainer}>
        <View style={styles.photoPlaceholder}>
          <Ionicons name="camera-outline" size={32} color="#ccc" />
        </View>
      </TouchableOpacity>
      <Text style={styles.photoText}>Завантажте фото</Text>

      {/* Title Input */}
      <TextInput
        style={styles.input}
        placeholder="Назва..."
        placeholderTextColor="#aaa"
      />

      {/* Location Input */}
      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={20} color="#aaa" />
        <TextInput
          style={styles.locationInput}
          placeholder="Місцевість..."
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Publish Button */}
      <Button onPress={onPostPublish} buttonStyle={styles.disabledButton}>
        <Text style={[styles.baseText, styles.disabledButtonText]}>
          Опублікувати
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    marginRight: 24, // Balance for the back button
  },
  photoContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
  photoPlaceholder: {
    width: "100%",
    height: 200,
    backgroundColor: "#f4f4f4",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  photoText: {
    fontSize: 14,
    color: "#aaa",
    textAlign: "center",
    marginTop: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 8,
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 24,
  },
  locationInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    color: "#000",
  },
  disabledButton: {
    backgroundColor: colors.light_gray,
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: "center",
  },
  disabledButtonText: {
    color: colors.text_gray,
    textAlign: "center",
  },
  baseText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  publishButtonText: {
    color: colors.white,
    textAlign: "center",
  },
});

export default CreatePostsScreen;
