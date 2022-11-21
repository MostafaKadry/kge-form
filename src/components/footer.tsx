import  React from 'react';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {Typography} from '@mui/material';
import "./footer.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Grid} from '@mui/material';
import {Stack} from '@mui/material';

 function CustomizedTables() {
  return (
    <Stack style={{backgroundColor: '#2e7d32', padding: '25px'}}>
    <Grid item container spacing={1}>

        <Grid item container xs={12} md={3} > 
               <Typography component='h3' style={{ color: 'white', width: '100%' }} p={'16px 16px 16px 0'} >
                 <PhoneIcon />  Contact Details  
                </Typography>
                
                <Grid item xs={12} className="light-link">
                        <LocationOnIcon />All over India
                </Grid>
        <Grid item xs={12}>
            <a href="tel:+91-9445944601" className="light-link">
          <PhoneIcon />
                +91- 9445 9446 01
            </a>
        </Grid>
        <Grid item xs={12} >
         <a href="https://wa.me?919445944601" className="light-link">
            <WhatsAppIcon />
            +91- 9445 9446 01
         </a>

        </Grid>
    </Grid>



        <Grid item container xs={12} md={3}  > 
              <Typography component='h3' sx={{ bgcolor: 'success.main', color: 'success.contrastText',  width: '100%' }} p={'16px 16px 16px 0'} >
                 <BookmarkIcon /> Quick Links
                </Typography>
                <Grid item xs={12} >
                    <a href="/home" className="light-link">
                        <ChevronRightIcon />Home
                    </a>
                </Grid>
        <Grid item xs={12}>
            <a href="/about" className="light-link">
          <ChevronRightIcon />
                About Us
            </a>
        </Grid>
        <Grid item xs={12}>
         <a href="/Contact" className="light-link">
            <ChevronRightIcon />
           Contact Us
         </a>
        </Grid>


    </Grid>
            <Grid item xs={12} md={3}> 
               <Typography component='h3' sx={{ bgcolor: 'success.main', color: 'success.contrastText',  width: '100%' }} p={'16px 16px 16px 0'} >
                 <BookmarkIcon />Product
                </Typography>
                                <Grid item xs={12}>
                    
                        <a href="/Product/CheapClass3Dsc" className="light-link">
                        <ChevronRightIcon />Cheap Class 3 DSC
                    </a>
                </Grid>
        <Grid item xs={12}>
            <a href="/Product/CheapDgft" className="light-link">

          <ChevronRightIcon />
                Cheap DGFT</a>
        </Grid>
        <Grid item xs={12}>
            <a href="/Product/CheapUsbToken" className="light-link">
            <ChevronRightIcon />
        Cheap USB Token</a>
        </Grid>
            </Grid>
            <Grid item xs={12} md={3}> 
               <Typography component='h3' sx={{ bgcolor: 'success.main', color: 'success.contrastText',  width: '100%' }} p={'16px 16px 16px 0'}>
                 <EmailIcon /> Our Presence
                </Typography>			
<Grid item xs={12}>

<a target="_blank" href="https://jd.cheapdsc.com?ref=cheapdsc.com" className="light-link">
<ChevronRightIcon />
Just Dial</a>
</Grid>
<Grid item xs={12}>

<a target="_blank" href="https://www.indiamart.com/cheap-dsc/?ref=cheapdsc.com" className="light-link">
<ChevronRightIcon />
India Mart</a>
</Grid>
<Grid item xs={12}>

<a href="/contact" className="light-link">
<ChevronRightIcon />
Contact Us</a>
</Grid>
            </Grid>
    </Grid>

    </Stack>
  );
}
const Footer =() => {
    return (
    <CustomizedTables/>
    )
}
export default Footer;