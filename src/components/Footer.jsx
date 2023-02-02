import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='#03001C' className='text-center text-lg-start' id='wordC'>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Eszra J-S</h6>
              <p>
                <a href='https://github.com/WHOVION' className='text-reset' target="_blank" rel='noreferrer'>
                  Github
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Paul K</h6>
              <p>
                <a href='https://github.com/paulyjkim1' className='text-reset' target="_blank" rel='noreferrer'>
                  Github
                </a>
              </p>
              
            </MDBCol>

            
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' id= 'p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
        © 2023 Copyright: 
        <a className='text-reset fw-bold' href='#!' target="_blank">
            BattleLo-Fi
        </a>
      </div>
    </MDBFooter>
  );
}