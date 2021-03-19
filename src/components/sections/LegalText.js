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
    return `container container--${styleName} header-style header-style--${styleName}`
}

const BonsaiLegal = connect(mapStateToProps)((props) => {
    // if (window.innerWidth < props.pageSettings.breaks.control.tablet) {
    //     // Color Stack for Phone on all offer pages
    // } else if (props.pageSettings.location === 'join') {
    //     // Green Top for Tablet & Desktop for CARE pages
    // } else if (window.innerWidth < props.pageSettings.breaks.control.desktop) {
    //     // Color Grid for Tablet on FTLP & HOLP
    // } else {
    //     // Bonsai Grid for Desktp on FTLP & HOLP
    // }
    return (
        <div className={classesMaker('bonsaigrid')}>
            <footer id="offerPageFooter">
                <div className="page pageWidth1 pagePadded">
                {props.pageSettings.elligibility === `freetrial` && <p className="textxsml topSpacingBlock"><sup>†</sup>One free trial per user. Free trial requires registration with a valid credit or debit card. You will be charged the full amount of your chosen membership price on expiry of the free trial, unless you cancel at least 2 days before the end of your free trial by visiting your My Account section or by calling 1-800-ANCESTRY.  Memberships auto-renew at the end of your subscription period and your payment method will be debited the then applicable rate.  To avoid auto-renewing cancel at least 2 days before your renewal date by visiting My Account or calling 1-800-ANCESTRY.</p>}
                    <p className="textxsml">*Saves you $50 over 6 months versus monthly. <br/>Saves you $90 over 6 months versus monthly. <br/>Saves you $100 over 6 months versus monthly.</p>
                    <p className="textxsml"><sup>‡</sup>Other subscriptions to Newspapers.com may be available but are not included in the All Access package</p>
                </div>
            </footer>
        </div>
    )
})


const LegalText = connect(mapStateToProps)((props) => {
    return <BonsaiLegal/>
});

export default LegalText;