(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){e.exports=a(300)},134:function(e,t,a){},136:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),i=a.n(l),o=(a(134),a(10)),s=a(11),c=a(13),u=a(12),m=a(14),p=(a(136),a(106));var h=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.bowlPool;return e.games?r.a.createElement(p.a,{width:"100%",height:"80vh",chartType:"Histogram",loader:r.a.createElement("div",null,"Loading Chart"),data:function(e){var t=[["Wins","Frequency"]];for(var a in e.players){var n=e.players[a];t.push([n.name,parseInt(n.wins)])}return t}(e),options:{histogram:{bucketSize:2},title:"Win Histogram",hAxis:{title:"Wins"},vAxis:{title:"Frequency"},chartArea:{left:60,width:"85%"},legend:{position:"none"}}}):r.a.createElement("div",null)}}]),t}(n.Component),d={apiKey:"AIzaSyB8-wy0DJ-w95vCGoMbEbpn0jVmX4IxHoQ",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetId:"12K-dZ5_FnyVbcPrqWmjDDBodOyKIJ1Zi_EOaXCTz2G0"},g=a(52),y=a.n(g),b=a(54),E=a.n(b),f=a(23),w=a.n(f),v=a(53),P=a.n(v),k=a(36),j=a.n(k),O=a(51),C=a.n(O),S=a(109),B=a.n(S),x=a(8),N=a.n(x),L=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSearch",value:function(e){this.props.playerSearch(e.target.value)}},{key:"render",value:function(){var e=this.props.playerList,t=[];for(var a in e){var n=e[a];t.push(r.a.createElement(j.a,{key:n.value},r.a.createElement(w.a,null,n.wins),r.a.createElement(w.a,null,n.name)))}return r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement(N.a,{variant:"h6",id:"tableTitle"},"Standings"),r.a.createElement("div",{style:{flex:"1 1 100%"}}),r.a.createElement(B.a,{placeholder:"search",onKeyUp:this.handleSearch.bind(this)})),r.a.createElement(y.a,null,r.a.createElement(P.a,null,r.a.createElement(j.a,null,r.a.createElement(w.a,null,"Wins"),r.a.createElement(w.a,null,"Name"))),r.a.createElement(E.a,null,t)))}}]),t}(r.a.Component),T=a(110),D=a(112),_=a.n(D),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedPlayers:[]},a.handleChange=function(e){a.setState({selectedPlayers:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.bowlPool,a=function(e,t,a){return e.winners.length<=parseInt(a)||""===e.winners[a]?null:t===e.winners[a]?{backgroundColor:"#66BB6A",borderRight:"1px solid white",paddingLeft:"10px",paddingRight:"1px"}:{backgroundColor:"#EF5350",borderRight:"1px solid white",paddingLeft:"10px",paddingRight:"1px"}};return t&&t.players?r.a.createElement("div",null,r.a.createElement(T.a,{closeMenuOnSelect:!1,components:_()(),isMulti:!0,options:t.players,onChange:this.handleChange}),r.a.createElement(y.a,{padding:"none"},r.a.createElement(P.a,null,r.a.createElement(j.a,null,function(){var t=[];for(var a in t.push(r.a.createElement(w.a,{key:"Name"},"Name")),e.state.selectedPlayers){var n=e.state.selectedPlayers[a].name,l=e.state.selectedPlayers[a].wins;t.push(r.a.createElement(w.a,{key:n+"-Name"},n+" ("+l+" Wins)"))}return t}())),r.a.createElement(E.a,null,function(){var n=[];for(var l in t.games){var i=[],o=t.games[l];for(var s in i.push(r.a.createElement(w.a,{key:o},o)),e.state.selectedPlayers){var c=e.state.selectedPlayers[s].name,u=e.state.selectedPlayers[s].picks[l],m=a(t,u,l);i.push(r.a.createElement(w.a,{style:m,key:c+u},u))}n.push(r.a.createElement(j.a,{key:o+l},i))}return n}()))):r.a.createElement("div",null)}}]),t}(n.Component),H=a(32),I=a.n(H);var W=a(56),R=a(113),G=a(6),U=a.n(G),F=a(70),M=a(114),$=a.n(M),K=a(117),z=a.n(K),J=a(115),q=a.n(J),X=a(120),Y=a.n(X),Z=a(119),V=a.n(Z),Q=a(71),ee=a.n(Q),te=a(116),ae=a.n(te),ne=a(118),re=a.n(ne),le=a(126),ie=a.n(le),oe=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.a,{variant:"h5",gutterBottom:!0,component:"h2"},"Welcome to Bowl Pool Central"),r.a.createElement(N.a,{component:"div"},"Thanks for participating in the bowl pool this year! Please make your picks by selecting the picks option on the left and filling out the google form"),r.a.createElement("br",null),r.a.createElement(N.a,{variant:"h5",gutterBottom:!0,component:"h2"},"Payment"),r.a.createElement(N.a,{component:"div"},"The cost is $5 to enter, you can either pay with Paypal or mail in a check. Paypal is $5.50 as Paypal takes a cut. Please remember to pay: the director has a hard time covering payment for everyone. Entries must be received by the first game Dec. 16th at 12:00 PM"),r.a.createElement("br",null),r.a.createElement(N.a,{variant:"h5",gutterBottom:!0,component:"h2"},"Details"),r.a.createElement(N.a,{component:"div"},"All bowl games except the semifinals and finals are worth one point for a total of 38 points. The semifinals games (2) are worth 2 points for a total of 4 points. The finals game (1) is worth 4 points. Correctly pick both teams in the finals you receive 1 bonus point. Add it all up for a total of 47 Points"),r.a.createElement("br",null),r.a.createElement(N.a,{variant:"h5",gutterBottom:!0,component:"h2"},"Tiebreaker"),r.a.createElement(N.a,{component:"div"},"Total points scored by Duke, NCSU, Wake Forest and in their bowl games. This total does not include points scored by their opponents, just by the adding the point totals of the 3 teams above.(Not including spreads)"),r.a.createElement("br",null),r.a.createElement(N.a,{variant:"h5",gutterBottom:!0,component:"h2"},"The Spread"),r.a.createElement(N.a,{component:"div"},"Each game includes a spread, this is how much the favorite must beat the underdog in order to win. Example: If NCSU is favored by 3.5 points they must beat their opponent by at least 4 points to cover the SPREAD and win the point for the game."),r.a.createElement("br",null),r.a.createElement(N.a,{variant:"h5",gutterBottom:!0,component:"h2"},"Picking the Final Team"),r.a.createElement(N.a,{component:"div"},"Since teams will have to win their semifinals game to reach the finals it will be more difficult to pick the 2 teams playing in this game and therefore the winner. That is why we are awarding an extra bonus point for getting both finals teams correct. And a whopping 4 points for picking the winner."),r.a.createElement("br",null),r.a.createElement(N.a,{variant:"h5",gutterBottom:!0,component:"h2"},"Please Note"),r.a.createElement(N.a,{component:"div"},"You can choose a team to win it\u2019s semi-final game with the spread, and choose the other team to be in the finals. For example if TCU and Navy were playing in the semifinals and Navy is a 10 point underdog, but TCU wins by 7 points. You could choose Navy to win this game with the spread win (2 points) and also pick TCU to move on to the finals--which if you choose both finalists correctly would get you an extra 1 point."),r.a.createElement("br",null),r.a.createElement(N.a,{variant:"h5",gutterBottom:!0,component:"h2"},"Payout"),r.a.createElement(N.a,{component:"div"},"last place gets you your $5.00 back",r.a.createElement("br",null),"1st place = 50% payout",r.a.createElement("br",null),"2nd place = 25% payout",r.a.createElement("br",null),"3rd place = 15% payout",r.a.createElement("br",null),"4th place = 10% payout"),r.a.createElement("br",null),r.a.createElement(N.a,{variant:"h4",gutterBottom:!0,component:"h2"},"The Party"),r.a.createElement(N.a,{component:"div"},"Details to come. We are planning on having the party on New Year\u2019s day this year at Cameron\u2019s address at 8513 Riddle place Raleigh 27615. Party details pending."))}}]),t}(r.a.Component),se=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{border:"0",cellPadding:"10",cellSpacing:"0",align:"center"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{align:"center"})),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},r.a.createElement("a",{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=bowlpooldirector%40gmail%2ecom&lc=US&item_name=Bowl%20Pool%20Central&amount=5%2e50&currency_code=USD&button_subtype=services&bn=PP%2dBuyNowBF%3abtn_buynowCC_LG%2egif%3aNonHosted",title:"Pay Now!",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg",border:"0",alt:"PayPal Logo"})))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center",style:{maxWidth:"400px"}},"The cost is $5 to enter, you can either pay with\xa0",r.a.createElement("a",{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=bowlpooldirector%40gmail%2ecom&lc=US&item_name=Bowl%20Pool%20Central&amount=5%2e50&currency_code=USD&button_subtype=services&bn=PP%2dBuyNowBF%3abtn_buynowCC_LG%2egif%3aNonHosted",target:"_blank",rel:"noopener noreferrer"},"Paypal"),"\xa0 or mail in a check. Paypal is $5.50 as Paypal takes a cut. Please remember to pay: the director has a hard time covering payment for everyone. Entries must be received by the first game (Time TBD).")))))}}]),t}(r.a.Component),ce=a(26),ue=a.n(ce),me=a(27),pe=a.n(me),he=a(28),de=a.n(he),ge=a(123),ye=a.n(ge),be=a(127),Ee=a.n(be),fe=a(125),we=a.n(fe),ve=a(124),Pe=a.n(ve),ke=a(121),je=a.n(ke),Oe=a(122),Ce=a.n(Oe),Se=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"The proper pick page is promptly being prepared. Please provide your peak patience.")}}]),t}(r.a.Component),Be=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"We don't need no stinkin' rules!")}}]),t}(r.a.Component),xe=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"More to come")}}]),t}(r.a.Component),Ne=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!0,page:"Home"},a.setPage=function(e){a.setState({page:e})},a.setPageHome=function(){return a.setPage("Home")},a.setPagePayment=function(){return a.setPage("Payment")},a.setPagePicks=function(){return a.setPage("Picks")},a.setPageStandings=function(){return a.setPage("Standings")},a.setPagePC=function(){return a.setPage("Player Compare")},a.setPageRules=function(){return a.setPage("Rules")},a.setPageGames=function(){return a.setPage("Games")},a.handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement($.a,null),r.a.createElement(q.a,{position:"absolute",className:U()(e.appBar,this.state.open&&e.appBarShift)},r.a.createElement(C.a,{disableGutters:!this.state.open,className:e.toolbar},r.a.createElement(ee.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:U()(e.menuButton,this.state.open&&e.menuButtonHidden)},r.a.createElement(ae.a,null)),r.a.createElement(N.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Bowl Pool Central"))),r.a.createElement(z.a,{variant:"permanent",classes:{paper:U()(e.drawerPaper,!this.state.open&&e.drawerPaperClose)},open:this.state.open},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(ee.a,{onClick:this.handleDrawerClose},r.a.createElement(re.a,null))),r.a.createElement(V.a,null),r.a.createElement(Y.a,null,r.a.createElement(ue.a,{button:!0,onClick:this.setPageHome},r.a.createElement(pe.a,null,r.a.createElement(je.a,null)),r.a.createElement(de.a,{primary:"Home"})),r.a.createElement(ue.a,{button:!0,onClick:this.setPagePayment},r.a.createElement(pe.a,null,r.a.createElement(Ce.a,null)),r.a.createElement(de.a,{primary:"Payment"})),r.a.createElement(ue.a,{button:!0,onClick:this.setPagePicks},r.a.createElement(pe.a,null,r.a.createElement(ye.a,null)),r.a.createElement(de.a,{primary:"Picks"})),r.a.createElement(ue.a,{button:!0,onClick:this.setPageStandings},r.a.createElement(pe.a,null,r.a.createElement(Pe.a,null)),r.a.createElement(de.a,{primary:"Standings"})),r.a.createElement(ue.a,{button:!0,onClick:this.setPagePC},r.a.createElement(pe.a,null,r.a.createElement(we.a,null)),r.a.createElement(de.a,{primary:"Player Compare"})),r.a.createElement(ue.a,{button:!0,onClick:this.setPageRules},r.a.createElement(pe.a,null,r.a.createElement(ie.a,null)),r.a.createElement(de.a,{primary:"Rules"})),r.a.createElement(ue.a,{button:!0,onClick:this.setPageGames},r.a.createElement(pe.a,null,r.a.createElement(Ee.a,null)),r.a.createElement(de.a,{primary:"Games"})))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),"Home"===this.state.page?r.a.createElement(oe,{classes:e}):null,"Payment"===this.state.page?r.a.createElement(se,null):null,"Picks"===this.state.page?r.a.createElement(Se,null):null,"Standings"===this.state.page?r.a.createElement("div",null,r.a.createElement(L,{playerList:this.props.playerList,playerSearch:this.props.playerSearch}),r.a.createElement(h,{bowlPool:this.props.bowlPool})):null,"Rules"===this.state.page?r.a.createElement(Be,null):null,"Games"===this.state.page?r.a.createElement(xe,null):null,"Player Compare"===this.state.page?r.a.createElement(A,{bowlPool:this.props.bowlPool}):null))}}]),t}(r.a.Component),Le=Object(F.withStyles)(function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(R.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(W.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:7*e.spacing.unit},e.breakpoints.up("sm"),{width:9*e.spacing.unit}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit,height:"100vh",overflow:"auto"},chartContainer:{marginLeft:-22},tableContainer:{height:320},h5:{marginBottom:2*e.spacing.unit}}})(Ne),Te=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={bowlPool:{},searchPlayerList:[],error:null,page:"Home"},a.initClient=function(){window.gapi.client.init({apiKey:d.apiKey,discoveryDocs:d.discoveryDocs}).then(function(){var e;e=a.onLoad,window.gapi.client.load("sheets","v4",function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:d.spreadsheetId,range:"A1:AZ100"}).then(function(t){var a=function(e){var t=e,a=function(e){for(var t=[],a=0;a<e.length;a++)a<2||t.push(e[a]);return t}(t[0]),n=function(e){for(var t=[],a=0;a<e.length;a++)a<2||t.push(e[a]);return t}(t[3]);return{games:a,winners:n,players:function(e,t){var a=[],n={};for(var r in e){var l=e[r];n={picks:[],wins:0};for(var i=0;i<l.length;i++)0===i?n.name=l[0]:1===i?(n.wins=l[i],n.loses=t-n.wins):n.picks.push(l[i]);n.value=r,n.label=n.name,a.push(n)}return a.sort(function(e,t){return t.wins-e.wins}),a}(t.slice(3),n.length)}}(t.result.values)||[];e({bowlPool:a})},function(t){e(!1,t.result.error)})})})},a.onLoad=function(e,t){if(e){var n=e.bowlPool;a.setState({bowlPool:n}),a.setState({searchPlayerList:n.players}),a.playerSearch("")}else a.setState({error:t})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"playerSearch",value:function(e){var t=this.state.bowlPool.players.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())});t=t.splice(0,10),this.setState({searchPlayerList:t})}},{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},"Home"===this.state.page?r.a.createElement(I.a,null,r.a.createElement("div",null,r.a.createElement(Le,{bowlPool:this.state.bowlPool,playerList:this.state.searchPlayerList,playerSearch:this.playerSearch.bind(this)}))):null,"PlayerList"===this.state.page?r.a.createElement(I.a,null,r.a.createElement(L,{playerList:this.state.searchPlayerList,playerSearch:this.playerSearch.bind(this)})):null,"Wins"===this.state.page?r.a.createElement(I.a,null,r.a.createElement(h,{bowlPool:this.state.bowlPool})):null,"MultiPlayer"===this.state.page?r.a.createElement(I.a,null,r.a.createElement(A,{bowlPool:this.state.bowlPool})):null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[129,2,1]]]);
//# sourceMappingURL=main.b85f643a.chunk.js.map