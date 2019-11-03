import React, { Component } from 'react';
import PropTypes from 'prop-types';
import localistApiConnector from './js/services/localistApiConnector';
import Heading from './js/components/organisms/heading';
import Paginate from './js/components/organisms/paginate';
import LocalistView from './js/components/organisms/localist_view';
import EventFilters from './js/components/organisms/event_filterby';

/**
 * Localist Component
 */
class Localist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            llPage: {current: props.page, size: 1, total: 1},
            depts: props.depts,
            entries: props.entries,
            format: props.format,
            group: props.group,
            keyword: props.keyword,
            daysahead: props.daysahead,
            // can page be replaced with llPage.current?
            page: props.page,
            loading: true,
        };
        this.handlePageClick = this.handlePageClick.bind(this)
        this.handleEventFilter = this.handleEventFilter.bind(this)
    }

    componentDidMount(){
        const {page} = this.props
        this.getEvents(page);
    }

    async getEvents(page){
        setTimeout(()=>{
            if (this.state.llPage.current !== page){ this.setState({loading: true}) }
        }, 400)
        const {
            depts,
            entries,
            group,
            keyword,
            daysahead,
        } = this.state;
        const { apikey, calendarurl }= this.props;
        let res = await localistApiConnector(
            depts,
            entries,
            group,
            keyword,
            daysahead,
            apikey,
            calendarurl,
            page,
        );
        // @todo change this to class list?
        res.data.events.forEach(event => {
            event.event.display = 'fadeIn';
        })
        this.setState({
            events: res.data.events,
            llPage: res.data.page,
            loading: false,
            page,
        });
    }

    handlePageClick(data){
        const newPage = data.selected + 1;
        this.getEvents(newPage);
    }

    handleEventFilter(events){
        this.setState({ events })
    }

    render() {
        return (
            <div>
                <Heading
                    heading={this.props.heading}
                    readmore={this.props.readmore}
                    url={this.props.url}
                />
                <EventFilters
                    events={this.state.events}
                    handleEventFilter={this.handleEventFilter}
                    filterby={this.props.filterby}
                />
                <LocalistView
                    events= {this.state.events}
                    page=  {this.state.page}
                    loading= {this.state.loading}
                    // format= {this.props.format}
                    // filterby= {this.props.filterby}
                    // wrapperclass= {this.props.wrapperclass}
                    // listclass= {this.props.listclass}
                    // itemclass= {this.props.itemclass}
                    // hidedescription= {this.props.hidedescription}
                    // truncatedescription= {this.props.truncatedescription}
                    // hideimages= {this.props.hideimages}
                    // hideaddcal= {this.props.hideaddcal}
                    { ...this.props }
                />
                <Paginate
                    hidepagination = {this.props.hidepagination}
                    total = {this.state.llPage.total}
                    handlePageClick = {this.handlePageClick}
                />
            </div>
        );
    }
}

Localist.propTypes = {
    calendarurl: PropTypes.string.isRequired,
    entries: PropTypes.string,
    daysahead: PropTypes.string,
    depts: PropTypes.string,
    group: PropTypes.string,
    keyword: PropTypes.string,
    format: PropTypes.oneOf([
        'standard',
        'compact',
        'modern_compact',
        'modern_standard',
        'inline_compact',
        'classic'
    ]),
    apikey: PropTypes.string,
    truncatedescription: PropTypes.string.isRequired,
    heading: PropTypes.string,
    hidedescription: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    hideimages: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    hideaddcal: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    hidepagination: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    filterby: PropTypes.oneOf([
        'group',
        'dept',
        'type',
        'none',
    ]),
    wrapperclass: PropTypes.string,
    listclass: PropTypes.string,
    itemclass: PropTypes.string,
    page: PropTypes.number,
    readmore: PropTypes.string,
    url: PropTypes.string,
};


Localist.defaultProps = {
    depts: '0',
    group: '0',
    keyword: '',
    entries: '3',
    format: 'standard',
    apikey: '',
    daysahead : '365',
    heading: '',
    filterby: 'group',
    hidedescription: 'false',
    hideimages: 'false',
    hidepagination: 'true',
    hideaddcal: 'false',
    wrapperclass: '',
    listclass: '',
    itemclass: '',
    page : 1,
    readmore: '',
    url: '',
};

export default Localist;
