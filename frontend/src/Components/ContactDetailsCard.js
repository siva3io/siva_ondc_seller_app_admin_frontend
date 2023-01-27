import { Button, Typography } from "@mui/material";
import React from "react";
import "./ContactDetailsCard.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactDetailsCard = (data) => {
  return (
    <>
      <div className="bpp_contactCardbody">
        <img
          className="bpp_contactCard-img"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="alternatetext"
        // width="120"
        // height="120"
        />
        <div className="bpp_contactCard-pricebody">
          <div className="bpp_contactCard-price1">{data.data.first_name + " " + data.data.last_name}</div>
          <div style={{ display: "flex" }}>
            <Typography className="bpp_cantactCard-position">
              {data?.data?.role}
            </Typography>
            <Typography className="bpp_contactCard-price2">/ID90090</Typography>
          </div>

          <div
            className="bpp_detailsBar"
          // style={{
          //   display: "flex",
          //   alignItems: "center",
          //   margin: "5px 0 0 0",
          // }}
          >
            <IconButton
              style={{ scale: "0.8", padding: "0", margin: "0 8px 0 0" }}
            >
              <LocalPhoneIcon style={{ color: "#543290" }} />
            </IconButton>
            <Typography
              style={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "15px",
              }}
            >
              {data?.data?.primary_phone}
            </Typography>
          </div>
          <div
            className="bpp_detailsBar"
          // style={{ display: "flex", alignItems: "center" }}
          >
            <IconButton
              style={{
                backgroundColor: "#0168B5",
                marginRight: "5px",
                // scale: "0.6",
                height: "20px",
                width: "20px",
                margin: "0 13px 0 0",
              }}
            >
              <Typography
                style={{
                  // fontWeight: 400,
                  fontSize: "10px",
                  // lineHeight: "15px",
                  // width: "20px",
                  // height: "20px",
                  fontWeight: 500,
                  display: "flex",
                  placeContent: "center",
                  placeItems: "center",
                  color: "white",
                }}
              >

              </Typography>
            </IconButton>
            <Typography
              style={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "15px",
              }}
            >
              {data?.data?.department}
            </Typography>
          </div>
          <div
            className="bpp_detailsBar"
          // style={{ display: "flex", alignItems: "center" }}
          >
            <IconButton
              style={{ scale: "0.8", padding: "0", margin: "0 8px 0 0" }}
            >
              <MailIcon style={{ color: "#FC817C" }} />
            </IconButton>
            <Typography
              style={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "15px",
              }}
            >
             {data?.data?.primary_email}
            </Typography>
          </div>
          <div
            className="bpp_detailsBar"
          // style={{ display: "flex", alignItems: "center" }}
          >
            <IconButton
              style={{ scale: "0.8", padding: "0", margin: "0 8px 0 0" }}
            >
              <LocationOnIcon style={{ color: "#F3A445" }} />
            </IconButton>
            <Typography
              style={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "15px",
              }}
            >
              Banjara Hills,Hyderabad
            </Typography>
          </div>
        </div>
        <div style={{ padding: "5px 0 0 0" }}>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default ContactDetailsCard;

/*
 Copyright (C) 2022 Eunimart Omnichannel Pvt Ltd. (www.eunimart.com)
 All rights reserved.
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License v3.0 as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License v3.0 for more details.
 You should have received a copy of the GNU Lesser General Public License v3.0
 along with this program.  If not, see <https://www.gnu.org/licenses/lgpl-3.0.html/>.
*/