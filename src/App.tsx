import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBarComponent/SearchBar';
import MediaGrid from './Components/MediaGridComponent/MediaGrid';
import { IUserInput } from './Common/Interfaces';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "https://api.spacex.land"
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
    const [UserInput, setUserInput] = useState<IUserInput>({
        SearchQuery: "Mars",
        StartDate: new Date('2014-08-18T21:11:54'),
        EndDate: new Date('2018-08-18T21:11:54'),
    });
    function SetUserInput(a: IUserInput) {
        setUserInput(a);
    }

    return (
        <div className="App" >
            <ApolloProvider client={client}>
                <MuiThemeProvider theme={theme}>
                    <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)} />
                    <MediaGrid SearchQuery={UserInput.SearchQuery} StartDate={UserInput.StartDate} EndDate={UserInput.EndDate} />
                </MuiThemeProvider>
            </ApolloProvider>
        </div>
    );
}

export default App;