import { Text, Pressable, StyleSheet, View } from 'react-native';

export const Button = ({ label, onClick }) => {
  return (
    <Pressable onPress={onClick} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export const ButtonTray = ({ children }) => {
  return <View style={styles.buttonTray}>{children}</View>;
};

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'grey',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    flex: 1,
  },
  label: {
    fontSize: 16,
  },
  buttonTray: {
    flexDirection: 'row',
    gap: 15,
  },
});

