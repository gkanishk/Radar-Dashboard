import React,{useState,useEffect} from 'react'
import Data from '../assets/jsondata.json';
import {Radar} from 'react-chartjs-2'
import {Card} from 'react-bootstrap'
import NodeCard from './NodeCard'

function NChart() {
    const [chartData,setChartData]=useState([]);
    const [option,setOption]=useState("intensity");
    const [cData,setChartdata]=useState([]);
    const [nodeData,setNodeData]=useState([]);

    let data=[];
    let newData=[];
    let uniqObj={};
    let x=[];
    let y=[];
    useEffect(() => {
        sortData();
    }, [option])
    useEffect(()=>{
        optionChange();
    },[option])

    
    const sortData=()=>{
        data=[...Data];
        let objSect;
        for(let i in data)
        {
            objSect=data[i]['topic'];
            uniqObj[objSect]=data[i];
        }
        for(let i in uniqObj)
        {
            newData.push(uniqObj[i]);
        }
        x=(newData.map(data=>data.topic));
        y=(newData.map(data=>data.intensity));
        setChartdata(newData)
        setCData();
    }
    const setCData=()=>{
        setChartData({
            labels:x,
            datasets: [
            {
                label: option,
                data: y,          
                backgroundColor: "#25CCF7",
                borderWidth: 4,
                pointBackgroundColor: "rgb(31, 119, 180 , 0.9)",
                pointBorderColor: "rgb(31, 119, 180 , 0.9)",
                borderColor: "#25CCF7",
            },
        ],
        });
    }
    const optionChange=()=>{
        switch (option) {
            case "intensity":
                y=(newData.map(data=>data.intensity));
                break;
            case "likelihood":
                y=(newData.map(data=>data.likelihood));
                break;
            case 'relevance':
                y=(newData.map(data=>data.relevance));setCData();
                break;
        
            default:
                y=(newData.map(data=>data.intensity));
                break;
        }
        setCData();
        
    }
    const nodeClick=(e)=>{
        console.log(cData[e[0]._index])
        const i=e[0]._index;
        const ndata=cData[i];
        console.log(ndata)
        setNodeData(ndata);
    }
    return (
    <Card body style={{margin:"8px"}}>
        <Card.Header as="h4">Radar Chart 📊 using React.js</Card.Header>
        <Card.Body>
        <div style={{display:"flex",flexDirection:"row"}}>
                <div
        style={{flexGrow:"2",width:"80%"}}>
        {chartData&&<Radar 
        data={chartData}
            onElementsClick={(e) => nodeClick(e)}
            options={{
            responsive: true,
            legend: {
                onClick: (e) => nodeClick(e),
            },
            }}
        />}</div>

        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
<select onChange={e=>setOption(e.target.value)} multiple={true} className="form-control" style={{width:"200px",height:"170px",padding:"5px",margin:"5px"}} searchable="Search here..">
            <option value="intensity" disabled>Choose your value</option>
            <option value="intensity">Intensity</option>
            <option value="likelihood">Likelihood</option>
            <option value="relevance">Relevance</option>
        </select>
{nodeData&&<NodeCard data={nodeData}/>}
</div>
            </Card.Body>
    </Card>
    )
}

export default NChart
