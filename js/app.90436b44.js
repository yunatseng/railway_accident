(function(t){function e(e){for(var i,o,s=e[0],l=e[1],c=e[2],m=0,u=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/railway_accident/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("h3",{staticClass:"ml-2 title font-weight-light"},[t._v(" 臺鐵事故時間軸 ")]),a("v-spacer"),a("v-btn",{attrs:{href:"https://www.railway.gov.tw/tra-tip-web/adr/customized_info?I=BOdk836FNKcj1mQnyA%2BwVMZL6kWlC9PkOcotriieukLBk23yf0veeKQz7PZ9m79u7Eb9aKQO9ivbALFb0kfjSas23CHNLrxyxUbUQg%3D%3D",target:"_blank",text:""}},[a("span",{staticClass:"mr-2 "},[t._v("最新消息")]),a("v-icon",[t._v("mdi-open-in-new")])],1)],1),a("v-main",[a("Main",{on:{clickEventCitation:t.setFocus}})],1),[a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"white--text text-left",attrs:{flat:"",tile:"",color:"primary",width:"100%"}},[a("v-card-text",{staticClass:"white--text"},[a("ol",t._l(t.citeList,(function(e,i){return a("li",{key:i},[a("a",{staticClass:"white--text footer-citation",attrs:{id:"event_"+i,tabindex:i,href:e.url,target:"_blank"}},[t._v(" "+t._s(e.name)+" ")])])})),0)]),a("v-divider"),a("v-card-text",{staticClass:"white--text text-center"},[t._v(" © "+t._s((new Date).getFullYear())+" — Yuna "),a("a",{attrs:{href:"mailto:fav0124@gmail.com",target:"_blank",rel:"noopener noreferrer"}},[a("v-icon",[t._v("mdi-email")])],1)])],1)],1)]],2)},r=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-img",{staticClass:"grey lighten-5 white--text",attrs:{src:a("6d17"),"lazy-src":"https://picsum.photos/10/6?image=1",height:t.$vuetify.breakpoint.smAndDown?"100%":"400"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])},[i("v-container",{staticClass:"fill-height"},[i("v-row",{class:t.$vuetify.breakpoint.smAndDown?"pl-4 pr-6":"",attrs:{align:"center"}},[i("strong",{staticClass:"display-4 font-weight-regular"},[t._v("2")]),i("v-row",{attrs:{justify:"end"}},[i("div",{staticClass:"headline font-weight-light"},[t._v(" April 2021 ")]),i("div",{staticClass:"text-uppercase font-weight-light ml-2"},[t._v(" Friday ")])])],1)],1)],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"font-weight-bold title mb-2 text-center",class:{"d-flex pa-2":t.$vuetify.breakpoint.smAndDown}},[t._v(" 僅列舉 109~110 年部分事故 ")]),i("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.eventList,(function(e,a){return i("v-timeline-item",{key:a,attrs:{id:e.normal+"-"+e.date.split(" ").join("-"),color:"dot",large:!t.$vuetify.breakpoint.smAndDown,small:!!t.$vuetify.breakpoint.smAndDown},scopedSlots:t._u([{key:"opposite",fn:function(){return[i("span",[t._v(t._s(e.date))])]},proxy:!0}],null,!0)},[i("v-card",{staticClass:"elevation-2"},[i("v-card-title",{staticClass:"headline"},[i("a",{attrs:{href:"#"+e.normal+"-"+e.date.split(" ").join("-")}},[t._v(" "+t._s(e.normal)+" ")]),t.$vuetify.breakpoint.smAndDown?i("span",{staticClass:"ml-2 title font-weight-light"},[t._v(t._s(e.date))]):t._e()]),i("v-card-text",[i("ul",t._l(e.normalAccident,(function(e,a){return i("li",{key:a},[a>0?i("v-divider",{staticClass:"my-6"}):t._e(),t._v(" "+t._s(e.text)+" "),i("span",{on:{click:function(a){return t.$emit("clickEventCitation",e.id)}}},[i("a",{attrs:{href:"#event_"+(e.id-1),rel:"noopener noreferrer"}},[t._v(t._s([e.id]))])]),e.image?i("div",[i("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"90%"},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,r=a.attrs;return[i("img",t._g(t._b({staticClass:"mt-4",attrs:{width:"100%",src:e.image,alt:"image"}},"img",r,!1),n)),e.imgText?i("div",[t._v(" "+t._s(e.imgText)+" ")]):t._e()]}},{key:"default",fn:function(a){return[i("v-card",[i("div",[i("img",{attrs:{width:"100%",src:e.image,alt:"image"}})]),i("v-card-actions",{staticClass:"justify-end"},[i("v-btn",{attrs:{text:""},on:{click:function(t){a.value=!1}}},[t._v(" Close ")])],1)],1)]}}],null,!0)})],1):t._e()],1)})),0)])],1)],1)})),1)],1)],1)],1)},s=[],l={name:"Main",data:function(){return{eventList:[{date:"109 年 2 月",normal:"臺鐵行車事故",normalAccident:[{id:1,text:"第 2134 次車辦理發車前轉線出庫時，因駕駛員低頭使用 3C 電子產品，肇致衝撞路線終端止衝檔裝置，導致編組 2 軸出軌。",image:""}],abnormal:"行車異常事件（42）"},{date:"109 年 4 月",normal:"臺鐵行車事故",normalAccident:[{id:2,text:"電車組 EMU540 號檢修完成後進行動態測試，因檢查員操作不當，造成測試速度過快且未注意路線長度，肇致測試車上人員衝撞同股道停留車，台鐵表示，車上 7 位工作人員（1女、6男）都意識清楚可自行走動，有四人送慈濟及三人送門諾醫院救治，所幸經照X光片檢查後都無大礙。",image:""}],abnormal:"行車異常事件（45）"},{date:"109 年 5 月",normal:"臺鐵行車事故",normalAccident:[{id:3,text:"七堵站未依規約告知司機員定例調車區域 GB 股道有停留車，且七堵機務段調車機車司機員，應注意而未注意調車路徑進路顯示器號誌條件(臆測行車)，肇致駛過彎道後，始發現股道上有停留車輛而不及煞車，造成側線衝撞事故。",image:""}],abnormal:"行車異常事件（50）"},{date:"109 年 6 月",normal:"臺鐵行車事故",normalAccident:[{id:4,text:"第 7202 次車因司機員控速不當，高速衝撞路線停留車，導致停留車於猛烈衝擊下，造成守車連結器脫出並往高雄方向東正線溜逸至內惟~美術館站間 K399+680 處停止，經由救援單機將守車拖回新左營站。",image:""}],abnormal:"行車異常事件（56）"},{date:"109 年 11 月",normal:"臺鐵瑞芳猴硐路段走山事故",normalAccident:[{id:5,text:"宜蘭線瑞芳－猴硐間（K12+233）路段因連續豪雨造成邊坡滑動，在全力搶修後，12月3日清晨恢復雙線通車，並派員持續監測，12月4日猴硐站通報該路段土石再次發生大規模邊坡滑動，使得宜蘭線東西正線完全中斷，經過搶修後，12月14日恢復東正線單線通，並於於隔年的2月3日清晨完成全段雙線搶通。",image:"https://upload.wikimedia.org/wikipedia/commons/9/9d/%E8%87%BA%E9%90%B52021%E5%B9%B401%E6%9C%8816%E6%97%A5%E7%91%9E%E8%8A%B3-%E7%8C%B4%E7%A1%90%E9%82%8A%E5%9D%A1%E6%BB%91%E5%8B%95%E6%90%B6%E4%BF%AE%E5%B7%A5%E7%A8%8B%EF%BC%881%EF%BC%89.jpg",imgText:"由 臺灣鐵路管理局, Attribution, https://commons.wikimedia.org/w/index.php?curid=98907518"}],abnormal:"行車異常事件（56）"},{date:"110 年 1 月",normal:"臺鐵行車事故",normalAccident:[{id:6,text:"第 8792 次試運轉車輛 R166 號單機，因電務測試 ATP 時，未將第 11B 轉 轍器納入測試條件，亦未確認第 11B 轉轍器開通方向，造成試運轉機車 衝出安全側線，導致機車 4 軸出軌，未影響其他列車。",image:""}],abnormal:""},{date:"110 年 1 月",normal:"臺鐵工安事故",normalAccident:[{id:7,text:"台鐵屏東潮州車輛基地進行車廂更換調車作業時，發生職安事故，一名 36 歲林姓台鐵調車員，18 日上午進行車廂更換摘掛作業時，疑似為拆除連結車廂的氣軔軟管，遭車廂重夾，受困於兩節車廂中間被兩車廂夾傷，傷重送醫不治。",image:""},{id:8,text:"台鐵台南市新市火車站工地下午發生高壓電觸電工安意外，新市火車站 54 歲王姓男子、51 歲邱姓男子等 2 名工人，進行混凝土灌漿作業時，疑誤觸高壓電受傷，觸電灼傷面積各約 15% 與 18%，意識清楚消防人員送醫治療。",image:""}],abnormal:""},{date:"110 年 2 月",normal:"臺鐵工安事故",normalAccident:[{id:9,text:"工務單位於海端站進行道岔抽換工程，於工程結束後，留 3 名池上工務道班維護保養，施工時 3 人不慎遭 8742 次(電力維修車)撞擊，3 人均受傷送往關山慈濟醫院救治，關山慈濟醫院宣告：2人已不治。另1員已回復意識。共影響 8 列次、445 分約 876 人。",image:""}],abnormal:""},{date:"110 年 4 月",normal:"太魯閣號列車出軌事故",normalAccident:[{id:10,text:"太魯閣號 408 車次出軌事故（花蓮縣消防局稱為花蓮縣0402 交通事故），為發生於 2021 年 4 月 2 日上午 9 時 28 分，台灣花蓮縣秀林鄉和仁段清水隧道北口，台鐵北迴線的太魯閣自強號列車脫軌事故。載有 492 名乘客的台鐵 408 車次太魯閣號列車在行經該隧道時，與滑落邊坡侵入路線的工程車碰撞出軌後衝入隧道中且擦撞隧道壁，並造成 50 人死亡和 216 人輕重傷。",image:"https://upload.wikimedia.org/wikipedia/commons/2/27/2021%E5%B9%B44%E6%9C%883%E6%97%A5%E5%8F%B0%E9%93%81%E7%AC%AC408%E6%AC%A1%E5%92%8C%E4%BB%81%E5%B4%87%E5%BE%B7%E9%97%B4%28%E6%B8%85%E6%B0%B4%E9%9A%A7%E9%81%93%29%E4%BA%8B%E6%95%85-%E7%AE%80%E6%8A%A51.png",imgText:"由 台灣鐵路管理局, Attribution, https://commons.wikimedia.org/w/index.php?curid=103024161"},{id:10,text:"本次事故是台灣鐵道史上僅次於 1948 年新店溪橋火燒車事故的嚴重傷亡事故，死亡人數遠超過 2018 年所發生的普悠瑪列車出軌事故，也是自從 1949 年中華民國政府遷臺以來最嚴重的死傷事故。",image:"https://upload.wikimedia.org/wikipedia/commons/2/22/2021%E5%B9%B4%E5%A4%AA%E9%AD%AF%E9%96%A3%E5%88%97%E8%BB%8A%E5%87%BA%E8%BB%8C%E4%BA%8B%E6%95%85_01.jpg",imgText:"由 行政院, Attribution, https://commons.wikimedia.org/w/index.php?curid=102908991"}],abnormal:""}]}}},c=l,d=a("2877"),m=a("6544"),u=a.n(m),p=a("8336"),f=a("b0af"),v=a("99d9"),w=a("62ad"),g=a("a523"),h=a("169a"),E=a("ce7e"),b=a("adda"),A=a("490a"),B=a("0fd9"),_=a("8414"),y=a("1e06"),x=Object(d["a"])(c,o,s,!1,null,null,null),k=x.exports;u()(x,{VBtn:p["a"],VCard:f["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:w["a"],VContainer:g["a"],VDialog:h["a"],VDivider:E["a"],VImg:b["a"],VProgressCircular:A["a"],VRow:B["a"],VTimeline:_["a"],VTimelineItem:y["a"]});var C={name:"App",components:{Main:k},data:function(){return{citeList:[{url:"https://www.railway.gov.tw/tra-tip-web/adr/about-public-info-6-2?selectIndex=1",name:"交通部臺灣鐵路管理局109年事故資料"},{url:"https://www.chinatimes.com/newspapers/20200428000636-260107?chdtv",name:"花蓮火車事故 7台鐵員工受傷"},{url:"https://www.railway.gov.tw/tra-tip-web/adr/about-public-info-6-2?selectIndex=1",name:"交通部臺灣鐵路管理局109年事故資料"},{url:"https://www.railway.gov.tw/tra-tip-web/adr/about-public-info-6-2?selectIndex=1",name:"交通部臺灣鐵路管理局109年事故資料"},{url:"https://zh.wikipedia.org/wiki/2020%E5%B9%B4%E8%87%BA%E9%90%B5%E7%91%9E%E8%8A%B3%E7%8C%B4%E7%A1%90%E8%B7%AF%E6%AE%B5%E8%B5%B0%E5%B1%B1%E4%BA%8B%E6%95%85",name:"2020年臺鐵瑞芳猴硐路段走山事故 wiki"},{url:"https://www.railway.gov.tw/tra-tip-web/adr/about-public-info-6-2?selectIndex=1",name:"交通部臺灣鐵路管理局109年事故資料"},{url:"https://udn.com/news/story/7266/5208604",name:"調車員遭兩車廂重夾出血身亡 產工指台鐵三肇因釀殉職"},{url:"https://www.cna.com.tw/news/asoc/202101190278.aspx",name:"疑誤觸高壓電 台南新市火車站2工人受傷送醫"},{url:"https://www.motc.gov.tw/ch/home.jsp?id=2&parentpath=0&mcustomize=news_view.jsp&dataserno=202102230005&aplistdn=ou=data,ou=news,ou=chinese,ou=ap_root,o=motc,c=tw&toolsflag=Y&imgfolder=img%2Fstandard",name:"臺鐵局2月23日海端站職安事件說明新聞稿"},{url:"https://zh.wikipedia.org/wiki/2021%E5%B9%B4%E5%A4%AA%E9%AD%AF%E9%96%A3%E8%99%9F%E5%88%97%E8%BB%8A%E5%87%BA%E8%BB%8C%E4%BA%8B%E6%95%85",name:"2021年太魯閣號列車出軌事故 wiki"}]}},methods:{setFocus:function(t){document.getElementById("event_".concat(t-1)).focus()}}},V=C,j=(a("034f"),a("7496")),D=a("40dc"),F=a("553a"),O=a("132d"),T=a("f6c4"),P=a("2fa4"),$=Object(d["a"])(V,n,r,!1,null,null,null),M=$.exports;u()($,{VApp:j["a"],VAppBar:D["a"],VBtn:p["a"],VCard:f["a"],VCardText:v["b"],VDivider:E["a"],VFooter:F["a"],VIcon:O["a"],VMain:T["a"],VSpacer:P["a"]});var S=a("f309"),I=a("fcf4");i["a"].use(S["a"]);var L=new S["a"]({theme:{themes:{light:{primary:I["a"].brown.darken1,secondary:I["a"].red.lighten4,accent:I["a"].pink.accent4,dot:I["a"].red.lighten2}}}});i["a"].config.productionTip=!1,new i["a"]({vuetify:L,render:function(t){return t(M)}}).$mount("#app")},"6d17":function(t,e,a){t.exports=a.p+"img/train2_test.a5ab4c75.jpeg"},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.90436b44.js.map