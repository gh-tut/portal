import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SimpleMenu from '../components/SimpleMenu';
import Styles from '../style/header.module.css';
import EventListener from 'react-event-listener';

export default function Header(props) {
  const screenWidth = props.width;
  return (
    <div className={Styles.root}>
      <AppBar position="fixed">
        <Toolbar>
          <p className={Styles.title}>TUT GH Portal</p>
          {screenWidth >= 476 ? (
            <Tabs value={props.pageState} onChange={props.handleChange}>
              <Tab label="Home" />
              <Tab label="Form" />
              <Tab label="Calander" />
            </Tabs>
          ) : (
            <SimpleMenu onClick={props.handleClick} />
          )}
          {/* {screenWidth >= 476 ? <Button color="inherit">Login出来ないよ</Button> : ""} */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
