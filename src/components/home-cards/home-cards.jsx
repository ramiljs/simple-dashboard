import React from "react";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import HeadphonesBatteryOutlinedIcon from "@mui/icons-material/HeadphonesBatteryOutlined";
import { 
  Card , 
  Stack , 
  Button , 
  Typography , 
  CardActions , 
  CardContent , 
  CardActionArea 
} from "@mui/material";

function HomeCards() {
  return (
    <div 
      className="HomeCards" 
      style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        margin: "20px 0 25px 240px" 
      }}
    >
      <Stack direction="row" spacing={7}>
        <Card 
          sx={{ 
            width: 300, 
            height: 200, 
            backgroundColor: "#f2d675", 
            borderRadius: "15px" 
           }}
         >
          <CardActionArea>
            <CardContent>
              <Typography 
                gutterBottom 
                sx={{ fontSize: 14, color: "#000" }} 
                color="text.secondary"
              >
                Laptops
              </Typography>
              <Typography variant="h5" component="div" sx={{ color: "#fff" }}>
                Lorem ipsum dolor sit.
              </Typography>
              <CardActions>
                <Button size="small" sx={{ color: "#000", textTransform: "lowercase" }}>view results</Button>
              </CardActions>
              <ComputerOutlinedIcon 
                sx={{ 
                  fontSize: "70px", 
                  margin: "-5px 0", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }} 
              />
            </CardContent>
          </CardActionArea>
        </Card>
        <Card 
          sx={{ 
            width: 300, 
            height: 200, 
            backgroundColor: "#9ec2e6", 
            borderRadius: "15px" 
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom sx={{ fontSize: 14, color: "#000" }} color="text.secondary">
                Telephones
              </Typography>
              <Typography variant="h5" component="div" sx={{ color: "#fff" }}>
                Lorem ipsum dolor sit.
              </Typography>
              <CardActions>
                <Button size="small" sx={{ color: "#000", textTransform: "lowercase" }}>view results</Button>
              </CardActions>
              <PhoneIphoneOutlinedIcon sx={{ fontSize: "70px", margin: "-5px 0", display: "flex", alignItems: "center", justifyContent: "center" }} />
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 300, height: 200, backgroundColor: "#ff8085", borderRadius: "15px" }}>
          <CardActionArea>
            <CardContent>
              <Typography sx={{ fontSize: 14, color: "#000" }} color="text.secondary" gutterBottom>
                Accesories
              </Typography>
              <Typography variant="h5" component="div" sx={{ color: "#fff" }}>
                Lorem ipsum dolor sit.
              </Typography>
              <CardActions>
                <Button size="small" sx={{ color: "#000", textTransform: "lowercase" }}>view results</Button>
              </CardActions>
              <HeadphonesBatteryOutlinedIcon 
                sx={{ 
                  fontSize: "85px", 
                  margin: "-5px 0", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }} 
              />
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </div>
  )
}

export default HomeCards
