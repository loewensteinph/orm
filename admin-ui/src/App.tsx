import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { LossList } from "./loss/LossList";
import { LossCreate } from "./loss/LossCreate";
import { LossEdit } from "./loss/LossEdit";
import { LossShow } from "./loss/LossShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { MeasureList } from "./measure/MeasureList";
import { MeasureCreate } from "./measure/MeasureCreate";
import { MeasureEdit } from "./measure/MeasureEdit";
import { MeasureShow } from "./measure/MeasureShow";
import { SzenarioList } from "./szenario/SzenarioList";
import { SzenarioCreate } from "./szenario/SzenarioCreate";
import { SzenarioEdit } from "./szenario/SzenarioEdit";
import { SzenarioShow } from "./szenario/SzenarioShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ORM"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Loss"
          list={LossList}
          edit={LossEdit}
          create={LossCreate}
          show={LossShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="Measure"
          list={MeasureList}
          edit={MeasureEdit}
          create={MeasureCreate}
          show={MeasureShow}
        />
        <Resource
          name="Szenario"
          list={SzenarioList}
          edit={SzenarioEdit}
          create={SzenarioCreate}
          show={SzenarioShow}
        />
      </Admin>
    </div>
  );
};

export default App;
