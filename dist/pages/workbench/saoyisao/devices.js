"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function o(r,i){try{var s=t[r](i),a=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(a).then(function(e){o("next",e)},function(e){o("throw",e)});e(a)}return o("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_wxex=require("./../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_zanToptips=require("./../../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),_zanLoadmore=require("./../../../components/zan-loadmore.js"),_zanLoadmore2=_interopRequireDefault(_zanLoadmore),Index=function(e){function t(){var e,n,o,r;_classCallCheck(this,t);for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];return n=o=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.config={navigationBarTitleText:"库位"},o.mixins=[_wxex2.default],o.components={zanToptips:_zanToptips2.default,zanLoadmore:_zanLoadmore2.default},o.data={list:[],positionInfo:{},showPop:!1,barCode:""},o.methods={hidePop:function(e){o.showPop=!1,o.$apply()},listGoods:function(e){o.getDevice(e.deviceSn)},setContainer:function(e){o.checkDevice()},handleSubmit:function(e){o.showPop=!0,o.barCode=""},code:function(e){var t=e.detail.value;o.barCode=t,o.$apply()},scanQr:function(e){wx.scanCode({success:function(e){o.barCode=e.result,o.$apply(),o.checkDevice()}})}},r=n,_possibleConstructorReturn(o,r)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e,t){this.positionInfo=t.preload?t.preload.positionInfo:{},console.log(this.positionInfo),this.$apply(),this.getDeviceList()}},{key:"getDeviceList",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,o,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showLoading({title:"加载中",mask:!0}),t={addressId:this.positionInfo.houseId,positionId:this.positionInfo.positionId},e.next=4,_service2.default.Aget("position/getDevices",t);case 4:n=e.sent,o=n.res,r=n.state,wx.hideLoading(),this.isEmpty=r,r?this.list=o:(this.list=[],this.showTips(o)),this.$apply();case 11:case"end":return e.stop()}},e,this)}));return e}()},{key:"getDevice",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,o,r,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={ucId:this.userInfo.ucId,tk:this.userInfo.token,addressId:2,barCode:t},e.next=3,_service2.default.Aget("device/getDeviceInfo",n);case 3:o=e.sent,r=o.res,i=o.msg,s=o.state,s?(this.$preload("deviceInfo",r),this.$navigate("../saoyisao/prods")):this.showTips(i),this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"checkDevice",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,o,r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={addressId:this.positionInfo.houseId,barCode:this.barCode.toUpperCase()},e.next=3,_service2.default.Aget("device/getDeviceInfo",t);case 3:n=e.sent,o=n.res,r=n.msg,i=n.state,i?this.bindDevice(o.deviceId):this.showTips(r),this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"bindDevice",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,o,r,i,s,a=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showLoading({title:"加载中",mask:!0}),n={addressId:this.positionInfo.houseId,positionId:this.positionInfo.positionId,deviceId:t},e.next=4,_service2.default.Apost("position/bindDevice",n);case 4:o=e.sent,r=o.res,i=o.msg,s=o.state,wx.hideLoading(),s?wx.showToast({title:"绑定成功",icon:"success",duration:1e3,success:function(){a.getDeviceList(),a.showPop=!1,a.barCode=""}}):this.showTips(i),this.$apply();case 11:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/workbench/saoyisao/devices"));