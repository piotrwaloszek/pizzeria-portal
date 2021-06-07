import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from '../src/components/views/Dashboard/Dashboard';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import Weiter from '../src/components/views/Weiter/Weiter';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#2B4C6F'},
    //secondary: { main: '#11cb5f'},
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Tables}>
              </Route>
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={Tables}>
              </Route>
              <Route exact path={process.env.PUBLIC_URL + '/weiter'} component={Weiter} />
              <Route exact path={process.env.PUBLIC_URL + '/weiter/order/new'} component={Weiter} />
              <Route exact path={process.env.PUBLIC_URL + '/weiter/order/:id'} component={Weiter}>
                <Weiter />
                <p>123abc</p>
              </Route>
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
