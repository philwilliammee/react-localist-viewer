import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import Standard from './js/components/standard';
import Compact from './js/components/compact';
import ModernStandard from './js/components/modern_standard';
import ModernCompact from './js/components/modern_compact';
import Classic from './js/components/classic';
import InlineCompact from './js/components/inline_compact';
import localistApiConnector from './js/services/localistApiConnector'


/**
 * Localist Component
 */
class Localist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            llPage: {},
            depts: props.depts,
            entries: props.entries,
            format: props.format,
            group: props.group,
            keyword: props.keyword,
            daysahead: props.daysahead,
            page: props.page,
            loading: true,
        };
        this.formatOptions = [
            'standard',
            'compact',
            'modern_compact',
            'modern_standard',
            'inline_compact',
            'classic'
        ];
        this.curPage = 1;
        this.handlePageClick = this.handlePageClick.bind(this)
    }

    componentDidMount(){
        const {page} = this.props
        this.getEvents(page);
    }

    getComponentFromFormat(){
        let component;
        const {events, page, loading} = this.state;
        const {
            format,
            heading,
            filterby,
            wrapperclass,
            listclass,
            itemclass,
            hidedescription,
            truncatedescription,
            hideimages,
            hideaddcal,
        } = this.props;
        if (loading){
            return (
                <div className="loader p-4">
                    <span className="fa fa-spin fa-cog"/>
                </div>
            )
        }
        switch (format) {
            case 'standard':
                component = <Standard
                    key = {page}
                    heading= {heading}
                    events= {events}
                    filterby= {filterby}
                    wrapperclass = {wrapperclass}
                    listclass = {listclass}
                    itemclass = {itemclass}
                    hidedescription = {hidedescription}
                    truncatedescription = {truncatedescription}
                    hideimages = {hideimages}
                    hideaddcal = {hideaddcal}
                />
                break;

            case 'compact':
                component = <Compact
                    key = {page}
                    heading= {heading}
                    events= {events}
                    filterby= {filterby}
                    wrapperclass = {wrapperclass}
                    listclass = {listclass}
                    itemclass = {itemclass}
                    hidedescription = {hidedescription}
                    truncatedescription = {truncatedescription}
                    hideimages = {hideimages}
                    hideaddcal = {hideaddcal}
                />
                break;

            case 'modern_standard':
                component = <ModernStandard
                    key = {page}
                    heading= {heading}
                    events= {events}
                    filterby= {filterby}
                    wrapperclass = {wrapperclass}
                    listclass = {listclass}
                    itemclass = {itemclass}
                    hidedescription = {hidedescription}
                    truncatedescription = {truncatedescription}
                    hideimages = {hideimages}
                    hideaddcal = {hideaddcal}
                />
                break;

            case 'modern_compact':
                component = <ModernCompact
                    key = {page}
                    heading= {heading}
                    events= {events}
                    filterby= {filterby}
                    wrapperclass = {wrapperclass}
                    listclass = {listclass}
                    itemclass = {itemclass}
                    hidedescription = {hidedescription}
                    truncatedescription = {truncatedescription}
                    hideimages = {hideimages}
                    hideaddcal = {hideaddcal}
                />
                break;

            case 'inline_compact':
                component = <InlineCompact
                    key = {page}
                    heading= {heading}
                    events= {events}
                    filterby= {filterby}
                    wrapperclass = {wrapperclass}
                    listclass = {listclass}
                    itemclass = {itemclass}
                    hidedescription = {hidedescription}
                    truncatedescription = {truncatedescription}
                    hideimages = {hideimages}
                    hideaddcal = {hideaddcal}
                />
                break;

            case 'classic':
                component = <Classic
                    key = {page}
                    heading= {heading}
                    events= {events}
                    filterby= {filterby}
                    wrapperclass = {wrapperclass}
                    listclass = {listclass}
                    itemclass = {itemclass}
                    hidedescription = {hidedescription}
                    truncatedescription = {truncatedescription}
                    hideimages = {hideimages}
                    hideaddcal = {hideaddcal}
                />
                break;

            default:
                break;
        }
        return component;

    }

    async getEvents(page){
        setTimeout(()=>{
            if (this.curPage !== page){ this.setState({loading: true}) }
        }, 400)

        const {
            depts,
            entries,
            group,
            keyword,
            daysahead,
        } = this.state;

        const {
            apikey,
            calendarurl,
        }= this.props;

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
        
        this.setState({
            events: res.data.events,
            llPage: res.data.page,
            loading: false,
            page,
        });
        
        this.curPage = res.data.page.current;
    }

    handlePageClick(data){
        const newPage = data.selected + 1;
        this.getEvents(newPage);
    }

    renderPagination(){
        const {hidepagination} = this.props
        const {llPage} = this.state
        const {total} = llPage
        if (!total || hidepagination === 'true'){
            return '';
        }

        return (
            <nav className="pager">
                <ReactPaginate
                    previousLabel="previous"
                    nextLabel="next"
                    breakLabel="..."
                    breakClassName="break-me"
                    pageCount={total}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={this.handlePageClick}
                    containerClassName="pager_items"
                    subContainerClassName="pager__item"
                    activeClassName="is-active"
                />
            </nav>
        )
    }

    renderHeading(){
        const {heading} = this.props;
        const renderHeading = heading ? <h2>{heading}</h2> : ''
        return renderHeading;
    }

    renderReadMore(){
        const {readmore, url} = this.props;
        if (!readmore || !url){
            return '';
        }
        return(
            <a className='cwd_events_readmore' href={url}>{readmore}</a>
        )
    }


    render() {
        return (
            <div>
                { this.renderHeading() }
                { this.renderReadMore() }
                { this.getComponentFromFormat() }
                { this.renderPagination() }
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
    filterby: PropTypes.string,
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
