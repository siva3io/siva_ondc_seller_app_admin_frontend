import React, { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { loadLSPData } from "../redux/action";
import RemoteDynamicTable from "Remote/DynamicTable";
import RemoteDynamicAppBar from "Remote/DynamicAppBar";

const LSP = () => {
  const [dynamicAppBar, setDynamicAppBar] = useState([]);
  const [params, setParams] = useState({
    limit: 10,
    offset: 1,
    filters: null,
    sort: null,
  });
  const [selectedId, setId] = useState(0);

  let dispatch = useDispatch();
  const { lspdata, lspdata_meta } = useSelector(state => state.data);
  useEffect(() => {
    dispatch(loadLSPData(params));
  }, [params]);

  const TableData = [
    {
      key: "",
      label: "Pickup",
      type: "text",
      count: true,
    },
    {
      key: "order.sales_order_number",
      label: "Order Number",
      type: "text",
      count: true,
    },
    {
      key: "created_date",
      label: "Create Date & time",
      type: "date",
    },
    {
      key: "awb_number",
      label: "Tracking ID",
      type: "text",
    },
    {
      key: "set_pickup_date",
      label: "Pickup request Date",
      type: "date",
    },
    {
      key: "billing_address.city",
      label: "Origin",
      type: "text",
      count: true,
    },
    {
      key: "receiver_address.city",
      label: "Destination",
      type: "text",
      count: true,
    },
    {
      key: "receiver_address.address_line1",
      label: "Reciver Address",
      type: "text",
      count: true,
    },
    {
      key: "receiver_address.mobile_number",
      label: "Recipient phone no.",
      type: "text",
      count: true,
    },
    {
      key: "quantity",
      label: "Quantity",
      type: "text",
    },
    {
      key: "package_details.package_weight",
      label: "Actual Weight",
      type: "text",
      count: true,
    },
    {
      key: "shipping_partner.partner_name",
      label: "Shipper",
      type: "text",
      count: true,
    },
    {
      key: "actual_shipping_cost",
      label: "Actual Shipping Cost",
      type: "text",
    },
    {
      key: "estimated_weight",
      label: "Estimate Weight",
      type: "text",
    },
    {
      key: "estimated_shipping_cost",
      label: "Estimate Shipping Cost",
      type: "text",
    },
    {
      key: "shipping_label_id",
      label: "Label URL",
      type: "downloadButton",
      count: true,
    },
    {
      key: "shipping_manifest_id",
      label: "Manifest",
      type: "downloadButton",
      count: true,
    },
    {
      key: "shipping_status.lookup_code",
      label: "Shipment Status",
      type: "text",
      count: true,
    },
    {
      key: "payment_status",
      label: "Payment Status",
      type: "text",
    },
    {
      key: "shipping_cost",
      label: "Shipping Cost",
      type: "text",
    },
  ];

  const handleChangeDyanmicAppBar = value => {
    setDynamicAppBar(value);
  };
  console.log("fgbhncgfmhgvnmj", lspdata);
  return (
    <Box sx={{ background: "#F9F9F9" }}>
      {lspdata && lspdata_meta.info && (
        <Box sx={{ p: 2 }}>
          <Suspense fallback={<div>Loading... </div>}>
            <RemoteDynamicAppBar
              leftText="LSP"
              dynamicAppBar={dynamicAppBar}
              sortOptions={[]}
              filterOptions={[]}
              setFilterOptions={[]}
              filterSearchItems={[]}
              searchItems={[]}
              searchOptions={[]}
              searchType={[]}
              setSearchType={[]}
            />
          </Suspense>
          <Suspense fallback={<div>Loading... </div>}>
            <RemoteDynamicTable
            
            table_data={lspdata.map(o => {
                return {
                  ...o,
                  
                  set_pickup_date:
                    o.set_pickup_date == "0001-01-01T00:00:00Z"
                      ? "": o.set_pickup_date
                     
                };
              })}
              
              // table_data={lspdata}
              headCells={TableData}
              info={lspdata_meta.info}
              setParams={setParams}
              handleChangeDyanmicAppBar={handleChangeDyanmicAppBar}
              setId={setId}
              enablepagination={true}
            />
          </Suspense>
        </Box>
      )}
    </Box>
  );
};
export default LSP;

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
