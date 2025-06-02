import React, {useState} from 'react';
import { ListItem, ListItemText, InputBase, Checkbox, IconButton } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';

const Todo = (props) => {
    const [item, setItem] = useState(props.item);
    const deleteItem = props.deleteItem;
    //deleteEventHandler
    const deleteEventHandler = () => {
        deleteItem(item);
    };
    const [readOnly, setReadOnly] = useState(true);
    //turnOffReadOnly
    const turnOffReadOnly = () => {
        setReadOnly(false);
    };
    //turnOnReadOnly
    const turnOnReadOnly = (e) => {
        // if(e.key === "Enter"){
        //     setReadOnly(true);
        // }
        if(e.key === 'Enter' && readOnly === false) {
            setReadOnly(true);
            editItem(item);
        }
    };
    const editItem = props.editItem;
    const editEventHandler = (e) => {
        // item.title = e.target.value;
        // editItem();
        setItem({...item, title: e.target.value});
    };
    const checkboxEventHandler = (e) => {
        setItem({...item, done: e.target.checked});
        editItem(item);
    };
    return(
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHandler}/>
            <ListItemText>
                <InputBase
                inputProps={{"aria-label" : "naked", readOnly: readOnly}}
                onClick={turnOffReadOnly}
                onKeyDown={turnOnReadOnly}
                onChange={editEventHandler}
                type='checkbox'
                id={item.id}
                name={item.id}
                value={item.title}
                multiline={true}
                fullWidth={true}
                />
            </ListItemText>
            <ListItem
                secondaryAction={
                    <IconButton aria-label='Delete Todo' onClick={deleteEventHandler}>
                        <DeleteOutlined />
                    </IconButton>
                }
            >
            </ListItem>
        </ListItem>
    );
};

export default Todo;