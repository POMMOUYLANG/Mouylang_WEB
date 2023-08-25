import React from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import AccordionDash from "../components/AccordionDash";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BarChart from "../charts/BarChart";

export default function Home() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70}/>
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {/* <h1>Home</h1> */}
            <Grid container spacing={2}>
              <Grid item xs={8}>
              <Stack spacing={2} direction={"row"}>
                <Card sx={{ minWidth: 49 + "%" , height: 150}} className="gradient">
                  <CardContent>
                    <div className="iconstyles">
                      <CreditCardIcon/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#FFF"}}>
                      $500.00
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                      Total Earnings
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49 + "%" , height: 150}} className="gradientlight">
                  <CardContent>
                    <div className="iconstyles">
                      <ShoppingBagIcon/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#FFF"}}>
                      $900.00
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                      Total Order
                    </Typography>

                  </CardContent>
                </Card>
              </Stack>
            </Grid>
              <Grid item xs={4}>
              <Stack spacing={2} >
                <Card className="gradientlight">
                      <Stack spacing={2} direction={"row"}>
                        <div className="iconstyles">
                          <StorefrontIcon/>
                        </div>
                        <div className="paddingall">
                          <span className="pricetitle">$200K</span>
                          <br/>
                          <span className="pri  cesubtitle">Total Income</span>
                        </div>
                      </Stack>
                </Card>
                <Card>
                      <Stack spacing={2} direction={"row"}>
                          <div className="iconstylesblack">
                            <StorefrontIcon/>
                          </div>
                          <div className="paddingall">
                            <span className="pricetitle">$200K</span>
                            <br/>
                            <span className="pricesubtitle">Total Income</span>
                          </div>
                        </Stack>
                </Card>
              </Stack>
              </Grid>
            </Grid>
            <Box height={20}/>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh"}}>
                    <CardContent>
                      <BarChart/>
                    </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh"}}>
                    <CardContent>
                      <div className="paddingall">
                          <span className="pricetitle"> Popular Products</span>

                        </div>
                      <Box height={10}/>
                      <AccordionDash/>
                    </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>

    </>
  );
}
