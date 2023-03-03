import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item1 from "./Item1";
import { productData, responsive } from "./data1";
import style from "./Carousel1.module.css";
export default function Final1() {
  const product = productData.map((item, i) => (
    <Item1 key={i} name={item.name} url={item.imageurl} />
  ));
  return (
    <div
      className={style.main_div}
      style={{
        height: "60vh",
        width: "85%",
        backgroundColor: "white",
        margin: "auto",
        marginBottom: "30px",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <h1>Handpicked Collections for You</h1>

      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
