import * as types from "./actionType";

const initialState = {
  orderstatusdata: [],
  orderstatusdata_meta: {},
  customersupportdata: [],
  customersupportdata_meta: {},
  lspdata: [],
  lspdata_meta: {},
  salesdata: [],
  salesdata_meta: {},
  purchase_ordersdata: [],
  purchase_ordersdata_meta: {},
  shipping_partnersdata: [],
  shipping_partnersdata_meta: {},
  shipping_partnersviewdata: [],
  shipping_partnerviewsdata_meta: {},
  payment_partnersdata: [],
  payment_partnersdata_meta: {},
  IssuesViewData: [],
  grievanceCategories: [],
  ticketTypesData: [],
  assignTicketData: [],
  assignTicketToUser: [],
  orderstatusoption: [],
  orderstatusoption_meta: {},
  salesdata:[],
  orderStatusDownload:[],
  loading: false,
};

const BPPdataReducers = (state = initialState, action) => {
  //console.log("action.payload", action.payload)
  switch (action.type) {
    case types.ORDER_STATUS_LIST:
      return {
        ...state,
        orderstatusdata: action.payload.data,
        orderstatusdata_meta: action.payload.meta,
        loading: false,
      };
    case types.ORDER_STATUS_OPTION:
      return {
        ...state,
        orderstatusoption: action.payload.data,
        orderstatusoption_meta: action.payload.meta,
        loading: false,
      };
    case types.CUSTOMER_SUPPORT_LIST:
      return {
        ...state,
        customersupportdata: action.payload.data,
        customersupportdata_meta: action.payload.pagination,
        loading: false,
      };
    case types.LSP_LIST:
      return {
        ...state,
        lspdata: action.payload.data,
        lspdata_meta: action.payload.meta,
        loading: false,
      };
    case types.SALES_VIEW:
      return {
        ...state,
        salesdata: action.payload.data,
        loading: false,
      };
    case types.PURCHASE_ORDERS_LIST:
      return {
        ...state,
        purchase_ordersdata: action.payload.data,
        purchase_ordersdata_meta: action.payload.meta,
        loading: false,
      };
    case types.SHIPPING_PARTNERS_LIST:
      return {
        ...state,
        shipping_partnersdata: action.payload.data,
        shipping_partnersdata_meta: action.payload.meta,
        loading: false,
      };
    case types.SHIPPING_PARTNERS_VIEW:
      return {
        ...state,
        shipping_partnersviewdata: action.payload.data,
        shipping_partnerviewsdata_meta: action.payload.meta,
        loading: false,
      };
    case types.PAYMENT_PARTNERS_LIST:
      return {
        ...state,
        payment_partnersdata: action.payload.data,
        payment_partnersdata_meta: action.payload.meta,
        loading: false,
      };
    case types.ISSUES_VIEW:
      return {
        ...state,
        IssuesViewData: action.payload,
        loading: false,
      };
    case types.LOAD_GRIEVANCE_CATEGORIES:
      return {
        ...state,
        grievanceCategories: action.payload,
        loading: false,
      };
    case types.TICKET_TYPES_LIST:
      return {
        ...state,
        ticketTypesData: action.payload,
        loading: false,
      };
    case types.ASSIGN_TICKET_DATA:
      return {
        ...state,
        assignTicketData: action.payload.data,
        loading: false,
      };
    case types.ASSIGN_TICKET:
      return {
        ...state,
        assignTicketToUser: action.payload.data,
        loading: false,
      };
      case types.SALES_VIEW: return {
        ...state,
        salesdata: action.payload.data,
        // salesOrderLineitems: action.payload.data.sales_order_lines,
        loading: false
    }
    case types.DOWNLOAD_ORDERS_STATUS:
      return {
        ...state,
        orderStatusDownload: action.payload.data,
        loading: false,
      };
    default:
      return state;
  }
};
export default BPPdataReducers;
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
