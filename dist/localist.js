import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import localistApiConnector from './js/services/localistApiConnector';
import Heading from './js/components/organisms/heading';
import Paginate from './js/components/organisms/paginate';
import LocalistView from './js/components/organisms/localist_view';
import EventFilters from './js/components/organisms/event_filterby';
/**
 * Localist Component
 */

var Localist =
/*#__PURE__*/
function (_Component) {
  _inherits(Localist, _Component);

  function Localist(props) {
    var _this;

    _classCallCheck(this, Localist);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Localist).call(this, props));
    _this.state = {
      events: [],
      llPage: {
        current: props.page,
        size: 1,
        total: 1
      },
      depts: props.depts,
      entries: props.entries,
      format: props.format,
      group: props.group,
      keyword: props.keyword,
      daysahead: props.daysahead,
      // can page be replaced with llPage.current?
      page: props.page,
      loading: true
    };
    _this.handlePageClick = _this.handlePageClick.bind(_assertThisInitialized(_this));
    _this.handleEventFilter = _this.handleEventFilter.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Localist, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = this.props.page;
      this.getEvents(page);
    }
  }, {
    key: "getEvents",
    value: function () {
      var _getEvents = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(page) {
        var _this2 = this;

        var _this$state, depts, entries, group, keyword, daysahead, _this$props, apikey, calendarurl, res;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setTimeout(function () {
                  if (_this2.state.llPage.current !== page) {
                    _this2.setState({
                      loading: true
                    });
                  }
                }, 400);
                _this$state = this.state, depts = _this$state.depts, entries = _this$state.entries, group = _this$state.group, keyword = _this$state.keyword, daysahead = _this$state.daysahead;
                _this$props = this.props, apikey = _this$props.apikey, calendarurl = _this$props.calendarurl;
                _context.next = 5;
                return localistApiConnector(depts, entries, group, keyword, daysahead, apikey, calendarurl, page);

              case 5:
                res = _context.sent;
                // @todo change this to class list?
                res.data.events.forEach(function (event) {
                  event.event.display = 'fadeIn';
                });
                this.setState({
                  events: res.data.events,
                  llPage: res.data.page,
                  loading: false,
                  page: page
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getEvents(_x) {
        return _getEvents.apply(this, arguments);
      }

      return getEvents;
    }()
  }, {
    key: "handlePageClick",
    value: function handlePageClick(data) {
      var newPage = data.selected + 1;
      this.getEvents(newPage);
    }
  }, {
    key: "handleEventFilter",
    value: function handleEventFilter(events) {
      this.setState({
        events: events
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(Heading, {
        heading: this.props.heading,
        readmore: this.props.readmore,
        url: this.props.url
      }), React.createElement(EventFilters, {
        events: this.state.events,
        handleEventFilter: this.handleEventFilter,
        filterby: this.props.filterby
      }), React.createElement(LocalistView, Object.assign({
        events: this.state.events,
        page: this.state.page,
        loading: this.state.loading // format= {this.props.format}
        // filterby= {this.props.filterby}
        // wrapperclass= {this.props.wrapperclass}
        // listclass= {this.props.listclass}
        // itemclass= {this.props.itemclass}
        // hidedescription= {this.props.hidedescription}
        // truncatedescription= {this.props.truncatedescription}
        // hideimages= {this.props.hideimages}
        // hideaddcal= {this.props.hideaddcal}

      }, this.props)), React.createElement(Paginate, {
        hidepagination: this.props.hidepagination,
        total: this.state.llPage.total,
        handlePageClick: this.handlePageClick
      }));
    }
  }]);

  return Localist;
}(Component);

Localist.defaultProps = {
  depts: '0',
  group: '0',
  keyword: '',
  entries: '3',
  format: 'standard',
  apikey: '',
  daysahead: '365',
  heading: '',
  filterby: 'group',
  hidedescription: 'false',
  hideimages: 'false',
  hidepagination: 'true',
  hideaddcal: 'false',
  wrapperclass: '',
  listclass: '',
  itemclass: '',
  page: 1,
  readmore: '',
  url: ''
};
export default Localist;