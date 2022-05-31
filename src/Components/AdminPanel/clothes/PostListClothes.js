import { List, Datagrid, DeleteButton, DateField, TextField, EditButton} from 'react-admin';

function PostListClothes (props){
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="price" />
                <TextField source="size" />
                <EditButton />
                <DeleteButton/>
            </Datagrid>
        </List>
    )
}
export default PostListClothes