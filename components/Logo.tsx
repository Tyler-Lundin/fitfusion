import { StyleSheet, View } from 'react-native';
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { Text } from "./Themed";
import { FasterText } from './StyledText';


export default function Logo(){
  return (
    <Link href="/" asChild>
      <Pressable>
        {({pressed}) => ( <>
          <View style={styles.circle}/>
          <FasterText style={[styles.logo, {opacity: pressed ? 50 : 100}]}> FIT </FasterText>
        </>)}
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  logo:{
    letterSpacing: -5,
    fontSize: 45,
    paddingHorizontal: 20,
    color: 'rgb(255,50,50)',
  },
  circle: {
    borderRadius: 100,
    borderColor: 'rgb(255,50,50)',
    borderWidth: 1,
    position: "absolute",
    width: 52,
    height: 52,
    left: 16
  }
});
