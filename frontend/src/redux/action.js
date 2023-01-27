import * as types from "./actionType";
import axios from "axios";
import BASE_API_SOURCE from "../baseurl";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

//#region Get Order Status List
const getOrderStatusData = (data) => ({
  type: types.ORDER_STATUS_LIST,
  payload: data,
});

export const loadOrderStatusData = (param) => {
  return function (dispatch) {
    var params = {
      per_page: param.limit,
      page_no: param.offset,
      filters: param.filters,
      sort: param.sort,
    };

    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .get(
        `${BASE_API_SOURCE.url}api/v1/sales_orders/admin/list?filters=[[%22channel_name%22,%22ilike%22,%22ONDC%22]]`,
        { params, headers }
      )
      .then((resp) => {
        dispatch(getOrderStatusData(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
//#endregion Get Order Status List

//#region Get Order Status Option
const getOrderStatusDataOption = (data) => ({
  type: types.ORDER_STATUS_OPTION,
  payload: data,
});

export const loadOrderStatusDataOption = (param) => {
  return function (dispatch) {
    var params = {
      per_page: "1000",
      page_no: param.offset,
      filters: param.filters,
      sort: param.sort,
    };

    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .get(
        `${BASE_API_SOURCE.url}api/v1/sales_orders/admin/list?filters=[[%22channel_name%22,%22ilike%22,%22ONDC%22]]`,
        { params, headers }
      )
      .then((resp) => {
        dispatch(getOrderStatusDataOption(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
//#endregion Get Order Status Option

//#region Get Customer Support List
const getCustomerSupportData = (data) => ({
  type: types.CUSTOMER_SUPPORT_LIST,
  payload: data,
});

export const loadCustomerSupportData = (param) => {
  return function (dispatch) {
    var params = {
      per_page: param.limit,
      page_no: param.offset,
      filters: param.filters,
      sort: param.sort,
    };

    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .get(`${BASE_API_SOURCE.ondc_url}api/v1/ondc/igm/issues/bpp/list`, {
        params,
        headers,
      })
      .then((resp) => {
        dispatch(getCustomerSupportData(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
//#endregion Get Customer Support List

export const loadCustomerSupportDataSearch = (param, level, status) => {
  return function (dispatch) {
    var params = {
      per_page: param.limit,
      page_no: param.offset,
      filters: param.filters,
      sort: param.sort,
    };

    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .get(
        `${BASE_API_SOURCE.ondc_url}api/v1/ondc/igm/issues/bpp/list?${
          level != undefined ? "level=" + level : ""
        }${status != undefined ? "&status=" + status + "&" : ""}${
        //   param.key ? param.key + "=" : ""
        // }${param.value ? param.value : ""}
        param.key && param.value ? param.key + "=" + param.value + "&" : ""
      }${param.limit != undefined ? "limit=" + param.limit + "&" : ""}${
        param.offset != undefined ? "offset=" + param.offset : ""
      }`,
        {params, headers }
      )
      .then((resp) => {
        dispatch(getCustomerSupportData(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

//#region Get LSP List
const getLSPData = (data) => ({
  type: types.LSP_LIST,
  payload: data,
});

export const loadLSPData = (param) => {
  return function (dispatch) {
    var params = {
      per_page: param.limit,
      page_no: param.offset,
      filters: param.filters,
      sort: param.sort,
    };

    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .get(
        `${BASE_API_SOURCE.url}api/v1/shipping_orders/admin/list?type=ONDC`,
        { params, headers }
      )
      .then((resp) => {
        dispatch(getLSPData(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
//#endregion Get LSP List

// --------------------------------

const getIssueDataById = (data) => ({
  type: types.ISSUES_VIEW,
  payload: data,
});

export const loadIssueDataById = (Id) => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .get(`${BASE_API_SOURCE.ondc_url}api/v1/ondc/igm/issues/bpp/view/` + Id, {
        headers,
      })
      .then((resp) => {
        dispatch(getIssueDataById(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

//#assign ticket to user

// const assignToUserById = (data) => ({
//   type: types.ASSIGN_TICKET,
//   payload: data,
// });

// export const assignToUser = (Id) => {
//   return function (dispatch) {
//     var headers = {
//       "Content-type": "application/json",
//       Authorization: `${BASE_API_SOURCE.token}`,
//     };

//     axios
//       .post(
//         `${BASE_API_SOURCE.ondc_url}api/v1/ondc/bpp/eunimart_bpp/clientApis/issue/${Id}/assignToUser`,
//         { headers }
//       )
//       .then((resp) => {
//         dispatch(assignToUserById(resp.data));
//       })
//       .catch((error) => console.log(error));
//   };
// };

export const assignToUser = (Id) => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .post(
        `${BASE_API_SOURCE.ondc_url}api/v1/ondc/bpp/eunimart_bpp/clientApis/issue/${Id}/assignToUser`,
        {},
        { headers }
      )
      .then((resp) => {
        toast.success("Assigned to User", {
          toastId: "Reply sent Successfully !21",
          autoClose: 2000,
        });
      })
      .catch((error) => {
        console.log(error);
        // toast.error("Reply failed.Please try again");
      });
  };
};

//#end region for assign ticket to user

export const updateIssue = (id, data, IssuesViewData) => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };
    IssuesViewData?.AssignedTo
      ? axios.post(
          `${BASE_API_SOURCE.ondc_url}api/v1/ondc/igm/issues/bpp/update/` + id,
          JSON.stringify(data),
          { headers }
        )
      : axios
          .post(
            `${BASE_API_SOURCE.ondc_url}api/v1/ondc/bpp/eunimart_bpp/clientApis/issues/update/` +
              id,
            JSON.stringify(data),
            { headers }
          )

          .then((resp) => {
            // callback(resp.data);
            toast.success("Reply sent", {
              toastId: "Reply sent Successfully !",
              autoClose: 2000,
            });
          })
          .catch((error) => {
            console.log(error);
            toast.error("Reply failed.Please try again");
          });
  };
};

export const updateIssue1 = (path, id, data) => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .post(`${path}` + "on_report", JSON.stringify(data), { headers })
      .then((resp) => {
        toast.success("Reply sent", {
          toastId: "Reply sent Successfully !",
          autoClose: 2000,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Reply failed.Please try again");
      });
  };
};

const getShippingData = (data) => ({
  type: types.SHIPPING_PARTNERS_LIST,
  payload: data,
});

export const loadShippingData = (id) => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .get(`${BASE_API_SOURCE.url}api/v1/shipping_partners/dropdown`, {
        headers,
      })
      .then((resp) => {
        dispatch(getShippingData(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

const getShippingViewData = (data) => ({
  type: types.SHIPPING_PARTNERS_VIEW,
  payload: data,
});

export const loadShippingViewData = (param) => {
  return function (dispatch) {
    var params = {
      id: param.Id,
      per_page: param.limit,
      page_no: param.offset,
      filters: param.filters,
      sort: param.sort,
    };
    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .get(`${BASE_API_SOURCE.url}api/v1/shipping_partners/${params.id}`, {
        headers,
      })
      .then((resp) => {
        dispatch(getShippingViewData(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

const getPaymentData = (data) => ({
  type: types.PAYMENT_PARTNERS_LIST,
  payload: data,
});

export const loadPaymentData = (id) => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .get(`${BASE_API_SOURCE.url}api/v1/payment_partners`, { headers })
      .then((resp) => {
        dispatch(getPaymentData(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getLink = (data, callback) => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .post(
        `${BASE_API_SOURCE.url}integrations/ai_data_sync/getlink`,
        JSON.stringify(data),
        { headers }
      )
      .then((resp) => {
        console.log("resp", resp);
        callback(resp.data);
      })
      .catch((error) => console.log(error));
  };
};

const getGrievanceCategories = (data) => ({
  type: types.LOAD_GRIEVANCE_CATEGORIES,
  payload: data,
});

export const loadGrievanceCategories = () => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };
    axios
      .get(`${BASE_API_SOURCE.ondc_url}api/v1/ondc/issue_categories`, {
        headers,
      })
      .then((resp) => {
        dispatch(getGrievanceCategories(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
export const raise_report_api = (data, callback) => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .post(
        `${BASE_API_SOURCE.ondc_url}api/v1/ondc/clientApis/bpp/eunimart_bpp/issue`,
        JSON.stringify(data),
        { headers }
      )
      .then((resp) => {
        callback(resp.data);
        // toast.success("Ticket Raised", {
        //   toastId: "Ticket Raised Successfully !",
        //   autoClose: 2000,
        // });
      })
      .catch((error) => {
        console.log(error);
        // toast.error("Ticket not Created");
      });
  };
};

export const escalated_api = (data) => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .post(
        `${BASE_API_SOURCE.ondc_url}api/v1/ondc/clientApis/bpp/eunimart_bpp/escalate`,
        JSON.stringify(data),
        { headers }
      )
      .then((resp) => {
        // callback(resp.data);
        toast.success("Ticket Escalated", {
          toastId: "Ticket Raised Successfully !",
          autoClose: 2000,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ticket not Escalated");
      });
  };
};

//#region Ticket types List
const getTicketTypesData = (data) => ({
  type: types.TICKET_TYPES_LIST,
  payload: data,
});

export const loadTicketTypesData = (param) => {
  return function (dispatch) {
    var params = {
      per_page: param.limit,
      page_no: param.offset,
      filters: param.filters,
      sort: param.sort,
    };

    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    const userId = JSON.parse(localStorage.getItem("user_id"))
      ? JSON.parse(localStorage.getItem("user_id"))
      : 22;

    axios
      .get(`${BASE_API_SOURCE.ondc_url}api/v1/ondc/igm/issues/types`, {
        params,
        headers,
      })
      .then((resp) => {
        dispatch(getTicketTypesData(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
//#endregion Ticket types  List

//#region Get Order Status List
const getAssignTicketData = (data) => ({
  type: types.ASSIGN_TICKET_DATA,
  payload: data,
});

export const loadAssignTicketData = (id) => {
  return function (dispatch) {
    console.log(id, "iddddddddddddd");
    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .get(
        `${BASE_API_SOURCE.ondc_url}api/v1/ondc/clientApis/bpp/get_order?id=${id}`,
        // `${BASE_API_SOURCE.url}api/v1/sales_orders/` + id,
        {
          headers,
        }
      )
      .then((resp) => {
        dispatch(getAssignTicketData(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
//#endregion Get Order Status List

//#region event view status api
export const Event_view_status_api = (data, callback) => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .post(
        `${BASE_API_SOURCE.ondc_url}api/v1/ondc/clientApis/igm/issue_status`,
        JSON.stringify(data),
        { headers }
      )
      .then((resp) => {
        // console.log("resp", resp);
        callback(resp.data);
      })
      .catch((error) => console.log(error));
  };
};
//#endregion event view status api

//#region Get Sales Order Data By Id
const getSalesDataById = data => ({
  type: types.SALES_VIEW,
  payload: data,
});

export const loadSalesDataById = Id => {
  return function(dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };

    axios
      .get(`${BASE_API_SOURCE.url}api/v1/sales_orders/admin/` + Id, { headers })
      .then(resp => {
        dispatch(getSalesDataById(resp.data));
      })
      .catch(error => console.log(error));
  };
};
//#endregion Get Sales Order Data By Id

const orderstatusdoenload = (data) => ({
  type: types.DOWNLOAD_ORDERS_STATUS,
  payload: data,
});

export const downloadOrderStatus = () => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
      Authorization: `${BASE_API_SOURCE.token}`,
    };
    axios
      .get(`${BASE_API_SOURCE.url}/api/v1/sales_orders/admin/generateorderCSV?filters=[["channel_name","ilike","ONDC"]]`, { headers })
      .then((resp) => {
        dispatch(orderstatusdoenload(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

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
