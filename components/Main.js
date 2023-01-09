import {useEffect, useState, Fragment} from 'react';
import TopBar from "./TopBar";
import {StyleSheet, Text, View} from "react-native";
import ExcuseCard from "./ExcuseCard";
import {Button} from "react-native-paper";
import {StatusBar} from "expo-status-bar";
import {useQuery} from "react-query";
import {getRandomExcuse} from "./api/ScapegoatApi";

const Main = () => {
  const [excuse, setExcuse] = useState(null);

  const { data, isFetching, isLoading, error, status, refetch } = useQuery(
    "excuse",
    () => getRandomExcuse(),
    { keepPreviousData: false }
  );

  const shuffleExcuse = () => {
    refetch().then(() => {
      setExcuse(data.excuse);
    });
  }

  const copyExcuse = () => {
    console.log('copied excuse');
  }

  useEffect( () => {
    // setExcuse(data.excuse);
  }, []);


  let content;
  if (isFetching || isLoading) {
    content = <Text>Loading...</Text>
  } else {
    content = <ExcuseCard excuse={data.excuse}/>
  }

  return (
    <Fragment>
      <TopBar title={'Excuse Generator'}/>
      <View style={styles.main}>
        <View>
          {content}
        </View>
        <View style={styles.container}>
          <Button style={styles.actionButton} icon={'shuffle-variant'} mode={'text'}
                  onPress={shuffleExcuse}>Shuffle</Button>
          <Button style={styles.actionButton} icon={'content-copy'} mode={'contained'} onPress={copyExcuse}>Copy
            Excuse</Button>
          <StatusBar style='light'/>
        </View>
      </View>
    </Fragment>
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

export default Main;
