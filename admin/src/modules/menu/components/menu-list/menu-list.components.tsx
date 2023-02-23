import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const MenuList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <NumberField source="SKU" />
            <TextField source="title" />
            <TextField source="ingredients"/>
            <NumberField source="price" />
        </Datagrid>
    </List>
);