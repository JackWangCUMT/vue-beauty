webpackJsonp([24,53],{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, ".markdown > table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  empty-cells: show;\n  border: 1px solid #e9e9e9;\n  width: 100%;\n  margin-bottom: 24px;\n}\n.markdown > table th {\n  white-space: nowrap;\n  color: #5c6b77;\n  font-weight: 600;\n  background: #f7f7f7;\n}\n.markdown > table td,\n.markdown > table th {\n  border: 1px solid #e9e9e9;\n  padding: 8px 16px;\n  text-align: left;\n}\n.markdown.api-container table {\n  font-family: Consolas,Menlo,Courier,monospace;\n  font-size: 13px;\n}\n", ""]);

	// exports


/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./apiTable.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./apiTable.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 5:
/***/ function(module, exports) {

	module.exports = "\n<section class=\"markdown api-container\">\n  <h2>{{ title }}</h2>\n  <slot></slot>\n  <table>\n    <thead>\n      <tr>\n        <th v-for=\"text in head\" v-html=\"text\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr v-for=\"item in content\">\n        <td v-for=\"text in item\" v-html=\"text\" track-by=\"$index\"></td>\n      </tr>\n      <tr v-for=\"api in apis\">\n        <td v-for=\"text in api\" v-html=\"text\" track-by=\"$index\"></td>\n      </tr>\n    </tbody>\n  </table>\n</section>\n";

/***/ },

/***/ 6:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'props'
	    },
	    head: Array,
	    content: Array,
	    apis: Array,
	    title: {
	      type: String,
	      default: "API"
	    }
	  },
	  ready: function ready() {
	    if (!this.head) {
	      switch (this.type) {
	        case 'props':
	          this.$set('head', ['参数', '说明', '类型', '默认值']);break;
	        case 'events':
	          this.$set('head', ['事件名', '说明', '参数']);break;
	        case 'methods':
	          this.$set('head', ['方法名', '说明', '参数', '返回值']);break;
	      }
	    }
	  }
	};

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(4)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/apiTable.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(5)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, ".code-box {\n  border: 1px solid #e9e9e9;\n  border-radius: 6px;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin: 0 0 16px;\n  -webkit-transition: all .2s ease;\n  transition: all .2s ease;\n}\n.code-box .collapse {\n  position: absolute;\n  right: 16px;\n  bottom: 16px;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  line-height: 18px;\n  opacity: .5;\n  text-align: center;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  color: #999;\n  background: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 100%;\n}\n.code-box .collapse:hover {\n  opacity: 1;\n}\n.code-box:hover {\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 10;\n  background: #fff;\n}\n.code-box:hover .code-box-title {\n  background: #fbfbfb;\n  box-shadow: 0 -1.2px 0 #e9e9e9;\n}\n.code-box:hover .code-box-meta {\n  background: #fbfbfb;\n}\n.code-box .code-box-demo {\n  border-bottom: 1px solid #e9e9e9;\n  padding: 42px 20px 50px;\n}\n.code-box .highlight-wrapper {\n  max-height: 0;\n  opacity: 0;\n  overflow: auto;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease;\n  border-radius: 0 0 6px 6px;\n}\n.code-box .highlight-wrapper-expand {\n  max-height: 500px;\n  opacity: 1;\n}\n.code-box.expand .collapse {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.code-box.expand .code-box-meta {\n  border-radius: 0;\n  border-bottom: 1px dashed #e9e9e9;\n}\n.code-box-meta {\n  position: relative;\n  padding: 16px;\n  border-radius: 0 0 6px 6px;\n  -webkit-transition: background-color 0.4s ease;\n  transition: background-color 0.4s ease;\n  width: 100%;\n  font-size: 12px;\n}\n.code-box-meta p {\n  margin: 0;\n}\n.code-box-title {\n  position: absolute;\n  top: -14px;\n  padding: 1px 1.1em;\n  color: #777;\n  border-radius: 6px;\n  background: #fff;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease;\n}\n.code-box-title:before {\n  font-family: anticon;\n  content: \"\\E6D2\";\n  font-size: 16px;\n  vertical-align: middle;\n  line-height: 22px;\n  position: relative;\n  margin-right: 8px;\n  top: -2px;\n  color: #ccc;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  display: inline-block;\n}\n.code-box .code-box-title a,\n.code-box .code-box-title a:hover {\n  color: #666;\n  font-size: 14px;\n}\n.highlight {\n  line-height: 1.5;\n}\n.highlight pre {\n  margin: 0;\n  padding: 0;\n  background: #fff;\n  width: auto;\n}\n.highlight pre code {\n  display: block;\n  color: #666;\n  line-height: 1.7;\n  border: 1px solid #e9e9e9;\n  padding: 10px 15px;\n  border-radius: 6px;\n  font-size: 13px;\n  border: none;\n  background: #fff;\n}\n.hljs {\n  background: none;\n}\n", ""]);

	// exports


/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./codeBox.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./codeBox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 10:
/***/ function(module, exports) {

	module.exports = "\n\n<section class=\"code-box\" :class=\"{'expand': open}\">\n  <section class=\"code-box-demo\">\n    <slot></slot>\n  </section>\n  <section class=\"code-box-meta markdown\">\n    <div class=\"code-box-title\"><a>{{ title }}</a></div>\n    <div><p>{{{ describe }}}</p></div>\n    <span class=\"collapse anticon anticon-circle-o-right\" @click=\"handleOpen\"></span>\n  </section>\n  <section class=\"highlight-wrapper\" :class=\"{'highlight-wrapper-expand': open}\">\n    <div class=\"highlight\">\n      <pre>\n        <code class=\"html\"><slot name=\"preCode\"></slot>{{ code }}<slot name=\"postCode\"></slot></code>\n      </pre>\n    </div>\n  </section>\n</section>\n\n";

/***/ },

/***/ 11:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    title: String,
	    describe: String,
	    code: String
	  },
	  data: function data() {
	    return {
	      open: false
	    };
	  },
	  ready: function ready() {
	    var _this = this;

	    var children = this._slotContents.default.childNodes;

	    children = Array.prototype.filter.call(children, function (node) {
	      return node.nodeType === 1;
	    });

	    if (!this.code) {
	      this.code = children.map(function (dom) {
	        return dom.outerHTML.replace(/\t| {4}/g, '');
	      }).join('\n');
	    }

	    this.$nextTick(function () {
	      hljs.highlightBlock(_this.$el.querySelector('pre code'));
	    });
	  },

	  methods: {
	    handleOpen: function handleOpen() {
	      this.open = !this.open;
	    }
	  }
	};

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(9)
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/codeBox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(10)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },

/***/ 167:
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n\n  <section class=\"markdown\">\n    <h1>Select 选择器</h1>\n    <p>\n      一个简单的select选择器\n    </p>\n    <h2>何时使用</h2>\n    <p>\n      弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。\n    </p>\n    <h2>组件演示</h2>\n  </section>\n  <v-Row :gutter=\"16\">\n    <v-Col span=\"12\">\n      <code-box\n        title=\"简单\"\n        describe=\"最简单的用法。\"\n      >\n        <v-Select placeholder=\"请选择人员\" style=\"width: 120px;\" :options=\"options\" value=\"\"></v-Select>\n        <v-Select placement=\"top\" style=\"width: 120px;\" :options=\"options\" :value.sync=\"value\"></v-Select>\n        <v-Select disabled style=\"width: 120px;\" value=\"\"></v-Select>\n      </code-box>\n      <code-box\n        title=\"带搜索框\"\n        describe=\"展开后可对选项进行搜索。\"\n      >\n        <v-Select search style=\"width: 120px;\" :options=\"options\" value=\"\"></v-Select><br><br>\n        <v-Select search multiple style=\"width: 100%\" :options=\"options\" :value=\"[]\"></v-Select>\n      </code-box>\n    </v-Col>\n    <v-Col span=\"12\">\n      <code-box\n        title=\"三种大小\"\n        describe=\"三种大小的选择框，当 size 分别为 lg 和 sm 时，输入框高度为 32px 和 22px ，默认高度为 28px\"\n      >\n        <v-Select size=\"lg\" style=\"width: 200px;\" :options=\"options\" :value.sync=\"value\"></v-Select>\n        <v-Select style=\"width: 200px;\" :options=\"options\" :value.sync=\"value\"></v-Select>\n        <v-Select size=\"sm\" style=\"width: 200px;\" :options=\"options\" :value.sync=\"value\"></v-Select>\n      </code-box>\n\n      <code-box\n        title=\"多选\"\n        describe=\"多选，从已有条目中选择（scroll the menu）\"\n      >\n        <v-Select style=\"width: 100%;\" multiple :options=\"options\" :value=\"['3']\"></v-Select>\n      </code-box>\n\n      <code-box\n        title=\"分组\"\n        describe=\"用嵌套的数据结构进行选项分组。\"\n      >\n        <v-Select style=\"width: 200px\" :options=\"groupOpt\" :value=\"'lp'\"></v-Select>\n        <v-Select style=\"width: 200px\" multiple :options=\"groupOpt\" :value=\"['lp']\"></v-Select>\n      </code-box>\n    </v-Col>\n  </v-Row>\n\n\n  <api-table :apis='apis'></api-table>\n</div>\n\n";

/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _codeBox = __webpack_require__(12);

	var _codeBox2 = _interopRequireDefault(_codeBox);

	var _apiTable = __webpack_require__(7);

	var _apiTable2 = _interopRequireDefault(_apiTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      apis: [],
	      options: [{ value: '1', text: 'lady' }, { value: '2', text: '小强', disabled: true }, { value: '3', text: '小明' }],
	      groupOpt: [{
	        label: '重庆',
	        data: [{
	          value: 'lp',
	          text: '梁平'
	        }, {
	          value: 'wz',
	          text: '万州',
	          disabled: true
	        }]
	      }, {
	        label: '四川',
	        data: [{
	          value: 'cd',
	          text: '成都'
	        }, {
	          value: 'dz',
	          text: '达州'
	        }]
	      }],
	      value: '3',
	      people: ''
	    };
	  },
	  components: {
	    codeBox: _codeBox2.default,
	    apiTable: _apiTable2.default
	  },
	  events: {
	    'select-change': function selectChange(obj) {
	      console.log(obj.text);
	    }
	  },
	  methods: {}
	};

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(439)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(167)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ }

});