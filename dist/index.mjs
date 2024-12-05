// src/ReactImagePicker.tsx
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
import * as React from "react";
import Dropzone from "dropzone";
import { Fab, Stack, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
Dropzone.autoDiscover = false;
var ReactImagePicker = function(param) {
    var _param_initImages = param.initImages, initImages = _param_initImages === void 0 ? [] : _param_initImages, onImageChange = param.onImageChange, _param_maxFiles = param.maxFiles, maxFiles = _param_maxFiles === void 0 ? 1 : _param_maxFiles, _param_label = param.label, label = _param_label === void 0 ? "Images" : _param_label, description = param.description, deleteIcon = param.deleteIcon, _param_deleteBtnColor = param.deleteBtnColor, deleteBtnColor = _param_deleteBtnColor === void 0 ? "#f44336" : _param_deleteBtnColor, _param_deleteIconColor = param.deleteIconColor, deleteIconColor = _param_deleteIconColor === void 0 ? "#ffffff" : _param_deleteIconColor, localImage = param.localImage, _param_hideTitle = param.hideTitle, hideTitle = _param_hideTitle === void 0 ? false : _param_hideTitle, _param_sx = param.sx, sx = _param_sx === void 0 ? {} : _param_sx, _param_sectionGap = param.sectionGap, sectionGap = _param_sectionGap === void 0 ? "20px" : _param_sectionGap, _param_imageGap = param.imageGap, imageGap = _param_imageGap === void 0 ? "15px" : _param_imageGap;
    var _React_useState = _sliced_to_array(React.useState(initImages), 2), files = _React_useState[0], setFiles = _React_useState[1];
    var _useDropzone = useDropzone({
        accept: {
            "image/*": []
        },
        minSize: 1024,
        maxFiles: maxFiles,
        multiple: maxFiles === 1 ? false : true,
        onDropRejected: function onDropRejected(fileRejections, event) {
            console.log(fileRejections, event);
            var multipleText = fileRejections.length > 1 ? "Fichiers ont \xE9t\xE9 r\xE9fus\xE9s" : "Fichier a \xE9t\xE9 r\xE9fus\xE9";
            alert("".concat(fileRejections.length, " ").concat(multipleText, "."));
        },
        onDrop: function(acceptedFiles) {
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
            if (onImageChange) {
                onImageChange(newList);
            }
        }
    }), getRootProps = _useDropzone.getRootProps, getInputProps = _useDropzone.getInputProps;
    React.useEffect(function() {
        return function() {
            files.forEach(function(file) {
                return URL.revokeObjectURL(file.preview);
            });
        };
    }, [
        files
    ]);
    console.log(files);
    var reachedLimit = files.length >= maxFiles;
    var gridTemplateColumns = "1fr 1fr 1fr";
    var size = 115;
    if (maxFiles === 1) {
        gridTemplateColumns = "1fr";
        size = 200;
    }
    if (maxFiles === 2) {
        gridTemplateColumns = "1fr 1fr";
        size = 175;
    }
    return /* @__PURE__ */ React.createElement(Stack, {
        sx: _object_spread_props(_object_spread({
            padding: "20px",
            boxSizing: "border-box",
            aspectRatio: 1,
            width: 400
        }, sx), {
            "& .dropzone": {
                border: 0,
                p: 0
            },
            overflow: "visible"
        })
    }, /* @__PURE__ */ React.createElement(Stack, _object_spread_props(_object_spread({}, !reachedLimit ? getRootProps({
        className: "dropzone"
    }) : {}), {
        spacing: sectionGap,
        sx: {
            cursor: reachedLimit ? "auto" : "pointer"
        }
    }), /* @__PURE__ */ React.createElement("input", _object_spread({}, getInputProps())), !hideTitle && /* @__PURE__ */ React.createElement(Typography, {
        fontWeight: 700,
        fontSize: "2rem",
        lineHeight: "1em",
        textAlign: "center"
    }, label), /* @__PURE__ */ React.createElement(Typography, {
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: "1.3em",
        textAlign: "center"
    }, description !== null && description !== void 0 ? description : !reachedLimit ? "Vous pouvez ajouter les images en cliquant ici." : "Vous avez ajout\xE9 le maximum d'Images possible"), /* @__PURE__ */ React.createElement(Stack, {
        display: "grid",
        sx: {
            gridTemplateColumns: gridTemplateColumns,
            gap: imageGap,
            maxHeight: 380
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
        return /* @__PURE__ */ React.createElement(Stack, {
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            sx: {
                width: "100%",
                aspectRatio: maxFiles === 1 ? void 0 : 1,
                borderRadius: 5,
                overflow: "hidden",
                position: "relative",
                margin: maxFiles === 1 ? "auto" : 0,
                // border: "1px solid #ececf0",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            },
            key: src
        }, localImage ? localImage(imgProps) : /* @__PURE__ */ React.createElement("img", _object_spread({}, imgProps)), /* @__PURE__ */ React.createElement(Stack, {
            alignItems: "center",
            justifyContent: "center",
            sx: {
                width: "100%",
                height: "100%",
                borderRadius: 5,
                zIndex: 10,
                position: "absolute",
                top: 0,
                left: 0,
                bgcolor: "rgba(255,255,255,0)",
                backdropFilter: "blur(0)",
                transition: "all linear 0.25s",
                opacity: 0,
                "&:hover": {
                    bgcolor: "rgba(255,255,255,0.25)",
                    backdropFilter: "blur(5px)",
                    opacity: 1
                }
            }
        }, /* @__PURE__ */ React.createElement(Fab, {
            size: "small",
            color: "error",
            sx: {
                boxShadow: "none",
                bgcolor: deleteBtnColor,
                color: deleteIconColor
            },
            onClick: function(e) {
                var _files = _to_consumable_array(files.filter(function(f) {
                    var isString = typeof f === "string";
                    var name = isString ? f : f.name;
                    return name !== _file.name;
                }));
                setFiles(_files);
                onImageChange(_files);
                e.stopPropagation();
            }
        }, deleteIcon !== null && deleteIcon !== void 0 ? deleteIcon : /* @__PURE__ */ React.createElement(DeleteIcon, null))));
    })), /* @__PURE__ */ React.createElement(Typography, {
        variant: "caption",
        textAlign: "center"
    }, "Le nombre maximum d'image est ", maxFiles)));
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
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
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
                    storageRef = ref(storage, fullPath);
                    uploadTask = uploadBytesResumable(storageRef, file);
                    return [
                        4,
                        uploadTask
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        getDownloadURL(uploadTask.snapshot.ref)
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
var src_default = ReactImagePicker;
export { src_default as default, uploadImage };
//# sourceMappingURL=index.mjs.map