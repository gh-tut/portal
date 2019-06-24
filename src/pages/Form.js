import React from 'react'
import Button from '@material-ui/core/Button'

function Form(){
    const style = {
        height : '1000px',
        width : '100%',
    }
    return(
        <div>
            <Button style = {style}
                onClick ={() => window.location.href = 'https://docs.google.com/forms/d/1Xc8rAXzU9-kA0P7n0m0JyKtN8tQJNoqZ0TgaU6kfKDQ/viewform?edit_requested=true'}
            > Click me to Book the room</Button>
        </div>
    )
}

export default Form