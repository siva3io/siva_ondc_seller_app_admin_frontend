import React, { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { downloadOrderStatus, loadOrderStatusData } from "../redux/action";
// import RemoteDynamicTable from "Remote/DynamicTable";
import RemoteDynamicAppBar from "Remote/DynamicAppBar";

import RemoteDynamicTable from "./orderStatusDynamicTable";

const OrderStatus = () => {
  const [dynamicAppBar, setDynamicAppBar] = useState([]);
  const [params, setParams] = useState({
    limit: 10,
    offset: 1,
    filters: null,
    sort: null,
  });
  const [selectedId, setId] = useState(0);

  let dispatch = useDispatch();
  const { orderstatusdata, orderstatusdata_meta, orderStatusDownload } =
    useSelector(state => state.data);
  useEffect(() => {
    dispatch(loadOrderStatusData(params));
    dispatch(downloadOrderStatus());
  }, [params]);
  console.log(orderstatusdata, "orderstatusdata");

  const TableData = [
    {
      key: "ondc_context.context.bap_id",
      numeric: false,
      label: "Buyer NP Name",
      type: "text",
      count: true,
    },
    {
      key: "ondc_context.context.bpp_id",
      numeric: false,
      label: "Seller NP Name",
      type: "text",
      count: true,
    },
    {
      key: "created_date",
      numeric: false,
      label: "Order Create Date & Time",
      type: "date_time",
    },
    {
      key: "id",
      numeric: false,
      label: "Network Order Id",
      type: "text",
    },
    {
      key: "ondc_context.context.transaction_id",
      numeric: false,
      label: "Network Transaction Id",
      type: "text",
      count: true,
    },
    {
      key: "item.id",
      numeric: false,
      label: "Seller NP Order Item Id",
      type: "text",
    },
    {
      key: "seller_np_type.display_name",
      numeric: false,
      label: "Seller NP Type",
      type: "text",
      count: true,
    },
    {
      key: "status.display_name",
      numeric: false,
      label: "Order Status",
      type: "text",
      count: true,
    },
    {
      key: "CreatedBy.Company.name",
      numeric: false,
      label: "Name of Seller",
      type: "text",
      count: true,
    },
    {
      key: "seller_pin_code",
      numeric: false,
      label: "Seller Pincode",
      type: "text",
    },
    {
      key: "CreatedBy.Company.company_details.business_address",
      numeric: false,
      label: "Seller City",
      type: "text",
    },
    {
      key: "item.product_details.product_name",
      numeric: false,
      label: "SKU Name",
      type: "text",
      count: true,
    },
    {
      key: "item.product_details.sku_id",
      numeric: false,
      label: "SKU Code",
      type: "text",
      count: true,
    },
    {
      key: "item.product_details.category.name",
      numeric: false,
      label: "Order Category",
      type: "text",
      count: true,
    },

    {
      key: "ready_to_ship",
      numeric: false,
      label: "Ready to Ship At Date & Time",
      type: "date_time",
      count: true,
    },
    {
      key: "shipped_date",
      numeric: false,
      label: "Shipped At Date & Time",
      type: "date_time",
    },
    {
      key: "delivery_date",
      numeric: false,
      label: "Delivered At Date & Time",
      type: "date_time",
    },
    {
      key: "delivery_type.display_name",
      numeric: false,
      label: "Delivery Type",
      type: "text",
      count: true,
    },

    {
      key: "logistics_seller_np_name",
      numeric: false,
      label: "Logistics Seller NP Name",
      type: "text",
      count: true,
    },
    {
      key: "logistics_network_order_id",
      numeric: false,
      label: "Logistics Network Order Id",
      type: "text",
    },
    {
      key: "logistics_network_transaction_id",
      numeric: false,
      label: "Logistics Network Transaction Id",
      type: "text",
    },
    {
      key: "customer_shipping_address.city",
      numeric: false,
      label: "Delivery City",
      type: "text",
      count: true,
    },
    {
      key: "customer_shipping_address.pin_code",
      numeric: false,
      label: "Delivery Pincode",
      type: "text",
      count: true,
    },
    {
      key: "cancelled_date",
      numeric: false,
      label: "Cancelled At Date & Time",
      type: "date_time",
    },
    {
      key: "cancel_by",
      numeric: false,
      label: "Cancelled By",
      type: "text",
    },
    {
      key: "cancellation_reason.display_name",
      numeric: false,
      label: "Cancellation Reason",
      type: "text",
    },

    {
      key: "so_payment_details.shipping_charges",
      numeric: false,
      label: "Total Shipping Charges",
      type: "text",
    },
    {
      key: "amount",
      numeric: false,
      label: "Total Order Value",
      type: "text",
    },
  ];

  const handleChangeDyanmicAppBar = value => {
    setDynamicAppBar(value);
  };

  // table_data={promotionHistorydata.map((o) => { return { ...o, promotional_status: o.promotional_status == true ? "Accepted" : "Rejected", is_applied_for_all: o.is_applied_for_all == false ? "All Products" : "Selected Products" } })}

  return (
    <Box sx={{ background: "#F9F9F9" }}>
      {orderstatusdata && orderstatusdata_meta.info && (
        <Box sx={{ p: 2 }}>
          <Suspense fallback={<div>Loading... </div>}>
            <RemoteDynamicAppBar
              leftText="Order Status"
              dynamicAppBar={[]}
              sortOptions={[]}
              filterOptions={[]}
              setFilterOptions={[]}
              filterSearchItems={[]}
              searchItems={[]}
              searchOptions={[]}
              searchType={[]}
              setSearchType={[]}
              download={true}
              download_link={
                orderStatusDownload &&
                orderStatusDownload.length > 0 &&
                orderStatusDownload[0]?.link
              }
            />
          </Suspense>
          <Suspense fallback={<div>Loading... </div>}>
            <RemoteDynamicTable
              table_data={orderstatusdata.map(o => {
                return {
                  ...o,
                  cancel_by: o.cancellation_reason.display_name
                    ? "Seller"
                    : o.cancel_by.display_name,
                  ready_to_ship:
                    o.ready_to_ship == "0001-01-01T00:00:00Z"
                      ? ""
                      : o.ready_to_ship,
                  shipped_date:
                    o.shipped_date == "0001-01-01T00:00:00Z"
                      ? ""
                      : o.shipped_date,
                  delivery_date:
                    o.delivery_date == "0001-01-01T00:00:00Z"
                      ? ""
                      : o.delivery_date,
                  cancelled_date:
                    o.cancelled_date == "0001-01-01T00:00:00Z"
                      ? ""
                      : o.cancelled_date,
                };
              })}
              headCells={TableData}
              info={orderstatusdata_meta?.info}
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
export default OrderStatus;

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
