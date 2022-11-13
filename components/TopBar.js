import { Appbar, Text } from 'react-native-paper';
import { StyleSheet } from "react-native";

const TopBar = ({title}) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={<Text style={styles.title}> {title} </Text>} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 22,
  },
});

export default TopBar;