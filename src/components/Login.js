 import React from 'react'
 
 export const Login = () => {
   return (
    <div className="hold-transition login-page">
    <div className="login-box">
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <a href="../../index2.html" className="h1"><b>Logg inn</b></a>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Logg inn for å starte sesjonen</p>

          <form action="" method="POST">

            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" name="email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password" name="password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" name="remember" />
                  <label htmlFor="remember">
                  Husk meg              
                      </label>
                </div>
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">Logg inn</button>
              </div>
            </div>
          </form>

         

        </div>
      </div>
    </div>
  </div>
   )
 }
 