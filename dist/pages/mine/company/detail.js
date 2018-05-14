"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),app=getApp(),Index=function(e){function t(){var e,n,a,o;_classCallCheck(this,t);for(var r=arguments.length,s=Array(r),i=0;i<r;i++)s[i]=arguments[i];return n=a=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.config={navigationBarTitleText:"公司信息"},a.components={},a.mixins=[],a.data={addressList:[],company:{},userInfo:null,type:1},a.computed={},a.methods={handleBack:function(){_wepy2.default.navigateBack({})},handleDel:function(e){var t=a,n=Object.assign({},e),o=n.addressId,r=a.userInfo,s={ucId:r.ucId,tk:r.token,companyId:r.companyId,addressId:o};_service2.default.requestPost("company/delete",s,function(e,n){n&&(n?wx.showToast({title:"删除成功",icon:"success",duration:2e3,success:function(){t.loadData()}}):console.info("err"))})},handleEdit:function(e){var t=Object.assign({},e);a.$preload("address",t),a.$navigate("address-add")},handleEditCampany:function(e){a.$preload("company",a.company),a.$navigate("add")},setDefault:function(e){var t=Object.assign({},e),n=a;if(2===t.isDefault){var o=t.addressId,r=a.userInfo,s={ucId:r.ucId,tk:r.token,companyId:a.company.companyId,addressId:o};_service2.default.requestPost("company/setDefault",s,function(e,t){t&&(t?wx.showToast({title:"设置成功",icon:"success",duration:2e3,success:function(){n.loadData()}}):console.info("err"))})}}},a.events={},o=n,_possibleConstructorReturn(a,o)}return _inherits(t,e),_createClass(t,[{key:"onShow",value:function(){this.loadData(),this.$apply()}},{key:"onLoad",value:function(e,t){t.preload&&(this.company=t.preload.company,this.$apply(),this.loadData())}},{key:"loadData",value:function(){var e=this,t=this.$parent.globalData.userInfo;this.userInfo=t,this.$preload("userInfo",t),_service2.default.requestGet("company/getMyAddressList",{tk:t.token,ucId:t.ucId,companyId:this.company.companyId},function(t,n){n&&(e.addressList=t.data.data,e.$apply(),e.type=2)})}}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/mine/company/detail"));