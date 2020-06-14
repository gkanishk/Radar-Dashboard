import React from 'react'
import {Card} from "react-bootstrap"

function Foot() {
    return (
        <Card style={{margin:"8px",backgroundColor:"rgb(212, 219, 232)"}}>
        <Card.Body>
            Made with ♥ by <a href="https://gkanishk.github.io/" target="_blank" rel="noopener noreferrer">Kanishk Gupta</a>{" "}|{" "}Follow on ☕{" "}<a href="https://github.com/gkanishk" target="_blank" rel="noopener noreferrer">Github</a>{" "}<a href="https://linkedin.com/in/gkanishk/" target="_blank" rel="noopener noreferrer">LinkedIn</a>{" "}<a href="https://twitter.com/gkanishk_" target="_blank" rel="noopener noreferrer">Twitter</a>
        </Card.Body>
        </Card>
    )
}

export default Foot
