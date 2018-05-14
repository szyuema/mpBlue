"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_wxex=require("./../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),Index=function(e){function t(){var e,r,o,n;_classCallCheck(this,t);for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];return r=o=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.config={navigationBarTitleText:"详细"},o.mixins=[_wxex2.default],o.components={},o.data={workinfo:{},showText:""},o.events={},o.methods={workRecord:function(){o.$preload("workinfo",o.workinfo),o.$navigate("./record")},toList:function(e){20===e.busyType?(o.$preload("goto","work/info"),o.$preload("source",2),o.$preload("storageId",e.busyKey),o.$preload("addressId",e.addressId),o.$navigate("../instorage/shelflist")):26===e.busyType&&(o.$preload("goto","work/info"),o.$preload("source",2),o.$preload("packageId",e.busyKey),o.$preload("addressId",e.addressId),o.$navigate("../binning/packagelist"))}},n=r,_possibleConstructorReturn(o,n)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e,t){this.workinfo=t.preload?t.preload.workinfo:{},this.showText=this.workinfo.busyTypeText,23===this.workinfo.busyTypeText?this.showText="出库":this.workinfo.busyTypeText}}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/workbench/work/info"));