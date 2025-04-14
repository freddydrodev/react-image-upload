"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.tsx
var index_exports = {};
__export(index_exports, {
    ReactImagePicker: function() {
        return ReactImagePicker;
    },
    default: function() {
        return index_default;
    },
    uploadImage: function() {
        return uploadImage;
    }
});
module.exports = __toCommonJS(index_exports);
// src/ReactImagePicker.tsx
var React = __toESM(require("react"));
var import_dropzone = __toESM(require("dropzone"));
var import_react_dropzone = require("react-dropzone");
// src/styles.ts
var import_react = require("@stitches/react");
var Container = (0, import_react.styled)("div", {
    // padding: "20px",
    // boxSizing: "border-box",
    // width: 400,
    display: "flex",
    flexDirection: "column",
    border: "1px dashed #e0e0e0"
});
var DropzoneContainer = (0, import_react.styled)("div", {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    border: 0,
    padding: 0,
    variants: {
        isDisabled: {
            true: {
                cursor: "auto"
            },
            false: {
                cursor: "pointer"
            }
        }
    }
});
var Title = (0, import_react.styled)("h2", {
    fontWeight: 700,
    fontSize: "2rem",
    lineHeight: "1em",
    textAlign: "center",
    margin: 0,
    marginTop: "15px"
});
var Description = (0, import_react.styled)("p", {
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: "1.3em",
    textAlign: "center",
    margin: 0
});
var Message = (0, import_react.styled)("p", {
    fontSize: "0.75rem",
    lineHeight: "1.66",
    textAlign: "center",
    margin: 0,
    color: "rgba(0, 0, 0, 0.5)",
    variants: {
        hasError: {
            true: {
                color: "#d32f2f",
                fontSize: "0.8rem"
            },
            false: {
                color: "inherit"
            }
        }
    }
});
var ImageGrid = (0, import_react.styled)("div", {
    display: "grid",
    maxHeight: 380,
    gridTemplateColumns: "repeat(var(--grid-columns, 3), 1fr)",
    gap: "var(--image-gap, 10px)",
    variants: {
        gridColumns: {
            value: {
                "--grid-columns": "var(--grid-columns-value, 3)",
                "--image-gap": "var(--image-gap-value, 10px)"
            }
        }
    },
    defaultVariants: {
        gridColumns: "value"
    }
});
var ImageContainer = (0, import_react.styled)("div", {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "var(--image-border-radius-value, 15px)",
    overflow: "hidden",
    "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "var(--image-border-radius-value, 15px)"
    },
    variants: {
        singleImage: {
            true: {
                maxWidth: "400px",
                margin: "0 auto"
            }
        }
    }
});
var DeleteButton = (0, import_react.styled)("button", {
    width: 32,
    height: 32,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    boxShadow: "none",
    variants: {
        color: {
            default: {
                backgroundColor: "#f44336",
                color: "#ffffff"
            }
        }
    }
});
var Overlay = (0, import_react.styled)("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    zIndex: 10,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255,255,255,0)",
    backdropFilter: "blur(0)",
    transition: "all linear 0.25s",
    opacity: 0,
    "&:hover": {
        backgroundColor: "rgba(255,255,255,0.25)",
        backdropFilter: "blur(5px)",
        opacity: 1
    }
});
// src/ReactImagePicker.tsx
import_dropzone.default.autoDiscover = false;
var getRuleValueAndMessage = function(rule) {
    if (!rule) return {
        value: void 0
    };
    if ((typeof rule === "undefined" ? "undefined" : _type_of(rule)) === "object" && "value" in rule) {
        return {
            value: rule.value,
            message: rule.message
        };
    }
    return {
        value: rule
    };
};
var DEFAULT_RULES = {
    maxSize: {
        value: 5 * 1024 * 1024,
        message: "File size must be less than 5MB"
    },
    maxFiles: {
        value: 1,
        message: "Maximum 1 file allowed"
    },
    accepted: {
        value: "image/*",
        message: "Only image files are accepted"
    }
};
var validateFile = function(file, rules) {
    var _getRuleValueAndMessage = getRuleValueAndMessage(rules.maxSize), maxSize = _getRuleValueAndMessage.value, maxSizeMessage = _getRuleValueAndMessage.message;
    var _getRuleValueAndMessage1 = getRuleValueAndMessage(rules.accepted), accepted = _getRuleValueAndMessage1.value, acceptedMessage = _getRuleValueAndMessage1.message;
    if (maxSize && file.size > maxSize) {
        return maxSizeMessage !== null && maxSizeMessage !== void 0 ? maxSizeMessage : "File size must be less than ".concat((maxSize / (1024 * 1024)).toFixed(1), "MB");
    }
    if (accepted) {
        var _file_name_split_pop;
        var acceptedTypes = Array.isArray(accepted) ? accepted.map(function(type) {
            return type.toLowerCase();
        }) : [
            accepted.toLowerCase()
        ];
        var fileExtension = ".".concat((_file_name_split_pop = file.name.split(".").pop()) === null || _file_name_split_pop === void 0 ? void 0 : _file_name_split_pop.toLowerCase());
        var fileType = file.type.toLowerCase();
        var isAccepted = acceptedTypes.some(function(type) {
            if (type === "image/*") {
                return fileType.startsWith("image/");
            }
            return type === fileExtension || type === fileType;
        });
        if (!isAccepted) {
            return acceptedMessage !== null && acceptedMessage !== void 0 ? acceptedMessage : "File type not accepted. Accepted types: ".concat(acceptedTypes.join(", "));
        }
    }
    return null;
};
var ReactImagePicker = function(_param) {
    var _param_images = _param.images, images = _param_images === void 0 ? [] : _param_images, onImagesChanged = _param.onImagesChanged, _param_rules = _param.rules, rules = _param_rules === void 0 ? DEFAULT_RULES : _param_rules, _param_label = _param.label, label = _param_label === void 0 ? "Images" : _param_label, description = _param.description, validate = _param.validate, deleteIcon = _param.deleteIcon, _param_deleteBtnColor = _param.deleteBtnColor, deleteBtnColor = _param_deleteBtnColor === void 0 ? "#f44336" : _param_deleteBtnColor, _param_deleteIconColor = _param.deleteIconColor, deleteIconColor = _param_deleteIconColor === void 0 ? "#ffffff" : _param_deleteIconColor, renderImage = _param.renderImage, _param_hideTitle = _param.hideTitle, hideTitle = _param_hideTitle === void 0 ? false : _param_hideTitle, _param_sectionGap = _param.sectionGap, sectionGap = _param_sectionGap === void 0 ? "15px" : _param_sectionGap, _param_imageGap = _param.imageGap, imageGap = _param_imageGap === void 0 ? "10px" : _param_imageGap, _param_imageGridCount = _param.imageGridCount, imageGridCount = _param_imageGridCount === void 0 ? 3 : _param_imageGridCount, _param_imageBorderRadius = _param.imageBorderRadius, imageBorderRadius = _param_imageBorderRadius === void 0 ? "15px" : _param_imageBorderRadius, style = _param.style, className = _param.className, message = _param.message, _param_hasError = _param.hasError, hasError = _param_hasError === void 0 ? false : _param_hasError, props = _object_without_properties(_param, [
        "images",
        "onImagesChanged",
        "rules",
        "label",
        "description",
        "validate",
        "deleteIcon",
        "deleteBtnColor",
        "deleteIconColor",
        "renderImage",
        "hideTitle",
        "sectionGap",
        "imageGap",
        "imageGridCount",
        "imageBorderRadius",
        "style",
        "className",
        "message",
        "hasError"
    ]);
    var _getRuleValueAndMessage = getRuleValueAndMessage(rules.maxFiles), maxFiles = _getRuleValueAndMessage.value, maxFilesMessage = _getRuleValueAndMessage.message;
    var _getRuleValueAndMessage1 = getRuleValueAndMessage(rules.maxSize), maxSize = _getRuleValueAndMessage1.value, maxSizeMessage = _getRuleValueAndMessage1.message;
    var _getRuleValueAndMessage2 = getRuleValueAndMessage(rules.accepted), accepted = _getRuleValueAndMessage2.value;
    var _React_useState = _sliced_to_array(React.useState(images), 2), files = _React_useState[0], setFiles = _React_useState[1];
    var _React_useState1 = _sliced_to_array(React.useState(null), 2), validationMessage = _React_useState1[0], setValidationMessage = _React_useState1[1];
    var _React_useState2 = _sliced_to_array(React.useState(false), 2), isValidating = _React_useState2[0], setIsValidating = _React_useState2[1];
    React.useEffect(function() {
        if (!validate) return;
        var validateImages = /*#__PURE__*/ function() {
            var _ref = _async_to_generator(function() {
                var result, error;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            setIsValidating(true);
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                3,
                                4,
                                5
                            ]);
                            return [
                                4,
                                validate(files)
                            ];
                        case 2:
                            result = _state.sent();
                            setValidationMessage(result);
                            return [
                                3,
                                5
                            ];
                        case 3:
                            error = _state.sent();
                            setValidationMessage(_instanceof(error, Error) ? error.message : "Validation failed");
                            return [
                                3,
                                5
                            ];
                        case 4:
                            setIsValidating(false);
                            return [
                                7
                            ];
                        case 5:
                            return [
                                2
                            ];
                    }
                });
            });
            return function validateImages() {
                return _ref.apply(this, arguments);
            };
        }();
        validateImages();
    }, [
        files,
        validate
    ]);
    var _ref = (0, import_react_dropzone.useDropzone)({
        accept: accepted ? typeof accepted === "string" ? _define_property({}, accepted, []) : accepted.reduce(function(acc, type) {
            return _object_spread_props(_object_spread({}, acc), _define_property({}, type, []));
        }, {}) : {
            "image/*": []
        },
        minSize: 0,
        maxSize: maxSize,
        maxFiles: maxFiles,
        multiple: maxFiles === 1 ? false : true,
        onDropRejected: function onDropRejected(fileRejections, event) {
            var errors = fileRejections.map(function(rejection) {
                var file = rejection.file;
                var error = rejection.errors[0];
                if (error.code === "file-too-large") {
                    return maxSizeMessage !== null && maxSizeMessage !== void 0 ? maxSizeMessage : "".concat(file.name, " is too large. Maximum size is ").concat((maxSize / (1024 * 1024)).toFixed(1), "MB");
                }
                if (error.code === "file-invalid-type") {
                    return "".concat(file.name, " has an invalid type");
                }
                if (error.code === "too-many-files") {
                    return maxFilesMessage !== null && maxFilesMessage !== void 0 ? maxFilesMessage : "Maximum ".concat(maxFiles, " file").concat(maxFiles === 1 ? "" : "s", " allowed");
                }
                return error.message;
            });
            console.log("ERRORS REJECTED =>", errors);
            var uniqueErrors = errors.filter(function(error, index, self) {
                return self.indexOf(error) === index;
            });
            setValidationMessage(uniqueErrors.join("\n"));
        },
        onDrop: function(acceptedFiles) {
            setValidationMessage(null);
            if (maxFiles && files.length + acceptedFiles.length > maxFiles) {
                setValidationMessage(maxFilesMessage !== null && maxFilesMessage !== void 0 ? maxFilesMessage : "Maximum ".concat(maxFiles, " file").concat(maxFiles === 1 ? "" : "s", " allowed"));
                return;
            }
            var validationErrors = acceptedFiles.map(function(file) {
                return validateFile(file, rules);
            }).filter(function(error) {
                return error !== null;
            });
            console.log("ERRORS =>", validationErrors);
            if (validationErrors.length > 0) {
                setValidationMessage(validationErrors.join("\n"));
                return;
            }
            var newList = _to_consumable_array(files).concat(_to_consumable_array(acceptedFiles.map(function(file) {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                });
            }).filter(function(file) {
                return files.filter(function(_file) {
                    if (typeof _file === "string") return false;
                    return _file.name === file.name;
                }).length === 0;
            })));
            setFiles(newList);
            if (onImagesChanged) {
                onImagesChanged(newList);
            }
        }
    }), getRootProps = _ref.getRootProps, getInputProps = _ref.getInputProps;
    React.useEffect(function() {
        var processedFiles = images.map(function(file) {
            if (_instanceof(file, File)) {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                });
            }
            return file;
        });
        setFiles(processedFiles);
    }, [
        images
    ]);
    React.useEffect(function() {
        return function() {
            files.forEach(function(file) {
                return URL.revokeObjectURL(file.preview);
            });
        };
    }, [
        files
    ]);
    var reachedLimit = maxFiles ? files.length >= maxFiles : false;
    var size = 115;
    var _ref1;
    return /* @__PURE__ */ React.createElement(Container, {
        className: className,
        style: style
    }, /* @__PURE__ */ React.createElement(DropzoneContainer, _object_spread_props(_object_spread({}, !reachedLimit ? getRootProps({
        className: "dropzone"
    }) : {}), {
        isDisabled: reachedLimit
    }), /* @__PURE__ */ React.createElement("input", _object_spread({}, getInputProps())), !hideTitle && /* @__PURE__ */ React.createElement(Title, null, label), !reachedLimit && /* @__PURE__ */ React.createElement(Description, null, description !== null && description !== void 0 ? description : "Vous pouvez ajouter les images en cliquant ici."), files.length > 0 && /* @__PURE__ */ React.createElement(ImageGrid, {
        gridColumns: "value",
        style: {
            "--grid-columns-value": imageGridCount,
            "--image-gap-value": imageGap,
            "--image-border-radius-value": imageBorderRadius
        }
    }, files.map(function(file) {
        var fileIsString = typeof file === "string";
        var _file = fileIsString ? {
            name: file,
            preview: file
        } : file;
        var src = typeof _file === "string" ? _file : _file.preview;
        var imgProps = {
            src: src,
            width: size,
            height: size,
            style: _object_spread({
                objectFit: "cover"
            }, maxFiles === 1 ? {} : {
                width: "100%",
                height: "100%"
            }),
            alt: typeof _file === "string" ? _file : _file.name
        };
        return /* @__PURE__ */ React.createElement(ImageContainer, {
            key: src,
            singleImage: maxFiles === 1
        }, renderImage ? renderImage(imgProps) : /* @__PURE__ */ React.createElement("img", _object_spread({}, imgProps)), /* @__PURE__ */ React.createElement(Overlay, null, /* @__PURE__ */ React.createElement(DeleteButton, {
            color: "default",
            onClick: function(e) {
                var _files = _to_consumable_array(files.filter(function(f) {
                    var isString = typeof f === "string";
                    var name = isString ? f : f.name;
                    return name !== _file.name;
                }));
                setFiles(_files);
                onImagesChanged(_files);
                e.stopPropagation();
            }
        }, deleteIcon !== null && deleteIcon !== void 0 ? deleteIcon : /* @__PURE__ */ React.createElement(DeleteIcon, null))));
    })), /* @__PURE__ */ React.createElement(Message, {
        hasError: !!validationMessage || reachedLimit || hasError
    }, hasError ? message !== null && message !== void 0 ? message : "An error occurred" : isValidating ? "Validating..." : (_ref1 = validationMessage !== null && validationMessage !== void 0 ? validationMessage : message) !== null && _ref1 !== void 0 ? _ref1 : "Files up to ".concat((maxSize !== null && maxSize !== void 0 ? maxSize : 5 * 1024 * 1024) / (1024 * 1024), "MB, max ").concat(maxFiles, " files, accepted formats: ").concat(Array.isArray(accepted) ? accepted.join(", ") : accepted))));
};
var DeleteIcon = function() {
    return /* @__PURE__ */ React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        className: "bi bi-trash",
        viewBox: "0 0 16 16"
    }, /* @__PURE__ */ React.createElement("path", {
        d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
    }), /* @__PURE__ */ React.createElement("path", {
        d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
    }));
};
// src/uploadImage.ts
var import_storage = require("firebase/storage");
var uploadImage = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(param) {
        var file, storage, _param_isProd, isProd, _param_path, path, _path, fullPath, storageRef, uploadTask, url;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    file = param.file, storage = param.storage, _param_isProd = param.isProd, isProd = _param_isProd === void 0 ? false : _param_isProd, _param_path = param.path, path = _param_path === void 0 ? "Images" : _param_path;
                    if (typeof file === "string") return [
                        2,
                        file
                    ];
                    _path = path.endsWith("/") ? path.slice(0, -1) : path;
                    if (!_path.trim().length) _path = "Images";
                    fullPath = "".concat(isProd ? "" : "DEV/").concat(_path, "/").concat(file.name);
                    storageRef = (0, import_storage.ref)(storage, fullPath);
                    uploadTask = (0, import_storage.uploadBytesResumable)(storageRef, file);
                    return [
                        4,
                        uploadTask
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        (0, import_storage.getDownloadURL)(uploadTask.snapshot.ref)
                    ];
                case 2:
                    url = _state.sent();
                    return [
                        2,
                        url
                    ];
            }
        });
    });
    return function uploadImage(_) {
        return _ref.apply(this, arguments);
    };
}();
// src/index.tsx
var index_default = ReactImagePicker;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    ReactImagePicker: ReactImagePicker,
    uploadImage: uploadImage
});
//# sourceMappingURL=index.js.map