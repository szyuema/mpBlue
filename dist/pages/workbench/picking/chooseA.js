"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,a){try{var i=t[o](a),s=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_wxex=require("./../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_zanToptips=require("./../../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),_zanLoadmore=require("./../../../components/zan-loadmore.js"),_zanLoadmore2=_interopRequireDefault(_zanLoadmore),Index=function(e){function t(){var e,r,n,o;_classCallCheck(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.config={navigationBarTitleText:"拣货-选择工作区域"},n.mixins=[_wxex2.default],n.components={zanToptips:_zanToptips2.default,zanLoadmore:_zanLoadmore2.default},n.data={isChoose:!1,info:{},taskId:"",areaId:"",flag:1},n.events={},n.methods={bindDeviceChange:function(e){n.areaId=e.areaId,n.createTask(e.areaId),n.$apply()}},o=r,_possibleConstructorReturn(n,o)}return _inherits(t,e),_createClass(t,[{key:"setParams",value:function(e){this.params=e,e.flag&&(this.flag=e.flag),this.$apply()}},{key:"onShow",value:function(){2===this.flag?this.backUrl("todo"):this.taskId&&this.backUrl("todo")}},{key:"onLoad",value:function(e,t){var r=this.$parent.globalData.userInfo;this.info=t.preload?t.preload.info:{},this.userInfo=r,this.$apply()}},{key:"createTask",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,o,a,i,s,u,c,p;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={ucId:this.userInfo.ucId,tk:this.userInfo.token,addressId:this.info.work.addressId,pickOrderId:this.info.work.busyKey,areaId:t},e.next=3,_service2.default.Apost("pick/createTask",r);case 3:n=e.sent,o=n.res,a=n.code,i=n.msg,s=n.state,200==a?(o.addressId=this.info.work.addressId,this.taskId=o.taskId,this.$preload("taskInfo",o),u=o.status,c=o.packageType,p=o.deviceNum,1==c?this.$navigate("./sureNum"):p>0&&2==u?(this.$navigate("./sureNum"),console.log("sure")):(console.log("scan"),this.$navigate("./scanBox"))):this.showTips(i),this.$apply();case 10:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/workbench/picking/chooseA"));