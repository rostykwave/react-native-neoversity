import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { colors } from "../../styles/global";

const ProfilePhoto = ({ onPress }) => {
  return (
    <View style={styles.profilePicContainer}>
      {/* <Image
        source={require("../../assets/profile_photo.png")}
        resizeMode="cover"
        style={styles.image}
      /> */}
      <View style={styles.profilePlaceholder} />
      <TouchableOpacity style={styles.addButton} onPress={onPress}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePicContainer: {
    alignItems: "center",
    marginBottom: 20,
    position: "absolute",
    top: -60,
    left: 128,
  },
  profilePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: colors.light_gray,
  },
  addButton: {
    position: "absolute",
    bottom: 14,
    right: -10,
    borderWidth: 1,
    borderColor: colors.orange,
    width: 25,
    height: 25,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: colors.orange,
    fontSize: 20,
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    borderRadius: 16,
  },
});

export default ProfilePhoto;
