import "./App.css"

function Article({url, product, price}) {
    return (
        <div className="Card">
            <img className="Image"
        src={url}

      />
      <h3>{product}</h3>
      <p>{price}$</p>

        </div>
      
    )
  }

function Gallery (){
    
    return (
        <div id="Product-Gallery">
            <h1 class="Headers">Products</h1>
            <div id="Products">
            <Article url="https://i.pinimg.com/564x/7b/87/2e/7b872e94767f0b50434bc21d808369d3.jpg" product="PRODUCT 1" price="15"/>
            <Article url="https://i.pinimg.com/564x/95/1f/52/951f5211eb19db552198442379eb79a4.jpg" product="PRODUCT 2" price="20"/>
            <Article url="https://i.pinimg.com/564x/5e/65/c9/5e65c96de4af3e8bba755b7fb74beff7.jpg" product="PRODUCT 3" price="13"/>
            <Article url="https://i.pinimg.com/564x/5e/65/c9/5e65c96de4af3e8bba755b7fb74beff7.jpg" product="PRODUCT 3" price="13"/>
            <Article url="https://i.pinimg.com/564x/5e/65/c9/5e65c96de4af3e8bba755b7fb74beff7.jpg" product="PRODUCT 3" price="13"/>
            <Article url="https://i.pinimg.com/564x/5e/65/c9/5e65c96de4af3e8bba755b7fb74beff7.jpg" product="PRODUCT 3" price="13"/>
            <Article url="https://i.pinimg.com/564x/5e/65/c9/5e65c96de4af3e8bba755b7fb74beff7.jpg" product="PRODUCT 3" price="13"/>
            <Article url="https://i.pinimg.com/564x/5e/65/c9/5e65c96de4af3e8bba755b7fb74beff7.jpg" product="PRODUCT 3" price="13"/>

            </div>
        
        </div>
        
          
        
    );
    
};

export default Gallery;