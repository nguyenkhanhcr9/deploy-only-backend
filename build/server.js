"use strict";

var _express = _interopRequireDefault(require("express"));
var _viewEngine = _interopRequireDefault(require("./config/viewEngine"));
var _web = _interopRequireDefault(require("./routes/web"));
var _logger = _interopRequireDefault(require("../logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require("dotenv").config();
_logger["default"].log('info', 'Hello created log files!', {
  'foo': 'bar'
});
_logger["default"].info('Hello created log files!', {
  'foo': 'bar'
});
var app = (0, _express["default"])();

//config view Engine
(0, _viewEngine["default"])(app);

//init all web routes
(0, _web["default"])(app);
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("HoiDanIT app is running at the port ".concat(port));
});