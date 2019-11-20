import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader fixedDrawer>
        <Header title="Title">
            <Textfield
                value=""
                onChange={() => {}}
                label="Search"
                expandable
                expandableIcon="search"
            />
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a to="/">Resume</a>
                <a to="/">About Me</a>
                <a to="/">Projects</a>
                <a to="/">Contact</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
