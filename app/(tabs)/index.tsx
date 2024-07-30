import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.button_list}>
        <Link href="/exercise" asChild>
          <Text style={styles.title}>Exercise</Text>
        </Link>
        <Link href="/nutrition" asChild>
          <Text style={styles.title}>Nutrition</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    borderRadius: 15
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button_list: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10
  }
});
