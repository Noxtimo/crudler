import { StyleSheet, View, Text } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import { Button, ButtonTray } from '../../UI/Button';
import Icons from '../../UI/Icons';

export default function ModuleView({ module, onDelete, onModify }) {
  return (
    <View style={styles.container}>
      <FullWidthImage source={{ uri: module.ModuleImage }} style={styles.image} />
      <View style={styles.infoTray}>
        <Text style={styles.boldText}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
        <Text style={styles.text}>Level {module.ModuleLevel}</Text>
        <Text style={styles.text}>
          {module.ModuleLeaderName} <Text style={styles.dimText}>(Module leader)</Text>
        </Text>
      </View>
      <ButtonTray>
        <Button label='Modify' icon={<Icons.Edit />} onClick={onModify} />
        <Button label='Delete' icon={<Icons.Delete />} onClick={onDelete} />
      </ButtonTray>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  image: {
    borderRadius: 3,
  },
  infoTray: {
    gap: 5,
  },
  text: {
    fontSize: 16,
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dimText: {
    color: 'grey',
  },
});