import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { Box } from "@gluestack-ui/themed";
import ListItem from '../component/ListItem';
const SettingScreen= ({ navigation }) => (
  <Box mt="$1" borderBottomWidth="$1" backgroundColor='#68d8a2'  >
      
      
      <ListItem title="通知設定" backgroundColor='#68d8a2'
        destination="DisplayMessage"
      />
      <ListItem title="顯示設定" backgroundColor='#68d8a2'
        destination="DisplaySetting"
        />
        <ListItem title="賬號設定" backgroundColor='#68d8a2'
        destination="AccountSetting"
        />
    </Box>
);
export default SettingScreen;