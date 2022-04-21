"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_components_ha-code-editor_ts"],{

/***/ "./src/components/ha-code-editor.ts":
/*!******************************************!*\
  !*** ./src/components/ha-code-editor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HaCodeEditor\": () => (/* binding */ HaCodeEditor)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! memoize-one */ \"./node_modules/memoize-one/dist/memoize-one.esm.js\");\n/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/dom/fire_event */ \"./src/common/dom/fire_event.ts\");\n/* harmony import */ var _resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/codemirror.ondemand */ \"./src/resources/codemirror.ondemand.ts\");\nfunction _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }\n\nfunction _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [[\"method\"], [\"field\"]], initializeInstanceElements: function (O, elements) { [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === \"own\") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === \"static\" || placement === \"prototype\")) { var receiver = placement === \"static\" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === \"field\") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError(\"Duplicated element (\" + element.key + \")\"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError(\"Duplicated element (\" + elements[j].key + \")\"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === \"field\") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, \"finisher\", \"An element descriptor\"); this.disallowProperty(elementObject, \"extras\", \"An element descriptor\"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== \"method\" && kind !== \"field\") { throw new TypeError('An element descriptor\\'s .kind property must be either \"method\" or' + ' \"field\", but a decorator created an element descriptor with' + ' .kind \"' + kind + '\"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== \"static\" && placement !== \"prototype\" && placement !== \"own\") { throw new TypeError('An element descriptor\\'s .placement property must be one of \"static\",' + ' \"prototype\" or \"own\", but a decorator created an element descriptor' + ' with .placement \"' + placement + '\"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, \"elements\", \"An element descriptor\"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== \"field\") { this.disallowProperty(elementObject, \"initializer\", \"A method descriptor\"); } else { this.disallowProperty(descriptor, \"get\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"set\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"value\", \"The property descriptor of a field descriptor\"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, \"finisher\"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: \"class\", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== \"class\") { throw new TypeError('A class descriptor\\'s .kind property must be \"class\", but a decorator' + ' created a class descriptor with .kind \"' + kind + '\"'); } this.disallowProperty(obj, \"key\", \"A class descriptor\"); this.disallowProperty(obj, \"placement\", \"A class descriptor\"); this.disallowProperty(obj, \"descriptor\", \"A class descriptor\"); this.disallowProperty(obj, \"initializer\", \"A class descriptor\"); this.disallowProperty(obj, \"extras\", \"A class descriptor\"); var finisher = _optionalCallableProperty(obj, \"finisher\"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== \"function\") { throw new TypeError(\"Finishers must return a constructor.\"); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + \" can't have a .\" + name + \" property.\"); } } }; return api; }\n\nfunction _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === \"method\") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === \"get\") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"set\") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"field\") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === \"field\" ? \"field\" : \"method\", key: key, placement: def.static ? \"static\" : def.kind === \"field\" ? \"own\" : \"prototype\", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === \"field\") element.initializer = def.value; return element; }\n\nfunction _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }\n\nfunction _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === \"method\" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === \"method\" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError(\"Duplicated methods (\" + element.key + \") can't be decorated.\"); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError(\"Decorators can't be placed on different accessors with for \" + \"the same property (\" + element.key + \").\"); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }\n\nfunction _hasDecorators(element) { return element.decorators && element.decorators.length; }\n\nfunction _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }\n\nfunction _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== \"function\") { throw new TypeError(\"Expected '\" + name + \"' to be a function\"); } return value; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nconst saveKeyBinding = {\n  key: \"Mod-s\",\n  run: view => {\n    (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__.fireEvent)(view.dom, \"editor-save\");\n    return true;\n  }\n};\nlet HaCodeEditor = _decorate([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.customElement)(\"ha-code-editor\")], function (_initialize, _ReactiveElement) {\n  class HaCodeEditor extends _ReactiveElement {\n    constructor(...args) {\n      super(...args);\n\n      _initialize(this);\n    }\n\n  }\n\n  return {\n    F: HaCodeEditor,\n    d: [{\n      kind: \"field\",\n      key: \"codemirror\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)()],\n      key: \"mode\",\n\n      value() {\n        return \"yaml\";\n      }\n\n    }, {\n      kind: \"field\",\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        type: Boolean\n      })],\n      key: \"autofocus\",\n\n      value() {\n        return false;\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        type: Boolean\n      })],\n      key: \"readOnly\",\n\n      value() {\n        return false;\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        type: Boolean,\n        attribute: \"autocomplete-entities\"\n      })],\n      key: \"autocompleteEntities\",\n\n      value() {\n        return false;\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)()],\n      key: \"error\",\n\n      value() {\n        return false;\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.state)()],\n      key: \"_value\",\n\n      value() {\n        return \"\";\n      }\n\n    }, {\n      kind: \"field\",\n      key: \"_loadedCodeMirror\",\n      value: void 0\n    }, {\n      kind: \"set\",\n      key: \"value\",\n      value: function value(_value) {\n        this._value = _value;\n      }\n    }, {\n      kind: \"get\",\n      key: \"value\",\n      value: function value() {\n        return this.codemirror ? this.codemirror.state.doc.toString() : this._value;\n      }\n    }, {\n      kind: \"get\",\n      key: \"hasComments\",\n      value: function hasComments() {\n        if (!this.codemirror || !this._loadedCodeMirror) {\n          return false;\n        }\n\n        const className = this._loadedCodeMirror.HighlightStyle.get(this.codemirror.state, this._loadedCodeMirror.tags.comment);\n\n        return !!this.shadowRoot.querySelector(`span.${className}`);\n      }\n    }, {\n      kind: \"method\",\n      key: \"connectedCallback\",\n      value: function connectedCallback() {\n        _get(_getPrototypeOf(HaCodeEditor.prototype), \"connectedCallback\", this).call(this);\n\n        if (!this.codemirror) {\n          return;\n        }\n\n        if (this.autofocus !== false) {\n          this.codemirror.focus();\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"update\",\n      value: function update(changedProps) {\n        _get(_getPrototypeOf(HaCodeEditor.prototype), \"update\", this).call(this, changedProps);\n\n        if (!this.codemirror) {\n          return;\n        }\n\n        if (changedProps.has(\"mode\")) {\n          this.codemirror.dispatch({\n            effects: this._loadedCodeMirror.langCompartment.reconfigure(this._mode)\n          });\n        }\n\n        if (changedProps.has(\"readOnly\")) {\n          this.codemirror.dispatch({\n            effects: this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))\n          });\n        }\n\n        if (changedProps.has(\"_value\") && this._value !== this.value) {\n          this.codemirror.dispatch({\n            changes: {\n              from: 0,\n              to: this.codemirror.state.doc.length,\n              insert: this._value\n            }\n          });\n        }\n\n        if (changedProps.has(\"error\")) {\n          this.classList.toggle(\"error-state\", this.error);\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"firstUpdated\",\n      value: function firstUpdated(changedProps) {\n        _get(_getPrototypeOf(HaCodeEditor.prototype), \"firstUpdated\", this).call(this, changedProps);\n\n        this._blockKeyboardShortcuts();\n\n        this._load();\n      }\n    }, {\n      kind: \"get\",\n      key: \"_mode\",\n      value: function _mode() {\n        return this._loadedCodeMirror.langs[this.mode];\n      }\n    }, {\n      kind: \"method\",\n      key: \"_load\",\n      value: async function _load() {\n        this._loadedCodeMirror = await (0,_resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_3__.loadCodeMirror)();\n        const extensions = [this._loadedCodeMirror.lineNumbers(), this._loadedCodeMirror.EditorState.allowMultipleSelections.of(true), this._loadedCodeMirror.history(), this._loadedCodeMirror.highlightSelectionMatches(), this._loadedCodeMirror.highlightActiveLine(), this._loadedCodeMirror.drawSelection(), this._loadedCodeMirror.rectangularSelection(), this._loadedCodeMirror.keymap.of([...this._loadedCodeMirror.defaultKeymap, ...this._loadedCodeMirror.searchKeymap, ...this._loadedCodeMirror.historyKeymap, ...this._loadedCodeMirror.tabKeyBindings, saveKeyBinding]), this._loadedCodeMirror.langCompartment.of(this._mode), this._loadedCodeMirror.theme, this._loadedCodeMirror.Prec.fallback(this._loadedCodeMirror.highlightStyle), this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)), this._loadedCodeMirror.EditorView.updateListener.of(update => this._onUpdate(update))];\n\n        if (!this.readOnly && this.autocompleteEntities && this.hass) {\n          extensions.push(this._loadedCodeMirror.autocompletion({\n            override: [this._entityCompletions.bind(this)],\n            maxRenderedOptions: 10\n          }));\n        }\n\n        this.codemirror = new this._loadedCodeMirror.EditorView({\n          state: this._loadedCodeMirror.EditorState.create({\n            doc: this._value,\n            extensions\n          }),\n          root: this.shadowRoot,\n          parent: this.shadowRoot\n        });\n      }\n    }, {\n      kind: \"field\",\n      key: \"_getStates\",\n\n      value() {\n        return (0,memoize_one__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(states => {\n          if (!states) {\n            return [];\n          }\n\n          const options = Object.keys(states).map(key => ({\n            type: \"variable\",\n            label: key,\n            detail: states[key].attributes.friendly_name,\n            info: `State: ${states[key].state}`\n          }));\n          return options;\n        });\n      }\n\n    }, {\n      kind: \"method\",\n      key: \"_entityCompletions\",\n      value: function _entityCompletions(context) {\n        const entityWord = context.matchBefore(/[a-z_]{3,}\\./);\n\n        if (!entityWord || entityWord.from === entityWord.to && !context.explicit) {\n          return null;\n        }\n\n        const states = this._getStates(this.hass.states);\n\n        if (!states || !states.length) {\n          return null;\n        }\n\n        return {\n          from: Number(entityWord.from),\n          options: states,\n          span: /^\\w*.\\w*$/\n        };\n      }\n    }, {\n      kind: \"method\",\n      key: \"_blockKeyboardShortcuts\",\n      value: function _blockKeyboardShortcuts() {\n        this.addEventListener(\"keydown\", ev => ev.stopPropagation());\n      }\n    }, {\n      kind: \"method\",\n      key: \"_onUpdate\",\n      value: function _onUpdate(update) {\n        if (!update.docChanged) {\n          return;\n        }\n\n        const newValue = this.value;\n\n        if (newValue === this._value) {\n          return;\n        }\n\n        this._value = newValue;\n        (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__.fireEvent)(this, \"value-changed\", {\n          value: this._value\n        });\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return lit__WEBPACK_IMPORTED_MODULE_0__.css`\n      :host(.error-state) .cm-gutters {\n        border-color: var(--error-state-color, red);\n      }\n    `;\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQVBBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBVEE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQVhBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQkE7QUFDQTtBQXRCQTtBQUFBO0FBQUE7QUFBQTtBQXlCQTtBQUNBO0FBMUJBO0FBQUE7QUFBQTtBQUFBO0FBNkJBO0FBQ0E7QUFDQTs7QUFDQTs7QUFJQTtBQUNBO0FBckNBO0FBQUE7QUFBQTtBQUFBO0FBd0NBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9DQTtBQUFBO0FBQUE7QUFBQTtBQWtEQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFLQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxGQTtBQUFBO0FBQUE7QUFBQTtBQXFGQTs7QUFDQTs7QUFDQTtBQUNBO0FBeEZBO0FBQUE7QUFBQTtBQUFBO0FBMkZBO0FBQ0E7QUE1RkE7QUFBQTtBQUFBO0FBQUE7QUErRkE7QUFDQTs7QUE0QkE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFRQTtBQTdJQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWdKQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQTNKQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdLQTs7QUFFQTtBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQXBMQTtBQUFBO0FBQUE7QUFBQTtBQXVMQTtBQUNBO0FBeExBO0FBQUE7QUFBQTtBQUFBO0FBMkxBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQXBNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVNQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL2hhLWNvZGUtZWRpdG9yLnRzPzJjMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICBDb21wbGV0aW9uLFxuICBDb21wbGV0aW9uQ29udGV4dCxcbiAgQ29tcGxldGlvblJlc3VsdCxcbn0gZnJvbSBcIkBjb2RlbWlycm9yL2F1dG9jb21wbGV0ZVwiO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JWaWV3LCBLZXlCaW5kaW5nLCBWaWV3VXBkYXRlIH0gZnJvbSBcIkBjb2RlbWlycm9yL3ZpZXdcIjtcbmltcG9ydCB7IEhhc3NFbnRpdGllcyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNzcywgQ1NTUmVzdWx0R3JvdXAsIFByb3BlcnR5VmFsdWVzLCBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tIFwibGl0L2RlY29yYXRvcnNcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgbG9hZENvZGVNaXJyb3IgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2NvZGVtaXJyb3Iub25kZW1hbmRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJlZGl0b3Itc2F2ZVwiOiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuY29uc3Qgc2F2ZUtleUJpbmRpbmc6IEtleUJpbmRpbmcgPSB7XG4gIGtleTogXCJNb2Qtc1wiLFxuICBydW46ICh2aWV3OiBFZGl0b3JWaWV3KSA9PiB7XG4gICAgZmlyZUV2ZW50KHZpZXcuZG9tLCBcImVkaXRvci1zYXZlXCIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxufTtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb2RlLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEhhQ29kZUVkaXRvciBleHRlbmRzIFJlYWN0aXZlRWxlbWVudCB7XG4gIHB1YmxpYyBjb2RlbWlycm9yPzogRWRpdG9yVmlldztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbW9kZSA9IFwieWFtbFwiO1xuXG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBhdXRvZm9jdXMgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogXCJhdXRvY29tcGxldGUtZW50aXRpZXNcIiB9KVxuICBwdWJsaWMgYXV0b2NvbXBsZXRlRW50aXRpZXMgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgZXJyb3IgPSBmYWxzZTtcblxuICBAc3RhdGUoKSBwcml2YXRlIF92YWx1ZSA9IFwiXCI7XG5cbiAgcHJpdmF0ZSBfbG9hZGVkQ29kZU1pcnJvcj86IHR5cGVvZiBpbXBvcnQoXCIuLi9yZXNvdXJjZXMvY29kZW1pcnJvclwiKTtcblxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvZGVtaXJyb3IgPyB0aGlzLmNvZGVtaXJyb3Iuc3RhdGUuZG9jLnRvU3RyaW5nKCkgOiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzQ29tbWVudHMoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmNvZGVtaXJyb3IgfHwgIXRoaXMuX2xvYWRlZENvZGVNaXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5fbG9hZGVkQ29kZU1pcnJvci5IaWdobGlnaHRTdHlsZS5nZXQoXG4gICAgICB0aGlzLmNvZGVtaXJyb3Iuc3RhdGUsXG4gICAgICB0aGlzLl9sb2FkZWRDb2RlTWlycm9yLnRhZ3MuY29tbWVudFxuICAgICk7XG4gICAgcmV0dXJuICEhdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKGBzcGFuLiR7Y2xhc3NOYW1lfWApO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKCF0aGlzLmNvZGVtaXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXV0b2ZvY3VzICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoIXRoaXMuY29kZW1pcnJvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwibW9kZVwiKSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLmRpc3BhdGNoKHtcbiAgICAgICAgZWZmZWN0czogdGhpcy5fbG9hZGVkQ29kZU1pcnJvciEubGFuZ0NvbXBhcnRtZW50IS5yZWNvbmZpZ3VyZShcbiAgICAgICAgICB0aGlzLl9tb2RlXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJyZWFkT25seVwiKSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLmRpc3BhdGNoKHtcbiAgICAgICAgZWZmZWN0czogdGhpcy5fbG9hZGVkQ29kZU1pcnJvciEucmVhZG9ubHlDb21wYXJ0bWVudCEucmVjb25maWd1cmUoXG4gICAgICAgICAgdGhpcy5fbG9hZGVkQ29kZU1pcnJvciEuRWRpdG9yVmlldyEuZWRpdGFibGUub2YoIXRoaXMucmVhZE9ubHkpXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJfdmFsdWVcIikgJiYgdGhpcy5fdmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5kaXNwYXRjaCh7XG4gICAgICAgIGNoYW5nZXM6IHtcbiAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgIHRvOiB0aGlzLmNvZGVtaXJyb3Iuc3RhdGUuZG9jLmxlbmd0aCxcbiAgICAgICAgICBpbnNlcnQ6IHRoaXMuX3ZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiZXJyb3JcIikpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImVycm9yLXN0YXRlXCIsIHRoaXMuZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2Jsb2NrS2V5Ym9hcmRTaG9ydGN1dHMoKTtcbiAgICB0aGlzLl9sb2FkKCk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGVkQ29kZU1pcnJvciEubGFuZ3NbdGhpcy5tb2RlXTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2xvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fbG9hZGVkQ29kZU1pcnJvciA9IGF3YWl0IGxvYWRDb2RlTWlycm9yKCk7XG4gICAgY29uc3QgZXh0ZW5zaW9ucyA9IFtcbiAgICAgIHRoaXMuX2xvYWRlZENvZGVNaXJyb3IubGluZU51bWJlcnMoKSxcbiAgICAgIHRoaXMuX2xvYWRlZENvZGVNaXJyb3IuRWRpdG9yU3RhdGUuYWxsb3dNdWx0aXBsZVNlbGVjdGlvbnMub2YodHJ1ZSksXG4gICAgICB0aGlzLl9sb2FkZWRDb2RlTWlycm9yLmhpc3RvcnkoKSxcbiAgICAgIHRoaXMuX2xvYWRlZENvZGVNaXJyb3IuaGlnaGxpZ2h0U2VsZWN0aW9uTWF0Y2hlcygpLFxuICAgICAgdGhpcy5fbG9hZGVkQ29kZU1pcnJvci5oaWdobGlnaHRBY3RpdmVMaW5lKCksXG4gICAgICB0aGlzLl9sb2FkZWRDb2RlTWlycm9yLmRyYXdTZWxlY3Rpb24oKSxcbiAgICAgIHRoaXMuX2xvYWRlZENvZGVNaXJyb3IucmVjdGFuZ3VsYXJTZWxlY3Rpb24oKSxcbiAgICAgIHRoaXMuX2xvYWRlZENvZGVNaXJyb3Iua2V5bWFwLm9mKFtcbiAgICAgICAgLi4udGhpcy5fbG9hZGVkQ29kZU1pcnJvci5kZWZhdWx0S2V5bWFwLFxuICAgICAgICAuLi50aGlzLl9sb2FkZWRDb2RlTWlycm9yLnNlYXJjaEtleW1hcCxcbiAgICAgICAgLi4udGhpcy5fbG9hZGVkQ29kZU1pcnJvci5oaXN0b3J5S2V5bWFwLFxuICAgICAgICAuLi50aGlzLl9sb2FkZWRDb2RlTWlycm9yLnRhYktleUJpbmRpbmdzLFxuICAgICAgICBzYXZlS2V5QmluZGluZyxcbiAgICAgIF0gYXMgS2V5QmluZGluZ1tdKSxcbiAgICAgIHRoaXMuX2xvYWRlZENvZGVNaXJyb3IubGFuZ0NvbXBhcnRtZW50Lm9mKHRoaXMuX21vZGUpLFxuICAgICAgdGhpcy5fbG9hZGVkQ29kZU1pcnJvci50aGVtZSxcbiAgICAgIHRoaXMuX2xvYWRlZENvZGVNaXJyb3IuUHJlYy5mYWxsYmFjayhcbiAgICAgICAgdGhpcy5fbG9hZGVkQ29kZU1pcnJvci5oaWdobGlnaHRTdHlsZVxuICAgICAgKSxcbiAgICAgIHRoaXMuX2xvYWRlZENvZGVNaXJyb3IucmVhZG9ubHlDb21wYXJ0bWVudC5vZihcbiAgICAgICAgdGhpcy5fbG9hZGVkQ29kZU1pcnJvci5FZGl0b3JWaWV3LmVkaXRhYmxlLm9mKCF0aGlzLnJlYWRPbmx5KVxuICAgICAgKSxcbiAgICAgIHRoaXMuX2xvYWRlZENvZGVNaXJyb3IuRWRpdG9yVmlldy51cGRhdGVMaXN0ZW5lci5vZigodXBkYXRlKSA9PlxuICAgICAgICB0aGlzLl9vblVwZGF0ZSh1cGRhdGUpXG4gICAgICApLFxuICAgIF07XG5cbiAgICBpZiAoIXRoaXMucmVhZE9ubHkgJiYgdGhpcy5hdXRvY29tcGxldGVFbnRpdGllcyAmJiB0aGlzLmhhc3MpIHtcbiAgICAgIGV4dGVuc2lvbnMucHVzaChcbiAgICAgICAgdGhpcy5fbG9hZGVkQ29kZU1pcnJvci5hdXRvY29tcGxldGlvbih7XG4gICAgICAgICAgb3ZlcnJpZGU6IFt0aGlzLl9lbnRpdHlDb21wbGV0aW9ucy5iaW5kKHRoaXMpXSxcbiAgICAgICAgICBtYXhSZW5kZXJlZE9wdGlvbnM6IDEwLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvZGVtaXJyb3IgPSBuZXcgdGhpcy5fbG9hZGVkQ29kZU1pcnJvci5FZGl0b3JWaWV3KHtcbiAgICAgIHN0YXRlOiB0aGlzLl9sb2FkZWRDb2RlTWlycm9yLkVkaXRvclN0YXRlLmNyZWF0ZSh7XG4gICAgICAgIGRvYzogdGhpcy5fdmFsdWUsXG4gICAgICAgIGV4dGVuc2lvbnMsXG4gICAgICB9KSxcbiAgICAgIHJvb3Q6IHRoaXMuc2hhZG93Um9vdCEsXG4gICAgICBwYXJlbnQ6IHRoaXMuc2hhZG93Um9vdCEsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRTdGF0ZXMgPSBtZW1vaXplT25lKChzdGF0ZXM6IEhhc3NFbnRpdGllcyk6IENvbXBsZXRpb25bXSA9PiB7XG4gICAgaWYgKCFzdGF0ZXMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5rZXlzKHN0YXRlcykubWFwKChrZXkpID0+ICh7XG4gICAgICB0eXBlOiBcInZhcmlhYmxlXCIsXG4gICAgICBsYWJlbDoga2V5LFxuICAgICAgZGV0YWlsOiBzdGF0ZXNba2V5XS5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUsXG4gICAgICBpbmZvOiBgU3RhdGU6ICR7c3RhdGVzW2tleV0uc3RhdGV9YCxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfSk7XG5cbiAgcHJpdmF0ZSBfZW50aXR5Q29tcGxldGlvbnMoXG4gICAgY29udGV4dDogQ29tcGxldGlvbkNvbnRleHRcbiAgKTogQ29tcGxldGlvblJlc3VsdCB8IG51bGwgfCBQcm9taXNlPENvbXBsZXRpb25SZXN1bHQgfCBudWxsPiB7XG4gICAgY29uc3QgZW50aXR5V29yZCA9IGNvbnRleHQubWF0Y2hCZWZvcmUoL1thLXpfXXszLH1cXC4vKTtcblxuICAgIGlmIChcbiAgICAgICFlbnRpdHlXb3JkIHx8XG4gICAgICAoZW50aXR5V29yZC5mcm9tID09PSBlbnRpdHlXb3JkLnRvICYmICFjb250ZXh0LmV4cGxpY2l0KVxuICAgICkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVzID0gdGhpcy5fZ2V0U3RhdGVzKHRoaXMuaGFzcyEuc3RhdGVzKTtcblxuICAgIGlmICghc3RhdGVzIHx8ICFzdGF0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZnJvbTogTnVtYmVyKGVudGl0eVdvcmQuZnJvbSksXG4gICAgICBvcHRpb25zOiBzdGF0ZXMsXG4gICAgICBzcGFuOiAvXlxcdyouXFx3KiQvLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9ibG9ja0tleWJvYXJkU2hvcnRjdXRzKCkge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2KSA9PiBldi5zdG9wUHJvcGFnYXRpb24oKSk7XG4gIH1cblxuICBwcml2YXRlIF9vblVwZGF0ZSh1cGRhdGU6IFZpZXdVcGRhdGUpOiB2b2lkIHtcbiAgICBpZiAoIXVwZGF0ZS5kb2NDaGFuZ2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBpZiAobmV3VmFsdWUgPT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7IHZhbHVlOiB0aGlzLl92YWx1ZSB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEdyb3VwIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3QoLmVycm9yLXN0YXRlKSAuY20tZ3V0dGVycyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZXJyb3Itc3RhdGUtY29sb3IsIHJlZCk7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtY29kZS1lZGl0b3JcIjogSGFDb2RlRWRpdG9yO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ha-code-editor.ts\n");

/***/ }),

/***/ "./src/resources/codemirror.ondemand.ts":
/*!**********************************************!*\
  !*** ./src/resources/codemirror.ondemand.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadCodeMirror\": () => (/* binding */ loadCodeMirror)\n/* harmony export */ });\nlet loaded;\nconst loadCodeMirror = async () => {\n  if (!loaded) {\n    loaded = Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_codemirror_history_dist_index_js\"), __webpack_require__.e(\"vendors-node_modules_codemirror_autocomplete_dist_index_js-node_modules_codemirror_commands_d-7f1393\"), __webpack_require__.e(\"src_resources_codemirror_ts\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./codemirror */ \"./src/resources/codemirror.ts\"));\n  }\n\n  return loaded;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVzb3VyY2VzL2NvZGVtaXJyb3Iub25kZW1hbmQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL3Jlc291cmNlcy9jb2RlbWlycm9yLm9uZGVtYW5kLnRzPzgzNGMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGxvYWRlZDogUHJvbWlzZTx0eXBlb2YgaW1wb3J0KFwiLi9jb2RlbWlycm9yXCIpPjtcblxuZXhwb3J0IGNvbnN0IGxvYWRDb2RlTWlycm9yID0gYXN5bmMgKCk6IFByb21pc2U8XG4gIHR5cGVvZiBpbXBvcnQoXCIuL2NvZGVtaXJyb3JcIilcbj4gPT4ge1xuICBpZiAoIWxvYWRlZCkge1xuICAgIGxvYWRlZCA9IGltcG9ydChcIi4vY29kZW1pcnJvclwiKTtcbiAgfVxuICByZXR1cm4gbG9hZGVkO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/resources/codemirror.ondemand.ts\n");

/***/ })

}]);