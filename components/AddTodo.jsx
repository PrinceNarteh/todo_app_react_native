import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const AddTodo = ({addTodo}) => {
  const [text, setText] = useState("")

  const changeHandler = (val) => setText(val)

  const handleAddTodo = () => {
    addTodo(text)
    setText("")
  }
  
  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder="New todo..."
        value={text}
        onChangeText={changeHandler}
      />
      <Button title="Add Todo" onPress={() => handleAddTodo()} color="coral" />
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
  }
})
