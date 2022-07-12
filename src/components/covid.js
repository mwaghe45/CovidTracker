import React, { useEffect, useState } from 'react';


const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async()=>{
        try{
            const res=await fetch('https://data.covid19india.org/data.json');
            const actualdata = await res.json();
            console.log(actualdata.statewise[0]);
            setData(actualdata.statewise[0]);
        } catch (err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getCovidData();
    }, []);

    return(
       <> 
        <h1>covidtracker</h1>
        <div className="row ">
        <div className="col-sm">
          <div className="card bg-danger">
            <div className="card-body">
              <h5 className="card-title">Country</h5>
              <p className="card-text">India</p>
              
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card bg-success">
            <div className="card-body">
              <h5 className="card-title">Recover</h5>
              <p className="card-text">{data.recovered}</p>
              
            </div>
          </div>
        </div>
        <div className="col-sm">
        <div className="card bg-info">
            <div className="card-body">
              <h5 className="card-title">Confirm</h5>
              <p className="card-text">{data.confirmed}</p>
              
            </div>
            </div>
        </div>
        <div className="col-sm">
          <div className="card bg-secondary">
            <div className="card-body">
              <h5 className="card-title">Active</h5>
              <p className="card-text">{data.active}</p>
              
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card bg-primary">
            <div className="card-body">
              <h5 className="card-title">Death</h5>
              <p className="card-text">{data.deaths}</p>
              
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card bg-warning">
            <div className="card-body">
              <h5 className="card-title">Updated Date</h5>
              <p className="card-text">{data.lastupdatedtime}</p>
              
            </div>
          </div>
        </div>
      </div>
      </>
    )


}
export default Covid