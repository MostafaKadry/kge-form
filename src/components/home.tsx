import React from 'react'
import Footer from "./footer";
import { Stack } from '@mui/material';
import {Typography} from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Divider from '@mui/material/Divider';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Grid} from '@mui/material';
import Subfooter from "./Subfooter";
import ProductsRightMenu from "./ProductsRightMenu";
import CoveredRightMenu from "./CoveredRightMenu";
import "./home.css";
const Navbar = () => {
    return (
        <Stack  direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ bgcolor: 'success.main', padding: "0.5rem" }}
    >
        <Link sx={{display: 'flex', alignItems: 'center'}} href="tel:+91-9445944601" underline="none" target="_blank" rel="noopener"  color="white">
        <LocalPhoneIcon sx={{margin: "0 7px"}}/>
        <span className="link-hover">
        +91-9445 9446 01
        </span>

        </Link>
        <Link href="https://wa.me/9445944601" sx={{display: 'flex', alignItems: 'center'}} color="white" underline="none" target="_blank" rel="noopener">
            <WhatsAppIcon sx={{margin: "0 7px"}}/>
            <span className="link-hover">
                +91-9445944601
            </span>
                </Link>
           <Link href="mailto:enquiry@cheapdsc.com" sx={{display: 'flex', alignItems: 'center'}} color="white" underline="none" target="_blank" rel="noopener">
           <EmailIcon sx={{margin: "0 7px"}}/>
            <span className="link-hover" >
                    enquiry@cheapdsc.com
            </span>
           </Link>
    </Stack>
    )
}

const drawerWidth = 230;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

 function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="static" sx={{bgcolor:"white", padding: "1rem"}} open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
             <Link href="https://cheapdsc.kgetechnologies.com/">
              <img
            src={`https://raw.githubusercontent.com/kgetechnologies/cdn.cheapdsc.com/main/Logo/Logo.png`}
            height="60"
            width='200'
            alt={'title'}
            loading="lazy" />
            </Link>
          </Typography>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
     
      <Drawer
        sx={{
         ...(!open && { display: 'none' }),
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['HOME', 'WHY US', 'PRODUCTS', 'COVERAGES', 'ABOUT', 'CONTACT'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
            {text === "PRODUCTS" ? <ProductsRightMenu /> : text === "COVERAGES" ? <CoveredRightMenu /> : (    <Link href={text === "ABOUT" ? "/about" : text === "CONTACT" ? "/contact" : "/"} className="link-header" underline="none" color="black" >
               {text}
              </Link>)}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
const MainHeaderText = () => {
  return (
    <h1 className="site-text-center">
        Cheap Class 3 DSC In Chennai
    </h1>
  )
}
const MainHeaderImg = () => {
  return (
        <img style={{ width: '100%'}} alt="Cheap Class 3 DSC In Chennai" title="Cheap Class 3 DSC In Chennai" src="https://raw.githubusercontent.com/kgetechnologies/cdn.cheapdsc.com/main/Location/Class3Individual/131517.jpg"></img>
  )
}
const MainItme1 = () => {
  return (
    <h1 style={{"boxSizing":"border-box","marginRight":"0px","marginBottom":"20px","marginLeft":"0px","lineHeight":"54px","color":"rgb(73, 73, 73)","fontSize":"40px","transitionTimingFunction":"ease-in-out","transitionDuration":"0.2s","padding":"0px"}}>
						<span style={{"backgroundColor":"white","color":"inherit","fontFamily":"inherit","fontSize":"2.5rem"}}> You </span>
						<span  style={{"backgroundColor":"white","fontFamily":"inherit","fontSize":"2.5rem", 'color':"#00ff00"}}> Can </span>
						<span style={{"backgroundColor":"white","color":"inherit","fontFamily":"inherit","fontSize":"2.5rem"}}> Get </span>
						<span  style={{"fontFamily":"inherit","fontSize":"2.5rem", color:"#00ff00"}}> Cheap Class 3 DSC In Chennai </span>
						<span style={{"backgroundColor":"white","color":"inherit","fontFamily":"inherit","fontSize":"2.5rem"}}> at Just </span>
						<span  style={{"fontFamily":"inherit","fontSize":"2.5rem","color":"'#00ff00'"}}> 599* Today</span><br></br>
      </h1>
  )
}
const MainItme2 = () => {
  return (
      <p style={{"boxSizing":"border-box","marginRight":"0px","marginBottom":"20px","marginLeft":"0px","transitionTimingFunction":"ease-in-out","transitionDuration":"0.2s","fontSize":"16px","backgroundColor":"rgb(248,248,248)"}}>
						Are you looking for Cheap Class 3 DSC at the very low cost of 599*  in chennai <span style={{fontSize: '0.87rem'}}>
							<b>
								<span style={{backgroundColor: 'rgb(255, 255, 0)'}}><span color="#ff0000"> Cheap Class 3 DSC In Chennai at 599* </span></span>
							</b> Helps you to do at your location.
						</span>
        </p>
  )
}
const MainItme3 = () => {
  return (

    <List sx={{ width: '100%', maxWidth: 410, bgcolor: 'background.paper' }}>
    {['Cheap Class 3 Dsc in chennai',
            'Cheap Class 3 Dsc in chennai at 599* Only',
            'Cheap Class 3 Dsc Sales in chennai',
            'Cheap Class 3 Dsc Sales in chennai at 599* Only',
            'Cheap Class 3 Dsc near chennai',
            'Cheap Class 3 Dsc near chennai at 599* Only'].map((title, index) => {
              return(
                <Stack key={index}>
      <ListItem alignItems="flex-start" >
        <ListItemText
        disableTypography
          sx={{ color:"#0000ff", fontWeight: '700 !important' }}
          primary={title}

          />
      </ListItem>
      <Divider component="li" />
          </Stack>
              )
            })}
    </List>
  )
}
const MainItme4 = () => {
  return (
    <h4 style={{fontFamily:"Raleway, sans-serif",lineHeight:"46px",marginRight:"0px",marginBottom:"20px",marginLeft:"0px",fontSize:"30px" ,padding:"0px",backgroundColor: "rgb(255, 156, 0)"}}>
        <span style={{fontWeight:"500",color: "rgb(255, 255, 255)"}}>Cheap Class 3 DSC In Chennai at Just 599*</span>
    </h4>
  )
}
const MainItme5 = () => {
  return (
    <Typography align="left">
						Get <b>Cheap Class 3 DSC In Chennai</b> from <b>CheapDsc.com</b> with Paperless Process. <b>CheapDsc.com</b> allows users to buy <b>Cheap Class 3 DSC</b> online for Just <b>599*</b> who are located in and around <b>chennai</b>.
						You can use your <b>Cheap Class 3 DSC</b> for below
      </Typography >
  )
}
const MainItem6 = () => {
  return (
     <List sx={{ width: '100%', maxWidth: 410, bgcolor: 'background.paper' }}>
    {['MCA e-filing',
            'Income Tax e-filing',
            'LLP Registration',
            'GST Application',
            'IE Code Registration',
            'Patent and TM e-filing', 'Customs e-filing','Form 16, etc'].map((title, index) => {
              return(
      <ListItem alignItems="flex-start" sx={{padding: '0 16PX'}} key={index}>
        <ListItemText   
          primary={title}
          />
      </ListItem>
              )
            })}
    </List>
  )
}
const MainItem7 = () => {
  return(
    <h1 className="site-text-center">
      <span 
        style={{"color":"rgb(73, 73, 73)","fontFamily":"Raleway, sans-serif","fontSize":"40px","textAlign":"center"}}>
        We do Sell </span>
        <span
        style={{fontWeight:500,"fontFamily":"Raleway, sans-serif","fontSize":"40px","textAlign":"center","boxSizing":"border-box","transitionTimingFunction":"initial","transitionDuration":"0s","color":"rgb(203, 52, 43)"}}>
          Cheap Class 3 DSC </span>
          <span style={{"color":"rgb(73, 73, 73)","fontFamily":"Raleway, sans-serif","fontSize":"40px","textAlign":"center"}}>in </span>
          <span
          style={{fontWeight:500,"fontFamily":"Raleway, sans-serif","fontSize":"40px","textAlign":"center","boxSizing":"border-box","transitionTimingFunction":"initial","transitionDuration":"0s","color":"rgb(203, 52, 43)"}}>chennai</span></h1>
  )
}
const MainItem8 = () => {
  return (
    <>
      <iframe title="Cheap Class 3 DSC In Chennai"
      style={{height:"450px", width:"100%"}} 
      src="//www.youtube-nocookie.com/embed/KoOSplSYmF4?ref=cheapdsc.com/cheap-Class-3-DSC-in-chennai"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       >
       </iframe>
        <br></br>

         <List sx={{ width: '100%', maxWidth: 410, bgcolor: 'background.paper' }}>

      <ListItem alignItems="flex-start" sx={{padding: '0 16PX'}}>
       
          <a style={{color:"#0000ff", fontSize: '0.87rem', backgroundColor: 'white'}} href="https://www.justdial.com/jdmart/chennai/Cheap-Dsc/044PXX44-XX44-190316080520-X6F9_BZDET/catalogue?ref=cheapdsc.com/cheap-Class-3-DSC-in-chennai" target="_blank">
              <span>
              <b >Just Dial Reference for Cheap Class 3 DSC</b></span>
          </a>
      </ListItem>

            <ListItem alignItems="flex-start" sx={{padding: '0 16PX'}}>

<a style={{color:"#0000ff"}} href="https://www.indiamart.com/cheap-dsc/?ref=cheapdsc.com/cheap-Class-3-DSC-in-chennai" target="_blank">
								<span  color="#0000ff">
									<b>India Mart Reference for Cheap Class 3 DSC</b>
								</span>
							</a>
      </ListItem>
 
    </List>

       </>
  )
}
const MainItem9 = () => {
  return (
    <>
    <h5 style={{ textAlign: 'left' }}>Servicing area's near by Cheap Class 3 DSC In Chennai</h5>
    <Grid item container spacing={1} sx={{ textAlign: 'left', padding: '1rem', margin: '1rem' }}>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Addanki" href="/cheap-Class-3-DSC-in-Addanki?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Addanki</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Adoni" href="/cheap-Class-3-DSC-in-Adoni?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Adoni</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Akasahebpet" href="/cheap-Class-3-DSC-in-Akasahebpet?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Akasahebpet</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Akividu" href="/cheap-Class-3-DSC-in-Akividu?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Akividu</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Akkarampalle" href="/cheap-Class-3-DSC-in-Akkarampalle?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Akkarampalle</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Amalapuram" href="/cheap-Class-3-DSC-in-Amalapuram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Amalapuram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Amudalavalasa" href="/cheap-Class-3-DSC-in-Amudalavalasa?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Amudalavalasa</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Anakapalle" href="/cheap-Class-3-DSC-in-Anakapalle?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Anakapalle</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Anantapur" href="/cheap-Class-3-DSC-in-Anantapur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Anantapur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Atmakur" href="/cheap-Class-3-DSC-in-Atmakur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Atmakur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Attili" href="/cheap-Class-3-DSC-in-Attili?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Attili</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Avanigadda" href="/cheap-Class-3-DSC-in-Avanigadda?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Avanigadda</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Badvel" href="/cheap-Class-3-DSC-in-Badvel?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Badvel</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Banganapalle" href="/cheap-Class-3-DSC-in-Banganapalle?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Banganapalle</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Bapatla" href="/cheap-Class-3-DSC-in-Bapatla?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Bapatla</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Betamcherla" href="/cheap-Class-3-DSC-in-Betamcherla?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Betamcherla</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Bhattiprolu" href="/cheap-Class-3-DSC-in-Bhattiprolu?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Bhattiprolu</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Bhimavaram" href="/cheap-Class-3-DSC-in-Bhimavaram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Bhimavaram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Bhimunipatnam" href="/cheap-Class-3-DSC-in-Bhimunipatnam?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Bhimunipatnam</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Bobbili" href="/cheap-Class-3-DSC-in-Bobbili?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Bobbili</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Challapalle" href="/cheap-Class-3-DSC-in-Challapalle?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Challapalle</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Chemmumiahpet" href="/cheap-Class-3-DSC-in-Chemmumiahpet?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Chemmumiahpet</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Chilakalurupet" href="/cheap-Class-3-DSC-in-Chilakalurupet?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Chilakalurupet</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Chinnachowk" href="/cheap-Class-3-DSC-in-Chinnachowk?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Chinnachowk</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Chipurupalle" href="/cheap-Class-3-DSC-in-Chipurupalle?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Chipurupalle</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Chirala" href="/cheap-Class-3-DSC-in-Chirala?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Chirala</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Chittoor" href="/cheap-Class-3-DSC-in-Chittoor?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Chittoor</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Chodavaram" href="/cheap-Class-3-DSC-in-Chodavaram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Chodavaram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Cuddapah" href="/cheap-Class-3-DSC-in-Cuddapah?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Cuddapah</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Cumbum" href="/cheap-Class-3-DSC-in-Cumbum?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Cumbum</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Darsi" href="/cheap-Class-3-DSC-in-Darsi?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Darsi</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Dharmavaram" href="/cheap-Class-3-DSC-in-Dharmavaram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Dharmavaram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Dhone" href="/cheap-Class-3-DSC-in-Dhone?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Dhone</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Diguvametta" href="/cheap-Class-3-DSC-in-Diguvametta?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Diguvametta</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="East Godavari" href="/cheap-Class-3-DSC-in-East-Godavari?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">East Godavari</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Elamanchili" href="/cheap-Class-3-DSC-in-Elamanchili?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Elamanchili</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Ellore" href="/cheap-Class-3-DSC-in-Ellore?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Ellore</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Emmiganur" href="/cheap-Class-3-DSC-in-Emmiganur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Emmiganur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Erraguntla" href="/cheap-Class-3-DSC-in-Erraguntla?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Erraguntla</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Etikoppaka" href="/cheap-Class-3-DSC-in-Etikoppaka?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Etikoppaka</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Gajuwaka" href="/cheap-Class-3-DSC-in-Gajuwaka?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Gajuwaka</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Ganguvada" href="/cheap-Class-3-DSC-in-Ganguvada?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Ganguvada</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Gannavaram" href="/cheap-Class-3-DSC-in-Gannavaram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Gannavaram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Giddalur" href="/cheap-Class-3-DSC-in-Giddalur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Giddalur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Gokavaram" href="/cheap-Class-3-DSC-in-Gokavaram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Gokavaram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Gorantla" href="/cheap-Class-3-DSC-in-Gorantla?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Gorantla</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Govindapuram,Chilakaluripet,Guntur" href="/cheap-Class-3-DSC-in-Govindapuram,Chilakaluripet,Guntur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Govindapuram,Chilakaluripet,Guntur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Gudivada" href="/cheap-Class-3-DSC-in-Gudivada?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Gudivada</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Gudlavalleru" href="/cheap-Class-3-DSC-in-Gudlavalleru?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Gudlavalleru</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Gudur" href="/cheap-Class-3-DSC-in-Gudur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Gudur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Guntakal Junction" href="/cheap-Class-3-DSC-in-Guntakal-Junction?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Guntakal Junction</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Guntur" href="/cheap-Class-3-DSC-in-Guntur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Guntur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Hindupur" href="/cheap-Class-3-DSC-in-Hindupur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Hindupur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Ichchapuram" href="/cheap-Class-3-DSC-in-Ichchapuram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Ichchapuram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Jaggayyapeta" href="/cheap-Class-3-DSC-in-Jaggayyapeta?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Jaggayyapeta</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Jammalamadugu" href="/cheap-Class-3-DSC-in-Jammalamadugu?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Jammalamadugu</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kadiri" href="/cheap-Class-3-DSC-in-Kadiri?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kadiri</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kaikalur" href="/cheap-Class-3-DSC-in-Kaikalur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kaikalur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kakinada" href="/cheap-Class-3-DSC-in-Kakinada?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kakinada</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kalyandurg" href="/cheap-Class-3-DSC-in-Kalyandurg?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kalyandurg</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kamalapuram" href="/cheap-Class-3-DSC-in-Kamalapuram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kamalapuram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kandukur" href="/cheap-Class-3-DSC-in-Kandukur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kandukur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kanigiri" href="/cheap-Class-3-DSC-in-Kanigiri?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kanigiri</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kankipadu" href="/cheap-Class-3-DSC-in-Kankipadu?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kankipadu</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kanuru" href="/cheap-Class-3-DSC-in-Kanuru?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kanuru</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kavali" href="/cheap-Class-3-DSC-in-Kavali?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kavali</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kolanukonda" href="/cheap-Class-3-DSC-in-Kolanukonda?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kolanukonda</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kondapalle" href="/cheap-Class-3-DSC-in-Kondapalle?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kondapalle</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Korukollu" href="/cheap-Class-3-DSC-in-Korukollu?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Korukollu</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kosigi" href="/cheap-Class-3-DSC-in-Kosigi?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kosigi</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kovvur" href="/cheap-Class-3-DSC-in-Kovvur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kovvur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Krishna" href="/cheap-Class-3-DSC-in-Krishna?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Krishna</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kuppam" href="/cheap-Class-3-DSC-in-Kuppam?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kuppam</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Kurnool" href="/cheap-Class-3-DSC-in-Kurnool?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kurnool</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Macherla" href="/cheap-Class-3-DSC-in-Macherla?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Macherla</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Machilipatnam" href="/cheap-Class-3-DSC-in-Machilipatnam?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Machilipatnam</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Madanapalle" href="/cheap-Class-3-DSC-in-Madanapalle?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Madanapalle</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Madugula" href="/cheap-Class-3-DSC-in-Madugula?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Madugula</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Mandapeta" href="/cheap-Class-3-DSC-in-Mandapeta?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Mandapeta</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Mandasa" href="/cheap-Class-3-DSC-in-Mandasa?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Mandasa</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Mangalagiri" href="/cheap-Class-3-DSC-in-Mangalagiri?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Mangalagiri</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Markapur" href="/cheap-Class-3-DSC-in-Markapur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Markapur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Nagari" href="/cheap-Class-3-DSC-in-Nagari?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Nagari</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Nagireddipalli" href="/cheap-Class-3-DSC-in-Nagireddipalli?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Nagireddipalli</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Nandigama" href="/cheap-Class-3-DSC-in-Nandigama?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Nandigama</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Nandikotkur" href="/cheap-Class-3-DSC-in-Nandikotkur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Nandikotkur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Nandyal" href="/cheap-Class-3-DSC-in-Nandyal?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Nandyal</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Narasannapeta" href="/cheap-Class-3-DSC-in-Narasannapeta?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Narasannapeta</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Narasapur" href="/cheap-Class-3-DSC-in-Narasapur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Narasapur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Narasaraopet" href="/cheap-Class-3-DSC-in-Narasaraopet?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Narasaraopet</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Narasingapuram" href="/cheap-Class-3-DSC-in-Narasingapuram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Narasingapuram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Narayanavanam" href="/cheap-Class-3-DSC-in-Narayanavanam?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Narayanavanam</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Narsipatnam" href="/cheap-Class-3-DSC-in-Narsipatnam?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Narsipatnam</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Nayudupet" href="/cheap-Class-3-DSC-in-Nayudupet?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Nayudupet</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Nellore" href="/cheap-Class-3-DSC-in-Nellore?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Nellore</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Nidadavole" href="/cheap-Class-3-DSC-in-Nidadavole?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Nidadavole</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Nuzvid" href="/cheap-Class-3-DSC-in-Nuzvid?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Nuzvid</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Ongole" href="/cheap-Class-3-DSC-in-Ongole?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Ongole</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Pakala" href="/cheap-Class-3-DSC-in-Pakala?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Pakala</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Palakollu" href="/cheap-Class-3-DSC-in-Palakollu?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Palakollu</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Palasa" href="/cheap-Class-3-DSC-in-Palasa?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Palasa</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Palkonda" href="/cheap-Class-3-DSC-in-Palkonda?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Palkonda</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Pallevada" href="/cheap-Class-3-DSC-in-Pallevada?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Pallevada</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Palmaner" href="/cheap-Class-3-DSC-in-Palmaner?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Palmaner</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Parlakimidi" href="/cheap-Class-3-DSC-in-Parlakimidi?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Parlakimidi</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Parvatipuram" href="/cheap-Class-3-DSC-in-Parvatipuram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Parvatipuram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Pavuluru" href="/cheap-Class-3-DSC-in-Pavuluru?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Pavuluru</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Pedana" href="/cheap-Class-3-DSC-in-Pedana?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Pedana</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="pedda nakkalapalem" href="/cheap-Class-3-DSC-in-pedda-nakkalapalem?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">pedda nakkalapalem</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Peddapuram" href="/cheap-Class-3-DSC-in-Peddapuram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Peddapuram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Penugonda" href="/cheap-Class-3-DSC-in-Penugonda?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Penugonda</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Penukonda" href="/cheap-Class-3-DSC-in-Penukonda?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Penukonda</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Phirangipuram" href="/cheap-Class-3-DSC-in-Phirangipuram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Phirangipuram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Pippara" href="/cheap-Class-3-DSC-in-Pippara?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Pippara</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Pithapuram" href="/cheap-Class-3-DSC-in-Pithapuram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Pithapuram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Polavaram" href="/cheap-Class-3-DSC-in-Polavaram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Polavaram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Ponnur" href="/cheap-Class-3-DSC-in-Ponnur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Ponnur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Ponnuru" href="/cheap-Class-3-DSC-in-Ponnuru?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Ponnuru</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Prakasam" href="/cheap-Class-3-DSC-in-Prakasam?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Prakasam</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Proddatur" href="/cheap-Class-3-DSC-in-Proddatur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Proddatur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Pulivendla" href="/cheap-Class-3-DSC-in-Pulivendla?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Pulivendla</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Punganuru" href="/cheap-Class-3-DSC-in-Punganuru?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Punganuru</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Puttaparthi" href="/cheap-Class-3-DSC-in-Puttaparthi?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Puttaparthi</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Puttur" href="/cheap-Class-3-DSC-in-Puttur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Puttur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Rajahmundry" href="/cheap-Class-3-DSC-in-Rajahmundry?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Rajahmundry</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Ramachandrapuram" href="/cheap-Class-3-DSC-in-Ramachandrapuram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Ramachandrapuram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Ramanayyapeta" href="/cheap-Class-3-DSC-in-Ramanayyapeta?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Ramanayyapeta</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Ramapuram" href="/cheap-Class-3-DSC-in-Ramapuram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Ramapuram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Rampachodavaram" href="/cheap-Class-3-DSC-in-Rampachodavaram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Rampachodavaram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Rayachoti" href="/cheap-Class-3-DSC-in-Rayachoti?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Rayachoti</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Rayadrug" href="/cheap-Class-3-DSC-in-Rayadrug?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Rayadrug</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Razam" href="/cheap-Class-3-DSC-in-Razam?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Razam</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Razampeta" href="/cheap-Class-3-DSC-in-Razampeta?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Razampeta</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Razole" href="/cheap-Class-3-DSC-in-Razole?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Razole</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Renigunta" href="/cheap-Class-3-DSC-in-Renigunta?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Renigunta</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Repalle" href="/cheap-Class-3-DSC-in-Repalle?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Repalle</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Salur" href="/cheap-Class-3-DSC-in-Salur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Salur</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Samalkot" href="/cheap-Class-3-DSC-in-Samalkot?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Samalkot</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Sattenapalle" href="/cheap-Class-3-DSC-in-Sattenapalle?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Sattenapalle</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Singarayakonda" href="/cheap-Class-3-DSC-in-Singarayakonda?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Singarayakonda</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Sompeta" href="/cheap-Class-3-DSC-in-Sompeta?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Sompeta</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Srikakulam" href="/cheap-Class-3-DSC-in-Srikakulam?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Srikakulam</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Srisailain" href="/cheap-Class-3-DSC-in-Srisailain?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Srisailain</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Suluru" href="/cheap-Class-3-DSC-in-Suluru?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Suluru</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Tadepalle" href="/cheap-Class-3-DSC-in-Tadepalle?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Tadepalle</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Tadepallegudem" href="/cheap-Class-3-DSC-in-Tadepallegudem?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Tadepallegudem</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Tadpatri" href="/cheap-Class-3-DSC-in-Tadpatri?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Tadpatri</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Tanuku" href="/cheap-Class-3-DSC-in-Tanuku?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Tanuku</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Tekkali" href="/cheap-Class-3-DSC-in-Tekkali?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Tekkali</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Tirumala" href="/cheap-Class-3-DSC-in-Tirumala?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Tirumala</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Tirupati" href="/cheap-Class-3-DSC-in-Tirupati?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Tirupati</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Tuni" href="/cheap-Class-3-DSC-in-Tuni?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Tuni</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Uravakonda" href="/cheap-Class-3-DSC-in-Uravakonda?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Uravakonda</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="vadlamuru" href="/cheap-Class-3-DSC-in-vadlamuru?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">vadlamuru</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Vadlapudi" href="/cheap-Class-3-DSC-in-Vadlapudi?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Vadlapudi</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Venkatagiri" href="/cheap-Class-3-DSC-in-Venkatagiri?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Venkatagiri</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Vepagunta" href="/cheap-Class-3-DSC-in-Vepagunta?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Vepagunta</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Vetapalem" href="/cheap-Class-3-DSC-in-Vetapalem?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Vetapalem</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Vijayawada" href="/cheap-Class-3-DSC-in-Vijayawada?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Vijayawada</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Vinukonda" href="/cheap-Class-3-DSC-in-Vinukonda?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Vinukonda</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Visakhapatnam" href="/cheap-Class-3-DSC-in-Visakhapatnam?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Visakhapatnam</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Vizianagaram" href="/cheap-Class-3-DSC-in-Vizianagaram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Vizianagaram</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Vizianagaram District" href="/cheap-Class-3-DSC-in-Vizianagaram-District?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Vizianagaram District</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Vuyyuru" href="/cheap-Class-3-DSC-in-Vuyyuru?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Vuyyuru</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="West Godavari" href="/cheap-Class-3-DSC-in-West-Godavari?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">West Godavari</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Yanam" href="/cheap-Class-3-DSC-in-Yanam?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Yanam</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Yanamalakuduru" href="/cheap-Class-3-DSC-in-Yanamalakuduru?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Yanamalakuduru</a>
    </Grid>
    <Grid item xs={4}>
    <a className="dropdown-item" title="Yarada" href="/cheap-Class-3-DSC-in-Yarada?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Yarada</a>
    </Grid>
</Grid>
       
					
    </>
  )
}
const MainItme10 = () => {
  return (
    <>
    <h5 className="widgetheading" style={{ textAlign: 'left' }}>Servicing States</h5>

    <Grid item container spacing={2} direction="row" sx={{ textAlign: 'left', padding: '1rem', margin: '1rem' }}>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Andaman and Nicobar Islands" href="/cheap-Class-3-DSC-in-Andaman-and-Nicobar-Islands?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Andaman and Nicobar Islands</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Andhra Pradesh" href="/cheap-Class-3-DSC-in-Andhra-Pradesh?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Andhra Pradesh</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Arunachal Pradesh" href="/cheap-Class-3-DSC-in-Arunachal-Pradesh?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Arunachal Pradesh</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Assam" href="/cheap-Class-3-DSC-in-Assam?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Assam</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Bihar" href="/cheap-Class-3-DSC-in-Bihar?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Bihar</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Chandigarh" href="/cheap-Class-3-DSC-in-Chandigarh?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Chandigarh</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Chhattisgarh" href="/cheap-Class-3-DSC-in-Chhattisgarh?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Chhattisgarh</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Dadra and Nagar Haveli and Daman and Diu" href="/cheap-Class-3-DSC-in-Dadra-and-Nagar-Haveli-and-Daman-and-Diu?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Dadra and Nagar Haveli and Daman and Diu</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Delhi" href="/cheap-Class-3-DSC-in-Delhi?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Delhi</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Goa" href="/cheap-Class-3-DSC-in-Goa?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Goa</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Gujarat" href="/cheap-Class-3-DSC-in-Gujarat?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Gujarat</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Haryana" href="/cheap-Class-3-DSC-in-Haryana?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Haryana</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Himachal Pradesh" href="/cheap-Class-3-DSC-in-Himachal-Pradesh?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Himachal Pradesh</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Jammu and Kashmir" href="/cheap-Class-3-DSC-in-Jammu-and-Kashmir?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Jammu and Kashmir</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Jharkhand" href="/cheap-Class-3-DSC-in-Jharkhand?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Jharkhand</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Karnataka" href="/cheap-Class-3-DSC-in-Karnataka?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Karnataka</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Kerala" href="/cheap-Class-3-DSC-in-Kerala?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Kerala</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Ladakh" href="/cheap-Class-3-DSC-in-Ladakh?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Ladakh</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Lakshadweep" href="/cheap-Class-3-DSC-in-Lakshadweep?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Lakshadweep</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Madhya Pradesh" href="/cheap-Class-3-DSC-in-Madhya-Pradesh?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Madhya Pradesh</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Maharashtra" href="/cheap-Class-3-DSC-in-Maharashtra?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Maharashtra</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Manipur" href="/cheap-Class-3-DSC-in-Manipur?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Manipur</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Meghalaya" href="/cheap-Class-3-DSC-in-Meghalaya?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Meghalaya</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Mizoram" href="/cheap-Class-3-DSC-in-Mizoram?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Mizoram</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Nagaland" href="/cheap-Class-3-DSC-in-Nagaland?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Nagaland</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Odisha" href="/cheap-Class-3-DSC-in-Odisha?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Odisha</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Puducherry" href="/cheap-Class-3-DSC-in-Puducherry?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Puducherry</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Punjab" href="/cheap-Class-3-DSC-in-Punjab?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Punjab</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Rajasthan" href="/cheap-Class-3-DSC-in-Rajasthan?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Rajasthan</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Sikkim" href="/cheap-Class-3-DSC-in-Sikkim?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Sikkim</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Tamil Nadu" href="/cheap-Class-3-DSC-in-Tamil-Nadu?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Tamil Nadu</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Telangana" href="/cheap-Class-3-DSC-in-Telangana?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Telangana</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Tripura" href="/cheap-Class-3-DSC-in-Tripura?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Tripura</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Uttar Pradesh" href="/cheap-Class-3-DSC-in-Uttar-Pradesh?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Uttar Pradesh</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="Uttarakhand" href="/cheap-Class-3-DSC-in-Uttarakhand?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">Uttarakhand</a>
							</Grid>
							<Grid item xs={4}>
								<a className="dropdown-item" title="West Bengal" href="/cheap-Class-3-DSC-in-West-Bengal?utm_medium=seo&amp;utm_source=google&amp;utm_term=Cheap Class 3 DSC In Chennai">West Bengal</a>
							</Grid>
					</Grid>
    </>
  )
}


const Main = ()=> {
  return (
    <Stack className="main-body">
      <MainHeaderText />
      <MainHeaderImg />
      <MainItme1 />
      <MainItme2 />
      <MainItme3 />
      <MainItme4 />
      <MainItme5 />
      <MainItem6 />
      <MainItem7 />
      <MainItem8 />
      <MainItem9 />
      <MainItme10 />
      
      
    </Stack>
  )
}
const Home = () => {
  return (
    <>
    <Navbar/>
    <PersistentDrawerRight />
    <Main />
    <Footer/>
    <Subfooter />
    </>
  )
}

export default Home;