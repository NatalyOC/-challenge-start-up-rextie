import React from 'react';
import '../App.css';

const SideBar=()=>(
  <nav className="col-md-4  sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">               
                  Información Personal <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Principal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  
                  Nueva Operación
                </a>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Cuentas</span>
              <a className="d-flex align-items-center text-muted" href="#">
              
              </a>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-link" href="#">
            
                Cuentas Bancarias Personales
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
               
                Cuentas Bancarias de Terceros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 
                Cuentas Bancarias de Terceros-Rextie
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Operaciones Historicas
                </a>
              </li>
            </ul>
          </div>
        </nav>
)

export default SideBar;
