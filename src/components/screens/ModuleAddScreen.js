import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Screen from '../layouts/Screen';
import Icons from '../UI/Icons';
import { Button, ButtonTray } from '../UI/Button';

const defaultModule = {
  ModuleID: null,
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage: null,
};

export default function ModuleAddScreen({ navigation, route }) {
  // Initialisations ---------------------
  defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModule.ModuleImage = 'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg';

  const { onAdd } = route.params;

  // State -------------------------------
  const [module, setModule] = useState(defaultModule);

  // Handlers ----------------------------
  const handleChange = (field, value) => setModule({ ...module, [field]: value });
  const handleAdd = () => onAdd(module);
  const handleCancel = () => navigation.goBack();

  // View --------------------------------
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Module code</Text>
          <TextInput
            value={module.ModuleCode}
            onChangeText={(value) => handleChange('ModuleCode', value)}
            style={styles.itemTextInput}
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.itemLabel}>Module name</Text>
          <TextInput
            value={module.ModuleName}
            onChangeText={(value) => handleChange('ModuleName', value)}
            style={styles.itemTextInput}
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.itemLabel}>Module level</Text>
          <TextInput
            value={module.ModuleLevel}
            onChangeText={(value) => handleChange('ModuleLevel', value)}
            style={styles.itemTextInput}
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.itemLabel}>Module leader</Text>
          <TextInput
            value={module.ModuleLeaderName}
            onChangeText={(value) => handleChange('ModuleLeaderName', value)}
            style={styles.itemTextInput}
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.itemLabel}>Module image URL</Text>
          <TextInput
            value={module.ModuleImage}
            onChangeText={(value) => handleChange('ModuleImage', value)}
            style={styles.itemTextInput}
          />
        </View>
      </View>

      <ButtonTray>
        <Button label='Add' icon={<Icons.Add />} onClick={handleAdd} />
        <Button label='Cancel' icon={<Icons.Close />} onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
}

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
