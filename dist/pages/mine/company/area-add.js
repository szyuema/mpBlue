"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function r(n,o){try{var i=t[n](o),s=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy);require("./../../../npm/wepy-async-function/index.js");var _wxex=require("./../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_zanToptips=require("./../../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),_constant=require("./../../../mixins/constant.js"),Constant=_interopRequireWildcard(_constant),AreaPackageType=Constant.AreaPackageType,AreaStorageType=Constant.AreaStorageType,Alphabet=Constant.Alphabet,Index=function(e){function t(){var e,a,r,n;_classCallCheck(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return a=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.config={navigationBarTitleText:"仓库-新增库区"},r.components={zanToptips:_zanToptips2.default},r.mixins=[_wxex2.default],r.data={addForm:{ucId:null,tk:null,addressId:null,areaId:"",areaName:"",abbr:"",packageType:"",storageType:""},packageTypeSort:"",storageTypeSort:"",AlphabetKeys:[],AreaPackageType:[],AreaStorageType:[]},r.methods={handleBack:function(){_wepy2.default.navigateBack({})},bindAbbrChange:function(e){this.addForm.abbr=e.detail.value,this.$apply()},bindPackageChange:function(e){this.addForm.packageType=AreaPackageType[e.detail.value].key,this.packageTypeSort=e.detail.value,this.$apply()},bindStorageChange:function(e){this.addForm.storageType=AreaStorageType[e.detail.value].key,this.storageTypeSort=e.detail.value,this.$apply()},handleSubmit:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var a,r,n,o,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=getCurrentPages(),r=Object.assign({},this.addForm),r.abbr=t.detail.value.abbr,r.areaName=t.detail.value.areaName,n="",""==r.packageType&&(n="请选择装箱类别"),""==r.storageType&&(n="请选择存储类别"),""==r.abbr&&(n="请选择库区字母序号"),""==r.areaName&&(n="请输入库区名称"),""==n){e.next=13;break}this.showTips(n),e.next=19;break;case 13:return e.next=15,_service2.default.Apost("area/saveArea",r);case 15:o=e.sent,i=o.res,s=o.state,s&&wx.showToast({title:"添加库区成功",icon:"success",duration:2e3,success:function(){if(a.length>1){a[a.length-2].loadListOne()}_wepy2.default.navigateBack({})}});case 19:case"end":return e.stop()}},e,this)}));return e}()},n=a,_possibleConstructorReturn(r,n)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){var t=this.$parent.globalData.userInfo;this.addForm.ucId=t.ucId,this.addForm.tk=t.token,this.addForm.companyId=e.companyId,this.addForm.addressId=e.addressId,this.$apply(),this.setPickerData()}},{key:"setPickerData",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,a,r,n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={ucId:this.addForm.ucId,tk:this.addForm.tk,addressId:this.addForm.addressId},a=Alphabet(),e.next=4,_service2.default.Aget("area/getUsedKey",t);case 4:r=e.sent,n=r.res,o=r.state,o&&(a=a.filter(function(e){return!n.includes(e.value)})),this.AlphabetKeys=a,this.AreaPackageType=AreaPackageType,this.AreaStorageType=AreaStorageType,this.$apply();case 12:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/mine/company/area-add"));