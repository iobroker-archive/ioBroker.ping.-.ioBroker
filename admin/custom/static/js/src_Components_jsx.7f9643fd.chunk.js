"use strict";(self.webpackChunkiobroker_admin_component_ping=self.webpackChunkiobroker_admin_component_ping||[]).push([["src_Components_jsx"],{66393:(j,v,d)=>{d.r(v),d.d(v,{default:()=>T});var b=d(28437),s=d.n(b),y=d(95973),u=d.n(y),a=d(67085),p=d(37449),S=d(60556),E=Object.defineProperty,C=Object.getPrototypeOf,w=Reflect.get,_=(h,t,n)=>t in h?E(h,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):h[t]=n,k=(h,t,n)=>_(h,typeof t!="symbol"?t+"":t,n),I=(h,t,n)=>w(C(h),n,t),m=(h,t,n)=>new Promise((i,e)=>{var l=o=>{try{c(n.next(o))}catch(f){e(f)}},r=o=>{try{c(n.throw(o))}catch(f){e(f)}},c=o=>o.done?i(o.value):Promise.resolve(o.value).then(l,r);c((n=n.apply(h,t)).next())});function $(h){const t=h.split(".").map(i=>parseInt(i,10).toString(2));if(t.length!==4)return 0;const n=t.join("").split("1").length-1;return Math.pow(2,32-n)}class g extends S.ConfigGeneric{constructor(t){super(t),k(this,"onChangedState",(n,i)=>{if(n.endsWith(".alive")){const e=i?i.val:!1;e!==this.state.alive&&this.setState({alive:e})}else if(n.endsWith(".progress")){const e=i?i.val:0;e!==this.state.progress&&this.setState({progress:e})}else if(n.endsWith(".running")){const e=!!(i!=null&&i.val);e!==this.state.running&&this.setState({running:e})}else if(n.endsWith(".result")){const e=(i==null?void 0:i.val)||"[]";e!==JSON.stringify(this.state.ips)&&this.setState({ips:JSON.parse(e)})}else if(n.endsWith(".status")){const e=(i==null?void 0:i.val)||"";e!==this.state.status&&this.setState({status:e})}else if(n.endsWith(".browse.interface")){const e=(i==null?void 0:i.val)||"";e&&e!==this.state.interface&&this.state.interfaces.find(l=>l.ip===e)&&this.setState({interface:e})}}),this.state={alive:!1,progress:0,interface:"",interfaces:[],selected:[],ips:[],running:!1,status:""}}getAllInterfaces(){return m(this,null,function*(){var t,n;const i=[],e=yield this.props.socket.getObject(`system.adapter.ping.${this.props.instance}`),l=yield this.props.socket.getObject(`system.host.${e.common.host}`);return(n=(t=l==null?void 0:l.native)==null?void 0:t.hardware)!=null&&n.networkInterfaces&&Object.keys(l.native.hardware.networkInterfaces).forEach(r=>{l.native.hardware.networkInterfaces[r].forEach(o=>{o.family==="IPv4"&&!o.internal&&i.push({name:r,ip:o.address,netmask:o.netmask})})}),i})}componentDidMount(){return m(this,null,function*(){yield I(g.prototype,this,"componentDidMount").call(this);const t={},n=yield this.props.socket.getState(`system.adapter.ping.${this.props.instance}.alive`);t.alive=!!(n!=null&&n.val);const i=yield this.props.socket.getState(`ping.${this.props.instance}.browse.interface`),e=yield this.props.socket.getState(`ping.${this.props.instance}.browse.progress`),l=yield this.props.socket.getState(`ping.${this.props.instance}.browse.running`),r=yield this.props.socket.getState(`ping.${this.props.instance}.browse.result`),c=yield this.props.socket.getState(`ping.${this.props.instance}.browse.status`);t.status=(c==null?void 0:c.val)||"",t.progress=(e==null?void 0:e.val)||0,t.running=!!(l!=null&&l.val);try{t.ips=JSON.parse(r==null?void 0:r.val)||[],t.ips[0]&&typeof t.ips=="string"&&(t.ips=t.ips.map(o=>({ip:o})))}catch(o){t.ips=[]}yield this.props.socket.subscribeState(`system.adapter.ping.${this.props.instance}.alive`,this.onChangedState),yield this.props.socket.subscribeState(`ping.${this.props.instance}.browse.*`,this.onChangedState),t.interfaces=yield this.getAllInterfaces(),t.interfaces.find(o=>o.ip===(i==null?void 0:i.val))&&(t.interface=i==null?void 0:i.val),this.setState(t)})}browse(){this.props.socket.sendTo(`ping.${this.props.instance}`,"browse",this.state.interfaces.find(t=>t.ip===this.state.interface)).then(t=>this.setState({ips:(t==null?void 0:t.result)||[]}))}componentWillUnmount(){return m(this,null,function*(){yield this.props.socket.unsubscribeState(`system.adapter.ping.${this.props.instance}.alive`,this.onChangedState),yield this.props.socket.unsubscribeState(`ping.${this.props.instance}.browse.*`,this.onChangedState)})}renderItem(){if(!this.state.interfaces)return s().createElement(a.LinearProgress,null);const t=this.props.data.devices||[],n=this.state.ips.filter(e=>!t.find(l=>l.ip===e.ip)),i=n.length===this.state.selected.length;return s().createElement("div",{style:{width:"100%"},className:"ping_custom"},s().createElement("h4",null,p.I18n.t("custom_ping_title")),s().createElement("div",{style:{width:"100%",display:"flex",alignItems:"center"}},s().createElement(a.FormControl,{style:{width:"100%",maxWidth:600},variant:"standard"},s().createElement(a.InputLabel,null,p.I18n.t("custom_ping_interface")),s().createElement(a.Select,{variant:"standard",value:this.state.interface,onChange:e=>this.setState({interface:e.target.value})},s().createElement(a.MenuItem,{value:""},s().createElement("em",null,p.I18n.t("custom_ping_select_interface"))),this.state.interfaces.map(e=>{const l=$(e.netmask);return s().createElement(a.MenuItem,{disabled:l>4096,value:e.ip},`${e.name} - ${e.ip} (${l} ${p.I18n.t("custom_ping_ips")})`)}))),s().createElement(a.Button,{style:{marginLeft:16,whiteSpace:"nowrap"},variant:"contained",disabled:!this.state.alive||!this.state.interface,onClick:()=>{this.state.running?this.props.socket.setState(`ping.${this.props.instance}.browse.running`,!1):this.browse()}},this.state.running?s().createElement(a.CircularProgress,null):null,s().createElement("span",{style:{marginLeft:8}},this.state.running?`${this.state.status} ${p.I18n.t("custom_ping_stop")}`:p.I18n.t("custom_ping_browse")))),this.state.running?s().createElement(a.LinearProgress,{value:this.state.progress/255*100,variant:"determinate"}):s().createElement("div",{style:{height:4}}),s().createElement(a.Button,{variant:"contained",style:{marginTop:10,marginBottom:10},disabled:!this.state.selected.length,onClick:()=>{const e=[...this.props.data.devices];this.state.selected.forEach(r=>{e.find(c=>c.ip===r)||e.push({ip:r,name:r})});const l=JSON.parse(JSON.stringify(this.props.data));l.devices=e,e.sort((r,c)=>r.ip>c.ip?1:r.ip<c.ip?-1:0),this.props.onChange(l),this.setState({selected:[]})}},p.I18n.t("custom_ping_add")),s().createElement(a.TableContainer,{component:a.Paper,style:{width:"100%"}},s().createElement(a.Table,{style:{width:"100%"},size:"small"},s().createElement(a.TableHead,null,s().createElement(a.TableRow,{style:{background:this.props.themeType==="dark"?"#333":"#DDD"}},s().createElement(a.TableCell,{style:{height:55}},n.length?s().createElement(a.Checkbox,{title:p.I18n.t("custom_ping_select_all"),disabled:!n.length,indeterminate:!i&&this.state.selected.length,checked:i,onClick:()=>{i?this.setState({selected:[]}):this.setState({selected:n})}}):null),s().createElement(a.TableCell,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:55}},p.I18n.t("custom_ping_ip")),s().createElement(a.TableCell,null,p.I18n.t("custom_ping_mac")),s().createElement(a.TableCell,null,p.I18n.t("custom_ping_vendor")))),s().createElement(a.TableBody,null,this.state.ips.map(e=>s().createElement(a.TableRow,{key:e.ip,sx:{"&:last-child td, &:last-child th":{border:0}}},s().createElement(a.TableCell,{component:"th",scope:"row"},t.find(l=>l.ip===e.ip)?null:s().createElement(a.Checkbox,{checked:this.state.selected.includes(e.ip),style:{padding:"0 8px"},onChange:()=>{const l=this.state.selected,r=l.indexOf(e.ip);r===-1?l.push(e.ip):l.splice(r,1),this.setState({selected:l})}})),s().createElement(a.TableCell,null,e.ip),s().createElement(a.TableCell,null,e.mac),s().createElement(a.TableCell,null,e.vendor)))))))}}g.propTypes={socket:u().object.isRequired,themeType:u().string,themeName:u().string,style:u().object,data:u().object.isRequired,attr:u().string,schema:u().object,onError:u().func,onChange:u().func};const T={PingBrowseComponent:g}}}]);

//# sourceMappingURL=src_Components_jsx.7f9643fd.chunk.js.map