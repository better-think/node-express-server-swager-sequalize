(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[38],{1148:function(e,a,t){"use strict";t.r(a);var l=t(11),n=t(12),i=t(14),o=t(13),r=t(0),s=t.n(r),c=t(632),m=t(633),u=t(648),d=t(173),p=t(607),h=t(167),b=t(41),f=t.n(b),g=t(24),v=t(601),S=t(659),C=t.n(S),E=t(598),y=(t(611),t(612),t(613),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).state={rowData:null,pinnedTopRowData:[],pinnedBottomRowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{},columnDefs:[{headerName:"Lead Source",field:"lead_source",filter:!0,width:180,cellStyle:{color:"black","font-size":"14px"}},{headerName:"Quantity Used",field:"quantity_used",filter:!0,width:180,cellStyle:{color:"black","font-size":"14px"}}],composeMailStatus:!1,options:{colors:e.props.themeColors,plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},xaxis:{categories:["Craigslist","Google","Walk In","Carson Cars"],tickAmount:5}},series:[{data:[2,1,4,5]}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e.handleComposeSidebar=function(a){"open"===a?e.setState({composeMailStatus:!0}):e.setState({composeMailStatus:!1})},e.onSetSidebarOpen=function(a){e.setState({sidebarOpen:a})},e.handleMainAndComposeSidebar=function(){e.handleComposeSidebar("close"),e.onSetSidebarOpen(!1)},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/aggrid/data").then((function(a){for(var t={lead_source:"Carson Cars",quantity_used:"5"},l=window.innerWidth,n=e.state.columnDefs,i=0;i<e.state.columnDefs.length;i++)n[i].width=(l-l/5)/e.state.columnDefs.length,n[i].minWidth=120;e.setState({});for(var o=[],r=0;r<20;r++)o.push(Object.assign({},t));JSON.stringify(o),e.setState({rowData:o,columnDefs:n})}))}},{key:"UNSAFE_componentWillMount",value:function(){this.initTable(this.props)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.initTable(e)}},{key:"initTable",value:function(e){var a=[];a.push({lead_source:"Total",quantity_used:"12"}),this.setState({pinnedBottomRowData:a,composeMailStatus:!1})}},{key:"handleCustomize",value:function(){this.handleComposeSidebar("open"),this.onSetSidebarOpen(!1)}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,l=a.defaultColDef,n=a.pinnedBottomRowData;return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{breadCrumbTitle:"Lead Sources",breadCrumbParent:"Reports",breadCrumbActive:"Lead Sources"}),s.a.createElement(c.a,{onClick:this.handleMainAndComposeSidebar},s.a.createElement(m.a,null,s.a.createElement("div",{className:"d-flex flex-wrap justify-content-end align-items-center"},s.a.createElement("div",{className:"mb-1"}),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(u.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),s.a.createElement("div",{className:"customize-btn"},s.a.createElement(d.a.Ripple,{block:!0,color:"primary",onClick:function(){return e.handleCustomize()}},"Customize")),s.a.createElement("div",{className:"export-btn"},s.a.createElement(d.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(C.a,{options:this.state.options,series:this.state.series,type:"bar",height:350}),s.a.createElement("div",{className:"d-flex flex-wrap mb-1"},s.a.createElement("div",{className:"mr-1"},s.a.createElement(d.a.Ripple,{block:!0,color:"primary"},"Total Using"))))),s.a.createElement("div",{className:"email-application"},s.a.createElement(v.a,{handleComposeSidebar:this.handleComposeSidebar,currentStatus:this.state.composeMailStatus}),s.a.createElement(c.a,{className:"agGrid-card",style:{height:"100% !important",paddingBottom:"2%"},onClick:this.handleMainAndComposeSidebar},s.a.createElement(m.a,{className:"py-0",style:{height:"100% !important"}},null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table",style:{height:"100% !important",width:"100% !important"}},s.a.createElement(h.a.Consumer,null,(function(a){return s.a.createElement(p.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:l,columnDefs:e.state.columnDefs,rowData:t,onGridReady:e.onGridReady,floatingFilter:!0,pagination:!0,enableRtl:"rtl"===a.state.direction,pinnedBottomRowData:n,rowHeight:"40"})})))))))}}]),t}(s.a.Component));a.default=Object(g.b)((function(e){return{app:e.calender}}),{})(y)},601:function(e,a,t){"use strict";var l=t(11),n=t(12),i=t(14),o=t(13),r=t(0),s=t.n(r),c=t(632),m=t(664),u=t(633),d=t(639),p=t(640),h=t(173),b=t(32),f=t(597),g=t(216),v=t(606),S=t(603),C=t.n(S),E=t(178),y=t(47),N=t.n(y),R=t(608),k=(t(609),t(610),t(605),t(604),[{value:"0",label:"Active Deals"},{value:"1",label:"Deleted Deals"},{value:"2",label:"All Deals"}]),D=[{value:"1",label:"01 Jan"},{value:"2",label:"02 Feb"},{value:"3",label:"03 Mar"},{value:"4",label:"04 Apr"},{value:"5",label:"05 May"},{value:"6",label:"06 Jun"},{value:"7",label:"07 Jul"},{value:"8",label:"08 Aug"},{value:"9",label:"09 Sep"},{value:"10",label:"10 Oct"},{value:"11",label:"11 Nov"},{value:"12",label:"12 Dec"}],x=[{value:"0",label:"2020"},{value:"1",label:"2019"},{value:"2",label:"2018"},{value:"3",label:"2017"},{value:"4",label:"2016"},{value:"5",label:"2015"},{value:"6",label:"2014"},{value:"7",label:"2013"},{value:"8",label:"2012"},{value:"9",label:"2011"},{value:"10",label:"2010"},{value:"11",label:"2009"},{value:"12",label:"2008"}],w=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).state={editorState:R.EditorState.createEmpty(),basicPicker:new Date,endPicker:new Date,selectedOption:""},e.onRadioChange=function(a){e.setState({selectedOption:a.target.value})},e.handleSidebarClose=function(){e.props.handleComposeSidebar("close"),e.setState({emailTo:"",emailSub:"",emailCC:"",emailBCC:"",editorState:R.EditorState.createEmpty()})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.basicPicker,l=a.endPicker,n={paddingTop:"15px",color:"#0c0000",fontSize:"13px"};return s.a.createElement(c.a,{className:"compose-email ".concat(this.props.currentStatus?"open":""),style:{zIndex:"11"}},s.a.createElement(m.a,{className:"compose-mail-header align-items-center"},s.a.createElement("div",{className:"compose-mail-title"},s.a.createElement("h3",{className:"text-bold-600 card-title"},"Customize Report")),s.a.createElement("div",{className:"close-compose-mail",onClick:function(){return e.props.handleComposeSidebar("close")}},s.a.createElement(E.a,{size:20}))),s.a.createElement(N.a,{options:{wheelPropagation:!1}},s.a.createElement(u.a,{className:"compose-mail-body p-1"},s.a.createElement(b.a,{label:"Month to Date",color:"primary",defaultChecked:!0,name:"exampleRadioSizes",className:"py-50",value:"MonthToDate",onChange:this.onRadioChange}),s.a.createElement(b.a,{label:"Today",color:"primary",defaultChecked:!1,name:"exampleRadioSizes",className:"py-50",value:"Today",onChange:this.onRadioChange}),s.a.createElement(b.a,{label:"Custom Range",color:"primary",defaultChecked:!1,name:"exampleRadioSizes",className:"py-50",value:"CustomRange",onChange:this.onRadioChange}),s.a.createElement(b.a,{label:"All Time",color:"primary",defaultChecked:!1,name:"exampleRadioSizes",className:"py-50",value:"AllTime",onChange:this.onRadioChange}),s.a.createElement(b.a,{label:"Previous Month",color:"primary",defaultChecked:!1,name:"exampleRadioSizes",className:"py-50",value:"PreviousMonth",onChange:this.onRadioChange}),s.a.createElement(b.a,{label:"Yesterday",color:"primary",defaultChecked:!1,name:"exampleRadioSizes",className:"py-50",value:"Yesterday",onChange:this.onRadioChange}),s.a.createElement(b.a,{label:"Select Month",color:"primary",defaultChecked:!1,name:"exampleRadioSizes",className:"py-50",value:"SelectMonth",onChange:this.onRadioChange}),s.a.createElement(d.a,null,s.a.createElement(p.a,{sm:"6"},s.a.createElement(v.a,{className:"React",classNamePrefix:"select",defaultValue:D[0],name:"color",options:D,isDisabled:"SelectMonth"!==this.state.selectedOption})),s.a.createElement(p.a,{sm:"6"},s.a.createElement(v.a,{className:"React",classNamePrefix:"select",defaultValue:x[0],name:"color",options:x,isDisabled:"SelectMonth"!==this.state.selectedOption}))),s.a.createElement(d.a,null,s.a.createElement(p.a,{sm:"6"},s.a.createElement("h5",{className:"text-bold-500",style:n},"Basic"),s.a.createElement(C.a,{className:"form-control",value:t,onChange:function(a){e.setState({basicPicker:a})}})),s.a.createElement(p.a,{sm:"6"},s.a.createElement("h5",{className:"text-bold-500",style:n},"End"),s.a.createElement(C.a,{className:"form-control",value:l,onChange:function(a){e.setState({endPicker:a})}}))),s.a.createElement("br",null),s.a.createElement(f.a,{color:"primary",icon:s.a.createElement(g.a,{className:"vx-icon",size:16}),label:"New Car",defaultChecked:!1}),s.a.createElement("h5",{style:n},"Deleted"),s.a.createElement(v.a,{className:"React",classNamePrefix:"select",defaultValue:k[0],name:"color",options:k}),s.a.createElement("div",{className:"action-btns d-flex justify-content-end mt-1"},s.a.createElement(h.a.Ripple,{color:"danger",className:"mr-1",onClick:function(){return e.handleSidebarClose()}},"Cancel"),s.a.createElement(h.a.Ripple,{color:"primary",onClick:function(){return e.handleSidebarClose()}},"Submit")))))}}]),t}(s.a.Component);a.a=w}}]);
//# sourceMappingURL=38.8f2c4fb5.chunk.js.map