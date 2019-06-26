import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SimpleMenu from '../components/SimpleMenu';
import Styles from '../style/header.module.css';
import { Container } from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import AddBox from '@material-ui/icons/AddBox';
import Calendar from '@material-ui/icons/CalendarToday';

export default function Header(props) {
  const screenWidth = props.width;
  return (
    <div className={Styles.root}>
      <AppBar position="sticky">
        <Container maxWidth="md">
          <Toolbar>
            <p className={Styles.title}>TUT GH Portal</p>
            {screenWidth >= 476 ? (
              <Tabs value={props.pageState} onChange={props.handleChange}>
                <Tab label="Home" icon={<Home />} />
                <Tab label="Form" icon={<AddBox />} />
                <Tab label="Calander" icon={<Calendar />} />
              </Tabs>
            ) : (
              <SimpleMenu onClick={props.handleClick} />
            )}
            {/* {screenWidth >= 476 ? <Button color="inherit">Login出来ないよ</Button> : ""} */}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
