import { Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import Screen from '../layouts/Screen';
import { modules as initialModules } from '../../data/modules';

export default function App() {
  // Initialisations ---------------------
  const modules = initialModules;
  const handleSelect = (module) => {
    alert(`${module.ModuleCode} ${module.ModuleName}`);
  };

  return (
    <Screen>
      <ScrollView style={styles.container}>
        {modules.map((module) => (
          <Pressable
            key={module.ModuleCode}
            style={styles.item}
            onPress={() => handleSelect(module)}
          >
            <Text style={styles.text}>
              {module.ModuleCode} {module.ModuleName}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </Screen>
  );
}
 
const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  text: {
    fontSize: 16,
  },
});

