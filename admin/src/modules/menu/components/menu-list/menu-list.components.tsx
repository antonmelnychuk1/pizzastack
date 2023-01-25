import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const MenuList = () => (
    <List>
        <Datagrid rowClick="edit">
            <NumberField source="SKU" />
            <TextField source="title" />
            <NumberField source="price" />
        </Datagrid>
    </List>
);