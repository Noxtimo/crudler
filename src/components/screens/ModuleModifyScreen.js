import { useState } from 'react';
import Screen from '../layouts/Screen';
import Icons from '../UI/Icons';
import { Button, ButtonTray } from '../UI/Button';
import { Form, FormItem } from '../UI/Form';

export default function ModuleModifyScreen({ navigation, route }) {
  // Initialisations ---------------------
  const { module, onModify } = route.params;

  // State -------------------------------
  const [currentModule, setCurrentModule] = useState(module);

  // Handlers ----------------------------
  const handleChange = (field, value) => setCurrentModule({ ...currentModule, [field]: value });
  const handleModify = () => onModify(currentModule);
  const handleCancel = () => navigation.goBack();

  // View --------------------------------
  return (
    <Screen>
      <Form>
        <FormItem
          label='Module code'
          value={currentModule.ModuleCode}
          onChangeText={(value) => handleChange('ModuleCode', value)}
        />
        <FormItem
          label='Module name'
          value={currentModule.ModuleName}
          onChangeText={(value) => handleChange('ModuleName', value)}
        />
        <FormItem
          label='Module level'
          value={currentModule.ModuleLevel}
          onChangeText={(value) => handleChange('ModuleLevel', value)}
        />
        <FormItem
          label='Module leader'
          value={currentModule.ModuleLeaderName}
          onChangeText={(value) => handleChange('ModuleLeaderName', value)}
        />
        <FormItem
          label='Module image URL'
          value={currentModule.ModuleImage}
          onChangeText={(value) => handleChange('ModuleImage', value)}
        />
      </Form>

      <ButtonTray>
        <Button label='Save' icon={<Icons.Save />} onClick={handleModify} />
        <Button label='Cancel' icon={<Icons.Close />} onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
}
 
