"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_wxex=require("./../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),Index=function(e){function t(){var e,r,n,o;_classCallCheck(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.config={navigationBarTitleText:"装箱完成"},n.mixins=[_wxex2.default],n.methods={backtodo:function(e){var t=n.backUrl("todo",!0),r=t.delta;t.targetPage.setParams({reload:!0}),wx.navigateBack({delta:r})},continuetodo:function(e){var t=n.backUrl("scan",!0),r=t.delta,o=t.targetPage;o.setParams({reload:!0}),console.log(o),console.log(r),wx.navigateBack({delta:r})}},o=r,_possibleConstructorReturn(n,o)}return _inherits(t,e),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/workbench/binning/result"));