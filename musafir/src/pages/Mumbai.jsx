
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
const Mumbai = ({ price, dscprice, offer, freecancellation, location2, name, image, imgThumb1, imgThumb2, imgThumb3, imgThumb4, rating, ratingText, location, item, cancellation, pernight, tax }) => {
    return (<>
        <Box style={{ width: "90%", margin: "auto", display: "flex", gap: "10px", padding: "10px", margin: "20px" }} >

            <Box style={{ width: "20%", margin: "auto" }}>
                <Box>
                    <img width={"320px"} height={"220px"} src={image} alt="" />
                </Box>

                <Box style={{ display: "flex", gap: "10px" }}>
                    <img width={"100px"} src={imgThumb1} alt="" />
                    <img width={"100px"} src={imgThumb2} alt="" />
                    <img width={"100px"} src={imgThumb3} alt="" />
                </Box>

            </Box>


            <Box style={{ width: "70%", margin: "auto", gap: "10px", padding: "10px", margin: "20px", marginLeft: "50px" }}>
                <Box style={{ display: "flex", gap: "10px" }}>
                    <Typography variant="h6">{rating}</Typography>
                    <Typography variant="h6">{ratingText}</Typography>

                </Box>
                <Box style={{ display: "flex", gap: "10px" }}>
                    <Typography variant="h6">{name}</Typography>

                </Box>
                <Box style={{ display: "flex", gap: "10px" }}>
                    <Typography variant="h6">{location2}</Typography>
                    <Typography variant="h6">{location}</Typography>

                </Box>
                <Box style={{ display: "flex", gap: "10px" }}>

                    <Typography variant="h6">{item}</Typography>

                </Box>

                <Box style={{ gap: "10px" }}>
                    <Typography variant="h6">{cancellation}</Typography>
                    <Typography variant="h6">{freecancellation}</Typography>
                    <Typography variant="h6">{offer}</Typography>
                </Box>



            </Box>
            <Box >
                <Typography variant="h6">{price}</Typography>
                <Typography variant="h6">{dscprice}</Typography>
                <Typography variant="h6">{tax}</Typography>
                <Typography variant="h6">{pernight}</Typography>
            </Box>
        </Box>

    </>
    )
}

export default Mumbai