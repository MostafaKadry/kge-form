import React, {useState} from 'react'
import {Grid} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import "./subfooter.css";
const Subfooter = () => {
      const [value, setValue] = useState(0);
  return (
        <Grid container sx={{bgcolor: "darkgray", textAlign: "center"}}>

    <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        sx={{bgcolor: "darkgray", color: "#fff", height: 'auto', margin: 'auto'}}
      >
            <Grid item xs={12}>



<BottomNavigationAction label="FaceBook" icon={( <a href="https://www.facebook.com/cheapdsc" target="_blank">
<FacebookIcon color="primary"/>
</a>)} />
<BottomNavigationAction label="Twitter" icon={(<a href="https://twitter.com/cheapdsc" target="_blank">
<TwitterIcon color="primary"/>
</a>)} />
<BottomNavigationAction label="LinkedIn" icon={(<a href="https://www.linkedin.com/company/cheap-dsc/" target="_blank">
<LinkedInIcon color="primary" />
</a>)} />
   
     
<BottomNavigationAction label="YouTube" icon={(<a href="https://www.youtube.com/watch?v=KoOSplSYmF4" target="_blank">
                    <YouTubeIcon color="primary"/>
                    </a>)} />
<BottomNavigationAction label="Instagram" icon={( <a href="https://www.instagram.com/explore/tags/cheapdsc/" target="_blank">
                    <InstagramIcon color="primary"/>
                    </a>)} />
<BottomNavigationAction label="PinterestIcon" icon={(<a href="https://in.pinterest.com/cheapdsc/" target="_blank">
                    <PinterestIcon  color="primary"/>
                    </a>)} />
    

<BottomNavigationAction label="Tumblr" icon={(<a href="https://cheapdsc.tumblr.com/" target="_blank">
                    <i className="fab fa-tumblr" style={{color: "#1976d2" , fontSize: '24px'}}>
                    </i>
                    </a>)} />
<BottomNavigationAction color="primary" label="Blogspot" icon={(<a href="https://cheapdsc.blogspot.com/" target="_blank">
                       <i className="fa-brands fa-blogger" style={{color: "#1976d2", fontSize: '24px'}}></i>
                    </a>)} />
<BottomNavigationAction
icon={(<a href="https://wa.me?919445944601" target="_blank">
<WhatsAppIcon color="primary" />
</a>)} />
           
                                
</Grid>
      </BottomNavigation>

<Grid item xs={12}>
    <div className="copyright">
        © 2022 All Rights Reserved. <a>Cheap DSC | A Subsidary Unit of C2C Venture Pvt Ltd</a>
    </div>
</Grid>
    </Grid>
  )
}

export default Subfooter;