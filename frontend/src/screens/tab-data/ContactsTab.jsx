import React, { useEffect, useState, Suspense } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { loadShippingViewData } from "../../redux/action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactDetailsCard from "../../Components/ContactDetailsCard";
import "../../Components/ContactDetailsCard.css";

function ContactsTab({ id }) {
  const navigate = useHistory();
  const [dynamicAppBar, setDynamicAppBar] = useState([]);
  const [params, setParams] = useState({
    Id: id ?id:0,
    limit: 100,
    offset: 1,
    filters: null,
    sort: null,
  });

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadShippingViewData(params));
  }, [params]);

  const { shipping_partnersviewdata } = useSelector(
    (state) => state.data
  );
  return (
    <Box sx={{ background: "#F9F9F9" }}>

      <Box sx={{ background: "#F9F9F9" }}>
        <div
          style={{
            fontSize: "24px",
            margin: "14px 0px -11px 18px",
            fontWeight: "600",
          }}
        >
          Shipping partner contacts
        </div>

        <Box sx={{ p: 2 }}>


          <Box sx={{ marginTop: 2 }}>
            <div className="cc-gridAllCards">
              <div className="cc-gridcards" style={{ display: "flex", flexWrap: "wrap" }}>
                {shipping_partnersviewdata?.sp_contact_details?.map((o) => {
                  return <ContactDetailsCard data={o}/>;
                })}
              </div>
            </div>


            <ToastContainer />
          </Box>
        </Box>

      </Box>
    </Box>
  );
}
export default ContactsTab;
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
