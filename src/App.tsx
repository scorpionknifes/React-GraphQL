import React from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { MediaGrid, AppBar } from './Components';
import { JobsProvider } from './Contexts/JobsContext';

const client = new ApolloClient({
    uri: "https://api.graphql.jobs"
});

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
})

const App = () => {
    return (
        <div className="App" >
            <ApolloProvider client={client}>
                <JobsProvider>
                    <MuiThemeProvider theme={theme}>
                        <AppBar />
                        <MediaGrid />
                    </MuiThemeProvider>
                </JobsProvider>
            </ApolloProvider>
        </div>
    );
}

export default App;