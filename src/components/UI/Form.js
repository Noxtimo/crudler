import { View, Text, TextInput, StyleSheet } from 'react-native';

const Form = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const FormItem = ({ label, value, onChangeText, ...rest }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.itemTextInput}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    marginBottom: 16,
  },
  itemLabel: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemTextInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
});

export { Form, FormItem };
