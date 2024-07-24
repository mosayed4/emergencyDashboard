import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <NavLink to="/" className="brand-link" style={{ textAlign: 'center' }}>
        <span className="brand-text font-weight-light" style={{ fontWeight: 'bold', fontSize: '20px' }}>
        Nød 
             {/* emergency */}
         </span>
      </NavLink>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          {/* <div className="image">
            <img src="/../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
          </div> */}
          <div className="info">
            <div  style={{ color: 'white', fontSize: '18px' }}>
            Brukernavn 
            {/* user name */}
                          {/* { Auth::user()->name } */}
            </div>
          </div>
        </div>
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <NavLink to="/dashboard/emergencies" className="nav-link" activeClassName="active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Nødsituasjoner</p>
                {/* emergencies */}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/users" className="nav-link" activeClassName="active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Brukere</p>
                {/* Users */}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/logout" className="nav-link" activeClassName="active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Logg ut </p>
                {/* Logout */}
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;
