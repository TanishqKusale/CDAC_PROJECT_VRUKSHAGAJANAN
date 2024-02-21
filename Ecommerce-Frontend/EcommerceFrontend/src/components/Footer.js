import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { YouTube } from '@mui/icons-material';

function Footer() {
  return (
    <div>
      <MyFooter></MyFooter>
    </div>
  );
}

function MyFooter() {
  return (
    <div className="container-fluid">
      <div className=" row mt-3 text-light " style={{ height: '20vh', backgroundColor:'#7fa629'}}>
        <div className="col-10 mt-2">
          <div>Contact Info</div>
          <div className=" mt-2">
            <HomeIcon></HomeIcon>
            Address : Katraj,Pune.
          </div>
          <div className=" mt-2 ">
            <PhoneIcon></PhoneIcon>
            Phone : +91 8605833639
          </div>

          <div className="mt-2">
            <EmailIcon></EmailIcon>
            Email : vrukshagajanana@gmail.com
          </div>
        </div>
        <div className="col-2 mt-2 ">
          <div>Connect with us</div>
          <div className="mt-2">
            <a style={{color: 'white'}} href='https://www.instagram.com/vruksha_gajanan/' ><InstagramIcon></InstagramIcon> Instagram</a>
          </div>
          <div className="mt-2">
          <a style={{color: 'white'}} href='https://www.facebook.com/vrukshagajanan/' ><FacebookIcon></FacebookIcon> Facebook</a>
          </div>
          <div className="mt-2">
          <a style={{color: 'white'}} href='https://www.youtube.com/channel/UC_d6DMkEkbDtcgcUOagqBdg' ><YouTube></YouTube> YouTube</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
