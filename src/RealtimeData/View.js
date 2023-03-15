import StartFirebase from './Firebase';
import React,{useState}from 'react';
import {ref, onValue} from 'firebase/database';
import {Table} from 'react-bootstrap';
import '../Components/CSS/Viwe.css'
import data from '../Components/JS/data';
import { CardMedia } from '@mui/material';
import '../Components/CSS/dataroom.css'
import storage from 'redux-persist/lib/storage';

const db = StartFirebase();


export class RealtimeData extends React.Component{
   
    
    constructor(){
        super();
        this.state = {
        tableData: []
        }
    }
    componentDidMount() {
        
        const dbRef = ref(db, 'addrooms');

        onValue(dbRef, (snapshot)=>{
            let records =[];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key":keyName, "data":data});

            });
            this.setState({tableData: records});
        });
    }
    render(){
        // const set ="";
        // return(
            
        //     <div id="bab">
        //         <center>
        //         <input className="form-control me-2" style={{ width: '300px' }}  data-aos="fade-right"  type="search" placeholder="Search" aria-label="Search" />
        //         </center>
        //         <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",margin:"20px"}}>
        //         { 

        //         data.filter(function (val) {
        //       if (set === "") {
        //         return val;
        //       } else if (val.name.toLowerCase()) {
        //         return val;
        //       }
        //     })
        // .map((item)=>{
            // storage.ref('images').child(image.name).getdownloadurl()
            // .then((url) =>{
            //     setUrl(url);
            // })
            return(
                <React.Fragment>
            <CardMedia>
                
                {this.state.tableData.map((row)=>{
                return(
                    <div>
                        
                        <div class="main">
                            <div class="container">
                            {/* <div class="imag"></div> */}
                            <div class="text-container">
                            <span></span>
                            <h1>Location: {row.data.loca}</h1>
                            <h2>Adrres: {row.data.adr}</h2>
                            <h2>{row.data.bhk}BHK</h2>
                            <h2>Rs {row.data.rent}</h2>
                    
                            <p>Discription: {row.data.dis}
                            <h3>Owner name : {row.data.nama}</h3>
                            </p>
                            
                            <button class="button-21" role="button">Rent It</button>

                            </div>
                        </div>
                        </div>
                  
                    </div>
                    )
                })}
            <Table>
                 <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Addres</th>
                    <th>BHK</th>
                    <th>Rent</th>
                    <th>Discription</th>
                      </tr>
                        </thead>
                        <tbody>
                            {this.state.tableData.map((row,index)=>{
                                return(
                            <tr>
                                <td>{index}</td>
                                {/* <td>{row.key}</td> */}
                                <td>{row.data.nama}</td>
                                <td>{row.data.loca}</td>
                                <td>{row.data.adr}</td>
                                <td>{row.data.bhk}</td>
                                <td>{row.data.rent}</td>
                                <td>{row.data.dis}</td>
                                
                                
                            </tr>
                            
                            )
                        })}
                        </tbody>

            </Table>
            </CardMedia>
            </React.Fragment>
            //      )
            //     })
            // }
            // </div>
            // </div>
        )
        
    }
}
export default db