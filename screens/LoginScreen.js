// screens/LoginScreen.js
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>Personal Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Corporate Login</Text>
      </TouchableOpacity>

      <View style={styles.privacyContainer}>
        <Image
          source={require("../assets/icon.png")}
          style={styles.privacyIcon}
        />
        <Text style={styles.privacyText}>
          We value your Privacy{"\n"}We will not sell, distribute, or lease your
          Personal information to any third parties unless you consent, or
          unless such disclosure or use is required by law.
        </Text>
        <TouchableOpacity style={styles.understoodButton}>
          <Text style={styles.understoodButtonText}>Understood</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f4e3", // Match the background color of the welcome screen
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: "#000",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  privacyContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  privacyIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  privacyText: {
    textAlign: "center",
    marginBottom: 20,
  },
  understoodButton: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
  },
  understoodButtonText: {
    fontSize: 16,
  },
});
