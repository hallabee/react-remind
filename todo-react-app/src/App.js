//import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import React, {useState} from 'react';
import { Container, List, Paper } from '@mui/material';
import AddTodo from './AddTodo';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    item.id = "ID-" + items.length; //key를 위한 id
    item.done = false; //done 초기화
    //업데이트는 반드시 setItems로 하고 새 배열을 만들어야 한다
    setItems([...items, item]);
    console.log("items : ", items);
  };

  const deleteItem = (item) => {
    //삭제할 아이템 찾기
    const newItems = items.filter(e => e.id !== item.id);
    // 삭제할 아이템을 제외한 아이템 재배열 후 저장
    setItems([...newItems]);
  }

  const editItem = () => {
    setItems([...items]);
  }

  let todoItems =items.length > 0 && (
    <Paper style={{margin: 16}}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id} deleteItem={deleteItem} editItem={editItem}/>
        ))}
      </List>
    </Paper>
  );

  return (
    <div className='App'>
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/>
        <div className='TodoList'>{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
