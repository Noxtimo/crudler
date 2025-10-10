import React from 'react';
import { ScrollView, StyleSheet, Pressable } from 'react-native';
import ModuleItem from './ModuleItem';

const ModuleList = ({ modules, onSelect }) => {
  return (
    <ScrollView style={styles.container}>
      {modules.map((module) => (
        <Pressable
          key={module.id}
          style={styles.item}
          onPress={() => onSelect(module)}
        >
          <ModuleItem module={{ title: module.name, lecturer: '' }} />
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
});

export default ModuleList;
