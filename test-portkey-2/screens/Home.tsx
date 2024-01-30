import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { portkey } from "@portkey/react-native-sdk";
import { useIsFocused } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import { useUserStore } from "../stores";
import { axios } from "../api";

export function Home() {
  const localLogout = useUserStore((state) => state.logout);
  const isFocused = useIsFocused();

  const getSomething = useCallback(async () => {
    try {
      console.log("get-something");
      await axios.get("/get-something");
    } catch (error) {
      console.log(error);

      localLogout();
    }
  }, []);

  useEffect(() => {
    isFocused && getSomething();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="get wallet info"
        onPress={async () => {
          await portkey.login();
          getSomething();
        }}
      />
      <Button
        title="exists wallet"
        onPress={async () => {
          await portkey.exitWallet();
          localLogout();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
