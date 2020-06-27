import React,{useEffect,useState} from 'react'
import {Table,Card,Button} from 'react-bootstrap'
import Data from '../assets/jsondata.json'
import 'bootstrap/dist/css/bootstrap.min.css';
function List() {
        const [item,setItem]=useState("");
        const [searchData,setSearchdata]=useState(Data);
        const [index,setIndex]=useState(0);

        useEffect(() => {
        filter();
        }, [item])
        const changeIndex=()=>{
            let count=0;
            count=(index<990)?index+10:index;
            setIndex(count)
            
        }
        const decIndex=()=>{
            let count=0;
            count=(index>0)?index-10:index;
            setIndex(count) 
        }
        const filter=()=>{
            const fdata=[...Data];
            const data=fdata.filter(datas=>{
                if(datas.title.toLowerCase().includes(item.toLowerCase()))
                return datas
            });
            setSearchdata(data);
        }
        const jsonbody=searchData.map(data=>{
            return (
                <tr key={data.title}>
                    <th style={{fontSize:"15px"}}><a href={data.url} target="_blank" rel="noopener noreferrer">{data.title?data.title:"N/A"}</a></th>
                    <th>{data.topic?data.topic:"N/A"}</th>
                    <th>{data.start_year?data.start_year:"N/A"}</th>
                    <th>{data.intensity?data.intensity:"N/A"}</th>
                    <th>{data.sector?data.sector:"N/A"}</th>
                    <th>{data.region?data.region:"N/A"}</th>
                    <th>{data.pestle?data.pestle:"N/A"}</th>
                </tr>
            )
        }).slice(index,index+10);
    // }
    return (<div>
<Card style={{margin:"8px"}}>
<Card.Body>
            <div style={{display:"flex",justifyContent:"flex-end"}}><input type="text" placeholder="Search 🔍" id="inputSearch" onChange={e=>setItem(e.target.value)} style={{padding:"2px", marginBottom:"10px"}}/></div>
            <div className="table-responsive">
            <Table striped="true" bordered hover size="sm" >
            <thead>
            <tr key="table1">
            <th>Title<br/> ↗</th>
            <th>Topic<br/>📘</th>
            <th >Year<br/>⏳</th>
            <th>Intensity<br/>💉</th>
            <th>Sector<br/>🧿</th>
            <th>Region <br/>✈</th>
            <th>Pestle <br/>🌍</th>
            </tr>
        </thead>
        <tbody stripped="true">
            {jsonbody}
        </tbody>
    </Table>
            </div>
    <p>Showing results from {index} to {index+10}</p>
<div style={{display:"flex",justifyContent:"flex-end"}}>
<div width="10rem">
<Button id="disButton" onClick={decIndex} style={{margin:"5px"}} >pre</Button>
<Button onClick={changeIndex}>next</Button>
</div>
</div>
</Card.Body>
</Card>
    </div>
    )
}

export default List
