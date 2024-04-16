

import React from 'react';
import { Box, HStack, VStack, Text, Image, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
const ProductInform = ({ album }) => {
  const { navigate } = useNavigation();
  return (
    <Box p={10} padding={20} marginX={1} marginBottom={2} borderRadius={3} shadow={2} display='flex' justifyContent="space-between">
      <Box bg="#c6f7c2" >
        <Pressable display='flex' flexDirection='row'
          onPress={() => navigate('Detail', album)}
        >
            <Image
              style={{ width: 150, height: 150 }}
              source={{ uri: album.image }}
              alt="album"
            /> 
            <HStack bg='#c6f7c2'>
            <VStack margin={2} padding={2}>
            <Text bold fontSize={20}>{album.title} </Text>
            <Text>{album.artist}</Text>
          </VStack>
      </HStack>           
        </Pressable>
      </Box>   
    </Box>
  )};

export default ProductInform;

/*const Productinform = (props) => {
    const {  title, artist, image } = props.album;
    return (
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: image
              
            }}
          />
        </View>
          <View style={styles.headerContentStyle}>
            <Text>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </View>
        
      </View>
    );
  }
  const styles = StyleSheet.create({
    thumbnailContainerStyle: {
      flexDirection: "row",
      justifyContent: "flex-start"
    },
    
    headerContentStyle: {
      flexDirection: "column",
      justifyContent: "space-around",
      paddingLeft: 10
    },
    cardContainerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: "#ddd",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
    },
    cardSectionStyle: {
      padding: 5,
      backgroundColor: "#fff",
      borderColor: "#ddd",
      borderBottomWidth: 1
    },
    imageStyle: {
      height: 300,
      width: null
    }
  });
  
  export default Productinform;*/