import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const handlerInputNumber = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g), "");
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Comenzar juego</Text>
      <Card style={styles.inputContainer}>
        <Text>Elija un número</Text>
        {/* <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalization="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={2}
          onChangeText={handlerInputNumber}
          value={enteredValue}
        /> */}
        <View style={styles.buttonContainer}>
          <Button title="Limpiar" onPress={() => {}} />
          <Button title="Confirmar" onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    padding: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "blue",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  card: {
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.26,
    // elevation: 5,
    // borderRadius: 10,
    backgroundColor: "blue",
    color: "red",
  },
});

export default StartGameScreen;
