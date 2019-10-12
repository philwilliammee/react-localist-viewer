import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Standard from './js/components/standard';
import Compact from './js/components/compact';
import ModernStandard from './js/components/modern_standard';
import ModernCompact from './js/components/modern_compact';
import Classic from './js/components/classic';
import InlineCompact from './js/components/inline_compact';
import localistApiConnector from './js/services/localistApiConnector';
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
      llPage: {},
      depts: props.depts,
      entries: props.entries,
      format: props.format,
      group: props.group,
      keyword: props.keyword,
      daysahead: props.daysahead,
      page: props.page,
      loading: true
    };
    _this.formatOptions = ['standard', 'compact', 'modern_compact', 'modern_standard', 'inline_compact', 'classic'];
    _this.curPage = 1;
    _this.handlePageClick = _this.handlePageClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Localist, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = this.props.page;
      this.getEvents(page);
    }
  }, {
    key: "getComponentFromFormat",
    value: function getComponentFromFormat() {
      var component;
      var _this$state = this.state,
          events = _this$state.events,
          page = _this$state.page,
          loading = _this$state.loading;
      var _this$props = this.props,
          format = _this$props.format,
          heading = _this$props.heading,
          filterby = _this$props.filterby,
          wrapperclass = _this$props.wrapperclass,
          listclass = _this$props.listclass,
          itemclass = _this$props.itemclass,
          hidedescription = _this$props.hidedescription,
          truncatedescription = _this$props.truncatedescription,
          hideimages = _this$props.hideimages,
          hideaddcal = _this$props.hideaddcal;

      if (loading) {
        return React.createElement("div", {
          className: "loader p-4"
        }, React.createElement("span", {
          className: "fa fa-spin fa-cog"
        }));
      }

      switch (format) {
        case 'standard':
          component = React.createElement(Standard, {
            key: page,
            heading: heading,
            events: events,
            filterby: filterby,
            wrapperclass: wrapperclass,
            listclass: listclass,
            itemclass: itemclass,
            hidedescription: hidedescription,
            truncatedescription: truncatedescription,
            hideimages: hideimages,
            hideaddcal: hideaddcal
          });
          break;

        case 'compact':
          component = React.createElement(Compact, {
            key: page,
            heading: heading,
            events: events,
            filterby: filterby,
            wrapperclass: wrapperclass,
            listclass: listclass,
            itemclass: itemclass,
            hidedescription: hidedescription,
            truncatedescription: truncatedescription,
            hideimages: hideimages,
            hideaddcal: hideaddcal
          });
          break;

        case 'modern_standard':
          component = React.createElement(ModernStandard, {
            key: page,
            heading: heading,
            events: events,
            filterby: filterby,
            wrapperclass: wrapperclass,
            listclass: listclass,
            itemclass: itemclass,
            hidedescription: hidedescription,
            truncatedescription: truncatedescription,
            hideimages: hideimages,
            hideaddcal: hideaddcal
          });
          break;

        case 'modern_compact':
          component = React.createElement(ModernCompact, {
            key: page,
            heading: heading,
            events: events,
            filterby: filterby,
            wrapperclass: wrapperclass,
            listclass: listclass,
            itemclass: itemclass,
            hidedescription: hidedescription,
            truncatedescription: truncatedescription,
            hideimages: hideimages,
            hideaddcal: hideaddcal
          });
          break;

        case 'inline_compact':
          component = React.createElement(InlineCompact, {
            key: page,
            heading: heading,
            events: events,
            filterby: filterby,
            wrapperclass: wrapperclass,
            listclass: listclass,
            itemclass: itemclass,
            hidedescription: hidedescription,
            truncatedescription: truncatedescription,
            hideimages: hideimages,
            hideaddcal: hideaddcal
          });
          break;

        case 'classic':
          component = React.createElement(Classic, {
            key: page,
            heading: heading,
            events: events,
            filterby: filterby,
            wrapperclass: wrapperclass,
            listclass: listclass,
            itemclass: itemclass,
            hidedescription: hidedescription,
            truncatedescription: truncatedescription,
            hideimages: hideimages,
            hideaddcal: hideaddcal
          });
          break;

        default:
          break;
      }

      return component;
    }
  }, {
    key: "getEvents",
    value: function getEvents(page) {
      var _this2 = this;

      setTimeout(function () {
        if (_this2.curPage !== page) {
          _this2.setState({
            loading: true
          });
        }
      }, 400);
      var _this$state2 = this.state,
          depts = _this$state2.depts,
          entries = _this$state2.entries,
          group = _this$state2.group,
          keyword = _this$state2.keyword,
          daysahead = _this$state2.daysahead;
      var _this$props2 = this.props,
          apikey = _this$props2.apikey,
          calendarurl = _this$props2.calendarurl;
      localistApiConnector(depts, entries, group, keyword, daysahead, apikey, calendarurl, page).then(function (response) {
        if (typeof response.data.events !== 'undefined') {
          _this2.setState({
            events: response.data.events,
            llPage: response.data.page,
            loading: false,
            page: page
          });

          _this2.curPage = response.data.page.current;
        } else {
          console.warn('localist returned invalid data');
        }
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, {
    key: "handlePageClick",
    value: function handlePageClick(data) {
      var newPage = data.selected + 1;
      this.getEvents(newPage);
    }
  }, {
    key: "renderPagination",
    value: function renderPagination() {
      var hidepagination = this.props.hidepagination;
      var llPage = this.state.llPage;
      var total = llPage.total;

      if (!total || hidepagination === 'true') {
        return '';
      }

      return React.createElement("nav", {
        className: "pager"
      }, React.createElement(ReactPaginate, {
        previousLabel: "previous",
        nextLabel: "next",
        breakLabel: "...",
        breakClassName: "break-me",
        pageCount: total,
        marginPagesDisplayed: 1,
        pageRangeDisplayed: 3,
        onPageChange: this.handlePageClick,
        containerClassName: "pager_items",
        subContainerClassName: "pager__item",
        activeClassName: "is-active"
      }));
    }
  }, {
    key: "renderHeading",
    value: function renderHeading() {
      var heading = this.props.heading;
      var renderHeading = heading ? React.createElement("h2", null, heading) : '';
      return renderHeading;
    }
  }, {
    key: "renderReadMore",
    value: function renderReadMore() {
      var _this$props3 = this.props,
          readmore = _this$props3.readmore,
          url = _this$props3.url;

      if (!readmore || !url) {
        return '';
      }

      return React.createElement("a", {
        className: "cwd_events_readmore",
        href: url
      }, readmore);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.renderHeading(), this.renderReadMore(), this.getComponentFromFormat(), this.renderPagination());
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