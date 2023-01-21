
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
const Citycard = (props) => {
    const { image, imgThumb1, imgThumb2, imgThumb3, rating, ratingText, ratingcount, name, location2, location, item, cancellation, freecancellation, offer, price, dscprice, pernight, tax, imgThumb4,text }=props
 const handleclick =()=>{
console.log({ image, imgThumb1, imgThumb2, imgThumb3, rating, ratingText, ratingcount, name, location2, location, item, cancellation, freecancellation, offer, price, dscprice, pernight, tax, imgThumb4,text })
 }
 return (<>
       
    <Box onClick={handleclick} style={{ width: "90%",  display: "flex",  justifyContent: 'space-between', border: "1px solid blue", margin: "10px",backgroundColor:"aliceblue",}} >

            <Box style={{}}>
                    <Box>
                        <img width={"250px"} height={"200px"} src={image} alt="" />
                    </Box>

                    <Box style={{ display: "flex", gap: "10px" }}>
                        <img width={"75px"} src={imgThumb1} alt="" />
                        <img width={"75px"} src={imgThumb2} alt="" />
                        <img width={"75px"} src={imgThumb3} alt="" />
                    </Box>

             </Box>
                    
                <Box style={{ }}>
                    <Box style={{ display: "flex", gap: "10px", margin: "5px",  padding: "5px" }}>
                        <Typography sx={{
                            mrgin: '5px',
                            padding: '5px', borderRadius: '5px', backgroundColor: 'rgb(11, 88, 180)', fontFamily: 'Lato', fontSize: '15px', fontWeight: 900, lineHeight: '12px', color: 'white'
                        }} variant="h6">{rating}</Typography>
                        <Typography sx={{ fontFamily: 'Lato', fontSize: '15px', fontWeight: 900, lineHeight: '12px', color: 'rgb(11, 88, 180)' }} variant="h6">{ratingText}</Typography>
                        <Typography sx={{ fontFamily: 'Lato', fontSize: '12px', fontWeight: 900, lineHeight: '12px',color: "rgb(74, 74, 74)" }} variant="h6">{`(${ratingcount} VERIFIED RATINGS)`}</Typography>

                    </Box>
                    <Box style={{ display: "flex", gap: "10px", margin: "5px",  padding: "5px" }}>
                        <Typography sx={{ fontFamily: 'Lato', fontSize: '22px', fontWeight: 900, lineHeight: '22px', color: 'rgb(0, 0, 0)' }} variant="h6">{name}</Typography>

                    </Box>
                    <Box style={{ display: "flex", gap: "10px", margin: "5px",  padding: "5px"}}>
                        <Typography sx={{ fontFamily: 'Lato', fontSize: '13px', fontWeight: '700', lineHeight: '12px', color: 'rgb(0, 132, 255)' }} variant="h6">{location2}</Typography>
                        <Typography sx={{ fontFamily: "Lato", fontSize: "12px", fontWeight: "700", lineHeight: "12px", color: "RGB(155, 155, 155)" }} variant="h6">{location}</Typography>

                    </Box>
                    <Box style={{ display: "flex", gap: "10px", margin: "5px",  padding: "5px"}}>

                        <Typography sx={{
                            mrgin: '5px',
                            padding: '5px', borderRadius: '10px', backgroundColor: 'rgb(235,235,235)', fontFamily: 'Lato', fontSize: '12px', fontWeight: 900, lineHeight: '12px'
                        }} variant="h6">{item}</Typography>

                    </Box>

                    <Box style={{  gap: "10px", margin: "5px",  padding: "5px"}}>
                        <Typography sx={{ fontFamily: 'Lato', fontSize: '12px', fontWeight: 400, lineHeight: '12px', color: 'rgb(26, 121, 113)' }} variant="h6">{cancellation}</Typography>
                        <Typography sx={{ fontSize: "12px" }} variant="h6">{freecancellation}</Typography>
                        <Typography sx={{ fontSize: "12px",color: 'maroon'  }} variant="h6">{offer}</Typography>
                     </Box>
               </Box>
 

                <Box style={{width:"150px", textAlign: 'right',padding:"20px",backgroundColor:"rgb(245,245,245)"}} >
                    <Typography sx={{marginTop:"100px", fontFamily: 'Lato', fontSize: '16px', fontWeight: 400, lineHeight: '16px', color: 'rgb(155, 155, 155)', textDecoration: 'line-through' }} variant="h6">{`₹ ${price}`}</Typography>
                    <Typography sx={{ fontFamily: 'Lato', fontSize: '26px', fontWeight: '900', lineHeight: '26px', color: 'rgb(0, 0, 0)' }} variant="h6">{`₹ ${dscprice}`}</Typography>
                    <Typography sx={{  fontFamily: "Lato", fontSize: "14px", fontWeight: 400, lineHeight: "12px", color: "RGB(74, 74, 74)" }} variant="h6">{tax}</Typography>
                    <Typography sx={{ fontFamily: 'Lato', fontSize: "12px", fontWeight: 400,lineHeight: "10px", color: "RGB(155, 155, 155)"}} variant="h6">{pernight}</Typography>
                    <Typography sx={{ fontFamily: "lato", fontSize: "13px", fontWeight: 900 ,lineHeight: "11px", color: "RGB(0, 132, 255)"}} variant="h6">{text}</Typography>
                </Box>
    </Box>
     </>
    )
}

export default Citycard