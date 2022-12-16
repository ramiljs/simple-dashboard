import React from "react";
import { Chip, Card, Button, CardMedia, Typography, CardContent, CardActions, CardActionArea } from "@mui/material";
import bannerImg from "../../assets/images/banner.png";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";

export const HomeBanner = () => {
  return (
    <div className="HomeBanner" style={{ margin: "0 0 40px 300px" }}>
      <Card sx={{ maxWidth: 1000 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={bannerImg}
            alt="green iguana"
          />
        </CardActionArea>
        <CardActions>
          <CardContent>
            <Typography variant="subtitle2" style={{ fontWeight: "bold", fontSize: "20px" }}>
              Onlinezine magazine
            </Typography>
          </CardContent>
          <Button style={{ borderRadius: "16px", padding: "0", color: "inherit" }}>
            <Chip
              size="small"
              label="Store icon"
              variant="subtitle2"
              style={{ 
                backgroundColor: "#fff", 
                fontSize: "16px", 
                textTransform: "capitalize", 
                fontWeight : 900 
              }}
              icon={<ErrorOutlineOutlinedIcon />}
            />
          </Button>
          <Button style={{ borderRadius: "16px", padding: "0", color: "inherit" }}>
            <Chip
              size="small"
              label="Store delivery time"
              style={{ 
                backgroundColor: "#fff", 
                fontSize: "16px", 
                textTransform: "capitalize", 
                fontWeight: 900 
              }}
              icon={<LocalShippingOutlinedIcon />}
            />
          </Button>
          <Button style={{ borderRadius: "16px", padding: "0", color: "inherit" }}>
            <Chip
              size="small"
              label="Saved"
              style={{ 
                backgroundColor: "#fff", 
                fontSize: "16px", 
                textTransform: "capitalize", 
                fontWeight: 900 
              }}
              icon={<BookmarkAddOutlinedIcon />}
            />
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}