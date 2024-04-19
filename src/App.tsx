import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import "./App.css";

const App: FunctionComponent = () => {
  return (
    <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={1} columnSpacing={{ sm: 2 }} columns={24}>
                    {/*Corporate*/}
                    <Grid item xs={8}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardMedia
                                component="img"
                                className="icon-boxes"
                                data-assetid="https://site-q-001.sitecorecontenthub.cloud/api/entities/identifier/gst6gKy9TguwogG-HLRwzw"
                                data-assetrendition="portal_medium"
                                sx={{ height: 140, padding: "1em 1em 0 1em", objectFit: "contain" }}
                                image="https://delivery-dev-sitecore.sitecorecontenthub.cloud/api/public/content/corporateProductsAndLogos"
                                alt="Corporate"
                            />
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Corporate and Product Logos
                                </Typography>
                            </CardContent>
                            {/*<CardActions>*/}
                            {/*    <Button size="small">Learn More</Button>*/}
                            {/*</CardActions>*/}
                        </Card>
                    </Grid>
                    
                    {/*Photography*/}
                    <Grid item xs={8}>
                        <CardMedia
                            component="img"
                            className="icon-boxes"
                            data-assetid="https://site-q-001.sitecorecontenthub.cloud/api/entities/identifier/lwfk-uWFQgujQhFqYqSx5A"
                            data-assetrendition="portal_medium"
                            sx={{ height: 140, padding: "1em 1em 0 1em", objectFit: "contain" }}
                            image="https://delivery-dev-sitecore.sitecorecontenthub.cloud/api/public/content/Photography-Thumbnail"
                            alt="photography"
                        />
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Photography
                                </Typography>
                            </CardContent>
                            {/*<CardActions>*/}
                            {/*    <Button size="small">Learn More</Button>*/}
                            {/*</CardActions>*/}
                        </Card>
                    </Grid>
                    
                    {/*Icons*/}
                    <Grid item xs={8}>
                        <CardMedia
                            component="img"
                            className="icon-boxes"
                            data-assetid="https://site-q-001.sitecorecontenthub.cloud/api/entities/identifier/IvYYaKTRRi244prSiVzkKg"
                            data-assetrendition="portal_medium"
                            sx={{ height: 140, padding: "1em 1em 0 1em", objectFit: "contain" }}
                            image="https://delivery-dev-sitecore.sitecorecontenthub.cloud/api/public/content/Icons-thumbnail"
                            alt="icons"
                        />
                        <Card sx={{minWidth: 275}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Icons
                                </Typography>
                            </CardContent>
                            {/*<CardActions>*/}
                            {/*    <Button size="small">Learn More</Button>*/}
                            {/*</CardActions>*/}
                        </Card>
                    </Grid>
                    
                    {/*Templates*/}
                    <Grid item xs={8}>
                        <Card sx={{minWidth: 275}}>
                            <CardMedia
                                component="img"
                                className="icon-boxes"
                                data-assetid="https://site-q-001.sitecorecontenthub.cloud/api/entities/identifier/P4mg4vF4QbOwPpbmCR96Gg"
                                data-assetrendition="portal_medium"
                                sx={{ height: 140, padding: "1em 1em 0 1em", objectFit: "contain" }}
                                image="https://delivery-dev-sitecore.sitecorecontenthub.cloud/api/public/content/Template-thumbnail"
                                alt="templates"
                            />
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Templates
                                </Typography>
                            </CardContent>
                            {/*<CardActions>*/}
                            {/*    <Button size="small">Learn More</Button>*/}
                            {/*</CardActions>*/}
                        </Card>
                    </Grid>

                    {/*Illustrations*/}
                    <Grid item xs={8}>
                        <Card sx={{minWidth: 275}}>
                            <CardMedia
                                component="img"
                                className="icon-boxes"
                                data-assetid="https://site-q-001.sitecorecontenthub.cloud/api/entities/identifier/q5KeynGRTp62irwqQ0kYcw"
                                data-assetrendition="portal_medium"
                                sx={{ height: 140, padding: "1em 1em 0 1em", objectFit: "contain" }}
                                image="https://delivery-dev-sitecore.sitecorecontenthub.cloud/api/public/content/Illustration-thumbnail"
                                alt="Illustrations"
                            />
                        <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Illustrations
                                </Typography>
                        </CardContent>
                            {/*<CardActions>*/}
                            {/*    <Button size="small">Learn More</Button>*/}
                            {/*</CardActions>*/}
                        </Card>
                    </Grid>

                    {/*Competitive Battle Cards*/}
                    <Grid item xs={8}>
                        <Card sx={{minWidth: 275}}>
                            <CardMedia
                                component="img"
                                className="icon-boxes"
                                data-assetid="https://site-q-001.sitecorecontenthub.cloud/api/entities/identifier/tLQloBpLSCCOEOe-B2lgPg"
                                data-assetrendition="portal_medium"
                                sx={{ height: 140, padding: "1em 1em 0 1em", objectFit: "contain" }}
                                image="https://delivery-dev-sitecore.sitecorecontenthub.cloud/api/public/content/Competitive-Battlecards-thumbnail"
                                alt="Competitive Battle Cards"
                            />
                        <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Competitive Battle Cards
                                </Typography>
                        </CardContent>
                            {/*<CardActions>*/}
                            {/*    <Button size="small">Learn More</Button>*/}
                            {/*</CardActions>*/}
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
  );
};

export default App;
