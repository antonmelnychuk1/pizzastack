import { Admin, DataProvider, Loading, Resource} from "react-admin";
import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import buildHasuraProvider from 'ra-data-hasura';
import { MenuList } from './modules/menu/components/menu-list/menu-list.components';
import { MenuEdit } from "./modules/menu/components/menu-edit/menu-edit.components";
import { MenuCreate } from "./modules/menu/components/menu-create/menu-create.components";

export const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(null);
  useEffect (() => {
    const buildDataProvider = async () => {
      const dp = await buildHasuraProvider({
        clientOptions: {
          uri: 'http://localhost:8080/v1/graphql',
        },
      });
      setDataProvider(dp);
    };
    buildDataProvider();
  }, []);

  if(!dataProvider) {
    return <Loading />;
  } 
  return (
    <>
      <CssBaseline />
      <Admin dataProvider={dataProvider}>
        <Resource 
          name="menu" 
          list={MenuList} 
          edit={MenuEdit} 
          create={MenuCreate} 
        />
      </Admin>
    </>
  );
};

export default App;
