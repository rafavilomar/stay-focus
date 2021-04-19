import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../components/Button/Button';
import RoundedButton from '../components/Button/RoundedButton';
import GlobalStyles, { colors } from '../components/Layout/GlobalStyles';
import { BigHeader } from '../components/Layout/Header';
import PlayContent from '../components/Music/PlayContent';

const Home = () => {

  const [tab1, setTab1] = React.useState<boolean>(true);
  const [tab2, setTab2] = React.useState<boolean>(false);
  const [tab3, setTab3] = React.useState<boolean>(false);

  const changeTab = (num: number) => {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    num === 1 ? setTab1(true) : num === 2 ? setTab2(true) : setTab3(true);
  };

    return(
        <View style={GlobalStyles.container}>
          {/* <StatusBar style="auto" /> */}
          <BigHeader />
          <View style={styles.mainContent}>
            <View style={styles.clock} />
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
          <PlayContent/>
          <Button
            value="START"
            onPress={() => console.log("Main button pressed")}
          />
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    mainContent: {
      display: "flex",
      alignItems: "center",
      height: 280,
      justifyContent: "space-between",
      marginTop: 25,
    },
    clock: {
      backgroundColor: "red",
      height: 220,
      width: 220,
      borderRadius: 500,
    },
    tabs: {
      backgroundColor: colors.backgorundSecondary,
      width: "100%",
      height: 50,
      borderRadius: 200,
      padding: 5,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      overflow: "hidden",
    },
    contentPlay: {
      backgroundColor: colors.backgorundSecondary,
      height: 118,
      borderRadius: 5,
      marginTop: 15,
    },
  });