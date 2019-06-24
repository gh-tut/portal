import React from 'react'
import Home from '../pages/Home'
import Form from '../pages/Form'
import Calender from '../pages/Calender'
import Style from '../style/body.module.css'
function Body(props){
    const page = props.pageState === 0 ? <Home /> : props.pageState === 1 ? <Form /> : <Calender />
    return(
        <div className = {Style.body}>
            {page}
        </div>
    )
}

export default Body