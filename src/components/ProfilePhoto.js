import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../../styles/global";

const ProfilePhoto = ({ onPress }) => {
  return (
    <View style={styles.profilePicContainer}>
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
});

export default ProfilePhoto;
