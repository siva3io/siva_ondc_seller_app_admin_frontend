import { Switch } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import React from "react";
import "./CardProducts.css";
const CardProducts1 = (data) => {

  const [checked1, setChecked1] = React.useState(false);

  const handleChange = (event) => {
    setChecked1(event.target.checked);
  };
  return (
    <>
      <div className="bpp_productCardbody">
        <img
          className="bpp_productCard-img"
          src={data?.data?.logo}
          alt="alternatetext"
          width="120"
          height="120"

        />
        <div className="bpp_productCard-pricebody">
          <div className="bpp_productCard-price">
            <div className="bpp_productCard-price1">{data?.data?.partner_name}</div>
            <div className="bpp_productCard-price2">{data?.data?.type}</div>
          </div>
          <div className="bpp_productCard-cartButton">
            <FormControlLabel
              control={
                <Switch checked={checked1} onChange={handleChange} name="toggle" />
              }
              label={checked1 ? "Disable" : "Enable"}
            />


          </div>
        </div>
      </div>
    </>
  );
};

export default CardProducts1;

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
