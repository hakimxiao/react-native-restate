 import { Text, View } from "react-native";
 import {Link} from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/sign-in">Sign In page</Link>
      <Link href="/explore">Explore page</Link>
      <Link href="/profile">profile page</Link>
      <Link href="/properties/1">property page</Link>
    </View>
  );
}
