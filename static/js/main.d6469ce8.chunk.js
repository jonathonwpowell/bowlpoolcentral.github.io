(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){e.exports=a(285)},126:function(e,t,a){},128:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),i=a.n(l),o=(a(126),a(11)),s=a(12),c=a(14),m=a(13),u=a(15),p=(a(128),a(99));function h(e){var t=[["Wins","Frequency"]];for(var a in e.players){var n=e.players[a];t.push([n.name,parseInt(n.wins)])}return t}var d=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.bowlPool;return e.games?r.a.createElement(p.a,{width:"80vw",height:"80vh",chartType:"Histogram",loader:r.a.createElement("div",null,"Loading Chart"),data:h(e),options:{histogram:{bucketSize:2},title:"Win Histogram",hAxis:{title:"Wins"},vAxis:{title:"Frequency"},chartArea:{left:60,width:"85%"},legend:{position:"none"}}}):r.a.createElement("div",null)}}]),t}(n.Component),g={apiKey:"AIzaSyB8-wy0DJ-w95vCGoMbEbpn0jVmX4IxHoQ",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetId:"1nWVIVz4Nj3oJSq2Ch0WmX_WbRf7j2qbWb8CkghdiTEM"},y=a(27),E=a.n(y),b=a(29),v=a.n(b),f=a(10),w=a.n(f),P=a(28),k=a.n(P),j=a(24),O=a.n(j),C=a(51),S=a.n(C),x=a(102),D=a.n(x),B=a(21),L=a.n(B),G=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleSearch",value:function(e){this.props.playerSearch(e.target.value)}},{key:"render",value:function(){var e=this.props.playerList,t=[];for(var a in e){var n=e[a];t.push(r.a.createElement(O.a,{key:n.value},r.a.createElement(w.a,null,n.wins),r.a.createElement(w.a,null,n.name)))}return r.a.createElement("div",null,r.a.createElement(S.a,null,r.a.createElement(L.a,{variant:"h6",id:"tableTitle"},"Standings"),r.a.createElement("div",{style:{flex:"1 1 100%"}}),r.a.createElement(D.a,{placeholder:"search",onKeyUp:this.handleSearch.bind(this)})),r.a.createElement(E.a,null,r.a.createElement(k.a,null,r.a.createElement(O.a,null,r.a.createElement(w.a,null,"Wins"),r.a.createElement(w.a,null,"Name"))),r.a.createElement(v.a,null,t)))}}]),t}(r.a.Component),_=a(103),N=a(105),H=a.n(N),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={selectedPlayers:[]},a.handleChange=function(e){a.setState({selectedPlayers:e})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.bowlPool,a=function(e,t,a){return e.winners.length<=parseInt(a)||""===e.winners[a]?null:t===e.winners[a]?{backgroundColor:"#66BB6A",borderRight:"1px solid white",paddingLeft:"10px",paddingRight:"1px"}:{backgroundColor:"#EF5350",borderRight:"1px solid white",paddingLeft:"10px",paddingRight:"1px"}};return t&&t.players?r.a.createElement("div",null,r.a.createElement(L.a,{variant:"h5",gutterBottom:!0,component:"h2"},"Pick Comparer (from 2018-2019)"),r.a.createElement(_.a,{closeMenuOnSelect:!1,components:H()(),isMulti:!0,options:t.players,onChange:this.handleChange}),r.a.createElement(E.a,{padding:"none"},r.a.createElement(k.a,null,r.a.createElement(O.a,null,function(){var t=[];for(var a in t.push(r.a.createElement(w.a,{key:"Name"},"Name")),e.state.selectedPlayers){var n=e.state.selectedPlayers[a].name,l=e.state.selectedPlayers[a].wins;t.push(r.a.createElement(w.a,{key:n+"-Name"},n+" ("+l+" Wins)"))}return t}())),r.a.createElement(v.a,null,function(){var n=[];for(var l in t.games){var i=[],o=t.games[l];for(var s in i.push(r.a.createElement(w.a,{key:o},o)),e.state.selectedPlayers){var c=e.state.selectedPlayers[s].name,m=e.state.selectedPlayers[s].picks[l],u=a(t,m,l);i.push(r.a.createElement(w.a,{style:u,key:c+m},m))}n.push(r.a.createElement(O.a,{key:o+l},i))}return n}()))):r.a.createElement("div",null)}}]),t}(n.Component),R=a(30),W=a.n(R);function I(e){window.gapi.client.load("sheets","v4",function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:g.spreadsheetId,range:"Games!A2:AZ100"}).then(function(t){var a=function(e){for(var t={},a=0;a<e.length;a++){var n={name:e[a][0],time:new Date(e[a][1]),location:e[a][2],network:e[a][3],favorite:e[a][4],underdog:e[a][5],spread:e[a][6]};t[n.name]=n}return t}(t.result.values)||[];e({gameDetails:a})},function(t){e(!1,t.result.error)})})}var T=a(53),M=a(106),z=a(6),F=a.n(z),U=a(67),q=a(107),X=a.n(q),V=a(110),$=a.n(V),K=a(108),J=a.n(K),Y=a(113),Z=a.n(Y),Q=a(112),ee=a.n(Q),te=a(68),ae=a.n(te),ne=a(109),re=a.n(ne),le=a(111),ie=a.n(le),oe=a(119),se=a.n(oe),ce=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L.a,{variant:"h5",gutterBottom:!0,component:"h2"},"Welcome to Bowl Pool Central"),r.a.createElement(L.a,{component:"div"},"Thanks for participating in the bowl pool this year! Please make your picks by selecting the picks option on the left and filling out the google form"),r.a.createElement("br",null),r.a.createElement(L.a,{variant:"h5",gutterBottom:!0,component:"h2"},"Payment"),r.a.createElement(L.a,{component:"div"},"The cost is $5 to enter, you can either pay with Paypal or mail in a check. Paypal is $5.50 as Paypal takes a cut. Please remember to pay: the director has a hard time covering payment for everyone."," ",r.a.createElement("b",null,"Entries must be received by the first game Dec. 20th at 2:00 PM")),r.a.createElement("br",null),r.a.createElement(L.a,{variant:"h5",gutterBottom:!0,component:"h2"},"Details"),r.a.createElement(L.a,{component:"div"},"Please see the Rules section for the full rules and regulations"))}}]),t}(r.a.Component),me=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{border:"0",cellPadding:"10",cellSpacing:"0",align:"center"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{align:"center"})),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},r.a.createElement("a",{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=bowlpooldirector%40gmail%2ecom&lc=US&item_name=Bowl%20Pool%20Central&amount=5%2e50&currency_code=USD&button_subtype=services&bn=PP%2dBuyNowBF%3abtn_buynowCC_LG%2egif%3aNonHosted",title:"Pay Now!",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg",border:"0",alt:"PayPal Logo"})))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center",style:{maxWidth:"400px"}},"The cost is $5 to enter, you can either pay with\xa0",r.a.createElement("a",{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=bowlpooldirector%40gmail%2ecom&lc=US&item_name=Bowl%20Pool%20Central&amount=5%2e50&currency_code=USD&button_subtype=services&bn=PP%2dBuyNowBF%3abtn_buynowCC_LG%2egif%3aNonHosted",target:"_blank",rel:"noopener noreferrer"},"Paypal"),"\xa0 or mail in a check. Paypal is $5.50 as Paypal takes a cut. Please remember to pay: the director has a hard time covering payment for everyone. Entries must be received by the first game (12/15/18 at Noon).")))))}}]),t}(r.a.Component),ue=a(31),pe=a.n(ue),he=a(32),de=a.n(he),ge=a(33),ye=a.n(ge),Ee=a(116),be=a.n(Ee),ve=a(118),fe=a.n(ve),we=a(117),Pe=a.n(we),ke=a(114),je=a.n(ke),Oe=a(115),Ce=a.n(Oe),Se=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{fontSize:"26px"}},"Make your picks"," ",r.a.createElement("a",{title:"Pick Now!",target:"_blank",rel:"noopener noreferrer",href:"https://forms.gle/hXCz8y6N1dGyHGKg8"},"HERE"))}}]),t}(r.a.Component),xe=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",height:"100%",marginTop:"-80px",marginLeft:"-80px"}},r.a.createElement("iframe",{style:{width:"100%",height:"1500px",border:"0",minWidth:"500px"},src:"https://docs.google.com/document/d/e/2PACX-1vQqwskChG3xngeC12VwykENXzj5P_gevPZdm42wiGrUYxuvOGEHTOFdH2UkWYVnWGwSV9qGhcqvvXrG/pub?embedded=true"}))}}]),t}(r.a.Component),De=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).gameDisplay=function(e){return r.a.createElement(O.a,{key:e.name},r.a.createElement(w.a,{key:e.name+"_name"},e.name),r.a.createElement(w.a,{key:e.name+"_date"},e.time.toLocaleDateString()),r.a.createElement(w.a,{key:e.name+"_time"},e.time.toLocaleTimeString()),r.a.createElement(w.a,{key:e.name+"_fav"},e.favorite),r.a.createElement(w.a,{key:e.name+"_under"},e.underdog),r.a.createElement(w.a,{key:e.name+"_spread"},e.spread),r.a.createElement(w.a,{key:e.name+"_net"},e.network))},a.getHeaderRow=function(){return r.a.createElement(O.a,null,r.a.createElement(w.a,null,"Game"),r.a.createElement(w.a,null,"Date"),r.a.createElement(w.a,null,"Time"),r.a.createElement(w.a,null,"Favorite"),r.a.createElement(w.a,null,"Underdog"),r.a.createElement(w.a,null,"Spread"),r.a.createElement(w.a,null,"Network"))},a.getTodaysGames=function(e){var t=[];for(var n in e)e[n].time.getDate()===(new Date).getDate()&&t.push(a.gameDisplay(e[n]));return t},a.getAllGames=function(e){var t=[];for(var n in e)t.push(a.gameDisplay(e[n]));return t},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.gameDetails,t=this.getTodaysGames(e);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(L.a,{variant:"h5",gutterBottom:!0,component:"h2"},"Today's Games"),0!==t.length?r.a.createElement(E.a,null,r.a.createElement(k.a,null,this.getHeaderRow()),r.a.createElement(v.a,null,t)):r.a.createElement("div",null," No Games Today :(")),r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement(L.a,{variant:"h5",gutterBottom:!0,component:"h2"},"All Games"),r.a.createElement(E.a,{padding:"dense"},r.a.createElement(k.a,null,this.getHeaderRow()),r.a.createElement(v.a,null,this.getAllGames(e)))))}}]),t}(r.a.Component),Be=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,page:"Home"},a.setPage=function(e){a.setState({page:e})},a.setPageHome=function(){return a.setPage("Home")},a.setPagePayment=function(){return a.setPage("Payment")},a.setPagePicks=function(){return a.setPage("Picks")},a.setPageStandings=function(){return a.setPage("Standings")},a.setPagePC=function(){return a.setPage("Player Compare")},a.setPageRules=function(){return a.setPage("Rules")},a.setPageGames=function(){return a.setPage("Games")},a.handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(X.a,null),r.a.createElement(J.a,{position:"absolute",className:F()(e.appBar,this.state.open&&e.appBarShift)},r.a.createElement(S.a,{disableGutters:!this.state.open,className:e.toolbar},r.a.createElement(ae.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:F()(e.menuButton,this.state.open&&e.menuButtonHidden)},r.a.createElement(re.a,null)),r.a.createElement(L.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Bowl Pool Central"))),r.a.createElement($.a,{variant:"permanent",classes:{paper:F()(e.drawerPaper,!this.state.open&&e.drawerPaperClose)},open:this.state.open},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(ae.a,{onClick:this.handleDrawerClose},r.a.createElement(ie.a,null))),r.a.createElement(ee.a,null),r.a.createElement(Z.a,null,r.a.createElement(pe.a,{button:!0,onClick:this.setPageHome},r.a.createElement(de.a,null,r.a.createElement(je.a,null)),r.a.createElement(ye.a,{primary:"Home"})),r.a.createElement(pe.a,{button:!0,onClick:this.setPagePayment},r.a.createElement(de.a,null,r.a.createElement(Ce.a,null)),r.a.createElement(ye.a,{primary:"Payment"})),r.a.createElement(pe.a,{button:!0,onClick:this.setPagePicks},r.a.createElement(de.a,null,r.a.createElement(be.a,null)),r.a.createElement(ye.a,{primary:"Picks"})),r.a.createElement(pe.a,{button:!0,onClick:this.setPageStandings},r.a.createElement(de.a,null,r.a.createElement(Pe.a,null)),r.a.createElement(ye.a,{primary:"Standings"})),r.a.createElement(pe.a,{button:!0,onClick:this.setPagePC},r.a.createElement(de.a,null,r.a.createElement(fe.a,null)),r.a.createElement(ye.a,{primary:"Player Compare"})),r.a.createElement(pe.a,{button:!0,onClick:this.setPageRules},r.a.createElement(de.a,null,r.a.createElement(se.a,null)),r.a.createElement(ye.a,{primary:"Rules"})))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),"Home"===this.state.page?r.a.createElement(ce,{classes:e}):null,"Payment"===this.state.page?r.a.createElement(me,null):null,"Picks"===this.state.page?r.a.createElement(Se,null):null,"Standings"===this.state.page?r.a.createElement("div",null,r.a.createElement(L.a,{variant:"h5",gutterBottom:!0,component:"h2"},"Last Year's Results"),r.a.createElement(G,{playerList:this.props.playerList,playerSearch:this.props.playerSearch}),r.a.createElement(d,{bowlPool:this.props.bowlPool})):null,"Rules"===this.state.page?r.a.createElement(xe,null):null,"Games"===this.state.page?r.a.createElement(De,{gameDetails:this.props.gameDetails}):null,"Player Compare"===this.state.page?r.a.createElement(A,{bowlPool:this.props.bowlPool}):null))}}]),t}(r.a.Component),Le=Object(U.withStyles)(function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(M.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(T.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:7*e.spacing.unit},e.breakpoints.up("sm"),{width:9*e.spacing.unit}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit,height:"100vh",overflow:"auto"},chartContainer:{marginLeft:-22},tableContainer:{height:320},h5:{marginBottom:2*e.spacing.unit}}})(Be),Ge=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={bowlPool:{},gameDetails:{},searchPlayerList:[],error:null,page:"Home"},a.initClient=function(){window.gapi.client.init({apiKey:g.apiKey,discoveryDocs:g.discoveryDocs}).then(function(){var e;e=a.onLoadMainSheet,window.gapi.client.load("sheets","v4",function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:g.spreadsheetId,range:"Full_Data!A1:AZ100"}).then(function(t){var a=function(e){var t=e,a=function(e){for(var t=[],a=0;a<e.length;a++)a<2||t.push(e[a]);return t}(t[0]),n=function(e){for(var t=[],a=0;a<e.length;a++)a<2||t.push(e[a]);return t}(t[2]);return{games:a,winners:n,players:function(e,t){var a=[],n={};for(var r in e){var l=e[r];n={picks:[],wins:0};for(var i=0;i<l.length;i++)0===i?n.name=l[0]:1===i?(n.wins=l[i],n.loses=t-n.wins):n.picks.push(l[i]);n.value=r,n.label=n.name,a.push(n)}return a.sort(function(e,t){return t.wins-e.wins}),a}(t.slice(3),n.length)}}(t.result.values)||[];e({bowlPool:a})},function(t){e(!1,t.result.error)})}),I(a.onLoadGamesSheet)})},a.onLoadMainSheet=function(e,t){if(e){var n=e.bowlPool;a.setState({bowlPool:n}),a.setState({searchPlayerList:n.players}),a.playerSearch("")}else a.setState({error:t})},a.onLoadGamesSheet=function(e,t){if(e){var n=e.gameDetails;a.setState({gameDetails:n})}else a.setState({error:t})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"playerSearch",value:function(e){var t=this.state.bowlPool.players.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())});t=t.splice(0,10),this.setState({searchPlayerList:t})}},{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},"Home"===this.state.page?r.a.createElement(W.a,null,r.a.createElement("div",null,r.a.createElement(Le,{bowlPool:this.state.bowlPool,playerList:this.state.searchPlayerList,playerSearch:this.playerSearch.bind(this),gameDetails:this.state.gameDetails}))):null,"PlayerList"===this.state.page?r.a.createElement(W.a,null,r.a.createElement(G,{playerList:this.state.searchPlayerList,playerSearch:this.playerSearch.bind(this)})):null,"Wins"===this.state.page?r.a.createElement(W.a,null,r.a.createElement(d,{bowlPool:this.state.bowlPool})):null,"MultiPlayer"===this.state.page?r.a.createElement(W.a,null,r.a.createElement(A,{bowlPool:this.state.bowlPool})):null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[121,2,1]]]);
//# sourceMappingURL=main.d6469ce8.chunk.js.map