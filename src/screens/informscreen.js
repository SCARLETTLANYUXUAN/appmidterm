import { Box } from '@gluestack-ui/themed';
import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { UserOutlined } from 'antd';
import { StyleSheet,View, Text,TouchableOpacity } from 'react-native';
const InformScreen= () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Box style={styles.box}>
            <Text style={styles.text}>
              UserXXXXXXX  昨天
              </Text>
              <Text>
                韓版高腰防走光半身百褶裙到貨了
                
            </Text>
        </Box>
        <Box style={styles.box}>
            <Text style={styles.text}>
              UserXXXXXXX  前天
              </Text>
              <Text>
                為您推薦....
                
            </Text>
        </Box>
        <Box style={styles.box}>
            <Text style={styles.text}>
              UserXXXXXXX  04-11
              </Text>
              <Text>
                "笑臉"
                
            </Text>
        </Box>
        <Box style={styles.box}>
            <Text style={styles.text}>
              UserXXXXXXX  04-11
              </Text>
              <Text>
                "笑臉"您好喔,麻煩您可以五星好評一下...
                
            </Text>
        </Box>
        <Box style={styles.box}>
            <Text style={styles.text}>
              UserXXXXXXX  04-11
              </Text>
              <Text>
              優選 週三免運日就是 要買 買 買 !
                
            </Text>
        </Box>
        
      </View>
    </View>
  );
}
// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
    
  },
  contentContainer: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    lineHeight: 25,
    shadowColor:'gray',
    padding:10,
    fontWeight:'bold',
  },
  box:{
    backgroundColor:'#b1eedf',
    marginBottom:10,
    padding:10,
  },
});
export default InformScreen;