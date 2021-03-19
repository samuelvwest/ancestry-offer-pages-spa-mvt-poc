import React from 'react';
import { connect } from 'react-redux';
import Timeline from '../Timeline';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const classesMaker = (styleName) => {
    return `container container--${styleName} footerOffer-style footerOffer-style--${styleName}`
}
const FooterOfferings = connect(mapStateToProps)((props) => {
    if (window.innerWidth < props.pageSettings.breaks.control.tablet && props.variables.offerStyle === 'control') {
        const handleChooseMem = (e) => {
            e.preventDefault();
            const targetEl = document.getElementById('memOptions');
            targetEl.scrollIntoView({behavior: 'smooth'})
        }
        return (
            <div className={classesMaker('bonsaigrid--mobile')}>
                <section className="finalCTACon textCenter">
                    <div className="btnCon">
                        <a href="#memOptions" className="ancBtn lrg" onClick={handleChooseMem}>Choose a membership</a>
                    </div>
                </section>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
})


const FooterOffers = connect(mapStateToProps)((props) => {
    return <FooterOfferings/>
});

export default FooterOffers;