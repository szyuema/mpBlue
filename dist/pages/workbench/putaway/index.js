"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_zanTab=require("./../../../components/zan-tab.js"),_zanTab2=_interopRequireDefault(_zanTab),_wxex=require("./../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_zanToptips=require("./../../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),_zanLoadmore=require("./../../../components/zan-loadmore.js"),_zanLoadmore2=_interopRequireDefault(_zanLoadmore),Index=function(e){function t(){var e,n,r,o;_classCallCheck(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.config={navigationBarTitleText:"待上架容器"},r.mixins=[_wxex2.default],r.computed={},r.$repeat={},r.$props={zanLoadmore:{"xmlns:v-bind":"","v-bind:nodata.once":"isEmpty",nodata_str:"容器是空的"}},r.$events={},r.components={zanToptips:_zanToptips2.default,zanLoadmore:_zanLoadmore2.default},r.data={isEmpty:!0,list:[],type:1,flag:1},r.events={},r.methods={chooseContainer:function(e){r.$preload("info",{work:r.work,detail:e}),r.type=1,r.$navigate("./detail")},toOther:function(e){r.$preload("info",{work:r.work}),r.type=1,r.$navigate("./detail-other")}},o=n,_possibleConstructorReturn(r,o)}return _inherits(t,e),_createClass(t,[{key:"onShow",value:function(){this.getShelfList(),this.$apply()}},{key:"onLoad",value:function(e,t){var n=this.$parent.globalData.userInfo;this.work=t.preload?t.preload.work:{},wx.setNavigationBarTitle({title:this.work.workMap.deviceSn}),this.userInfo=n,this.$apply()}},{key:"getShelfList",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showLoading({title:"加载中",mask:!0}),n={ucId:this.userInfo.ucId,tk:this.userInfo.token,unshellfId:parseInt(this.work.busyKey),pageSize:1e3},e.next=4,_service2.default.Apost("shelf/listDetail",n);case 4:r=e.sent,o=r.res,a=r.state,wx.hideLoading(),this.isEmpty=a,a?this.list=o:(this.list=[],2===this.flag?this.backUrl("todo"):this.showTips(o)),this.type=2,this.$apply();case 12:case"end":return e.stop()}},e,this)}));return e}()},{key:"setParams",value:function(e){this.params=e,e.flag&&(this.flag=e.flag),this.$apply()}}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/workbench/putaway/index"));