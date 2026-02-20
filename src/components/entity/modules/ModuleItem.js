import { View, Text, StyleSheet } from 'react-native';

export default function ModuleItem({ module }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>
        {module.ModuleCode} {module.ModuleName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  itemText: {
    fontSize: 16,
  },
});
