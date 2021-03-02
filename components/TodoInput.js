import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput} from 'react-native';

const TodoInput = props => {

  const [enteredTodo, setEnteredTodo] = useState('');

  const todoInputhandler = (enteredText) => {
    setEnteredTodo(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Add a Todo'
        style={styles.input}
        onChangeText={todoInputhandler}
        value={enteredTodo}
      />
      <Button 
        color='dimgrey'
        title='Add'
        onPress={props.onAddTodo.bind(this, enteredTodo)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  }
   
});

export default TodoInput;