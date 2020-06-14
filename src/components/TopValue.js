import React,{useEffect,useState} from 'react'
import Data from '../assets/jsondata.json'
import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function TopValue() {
    const [data,setData]=useState([]);
    useEffect(() => {
        sortValue();
    }, [])

    const sortValue=()=>{
    const rawData=[...Data];
    const sortData=rawData.sort((d1,d2)=>{

    return d1.likelihood<d2.likelihood?1:-1
    }
    ).slice(0,10);
    setData(sortData);
}
const display=data.map((data)=>{
    return (
        <div key={data.title}>
        <Card 
        bg="light"
        style={{ width: '15rem',height:'10rem',flex: 1,marginLeft:'4px',justifyContent:"center"}}
    className="mb-2"
    key={data.title}
>
    <Card.Header style={{padding:'5px'}} as="h5"> {data.pestle?data.pestle:"Anonymous"}</Card.Header>
    <Card.Body style={{padding:'5px'}}>
        <Card.Text as='p' style={{fontSize:'15px'}}>
        {data.intensity} | {data.pestle?data.pestle:"Anonymous"} <br/>Business as usual{" "}{data.end_year}
        </Card.Text>
        <a href={data.url} target="_blank" rel="noopener noreferrer">
            <Button variant="danger" size="sm">More Details</Button>
        </a>
    </Card.Body>
    </Card></div>
    )
})

    
    return (
        <div>
            {/* <div style={{display:'flex',flexDirection:'row',alignItems: 'space-between',width:'100%',margin:'auto',order:'5'}}>{display}</div> */}
                <Card style={{margin:"8px",backgroundColor:"#dbe2ef"}}>
                    <Card.Header as="h5">
                        Top 10 data based on intensity: 🚀
                    </Card.Header>
                    <Card.Body style={{padding:"0",margin:"4px"}}>
                <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                {display}
                </div>
                </Card.Body>
                </Card> 
        </div>
    )
}

export default TopValue
