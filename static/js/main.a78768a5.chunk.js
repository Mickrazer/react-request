(this.webpackJsonptestovoe=this.webpackJsonptestovoe||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(8),i=c.n(n),l=(c(7),c(2)),r=(c(15),c(9)),o=c(10),d=new(function(){function e(t,c){Object(r.a)(this,e),this.url=t,this.token=c}return Object(o.a)(e,[{key:"getFeed",value:function(){return fetch("".concat(this.url,"apiv1/feed/"),{headers:{authorization:"".concat(this.token)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"dataRequest",value:function(){return fetch("".concat(this.url,"apiv1/user/tickets/"),{headers:{authorization:"".concat(this.token)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getUser",value:function(){return fetch("".concat(this.url,"apiv1/info/"),{headers:{authorization:"".concat(this.token)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getStatusRequest",value:function(){return fetch("".concat(this.url,"apiv1/ticket/statuses/"),{headers:{authorization:"".concat(this.token)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"get\u0421ompletedRequest",value:function(){return fetch("".concat(this.url,"apiv1/user/tickets/?status=6"),{headers:{authorization:"".concat(this.token)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}}]),e}())("http://140.82.32.146/","bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjY0NzI5MzMsInVzZXJfbmFtZSI6InVzZXIyIiwiYXV0aG9yaXRpZXMiOlsicmVhZCJdLCJqdGkiOiIyZTgwYzI0YS02MmNiLTRiMGUtODg5Yy00ZWUzMzFjMGI4Y2EiLCJjbGllbnRfaWQiOiJjbGllbnQiLCJzY29wZSI6WyJyZWFkIl19.yNgMZN0s-z5SL2yDzXjJpzwQY-l7gyauJC6nhM0g9ZE"),j=c(0);var u=function(e){var t=e.name,c=e.avatar,s="".concat(d.url).concat(c);return Object(j.jsxs)("div",{className:"user",children:[Object(j.jsx)("img",{src:s,alt:"avatar",className:"user__avatar"}),Object(j.jsxs)("h1",{className:"user__title",children:["\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, ",Object(j.jsx)("span",{className:"user__name",children:t})]})]})},h=c.p+"static/media/Logo.9a9d5093.svg";var b=function(e){var t=e.activeButton,c=e.handleActiveBtn;return Object(j.jsxs)("nav",{className:"nav",children:[Object(j.jsxs)("div",{className:"nav__header",children:[Object(j.jsx)("img",{src:h,alt:"avatar",className:"nav__logo"}),Object(j.jsxs)("h1",{className:"nav__title",children:["\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435",Object(j.jsx)("span",{className:"nav__title-color",children:" \u0437\u0430\u0434\u0430\u043d\u0438\u0435"})]})]}),Object(j.jsxs)("div",{className:"nav__buttons",children:[Object(j.jsxs)("button",{className:t?"button active":"button",onClick:c,disabled:t,children:[Object(j.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{className:t?"svg__active":"",d:"M9.29775 0.281949L0.15319 9.14045C-0.169697 9.45324 0.0517653 10 0.501344 10H3V18C3 19.1046 3.89543 20 5 20H7C7.55228 20 8 19.5523 8 19V15C8 14.4477 8.44771 14 9 14H11C11.5523 14 12 14.4477 12 15V19C12 19.5523 12.4477 20 13 20H15C16.1046 20 17 19.1046 17 18V10H19.4987C19.9484 10 20.1698 9.45291 19.8466 9.14023L10.6899 0.281499C10.3018 -0.0940076 9.68565 -0.0938083 9.29775 0.281949Z",fill:"#4B4C4F"})}),"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"]}),Object(j.jsxs)("button",{className:t?"button":"button active",onClick:c,disabled:!t,children:[Object(j.jsx)("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{className:t?"":"svg__active",d:"M0 1.99982C0 0.895253 0.895431 -0.00017643 2 -0.00017643H8.76392C9.52147 -0.00017643 10.214 0.427835 10.5528 1.10541L11.4472 2.89432C11.786 3.5719 12.4785 3.99991 13.2361 3.99991H18C19.1046 3.99991 20 4.89534 20 5.99991V13.9999C20 15.1045 19.1046 15.9999 18 15.9999H2C0.895431 15.9999 0 15.1045 0 13.9999V1.99982Z",fill:"#4B4C4F"})}),"\u0410\u0440\u0445\u0438\u0432 \u0437\u0430\u044f\u0432\u043e\u043a"]})]}),Object(j.jsxs)("button",{className:"button",children:[Object(j.jsx)("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M2 0C0.895431 0 0 0.895431 0 2V18C0 19.1046 0.895431 20 2 20H9C10.1046 20 11 19.1046 11 18V11H14V14.5005C14 14.9333 14.5126 15.1617 14.8344 14.8722L19.8368 10.3717C20.0576 10.173 20.0575 9.82683 19.8367 9.62821L14.8344 5.12922C14.5126 4.8398 14 5.06818 14 5.50098V9H11V2C11 0.895431 10.1046 0 9 0H2ZM11 9H5.5C5.22386 9 5 9.22386 5 9.5V10.5C5 10.7761 5.22386 11 5.5 11H11V9Z",fill:"#4B4C4F"})}),"\u0412\u044b\u0439\u0442\u0438"]}),Object(j.jsx)("p",{className:"nav__version",children:"\u0412\u0435\u0440\u0441\u0438\u044f 1.0.1"})]})},v=c(4),p=c.p+"static/media/Union.120c846a.svg",O=c.p+"static/media/card done.b7a14429.svg",_=c.p+"static/media/card cenceled.60708e7f.svg";var m=function(e){var t=e.description,c=e.place,s=e.date,a=e.status,n=e.isOpen;return Object(j.jsxs)("section",{className:"card".concat(a," card cursor"),onClick:n,children:[Object(j.jsx)("div",{className:"card__border card__border".concat(a)}),Object(j.jsxs)("div",{className:"card__info",children:[Object(j.jsx)("h1",{className:"card__title",children:t}),Object(j.jsxs)("h2",{className:"card__subtitle",children:[c," ",Object(j.jsxs)("span",{className:"card__date",children:["\u2022 ",s]})]})]}),Object(j.jsx)("img",{src:6===a?O:8===a?_:p,alt:"status"})]})},f=c.p+"static/media/fire extinguisher.9bae9297.svg";var x=function(e){var t=e.title,c=e.description,s=e.dateStart,a=e.dateEnd,n=s===a?"\u0421\u0435\u0433\u043e\u0434\u043d\u044f":"",i=s!==a&&s.slice(3,5)===s.slice(3,5)?"\u0412 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u044f\u0446\u0435":"";return Object(j.jsxs)("section",{className:"card card__visible",children:[Object(j.jsxs)("div",{className:"card__info news__card",children:[Object(j.jsx)("h1",{className:"card__title",children:t}),Object(j.jsx)("h2",{className:"card__subtitle news-card card__subtitle_grow",children:c}),Object(j.jsxs)("h3",{className:"card__period",children:[" ",n,i]})]}),Object(j.jsx)("img",{src:f,alt:"icon",className:"card__icon"})]})};var C=function(e){var t=e.title,c=e.news,a=e.handleOpen,n=Object(s.useState)([]),i=Object(l.a)(n,2),r=i[0],o=i[1],u=Object(s.useState)([]),h=Object(l.a)(u,2),b=h[0],p=h[1];Object(s.useEffect)((function(){d.dataRequest().then((function(e){for(var t=[],c=0;c<e.length;c++)t.push(e[c].created.slice(0,10).split("-").reverse().join(".")+" "+e[c].created.slice(11,16)),b.push({description:e[c].description,place:e[c].place.place,date:t[c],status:e[c].statusId});p(Object(v.a)(b.sort((function(e,t){return e.status<t.status?1:-1}))))}))}),[]),Object(s.useEffect)((function(){d.getFeed().then((function(e){for(var t=[],c=[],s=0;s<e.length;s++)t.push(e[s].dateStart.slice(0,10).split("-").reverse().join(".")),c.push(e[s].dateEnd.slice(0,10).split("-").reverse().join(".")),r.push({title:e[s].title,description:e[s].description,dateStart:t[s],dateEnd:c[s]});o(Object(v.a)(r))}))}),[]);var O=c&&r.map((function(e,t){var c=e.title,s=e.description,a=e.dateStart,n=e.dateEnd;return Object(j.jsx)(x,{title:c,description:s,dateStart:a,dateEnd:n},t)})),_=!c&&b.map((function(e,t){var c=e.description,s=e.place,n=e.date,i=e.status;return Object(j.jsx)(m,{description:c,place:s,date:n,status:i,isOpen:a},t)}));return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("h1",{className:"main__title",children:t}),Object(j.jsxs)("div",{className:"main__cards",children:[O,_]})]})};var g=function(e){var t=e.handleClose;return Object(j.jsx)("div",{className:"popup",children:Object(j.jsxs)("div",{className:"popup__content",children:[Object(j.jsx)("svg",{onClick:t,className:"popup__close",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M17.707 17.0001C18.0976 16.6096 18.0976 15.9764 17.707 15.5859L11.1213 9.00012L17.7072 2.41421C18.0977 2.02369 18.0977 1.39052 17.7072 0.999998L17.0003 0.29309C16.6098 -0.0974337 15.9766 -0.0974338 15.5861 0.29309L9.00016 6.879L2.41426 0.293046C2.02373 -0.0974785 1.39057 -0.0974785 1.00005 0.293046L0.293138 0.999953C-0.0973868 1.39048 -0.0973871 2.02364 0.293137 2.41417L6.87905 9.00012L0.293501 15.5857C-0.0970228 15.9762 -0.0970225 16.6094 0.293502 16.9999L1.00041 17.7068C1.39093 18.0973 2.0241 18.0973 2.41462 17.7068L9.00016 11.1212L15.5859 17.707C15.9764 18.0975 16.6096 18.0975 17.0001 17.707L17.707 17.0001Z",fill:"#121417"})}),Object(j.jsx)("h3",{className:"popup__title",children:"TITLE"}),Object(j.jsx)("div",{className:"popup__chat"}),Object(j.jsxs)("form",{className:"popup__form",children:[Object(j.jsx)("input",{type:"text",name:"name",className:"popup__input popup__input_type_name",placeholder:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(j.jsx)("button",{type:!0,className:"button popup__button",children:Object(j.jsx)("svg",{width:"22",height:"28",viewBox:"0 0 22 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M0.728659 12.2754C0.20796 11.7547 0.20796 10.9105 0.728659 10.3898L10.0573 1.06112C10.3177 0.800763 10.6589 0.670588 11.0002 0.670593C11.3414 0.670588 11.6826 0.800763 11.943 1.06112L21.2743 10.3925C21.795 10.9132 21.795 11.7574 21.2743 12.2781L20.3315 13.2209C19.8108 13.7416 18.9666 13.7416 18.4459 13.2209L13.0031 7.77807V26C13.0031 26.7364 12.4061 27.3334 11.6698 27.3334H10.3303C9.59394 27.3334 8.99699 26.7364 8.99699 26V7.77832L3.55709 13.2182C3.03639 13.7389 2.19217 13.7389 1.67147 13.2182L0.728659 12.2754Z",fill:"#F6F4F5"})})})]})]})})};var N=function(e){var t=e.title,c=e.description,s=e.date,a=e.fulfilled;return Object(j.jsxs)("section",{className:"card card__completed",children:[Object(j.jsxs)("div",{className:"card__info news__card",children:[Object(j.jsxs)("h3",{className:"card__subtitle card__date card__subtitle_grow",children:["\u2116 159753 \u2014 ",s," "]}),Object(j.jsx)("h1",{className:"card__title",children:c}),Object(j.jsx)("h2",{className:"card__subtitle",children:t})]}),Object(j.jsxs)("h4",{className:"card__subtitle card__author",children:["\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u043b(\u0430): ",a," \u2014 ",s]})]})};var w=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){d.get\u0421ompletedRequest().then((function(e){for(var t=[],s=0;s<e.length;s++)t.push(e[s].created.slice(0,10).split("-").reverse().join(".")+" "+e[s].created.slice(11,16)),c.push({title:e[s].title,description:e[s].description,fulfilled:e[s].supportedByUser.fullName,date:t[s]});a(Object(v.a)(c.sort((function(e,t){return e.date>t.date?1:-1}))))}))}),[]),Object(j.jsxs)("section",{className:"archive",children:[Object(j.jsxs)("div",{className:"archive__header",children:[Object(j.jsx)("svg",{className:"archive__svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M16 7.99991C16 9.66691 15.4901 11.2148 14.6178 12.4962L19.7072 17.5855C20.0977 17.9761 20.0977 18.6092 19.7072 18.9997L19.0001 19.7069C18.6095 20.0974 17.9764 20.0974 17.5858 19.7069L12.4966 14.6176C11.2151 15.49 9.66711 15.9999 8 15.9999C3.58172 15.9999 0 12.4182 0 7.99991C0 3.58163 3.58172 -9.15527e-05 8 -9.15527e-05C12.4183 -9.15527e-05 16 3.58163 16 7.99991ZM8 12.9999C10.7614 12.9999 13 10.7613 13 7.99991C13 5.23848 10.7614 2.99991 8 2.99991C5.23858 2.99991 3 5.23848 3 7.99991C3 10.7613 5.23858 12.9999 8 12.9999Z",fill:"#6F6F72"})}),Object(j.jsx)("input",{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a",className:"archive__input"}),Object(j.jsxs)("div",{className:"archive__block-select",children:[Object(j.jsxs)("svg",{className:"archive__svg",width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{d:"M0 1C0 0.447715 0.447715 0 1 0H19C19.5523 0 20 0.447715 20 1V2C20 2.55228 19.5523 3 19 3H1C0.447716 3 0 2.55228 0 2V1Z",fill:"#F6F4F5"}),Object(j.jsx)("path",{d:"M0 14C0 13.4477 0.447715 13 1 13H9C9.55228 13 10 13.4477 10 14V15C10 15.5523 9.55229 16 9 16H1C0.447716 16 0 15.5523 0 15V14Z",fill:"#F6F4F5"}),Object(j.jsx)("path",{d:"M1 6.5C0.447715 6.5 0 6.94772 0 7.5V8.5C0 9.05228 0.447716 9.5 1 9.5H14C14.5523 9.5 15 9.05229 15 8.5V7.5C15 6.94772 14.5523 6.5 14 6.5H1Z",fill:"#F6F4F5"})]}),Object(j.jsxs)("select",{name:"select",className:"archive__select",children:[Object(j.jsx)("option",{value:"value1",defaultValue:!0,children:"\u041f\u043e \u0434\u0430\u0442\u0435 \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f"}),Object(j.jsx)("option",{value:"value2",children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 2"}),Object(j.jsx)("option",{value:"value3",children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 3"})]})]})]}),Object(j.jsx)("div",{className:"archive__block",children:c.map((function(e,t){var c=e.title,s=e.description,a=e.fulfilled,n=e.date;return Object(j.jsx)(N,{title:c,description:s,date:n,fulfilled:a},t)}))})]})};var L=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!0),i=Object(l.a)(n,2),r=i[0],o=i[1],h=Object(s.useState)(""),v=Object(l.a)(h,2),p=v[0],O=v[1],_=Object(s.useState)(""),m=Object(l.a)(_,2),f=m[0],x=m[1];Object(s.useEffect)((function(){d.getUser().then((function(e){O(e.firstName),x(e.userImage)}))}),[]);var N=c&&Object(j.jsx)(g,{handleClose:function(){a(!1)}});return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(b,{activeButton:r,handleActiveBtn:function(){o(!r)}}),Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{name:p,avatar:f}),Object(j.jsxs)("section",{className:r?"main__block":"main__block disabled",children:[Object(j.jsx)(C,{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0437\u0430\u044f\u0432\u043a\u0438",news:!1,handleOpen:function(){a(!0)}}),Object(j.jsx)(C,{title:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438",news:!0})]}),Object(j.jsx)("section",{className:r?"main__block disabled":"main__block",children:Object(j.jsx)(w,{})})]}),N]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),k()},7:function(e,t,c){}},[[17,1,2]]]);
//# sourceMappingURL=main.a78768a5.chunk.js.map