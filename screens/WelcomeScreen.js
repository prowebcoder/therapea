// screens/WelcomeScreen.js
import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(0); // Initial value for opacity: 0

  useEffect(() => {
    // Start the animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      // After the animation, hide the splash screen
      SplashScreen.hideAsync();
    });
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/logo.png")}
        style={[styles.logo, { opacity: fadeAnim }]}
      />
      <Animated.Text style={[styles.welcomeText, { opacity: fadeAnim }]}>
        Welcome to Therapeia!
      </Animated.Text>
      <Animated.Text style={[styles.subtitleText, { opacity: fadeAnim }]}>
        Step Closer to Self-Care
      </Animated.Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.buttonText}>Sign up with Email</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f4e3", // Change this to your desired color
  },
  logo: {
    width: 300,
    height: 70,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
    width: "80%",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
  },
});
