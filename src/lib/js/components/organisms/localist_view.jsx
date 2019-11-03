import React from 'react';
import PropTypes from 'prop-types';
import Standard from '../molecules/standard';
import Compact from '../molecules/compact';
import ModernStandard from '../molecules/modern_standard';
import ModernCompact from '../molecules/modern_compact';
import Classic from '../molecules/classic';
import InlineCompact from '../molecules/inline_compact';

const LocalistView = (props) => {
    let component;
    const {events, page, loading} = props;
    const {
        format,
        filterby,
        wrapperclass,
        listclass,
        itemclass,
        hidedescription,
        truncatedescription,
        hideimages,
        hideaddcal,
    } = props;

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

LocalistView.propTypes = {
    events: PropTypes.array.isRequired,
    format: PropTypes.oneOf([
        'standard',
        'compact',
        'modern_compact',
        'modern_standard',
        'inline_compact',
        'classic'
    ]).isRequired,
    truncatedescription: PropTypes.string.isRequired,
    hidedescription: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    hideimages: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    hideaddcal: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    filterby: PropTypes.string.isRequired,
    wrapperclass: PropTypes.string.isRequired,
    listclass: PropTypes.string.isRequired,
    itemclass: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired
};

export default LocalistView;
