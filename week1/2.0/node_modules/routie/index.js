"use strict";

var path = require('path');

var methods = ['get', 'post', 'put', 'patch', 'delete', 'del', 'all'];

var __slice = [].slice;

module.exports = function (map) {
    var args, root, _map, cb;
    args = __slice.call(arguments, 1);

    if (typeof args[args.length - 1] === "function") cb = args.pop();

    root = path.join.apply(path, args);
    _map = {};
    methods.forEach(function (m) {
        _map[m] = function (subpath) {
            var args = __slice.call(arguments);
            args.length < 2 ? args.unshift(root) : args[0] = root + args[0];
            return map[m].apply(map, args);
        }
    });
    if (cb) cb(_map);
    return _map;
};