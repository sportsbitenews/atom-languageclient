Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _atom = require('atom');

var _languageclient = require('./languageclient');

var ls = _interopRequireWildcard(_languageclient);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Convert = class Convert {
  static pathToUri(pathName) {
    pathName = pathName.replace(/\\/g, '/');
    if (pathName[0] !== '/') pathName = `/${pathName}`;
    return encodeURI(`file://${pathName}`).replace(/[?#]/g, encodeURIComponent);
  }

  static uriToPath(uri) {
    uri = decodeURIComponent(uri);
    if (uri.startsWith('file://')) uri = uri.substr(7);
    if (process.platform === 'win32') {
      if (uri[0] === '/') {
        uri = uri.substr(1);
      }
      return uri.replace(/\//g, '\\');
    }
    return uri;
  }

  static pointToPosition(point) {
    return { line: point.row, character: point.column };
  }

  static positionToPoint(position) {
    return new _atom.Point(position.line, position.character);
  }

  static lsRangeToAtomRange(range) {
    return new _atom.Range(Convert.positionToPoint(range.start), Convert.positionToPoint(range.end));
  }

  static atomRangeToLSRange(range) {
    return { start: Convert.pointToPosition(range.start), end: Convert.pointToPosition(range.end) };
  }

  static editorToTextDocumentIdentifier(editor) {
    return { uri: Convert.pathToUri(editor.getURI() || '') };
  }
};
exports.default = Convert;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9jb252ZXJ0LmpzIl0sIm5hbWVzIjpbImxzIiwiQ29udmVydCIsInBhdGhUb1VyaSIsInBhdGhOYW1lIiwicmVwbGFjZSIsImVuY29kZVVSSSIsImVuY29kZVVSSUNvbXBvbmVudCIsInVyaVRvUGF0aCIsInVyaSIsImRlY29kZVVSSUNvbXBvbmVudCIsInN0YXJ0c1dpdGgiLCJzdWJzdHIiLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJwb2ludFRvUG9zaXRpb24iLCJwb2ludCIsImxpbmUiLCJyb3ciLCJjaGFyYWN0ZXIiLCJjb2x1bW4iLCJwb3NpdGlvblRvUG9pbnQiLCJwb3NpdGlvbiIsImxzUmFuZ2VUb0F0b21SYW5nZSIsInJhbmdlIiwic3RhcnQiLCJlbmQiLCJhdG9tUmFuZ2VUb0xTUmFuZ2UiLCJlZGl0b3JUb1RleHREb2N1bWVudElkZW50aWZpZXIiLCJlZGl0b3IiLCJnZXRVUkkiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsRTs7Ozs7O0lBRVNDLE8sR0FBTixNQUFNQSxPQUFOLENBQWM7QUFDM0IsU0FBT0MsU0FBUCxDQUFpQkMsUUFBakIsRUFBMkM7QUFDMUNBLGVBQVdBLFNBQVNDLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsR0FBeEIsQ0FBWDtBQUNBLFFBQUlELFNBQVMsQ0FBVCxNQUFnQixHQUFwQixFQUF5QkEsV0FBWSxJQUFHQSxRQUFTLEVBQXhCO0FBQ3pCLFdBQU9FLFVBQVcsVUFBU0YsUUFBUyxFQUE3QixFQUFnQ0MsT0FBaEMsQ0FBd0MsT0FBeEMsRUFBaURFLGtCQUFqRCxDQUFQO0FBQ0E7O0FBRUQsU0FBT0MsU0FBUCxDQUFpQkMsR0FBakIsRUFBc0M7QUFDcENBLFVBQU1DLG1CQUFtQkQsR0FBbkIsQ0FBTjtBQUNBLFFBQUlBLElBQUlFLFVBQUosQ0FBZSxTQUFmLENBQUosRUFBK0JGLE1BQU1BLElBQUlHLE1BQUosQ0FBVyxDQUFYLENBQU47QUFDL0IsUUFBSUMsUUFBUUMsUUFBUixLQUFxQixPQUF6QixFQUFrQztBQUNoQyxVQUFJTCxJQUFJLENBQUosTUFBVyxHQUFmLEVBQW9CO0FBQ2xCQSxjQUFNQSxJQUFJRyxNQUFKLENBQVcsQ0FBWCxDQUFOO0FBQ0Q7QUFDRCxhQUFPSCxJQUFJSixPQUFKLENBQVksS0FBWixFQUFtQixJQUFuQixDQUFQO0FBQ0Q7QUFDRCxXQUFPSSxHQUFQO0FBQ0Q7O0FBRUQsU0FBT00sZUFBUCxDQUF1QkMsS0FBdkIsRUFBdUQ7QUFDckQsV0FBTyxFQUFFQyxNQUFNRCxNQUFNRSxHQUFkLEVBQW1CQyxXQUFXSCxNQUFNSSxNQUFwQyxFQUFQO0FBQ0Q7O0FBRUQsU0FBT0MsZUFBUCxDQUF1QkMsUUFBdkIsRUFBMEQ7QUFDeEQsV0FBTyxnQkFBVUEsU0FBU0wsSUFBbkIsRUFBeUJLLFNBQVNILFNBQWxDLENBQVA7QUFDRDs7QUFFRCxTQUFPSSxrQkFBUCxDQUEwQkMsS0FBMUIsRUFBdUQ7QUFDckQsV0FBTyxnQkFBVXRCLFFBQVFtQixlQUFSLENBQXdCRyxNQUFNQyxLQUE5QixDQUFWLEVBQWdEdkIsUUFBUW1CLGVBQVIsQ0FBd0JHLE1BQU1FLEdBQTlCLENBQWhELENBQVA7QUFDRDs7QUFFRCxTQUFPQyxrQkFBUCxDQUEwQkgsS0FBMUIsRUFBdUQ7QUFDckQsV0FBTyxFQUFFQyxPQUFPdkIsUUFBUWEsZUFBUixDQUF3QlMsTUFBTUMsS0FBOUIsQ0FBVCxFQUErQ0MsS0FBS3hCLFFBQVFhLGVBQVIsQ0FBd0JTLE1BQU1FLEdBQTlCLENBQXBELEVBQVA7QUFDRDs7QUFFRCxTQUFPRSw4QkFBUCxDQUFzQ0MsTUFBdEMsRUFBMEY7QUFDeEYsV0FBTyxFQUFFcEIsS0FBS1AsUUFBUUMsU0FBUixDQUFrQjBCLE9BQU9DLE1BQVAsTUFBbUIsRUFBckMsQ0FBUCxFQUFQO0FBQ0Q7QUFyQzBCLEM7a0JBQVI1QixPIiwiZmlsZSI6ImNvbnZlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xyXG5cclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7UmFuZ2UsIFBvaW50fSBmcm9tICdhdG9tJztcclxuaW1wb3J0ICogYXMgbHMgZnJvbSAnLi9sYW5ndWFnZWNsaWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb252ZXJ0IHtcclxuICBzdGF0aWMgcGF0aFRvVXJpKHBhdGhOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdCAgcGF0aE5hbWUgPSBwYXRoTmFtZS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XHJcblx0ICBpZiAocGF0aE5hbWVbMF0gIT09ICcvJykgcGF0aE5hbWUgPSBgLyR7cGF0aE5hbWV9YDtcclxuXHQgIHJldHVybiBlbmNvZGVVUkkoYGZpbGU6Ly8ke3BhdGhOYW1lfWApLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB1cmlUb1BhdGgodXJpOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdXJpID0gZGVjb2RlVVJJQ29tcG9uZW50KHVyaSk7XHJcbiAgICBpZiAodXJpLnN0YXJ0c1dpdGgoJ2ZpbGU6Ly8nKSkgdXJpID0gdXJpLnN1YnN0cig3KTtcclxuICAgIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XHJcbiAgICAgIGlmICh1cmlbMF0gPT09ICcvJykge1xyXG4gICAgICAgIHVyaSA9IHVyaS5zdWJzdHIoMSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHVyaS5yZXBsYWNlKC9cXC8vZywgJ1xcXFwnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1cmk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcG9pbnRUb1Bvc2l0aW9uKHBvaW50OiBhdG9tJFBvaW50KTogbHMuUG9zaXRpb24ge1xyXG4gICAgcmV0dXJuIHsgbGluZTogcG9pbnQucm93LCBjaGFyYWN0ZXI6IHBvaW50LmNvbHVtbiB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBvc2l0aW9uVG9Qb2ludChwb3NpdGlvbjogbHMuUG9zaXRpb24pOiBhdG9tJFBvaW50IHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQocG9zaXRpb24ubGluZSwgcG9zaXRpb24uY2hhcmFjdGVyKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBsc1JhbmdlVG9BdG9tUmFuZ2UocmFuZ2U6IGxzLlJhbmdlKTogYXRvbSRSYW5nZSB7XHJcbiAgICByZXR1cm4gbmV3IFJhbmdlKENvbnZlcnQucG9zaXRpb25Ub1BvaW50KHJhbmdlLnN0YXJ0KSwgQ29udmVydC5wb3NpdGlvblRvUG9pbnQocmFuZ2UuZW5kKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXRvbVJhbmdlVG9MU1JhbmdlKHJhbmdlOiBhdG9tJFJhbmdlKTogbHMuUmFuZ2Uge1xyXG4gICAgcmV0dXJuIHsgc3RhcnQ6IENvbnZlcnQucG9pbnRUb1Bvc2l0aW9uKHJhbmdlLnN0YXJ0KSwgZW5kOiBDb252ZXJ0LnBvaW50VG9Qb3NpdGlvbihyYW5nZS5lbmQpIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZWRpdG9yVG9UZXh0RG9jdW1lbnRJZGVudGlmaWVyKGVkaXRvcjogYXRvbSRUZXh0RWRpdG9yKTogbHMuVGV4dERvY3VtZW50SWRlbnRpZmllciB7XHJcbiAgICByZXR1cm4geyB1cmk6IENvbnZlcnQucGF0aFRvVXJpKGVkaXRvci5nZXRVUkkoKSB8fCAnJykgfTtcclxuICB9XHJcbn1cclxuIl19