import { ScrollView, Pressable, StyleSheet } from 'react-native';
import ModuleItem from './ModuleItem';

export default function ModuleList({ modules, onSelect }) {
  return (
    <ScrollView style={styles.container}>
      {modules.map((module) => (
        <Pressable
          key={module.ModuleID}
          onPress={() => onSelect(module)}
          style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
        >
          <ModuleItem module={module} />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressable: {
    backgroundColor: '#fff',
  },
  pressed: {
    backgroundColor: '#f0f0f0',
  },
});
