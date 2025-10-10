import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ModuleItem = ({ module }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{module.title}</Text>
      <Text style={styles.lecturer}>{module.lecturer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lecturer: {
    fontSize: 14,
    color: '#666',
  },
});

export default ModuleItem;
