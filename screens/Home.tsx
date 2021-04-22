import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../components/Button/Button";
import RoundedButton from "../components/Button/RoundedButton";
import Clock from "../components/Clock/Clock";
import GlobalStyles, { colors } from "../components/Layout/GlobalStyles";
import PlayContent from "../components/Music/PlayContent";
import { StateContext } from "../storage/StateContext";

const Home = () => {
  const [tab1, setTab1] = React.useState<boolean>(true);
  const [tab2, setTab2] = React.useState<boolean>(false);
  const [tab3, setTab3] = React.useState<boolean>(false);

  const {colors} = useTheme()

  const changeTab = (num: number) => {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    num === 1 ? setTab1(true) : num === 2 ? setTab2(true) : setTab3(true);
  };

  const styles = StyleSheet.create({
    mainContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      flex: 1
    },
    clock: {
      backgroundColor: colors.primary,
      height: 220,
      width: 220,
      borderRadius: 500,
    },
    tabs: {
      borderColor: colors.border,
      borderWidth: 1,
      backgroundColor: colors.card,
      width: "90%",
      height: 50,
      borderRadius: 200,
      padding: 5,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      overflow: "hidden",
      marginTop: 30,
    },
    contentPlay: {
      backgroundColor: colors.card,
      height: 118,
      borderRadius: 5,
      marginTop: 15,
    },
  });

  return (
      <View style={[GlobalStyles.container]}>
        <View style={styles.mainContent}>
          <Clock />
          <View style={styles.tabs}>
            <RoundedButton
              value="Focus"
              onPress={() => changeTab(1)}
              active={tab1}
            />
            <RoundedButton
              value="Short Break"
              onPress={() => changeTab(2)}
              active={tab2}
            />
            <RoundedButton
              value="Long Break"
              onPress={() => changeTab(3)}
              active={tab3}
            />
          </View>
        </View>
        <View>
          {/* {console.log(React.useContext(StateContext).theme)} */}
          <PlayContent />
          <Button
            value="START"
            onPress={() => console.log("Main button pressed")}
          />
        </View>
      </View>
  );
};
export default Home;

