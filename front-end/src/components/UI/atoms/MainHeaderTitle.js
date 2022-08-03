import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "../../../styles/AnimalsListStyle";
import { useSelector } from "react-redux";
export function MainHeaderTitle({ title, subtitle, navigation, nav }) {
  const { userType } = useSelector((state) => state.user.user);
  return (
    <View style={{ flexDirection: "column", paddingTop: 20 }}>
      <Text style={styles.subTitle}>{subtitle}</Text>
      <View style={styles.bottomTitle}>
        <Text style={styles.titles}>{title}</Text>
        {userType == 2 ? (
          <TouchableHighlight
            underlayColor={"#307A55"}
            onPress={() => navigation.navigate(nav)}
            style={styles.AddAnimalButton}
          >
            <Text style={styles.plus}>+</Text>
          </TouchableHighlight>
        ) : null}
      </View>
    </View>
  );
}
