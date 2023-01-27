import React, { useEffect, useState, Suspense } from "react";
import { Box } from "@mui/material";
import DynamicTable from "../DynamicTable";

const OpenDataTab = (props) => {
  const [dynamicAppBar, setDynamicAppBar] = useState([]);
  const [params, setParams] = useState({
    limit: 10,
    offset: 1,
    filters: null,
    sort: null,
  });
  const [selectedId, setId] = useState(0);

  const TableData = [
    {
      key: "_id",
      label: "Nerwork Order Id",
      type: "text",
    },
    {
      key: "buyer",
      label: "Name of Buyer NP",
      type: "text",
    },
    {
      key: "seller",
      label: "Name of Seller NP",
      type: "text",
    },
    {
      key: "provider_name",
      label: "Name of Seller",
      type: "text",
    },
    {
      key: "issue_id",
      label: "Ticket Id",
      type: "text",
    },
    {
      key: "issue_category",
      label: "Issue Category",
      type: "text",
    },
    {
      key: "issue_category",
      label: "Issue Details",
      type: "text",
    },
    {
      key: "status.status",
      label: "Issue Status",
      type: "status",
    },
    {
      key: "createdAt",
      label: "Issue Creation Date",
      type: "date",
    },
    {
      key: "createdAt",
      label: "Issue Creation Time",
      type: "text",
    },
    {
      key: "updatedAt",
      label: "Latest Seller App Response Date",
      type: "date",
    },
    {
      key: "updatedAt",
      label: "Latest Seller App Response Time",
      type: "text",
    },
  ];

  const handleChangeDyanmicAppBar = (value) => {
    setDynamicAppBar(value);
  };

  return (
    <Box sx={{ background: "#F9F9F9" }}>
      <Box sx={{ p: 2 }}>
        {props.data && (
          <Suspense fallback={<div>Loading... </div>}>
            <DynamicTable
              table_data={props.data}
              headCells={TableData}
              // info={customersupportdata_meta.info}
              setParams={setParams}
              handleChangeDyanmicAppBar={handleChangeDyanmicAppBar}
              setId={setId}
              enablepagination={true}
            />
          </Suspense>
        )}
      </Box>
    </Box>
  );
};
export default OpenDataTab;

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
