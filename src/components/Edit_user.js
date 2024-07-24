import React from 'react'

export const Edit_user = () => {
  return (
    <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Oppdater Bruker</h1> {/* update user */}
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="/dashboard/users">Hjem</a></li>
              <li className="breadcrumb-item active">Oppdater Bruker</li> {/* update  user */}
            </ol>
          </div>
        </div>
      </div>
    </section>


    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-primary">
              <form>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="latitude">Navn</label>{/* Name */} 
                    <input type="text" className="form-control" id="latitude" placeholder="Enter latitude" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="latitude">E-post</label> {/* Email */} 
                    <input type="text" className="form-control" id="latitude" placeholder="Enter latitude" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="latitude">Telefon</label> {/* Phone */} 
                    <input type="text" className="form-control" id="latitude" placeholder="Enter latitude" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="latitude">Nasjonal ID</label>  {/* National ID */} 
                    <input type="text" className="form-control" id="latitude" placeholder="Enter latitude" />
                  </div>

                  

                

                 
                </div>

                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Send inn</button> {/* Submit */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
