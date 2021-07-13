import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, StyleSheet, View, SafeAreaView, Alert } from "react-native";
import uuid from "react-native-uuid";
import AddTodo from "./components/AddTodo";

// components
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  // cSPELL:DISABLE
  const [todos, setTodos] = useState([
    {
      key: "1",
      text: "Read my Bible",
    },
    {
      key: "2",
      text: "Make my prayers",
    },
    {
      key: "3",
      text: "Take my bath",
    },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));
  };

  const addTodo = (text) => {
    if (text.length > 3) {
      const newTodo = {
        key: uuid.v4(),
        text,
      };
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
    } else {
      Alert.alert("OOPS!", "Todos must be at least 3 charaters long");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTodo={addTodo} />
          <View>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
