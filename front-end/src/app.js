import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppSections from './views/partials/app-sections';
import SearchForm from './views/search-form';
import FlightResults from './views/flight-results';

const App = () => {
    
    return (
        <React.Fragment>
            <AppSections.AppHeader />
            <AppSections.AppMain>
            <Switch>
            <Route path="/" exact><Redirect to="/search" /></Route>
                <Route path="/search" component={SearchForm} exact ></Route>
                <Route path="/flight-results" component={FlightResults} exact ></Route>
            { /* <Route path="/" exact><Redirect to="/login" /></Route>
                <Route path="/login" component={LoginPage} exact></Route>
                <Route path="/dashboard" component={DashboardPage} exact></Route> */ }
            </Switch>
            </AppSections.AppMain>
            <AppSections.AppFooter />
        </React.Fragment>
    )
}

export default App;

