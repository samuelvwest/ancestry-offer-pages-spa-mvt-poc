import React from 'react';
import { connect } from 'react-redux';
import BonsaiGrid from './BonsaiGrid';
import SparklyDragon from './SparklyDragon';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const ControlOfferings = connect(mapStateToProps) ( (props) => {
    if (props.variables.offerStyle === 'control') {
        return (
            <BonsaiGrid/>
        )
    } else if (props.variables.offerStyle === 'sparkly-dragon') {
        return (
            <SparklyDragon/>
        )
    } else {
        return (
            <h1>SETTINGS DIDNT WORK</h1>
        )
    }
})

export default ControlOfferings;