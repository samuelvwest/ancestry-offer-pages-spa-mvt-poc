import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const classesMaker = (styleName) => {
    return `container container--${styleName} support-style support-style--${styleName}`
}

const SupportSparklyDragon = connect(mapStateToProps)((props) => {
    return (
        <div className={classesMaker('sparklydragon')}>
            
        </div>
    )
})


const SupportStyles = connect(mapStateToProps)((props) => {
    return <SupportSparklyDragon/>
});

export default SupportStyles;