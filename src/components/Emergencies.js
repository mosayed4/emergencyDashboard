import React from 'react';
import { Link } from 'react-router-dom';

export const Emergencies = () => {

  return (
    <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Liste over nødsituasjoner</h1>    {/* Emergencies List */}  

          </div>
          <div className="col-sm-6" style={{ textAlign: 'right' }}>
      <Link to="create" className="btn btn-success">Opprett</Link>
    </div>
        </div>
      
      </div>
    </section>

    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Liste over nødsituasjoner</h3>   {/* Emergencies List */}  
              </div>
              <div className="card-body p-0">
                <table className="table">
                  <thead>
                    <tr>
                      <th style={{ width: 10 }}>#</th>
                      <th>latitude</th>    {/*  lat  */}   
                      <th>longitude</th>   {/*  long  */}   
                      <th>Nødbesjed</th>     {/* Emergency Text  */}  
                      <th>Videonødmelding</th>    {/* Emergency Video  */}  
                      <th>Bilde-nødmelding</th>       {/* Emergency Image */}  
                      <th>Nødopptak</th>       {/* Emergency Record */}  
                      <th>Handlinger</th>         {/* Actions */} 
                    </tr>
                  </thead>
                  <tbody>
                  
                      <tr >
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="d-flex">
                          <Link to='update' className="btn btn-success">Oppdatering</Link>    {/* Update */} 
                          <button   className="btn btn-danger">Slett</button>    {/* Delete */} 
                        </td> 
                      </tr>
                  
                  </tbody>
                </table>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
