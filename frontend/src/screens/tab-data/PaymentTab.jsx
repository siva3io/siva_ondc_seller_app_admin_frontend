import React, { useEffect, useState, Suspense } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { loadPaymentData } from "../../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ShippingTab.css";
import CardProducts1 from "../../Components/CardProducts1";

function PaymentTab({ id }) {
  const navigate = useHistory();
  const [dynamicAppBar, setDynamicAppBar] = useState([]);
  const [params, setParams] = useState({
    Id: id ?? 0,
    limit: 100,
    offset: 1,
    filters: null,
    sort: null,
  });
  const [selectedId, setId] = useState(0);
  const [searchType, setSearchType] = useState("sales_order_number");

  let dispatch = useDispatch();
  const { payment_partnersdata } = useSelector(
    (state) => state.data
  );
  useEffect(() => {
    dispatch(loadPaymentData(params));
  }, [params]);
  return (
    <Box sx={{ background: "#F9F9F9" }}>


      <Box sx={{ p: 2 }}>

        <Box sx={{ marginTop: 2 }}>
          <div className="bpp_pl-gridAllCards">
            <div className="bpp_pl-gridcards" style={{ display: "flex", flexWrap: "wrap" }}>
              {payment_partnersdata?.map((o) => {
                return <CardProducts1 data ={o} />;
              })}
            </div>
          </div>

          <ToastContainer />
        </Box>
      </Box>

    </Box>
  );
}
export default PaymentTab;
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
