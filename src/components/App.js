import React, { useState } from 'react'
import EventListener from 'react-event-listener'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { Box } from '@material-ui/core';
import Style from '../style/body.module.css'

function App(){
    const [pageState,setPageState] = useState(0);
    const [windowSize,setWindowSize] = useState(window.parent.screen.width);
    const handleChange = (event,value) =>{
        setPageState(value)
        console.log(pageState)
    }
    const handleClick = (event) =>{
        setPageState(event)
        console.log(pageState)
    }
    const handleResize = () =>{
        setWindowSize(window.innerWidth)
        console.log(windowSize)
    }
    
    return(
        <div>
            <EventListener target="window" onResize={handleResize} />
            <Header pageState = {pageState} handleChange = {handleChange} handleClick = {handleClick} width={windowSize}/>
            <Box className = {Style.body}>
                <Body pageState = {pageState} width={windowSize}/>
                <Footer width={windowSize}/>
            </Box>
        </div>
    )
}

export default App