import React from 'react'
import FotterLogo from '../Image/fotterLogo.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Fotter = () => {
    return (
        <div>
            <div className='follerend'>
                <div>
                    <img src={FotterLogo} />
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy <br />
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  <br />
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita <br />
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem

                    </p>
                </div>
                <div>
                  <h2 style={{color : 'rgb(255, 187, 0)'}}>COMPANY</h2>
                  <p> About Us </p>
                  <p> Pricing </p>
                  <p> Why iShip Sols</p>
                  <p> Contact Us </p>
                  <p> SignUp </p>
                  <p> Privacy Policy</p>
                </div>
                <div>
                <h2 style={{color : 'rgb(255, 187, 0)'}}>SERVICES</h2>
                  <p> Servics 1 </p>
                  <p> Servics 2 </p>
                  <p> Servics 3</p>
                  <p> Servics 4 </p>
                  <p> Servics 5  </p>
                  <p> Servics 6</p>
                </div>
                <div>
                <h2 style={{color : 'rgb(255, 187, 0)'}}>Contact Us </h2>
                  <p> <LocationOnIcon style={{color : 'rgb(255, 187, 0)'}} /> Gulstan e johar  </p>
                  <p> <MarkEmailUnreadIcon style={{color : 'rgb(255, 187, 0)'}} /> shoaibsoomro.strugbits@gmail.com  </p>
                  <p>  <LocalPhoneIcon style={{color : 'rgb(255, 187, 0)'}} /> 123 345 678 890 </p>
                </div>
            </div>
        </div>
    )
}

export default Fotter