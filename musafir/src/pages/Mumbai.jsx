import React from 'react'

const Mumbai = ({ price, dscprice, offer, freecancellation, location2, name, image, imgThumb1, imgThumb2, imgThumb3, imgThumb4, rating, ratingText, location, item, cancellation, pernight, tax }) => {
  return (<>
    <div style={{ width: "90%", margin: "auto", display: "flex", gap: "10px", padding: "10px", margin: "20px" }} >

      <div style={{ width: "20%", margin: "auto" }}>
        <div>
          <img width={"320px"} height={"220px"} src={image} alt="" />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <img width={"100px"} src={imgThumb1} alt="" />
          <img width={"100px"} src={imgThumb2} alt="" />
          <img width={"100px"} src={imgThumb3} alt="" />
        </div>

      </div>


      <div style={{ width: "70%", margin: "auto", gap: "10px", padding: "10px", margin: "20px", marginLeft: "50px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <h5>{rating}</h5>
          <h5>{ratingText}</h5>

        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <h5>{name}</h5>

        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <h5>{location2}</h5>
          <h5>{location}</h5>

        </div>
        <div style={{ display: "flex", gap: "10px" }}>

          <h5>{item}</h5>

        </div>

        <div style={{ gap: "10px" }}>
          <h5>{cancellation}</h5>
          <h5>{freecancellation}</h5>
          <h5>{offer}</h5>
        </div>



      </div>
      <div style={{ gap: "10px" }}>
        <h5>{price}</h5>
        <h5>{dscprice}</h5>
        <h5>{tax}</h5>
        <h5>{pernight}</h5>
      </div>
    </div>

  </>
  )
}

export default Mumbai


