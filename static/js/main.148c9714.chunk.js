(this.webpackJsonpinventory=this.webpackJsonpinventory||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(6),r=a.n(l),i=a(7),s=a(1),c=a(2),m=a(3),u=a(4),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).toggleEdit=function(){var e=n.state.showEdit;n.state.showEdit&&n.props.renameItem(n.props.index,n.state.editName),n.setState({showEdit:!e})},n.handleChange=function(e){n.setState({editName:e.target.value})},n.state={showEdit:!1,editName:e.item},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.index,a=e.item,n=e.deleteItem,l=e.showDelete,r=this.state,i=r.showEdit,s=r.editName;return o.a.createElement("tr",null,o.a.createElement("td",null,i?o.a.createElement("input",{type:"text",value:s,onChange:this.handleChange}):a),o.a.createElement("td",null),o.a.createElement("td",null,o.a.createElement("span",{onClick:this.toggleEdit},i?"Save":"Edit"),l?o.a.createElement("span",null," | ",o.a.createElement("span",{onClick:function(){n(t)}},"Delete")):null))}}]),a}(n.Component),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).toggleShowDelete=function(){var e=n.state.showDelete;n.setState({showDelete:!e})},n.toggleShowCreate=function(){var e=n.state.showCreate;n.setState({showCreate:!e})},n.handleChange=function(e){n.setState({createName:e.target.value})},n.createItem=function(){n.props.addItem(n.state.createName),n.setState({createName:"",showCreate:!1})},n.state={showDelete:!1,showCreate:!1,createName:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.renameItem,a=e.deleteItem,n=e.items,l=this.state,r=l.showDelete,i=l.showCreate,s=l.createName;return o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("span",{onClick:this.toggleShowCreate},"Create")," | ",o.a.createElement("span",{onClick:this.toggleShowDelete},"Delete")),i?o.a.createElement("div",null,o.a.createElement("input",{type:"text",value:s,onChange:this.handleChange})," | ",o.a.createElement("span",{onClick:this.createItem},"Create")):null,o.a.createElement("table",{className:"u-full-width"},o.a.createElement("tbody",null,Object.keys(n).map((function(e){return o.a.createElement(h,{key:e,index:e,item:n[e],renameItem:t,deleteItem:a,showDelete:r})})))))}}]),a}(n.Component);var v=function(e){var t=e.value,a=e.name,n=e.increment,l=e.decrement;return o.a.createElement("tr",null,o.a.createElement("td",null,a),o.a.createElement("td",null,t),o.a.createElement("td",null,o.a.createElement("span",{onClick:l},"\xa0-\xa0"),o.a.createElement("span",null," | "),o.a.createElement("span",{onClick:n},"\xa0+\xa0")))},E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).toggleEdit=function(){var e=n.state.showEdit;n.state.showEdit&&n.props.renameLocation(n.props.index,n.state.editName),n.setState({showEdit:!e})},n.handleChange=function(e){n.setState({editName:e.target.value})},n.state={showEdit:!1,editName:e.location.name},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.index,a=e.location,n=e.deleteLocation,l=e.showDelete,r=e.increment,i=e.decrement,s=e.items,c=this.state,m=c.showEdit,u=c.editName;return o.a.createElement("table",{className:"u-full-width"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",null,m?o.a.createElement("input",{type:"text",value:u,onChange:this.handleChange}):a.name),o.a.createElement("td",null),o.a.createElement("td",null,o.a.createElement("span",{onClick:this.toggleEdit},m?"Save":"Edit"),l?o.a.createElement("span",null," | ",o.a.createElement("span",{onClick:function(){n(t)}},"Delete")):null))),o.a.createElement("tbody",null,Object.keys(a.items).map((function(e){return o.a.createElement(v,{key:e,value:a.items[e],name:s[e],increment:function(){r(t,e)},decrement:function(){i(t,e)}})}))))}}]),a}(n.Component),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).toggleShowDelete=function(){var e=n.state.showDelete;n.setState({showDelete:!e})},n.toggleShowCreate=function(){var e=n.state.showCreate;n.setState({showCreate:!e})},n.handleChange=function(e){n.setState({createName:e.target.value})},n.createItem=function(){n.props.addLocation(n.state.createName),n.setState({createName:"",showCreate:!1})},n.state={showDelete:!1,showCreate:!1,createName:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.renameLocation,a=e.deleteLocation,n=e.locations,l=e.items,r=e.increment,i=e.decrement,s=this.state,c=s.showDelete,m=s.showCreate,u=s.createName;return o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("span",{onClick:this.toggleShowCreate},"Create")," | ",o.a.createElement("span",{onClick:this.toggleShowDelete},"Delete")),m?o.a.createElement("div",null,o.a.createElement("input",{type:"text",value:u,onChange:this.handleChange})," | ",o.a.createElement("span",{onClick:this.createItem},"Create")):null,Object.keys(n).map((function(e){return o.a.createElement(E,{key:e,index:e,location:n[e],items:l,renameLocation:t,deleteLocation:a,showDelete:c,decrement:i,increment:r})})))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).saveData=function(){var e=n.state,t={itemIndex:e.itemIndex,items:e.items,locations:e.locations};localStorage.setItem("basic-inventory-data",JSON.stringify(t))},n.addItem=function(e){var t=n.state.items,a=n.state.itemIndex;t[a]=e;var o=n.state.locations;o.forEach((function(e){e.items[a]=0}));var l=a+1;n.setState({items:t,itemIndex:l,locations:o}),n.saveData()},n.renameItem=function(e,t){var a=n.state.items;a[e]=t,n.setState({items:a}),n.saveData()},n.deleteItem=function(e){var t=n.state.items;delete t[e];var a=n.state.locations;a.forEach((function(t){delete t.items[e]})),n.setState({items:t,locations:a}),n.saveData()},n.addLocation=function(e){var t=n.state.locations,a={name:e,items:{}},o=n.state.items;for(var l in o)a.items[l]=0;t.push(a),n.setState(t),n.saveData()},n.renameLocation=function(e,t){var a=n.state.locations;a[e].name=t,n.setState(a),n.saveData()},n.deleteLocation=function(e){var t=n.state.locations;t.splice(e,1),n.setState(t),n.saveData()},n.increment=function(e,t){var a=n.state.locations;a[e].items[t]++,n.setState(a),n.saveData()},n.decrement=function(e,t){var a=n.state.locations;a[e].items[t]>0&&(a[e].items[t]--,n.setState(a),n.saveData())},n.setShowItems=function(e){n.setState({showItems:e})};var o={itemIndex:0,items:{},locations:[]};return"undefined"!==typeof Storage&&localStorage.getItem("basic-inventory-data")&&(o=JSON.parse(localStorage.getItem("basic-inventory-data"))),n.state=Object(i.a)({},o,{showItems:!1}),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.showItems,l=t.locations;return o.a.createElement("div",{className:"container"},o.a.createElement("header",null,o.a.createElement("br",null),o.a.createElement("h1",null,"Basic Inventory")),o.a.createElement("hr",null),o.a.createElement("main",null,o.a.createElement("p",null,o.a.createElement("span",{onClick:function(){e.setShowItems(!1)}},"Locations")," | ",o.a.createElement("span",{onClick:function(){e.setShowItems(!0)}},"Items")),o.a.createElement("hr",null),n?o.a.createElement(d,{addItem:this.addItem,renameItem:this.renameItem,deleteItem:this.deleteItem,items:a}):o.a.createElement(p,{addLocation:this.addLocation,renameLocation:this.renameLocation,deleteLocation:this.deleteLocation,increment:this.increment,decrement:this.decrement,locations:l,items:a})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.148c9714.chunk.js.map