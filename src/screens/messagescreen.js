import React from "react";
import { Box } from "@gluestack-ui/themed";
import MessageListItem from "../components/MessageListItem";

const MessageScreen = () => {
  return (
    <Box mt="$1" borderBottomWidth="$1" borderColor="#4D7037"  >
      
      <MessageListItem
        title="系統通知" />
      <MessageListItem title="商場更新" />
      
    </Box>
  );
};
