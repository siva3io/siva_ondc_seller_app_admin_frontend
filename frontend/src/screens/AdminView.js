import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { loadShippingData, loadPaymentData } from "../redux/action";
import "./AdminView.css";
import PaymentTab from "./tab-data/PaymentTab"
import ShippingTab from "./tab-data/ShippingTab";
import { useHistory } from "react-router-dom";

function AdminView(props) {
  const Id = props.id;
  const history = useHistory();
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event, tabPath) => {
    history.push(`${tabPath}`);
  };

  let dispatch = useDispatch();
  const { shipping_partnersdata, payment_partnersdata } = useSelector((state) => state.data);
  console.log(shipping_partnersdata)
  useEffect(() => {
    dispatch(loadShippingData(Id));
    dispatch(loadPaymentData(Id));
  }, []);

  //styling
  const theme = createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          scroller: {
            background: "#fff",
          },
        },
      },
      MuiTabPanel: {
        styleOverrides: {
          root: {
            padding: "0px",
          },
        },
      },
    },
  });

  //render function
  return (
    <ThemeProvider theme={theme}>
      {shipping_partnersdata && (
        <Box sx={{ background: "#F9F9F9", minHeight: "100vh" }}>
          <Box
            className="bpp_bundleViewHeader"
            sx={{
              background: "#fff",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          >
            <div className="bpp_adview-Header">
              <div className="bpp_adview-HeaderButtons">
              </div>
            </div>
          </Box>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <TabList onChange={handleChange}>
                <Tab label="Payment Partners" value="0" onClick={(e) => {
              handleClick(e, "/paymentPartners");
            }}/>
                <Tab label="Shipping Partners" value="1" onClick={(e) => {
              handleClick(e, "/shippingPartners");
            }} />
                {/* <Tab label="CRM" value="3" /> */}
              </TabList>
            </Box>
            <Box className="bpp_bundleViewContent">
              <TabPanel value="0">
                <PaymentTab id={payment_partnersdata?.id} />
              </TabPanel>
              <TabPanel value="1">
                <ShippingTab id={shipping_partnersdata?.id} />
              </TabPanel>
            </Box>
          </TabContext>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default AdminView;
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
