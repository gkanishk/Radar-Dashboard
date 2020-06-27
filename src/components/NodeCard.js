import React from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NodeCard(props) {
    const NoData=()=>(
    <Card style={{width:"250px",height:"170px",margin:"5px"}}>
        <Card.Body>
            <Card.Text style={{padding:"5px",fontSize:"18px",margin:"40px 4px 7px"}}>click on node</Card.Text>
            </Card.Body>
    </Card>
)
const DataCard=()=>(
    <Card style={{width:"250px"}}>
        <Card.Header style={{padding:"0px"}}><a href={props.data.url} target="_blank" rel="noopener noreferrer">{props.data.sector?props.data.sector:"Unknown"}</a></Card.Header>
        <Card.Body as="p" style={{padding:"0px",margin:"2px"}}>
        <Card.Text style={{fontSize:'11px',margin:"4px"}}>{props.data.intensity}|{props.data.pestle}|Business as usual {props.data.end_year}</Card.Text>
        <Card.Text id="cardText">{props.data.title}</Card.Text>
        </Card.Body>
    </Card>

)

    return (
    <React.Fragment>
        {!Object.keys(props.data).length ? NoData() : DataCard()}
    </React.Fragment>
    )
}

export default NodeCard
