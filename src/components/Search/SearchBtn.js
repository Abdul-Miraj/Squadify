import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const searchBtn = props => {
    return (
      <Icon.Button
        name="ios-search"
        backgroundColor="transparent"

        onPress={props.onModalOpenHandler}
      />
    );
};

export default searchBtn;