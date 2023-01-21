import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item2 from "./Item2";
import { productData, responsive } from "./data2";
export default function Final2() {
  const product = productData.map((item) => (
    <Item2
      name={item.name}
      url={item.imageurl}
    />
  ));
  return (
    <div style={{height:"60vh", width:"85%",backgroundColor:"white",  margin:"auto",marginBottom:"30px",borderRadius:"10px",padding:"10px"}}>
     <h1>Unlock Lesser-Known Wonders of India</h1>

      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}