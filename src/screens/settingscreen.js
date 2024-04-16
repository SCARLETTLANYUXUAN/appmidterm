import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { Box } from "@gluestack-ui/themed";
import ListItem from '../component/ListItem';
const SettingScreen= ({ navigation }) => (
  <Box mt="$1" borderBottomWidth="$1" borderColor="#4D7037"  >
      
      <ListItem
        title="用戶設定" 
        destination="DisplayAccount"
        />
      <ListItem title="通知設定" 
        destination="DisplayMessage"
      />
      <ListItem title="顯示設定" 
        destination="DisplaySetting"
        />
    </Box>
);
export default SettingScreen;