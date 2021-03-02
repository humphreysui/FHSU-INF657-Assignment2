import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {

  const [myTodos, setMyTodos] = useState([]);

  const addTodoHandler = todoName =>{
     
    setMyTodos((currentTodos) => [
      ...currentTodos, 
      { uid: Math.random().toString(), value: todoName}
    ]);
  };

  const removeTodoHandler = (todoId) => {
    setMyTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.uid !== todoId);
    });
  };

  return (
    <View style={styles.screen}>

      <Text>My ToDo List</Text> 

      <TodoInput onAddTodo = {addTodoHandler}/>
      
      <FlatList
        keyExtractor = {(item, index) => item.uid} 
        data={myTodos} 
        renderItem={(itemData) => (
          <TodoItem 
            id = {itemData.item.uid}
            onDelete = {removeTodoHandler}
            title = {itemData.item.value}
          />
        )}
      />
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
   screen:{
    padding:50,
   }
   
});