"use strict";(self.webpackChunkiobroker_admin_component_ping=self.webpackChunkiobroker_admin_component_ping||[]).push([["src_Components_jsx"],{66393:(x,v,d)=>{d.r(v),d.d(v,{default:()=>T});var b=d(28437),s=d.n(b),y=d(95973),u=d.n(y),a=d(67085),p=d(37449),S=d(60556),C=Object.defineProperty,E=Object.getPrototypeOf,w=Reflect.get,_=(h,t,i)=>t in h?C(h,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):h[t]=i,k=(h,t,i)=>_(h,typeof t!="symbol"?t+"":t,i),I=(h,t,i)=>w(E(h),i,t),f=(h,t,i)=>new Promise((l,e)=>{var n=o=>{try{c(i.next(o))}catch(m){e(m)}},r=o=>{try{c(i.throw(o))}catch(m){e(m)}},c=o=>o.done?l(o.value):Promise.resolve(o.value).then(n,r);c((i=i.apply(h,t)).next())});function $(h){const t=h.split(".").map(l=>parseInt(l,10).toString(2));if(t.length!==4)return 0;const i=t.join("").split("1").length-1;return Math.pow(2,32-i)}class g extends S.ConfigGeneric{constructor(t){super(t),k(this,"onChangedState",(i,l)=>{if(i.endsWith(".alive")){const e=l?l.val:!1;e!==this.state.alive&&this.setState({alive:e})}else if(i.endsWith(".progress")){const e=l?l.val:0;e!==this.state.progress&&this.setState({progress:e})}else if(i.endsWith(".running")){const e=!!(l!=null&&l.val);e!==this.state.running&&this.setState({running:e})}else if(i.endsWith(".result")){const e=(l==null?void 0:l.val)||"[]";e!==JSON.stringify(this.state.ips)&&this.setState({ips:JSON.parse(e)})}else if(i.endsWith(".status")){const e=(l==null?void 0:l.val)||"";e!==this.state.status&&this.setState({status:e})}else if(i.endsWith(".interface")){const e=(l==null?void 0:l.val)||"";e&&e!==this.state.interface&&this.state.interfaces.find(n=>n.ip===e)&&this.setState({interface:e})}}),this.state={alive:!1,progress:0,interface:"",interfaces:[],selected:[],ips:[],running:!1,status:""}}getAllInterfaces(){return f(this,null,function*(){var t,i;const l=[],e=yield this.props.socket.getObject(`system.adapter.ping.${this.props.instance}`),n=yield this.props.socket.getObject(`system.host.${e.common.host}`);return(i=(t=n==null?void 0:n.native)==null?void 0:t.hardware)!=null&&i.networkInterfaces&&Object.keys(n.native.hardware.networkInterfaces).forEach(r=>{n.native.hardware.networkInterfaces[r].forEach(o=>{o.family==="IPv4"&&!o.internal&&l.push({name:r,ip:o.address,netmask:o.netmask})})}),l})}componentDidMount(){return f(this,null,function*(){yield I(g.prototype,this,"componentDidMount").call(this);const t={},i=yield this.props.socket.getState(`system.adapter.ping.${this.props.instance}.alive`);t.alive=!!(i!=null&&i.val);const l=yield this.props.socket.getState(`ping.${this.props.instance}.browse.interface`),e=yield this.props.socket.getState(`ping.${this.props.instance}.browse.progress`),n=yield this.props.socket.getState(`ping.${this.props.instance}.browse.running`),r=yield this.props.socket.getState(`ping.${this.props.instance}.browse.result`),c=yield this.props.socket.getState(`ping.${this.props.instance}.browse.status`);t.status=(c==null?void 0:c.val)||"",t.progress=(e==null?void 0:e.val)||0,t.running=!!(n!=null&&n.val);try{t.ips=JSON.parse(r==null?void 0:r.val)||[],t.ips[0]&&typeof t.ips=="string"&&(t.ips=t.ips.map(o=>({ip:o})))}catch(o){t.ips=[]}yield this.props.socket.subscribeState(`system.adapter.ping.${this.props.instance}.alive`,this.onChangedState),yield this.props.socket.subscribeState(`ping.${this.props.instance}.browse.*`,this.onChangedState),t.interfaces=yield this.getAllInterfaces(),t.interfaces.find(o=>o.ip===(l==null?void 0:l.val))&&(t.interface=l==null?void 0:l.val),this.setState(t)})}browse(){this.props.socket.sendTo(`ping.${this.props.instance}`,"browse",this.state.interfaces.find(t=>t.ip===this.state.interface)).catch(t=>console.error(`Cannot ping: ${t}`))}componentWillUnmount(){return f(this,null,function*(){yield this.props.socket.unsubscribeState(`system.adapter.ping.${this.props.instance}.alive`,this.onChangedState),yield this.props.socket.unsubscribeState(`ping.${this.props.instance}.browse.*`,this.onChangedState)})}renderItem(){if(!this.state.interfaces)return s().createElement(a.LinearProgress,null);const t=this.props.data.devices||[],i=this.state.ips.filter(e=>!t.find(n=>n.ip===e.ip)),l=i.length===this.state.selected.length;return s().createElement("div",{style:{width:"100%"},className:"ping_custom"},s().createElement("h4",null,p.I18n.t("custom_ping_title")),s().createElement("div",{style:{width:"100%",display:"flex",alignItems:"center"}},s().createElement(a.FormControl,{style:{width:"100%",maxWidth:600},variant:"standard"},s().createElement(a.InputLabel,null,p.I18n.t("custom_ping_interface")),s().createElement(a.Select,{variant:"standard",disabled:this.state.running,value:this.state.interface,onChange:e=>this.setState({interface:e.target.value},()=>this.props.socket.setState(`ping.${this.props.instance}.browse.interface`,this.state.interface))},s().createElement(a.MenuItem,{value:""},s().createElement("em",null,p.I18n.t("custom_ping_select_interface"))),this.state.interfaces.map(e=>{const n=$(e.netmask);return s().createElement(a.MenuItem,{disabled:n>4096,value:e.ip},`${e.name} - ${e.ip} (${n} ${p.I18n.t("custom_ping_ips")})`)}))),s().createElement(a.Button,{style:{marginLeft:16,whiteSpace:"nowrap"},variant:"contained",disabled:!this.state.alive||!this.state.interface,onClick:()=>{this.state.running?this.props.socket.setState(`ping.${this.props.instance}.browse.running`,!1):this.browse()}},s().createElement("span",{style:{marginLeft:8}},this.state.running?`${this.state.status} ${p.I18n.t("custom_ping_stop")}`:p.I18n.t("custom_ping_browse")))),this.state.running?s().createElement(a.LinearProgress,{value:this.state.progress/255*100,variant:"determinate"}):s().createElement("div",{style:{height:4}}),s().createElement(a.Button,{variant:"contained",style:{marginTop:10,marginBottom:10},disabled:!this.state.selected.length,onClick:()=>{const e=[...this.props.data.devices];this.state.selected.forEach(r=>{e.find(c=>c.ip===r)||e.push({ip:r,name:r})});const n=JSON.parse(JSON.stringify(this.props.data));n.devices=e,e.sort((r,c)=>r.ip>c.ip?1:r.ip<c.ip?-1:0),this.props.onChange(n),this.setState({selected:[]})}},p.I18n.t("custom_ping_add")),s().createElement(a.TableContainer,{component:a.Paper,style:{width:"100%"}},s().createElement(a.Table,{style:{width:"100%"},size:"small"},s().createElement(a.TableHead,null,s().createElement(a.TableRow,{style:{background:this.props.themeType==="dark"?"#333":"#DDD"}},s().createElement(a.TableCell,{style:{height:55}},i.length?s().createElement(a.Checkbox,{title:p.I18n.t("custom_ping_select_all"),disabled:!i.length,indeterminate:!l&&this.state.selected.length,checked:l,onClick:()=>{l?this.setState({selected:[]}):this.setState({selected:i})}}):null),s().createElement(a.TableCell,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:55}},p.I18n.t("custom_ping_ip")),s().createElement(a.TableCell,null,p.I18n.t("custom_ping_mac")),s().createElement(a.TableCell,null,p.I18n.t("custom_ping_vendor")),s().createElement(a.TableCell,null,p.I18n.t("custom_ping_ignore")))),s().createElement(a.TableBody,null,this.state.ips.map(e=>s().createElement(a.TableRow,{key:e.ip,sx:{"&:last-child td, &:last-child th":{border:0}}},s().createElement(a.TableCell,{component:"th",scope:"row"},t.find(n=>n.ip===e.ip)?null:s().createElement(a.Checkbox,{checked:this.state.selected.includes(e.ip),style:{padding:"0 8px"},onChange:()=>{const n=this.state.selected,r=n.indexOf(e.ip);r===-1?n.push(e.ip):n.splice(r,1),this.setState({selected:n})}})),s().createElement(a.TableCell,null,e.ip),s().createElement(a.TableCell,null,e.mac),s().createElement(a.TableCell,null,e.vendor),s().createElement(a.TableCell,null,t.find(n=>n.ip===e.ip)?null:s().createElement(a.Checkbox,{checked:e.ignore,style:{padding:"0 8px"},onChange:()=>{const n=[...this.state.ips],r=n.find(c=>c.ip===e.ip);r&&(r.ignore=!r.ignore,this.setState({ips:n},()=>this.props.socket.setState(`ping.${this.props.instance}.browse.result`,JSON.stringify(n),!1)))}}))))))))}}g.propTypes={socket:u().object.isRequired,themeType:u().string,themeName:u().string,style:u().object,data:u().object.isRequired,attr:u().string,schema:u().object,onError:u().func,onChange:u().func};const T={PingBrowseComponent:g}}}]);

//# sourceMappingURL=src_Components_jsx.ed943ea7.chunk.js.map