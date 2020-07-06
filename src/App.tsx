import React from "react";
import {
 HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import styled from 'styled-components';
import Nav from './components/Nav';
const Wrapper=styled.div`

height: 100vh;
display: flex;
flex-direction: column;
`
const Main=styled.main`

flex-grow: 1;
overflow: auto;
`

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Redirect exact from='/' to="/money"/>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
     <Nav/>

      </Wrapper>

    </Router>
  );
}
function NoMatch(){
  return <div>你输入的地址不存在，请重新输入</div>
}
function Statistics() {
  return <h2>statistics</h2>;
}

function Tags() {
  return <h2>tag</h2>;
}

function Money() {
  return <h2>money</h2>;
}