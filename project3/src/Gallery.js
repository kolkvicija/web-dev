import "./App.css";
import * as React from 'react';
import Grid from '@mui/material/Grid';

function Article({ url, product, price }) {
    return (
        <div className="Card">
            <img className="Image" src={url} alt={product} />
            <h3>{product}</h3>
            <p>{price}$</p>
        </div>
    );
}

function Gallery() {
    return (
        <div id="Product-Gallery">
            <h1 className="Headers">Products</h1>
            <Grid container spacing={3} id="Products">
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Article url="https://i.pinimg.com/564x/7b/87/2e/7b872e94767f0b50434bc21d808369d3.jpg" product="PRODUCT 1" price="15" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Article url="https://i.pinimg.com/564x/95/1f/52/951f5211eb19db552198442379eb79a4.jpg" product="PRODUCT 2" price="20" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Article url="https://i.pinimg.com/564x/5e/65/c9/5e65c96de4af3e8bba755b7fb74beff7.jpg" product="PRODUCT 3" price="13" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Article url="https://i.pinimg.com/564x/5e/65/c9/5e65c96de4af3e8bba755b7fb74beff7.jpg" product="PRODUCT 3" price="13" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Article url="https://i.pinimg.com/564x/5e/65/c9/5e65c96de4af3e8bba755b7fb74beff7.jpg" product="PRODUCT 3" price="13" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Article url="https://i.pinimg.com/564x/5e/65/c9/5e65c96de4af3e8bba755b7fb74beff7.jpg" product="PRODUCT 3" price="13" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Article url="https://i.pinimg.com/564x/5e/65/c9/5e65c96de4af3e8bba755b7fb74beff7.jpg" product="PRODUCT 3" price="13" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Article url="https://i.pinimg.com/564x/5e/65/c9/5e65c96de4af3e8bba755b7fb74beff7.jpg" product="PRODUCT 3" price="13" />
                </Grid>
            </Grid>
        </div>
    );
}

export default Gallery;
