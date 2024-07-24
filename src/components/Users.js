import React from 'react';
import { Link } from 'react-router-dom';


export const Users = () => {
  return (
    <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Users List</h1>
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
                <h3 className="card-title">Brukerliste</h3>      {/* Users List */} 
              </div>
              <div className="card-body p-0">
                <table className="table">
                  <thead>
                    <tr>
                      <th style={{ width: 10 }}>#</th>
                      <th>Navn</th>  {/* Name */} 
                      <th>E-post</th>  {/* Email */} 
                      <th>Telefon</th>  {/* Phone */} 
                      <th>Tilleggstelefoner</th>  {/* Additional Phones */} 
                      <th>Nasjonal ID</th>  {/* National ID */} 
                      <th>Handlinger</th>  {/* Actions */} 
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
                        <td className="d-flex">
                          <Link to='update' className="btn btn-success">Oppdatering</Link>   {/* Update */} 
                          <button   className="btn btn-danger">Slett</button>     {/* Delete */} 
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
