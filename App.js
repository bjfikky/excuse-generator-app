import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, Button } from "react-native-paper";
import TopBar from "./components/TopBar.js";
import ExcuseCard from "./components/ExcuseCard";
import { useEffect, useState } from "react";

export default function App() {
  const [excuse, setExcuse] = useState(null);

  const shuffleExcuse = () => {
    console.log('shuffled');
  }

  const copyExcuse = () => {
    console.log('copied excuse');
  }

  useEffect(() => {
    const excuseText = 'This is going to sound crazy but' +
      ' a man with six fingers on his right hand' +
      ' poured lemonade in my gas tank.';

    setExcuse(excuseText);
  }, []);

  return (
    <PaperProvider>
      <TopBar title={'Excuse Generator'}/>
      <View style={styles.main}>
        <View>
          <ExcuseCard excuse={excuse}/>
        </View>
        <View style={styles.container}>
          <Button style={styles.actionButton} icon={'shuffle-variant'} mode={'text'} onPress={shuffleExcuse}>Shuffle</Button>
          <Button style={styles.actionButton} icon={'content-copy'} mode={'contained'} onPress={copyExcuse}>Copy Excuse</Button>
          <StatusBar style='light' />
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    width: '70%',
    marginTop: 40,
  },
  main: {
    marginTop: 50,
    marginBottom: 90,
    marginHorizontal: 30,
    flex: 2,
    justifyContent: "space-between"
  }
});
