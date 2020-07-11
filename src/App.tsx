import React from "react";
import {
 HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Tags from './views/Tag';
import Money from './views/Money';
import Statistics from './views/Statistics';
import NoMatch from './views/NotFind';
import styled from 'styled-components';
import TagEdit from './views/TagEdit';
const AppWrapper=styled.div`
color:#333333;
`


export default function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route  exact path="/tags" >
            <Tags />
          </Route>
            <Route  exact path="/tags/:tag">
              <TagEdit />
          </Route>
          <Route  exact path="/money">
            <Money />
          </Route>
          <Route exact  path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from='/' to="/money"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>

  );
}



