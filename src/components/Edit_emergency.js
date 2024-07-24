import React from 'react';

export const Edit_emergency = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Oppdater Nødsituasjon</h1> {/* Update Emergency */}
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/dashboard/emergencies">Hjem</a></li>
                <li className="breadcrumb-item active">Oppdater Nødsituasjon</li> {/* Update Emergency */}
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
                      <label htmlFor="latitude">Latitude</label> {/* Latitude */}
                      <input type="text" className="form-control" id="latitude" placeholder="Enter latitude" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="longitude">Longitude</label> {/* Longitude */}
                      <input type="text" className="form-control" id="longitude" placeholder="Enter longitude" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="emergencyText">Nødbesjed</label> {/* Emergency Text */}
                      <textarea className="form-control" id="emergencyText" placeholder="Enter emergency text"></textarea>
                    </div>

                    <div className="form-group">
                      <label htmlFor="emergencyVideo">Videonødmelding</label> {/* Emergency Video */}
                      <input type="file" className="form-control" id="emergencyVideo" accept="video/*" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="emergencyImage">Bilde-nødmelding</label> {/* Emergency Image */}
                      <input type="file" className="form-control" id="emergencyImage" accept="image/*" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="emergencyRecord">Nødopptak</label> {/* Emergency Record */}
                      <input type="file" className="form-control" id="emergencyRecord" accept="audio/*" />
                    </div>
                  </div>

                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Send inn</button>  {/* Submit */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
