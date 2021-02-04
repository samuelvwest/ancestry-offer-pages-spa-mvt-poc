import React from 'react';
import { connect } from 'react-redux';
import Timeline from './Timeline';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const classesMaker = (styleName) => {
    return `container container--${styleName} header-style header-style--${styleName}`
}

const BonsaiOfferings = connect(mapStateToProps)((props) => {
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
            <form action="/checkout/mli?"  className="bonsai-container dnSignupForm" id="signupForm">
                <input type="hidden" name="direct" value="1" />
                <input type="hidden" name="rtype" value="14" />
                <input type="hidden" name="quantities" value="1" />
                <input type="hidden" name="flow" value="3" />
                <div id="mainWrap">
                    <section id="offerGrid">
                        <div className="ancGrid priceGrid">
                            <div className="ancCol ancColRow full480 w75 priceTableCon">
                                <table className="ancGrid ancGridNoGutters priceTable">
                                    <tbody>
                                        <tr className="hide320">
                                            <th className="ancCol1 hide320 w40" scope="col">&nbsp;</th>
                                            <th className="ancCol1 hide320 w30" scope="col">
                                                <span className="bold colHeading textlrg" id="monthly">Monthly <br /> membership</span>
                                            </th>
                                            <th className="ancCol1 bestCol hide320 w30" scope="col">
                                                <span className="bold colHeading textlrg" id="sixMonth">6-month <br /> membership</span>
                                            </th>
                                        </tr>
                                        <tr className="usRow">
                                            <th className="ancCol1 ancCol1Row colWrap full320 packageCol usDiscRow w40" scope="row">
                                                <div className="logo"></div>
                                                <h2 className="bold text3xlrg" id="usDiscovery">U.S. Discovery</h2>
                                                <p className="textlrg">Access all U.S. records on Ancestry</p>
                                            </th>
                                            <td className="ancCol1 colWrap half320 monthCol usDiscRow w30">
                                                <div className="priceLabel">
                                                    <label htmlFor="usDiscMonthly">
                                                        <h3 className="bold show320 textlrg">Monthly membership</h3>
                                                        <input defaultChecked="checked" type="radio" name="offers" value="O-25401" id="usDiscMonthly" aria-labelledby="usDiscovery monthly" />
                                                        <span className="bold greenTxt text4xlrg">$24.99</span>
                                                        {props.pageSettings.elligibility === `freetrial` && <p>after free trial</p>}
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="ancCol1 bestCol colWrap half320 usDiscRow w30">
                                                <div className="priceLabel">
                                                    <label htmlFor="usDiscSixMonth">
                                                        <h3 className="bold show320 textlrg">6-month membership</h3>
                                                        <p className="bold redTxt coloralt2 textxlrg">SAVE $50*</p>
                                                        <input type="radio" name="offers" value="O-23590" id="usDiscSixMonth" aria-labelledby="usDiscovery sixMonth" />
                                                        <span className="bold greenTxt text4xlrg">$99</span>
                                                        {props.pageSettings.elligibility === `freetrial` && <p>after free trial</p>}
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="weRow">
                                            <th className="ancCol1 ancCol1Row colWrap full320 packageCol worldRow w40" scope="row">
                                                <div className="logo"></div>
                                                <h2 className="bold text3xlrg" id="worldExplorer">World Explorer</h2>
                                                <p className="textlrg">Access all U.S. &amp; international records on Ancestry</p>
                                            </th>
                                            <td className="ancCol1 colWrap half320 monthCol worldRow w30">
                                                <div className="priceLabel">
                                                    <label htmlFor="worldExMonthly">
                                                        <h3 className="bold show320 textlrg">Monthly membership</h3>
                                                        <input type="radio" name="offers" value="O-25405" id="worldExMonthly" aria-labelledby="worldExplorer monthly" />
                                                        <span className="bold greenTxt text4xlrg">$39.99</span>
                                                        {props.pageSettings.elligibility === `freetrial` && <p>after free trial</p>}
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="ancCol1 bestCol colWrap half320 worldRow w30">
                                                <div className="priceLabel">
                                                    <label htmlFor="worldExSixMonth">
                                                        <h3 className="bold show320 textlrg">6-month membership</h3>
                                                        <p className="bold redTxt coloralt2 textxlrg">SAVE $90*</p>
                                                        <input type="radio" name="offers" value="O-22056" id="worldExSixMonth" aria-labelledby="worldExplorer sixMonth" />
                                                        <span className="bold greenTxt text4xlrg">$149</span>
                                                        {props.pageSettings.elligibility === `freetrial` && <p>after free trial</p>}
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="aaRow">
                                            <th className="ancCol1 ancCol1Row colWrap full320 packageCol worldPlusRow w40" scope="row">
                                                <div className="logo"></div>
                                                <h2 className="bold text3xlrg" id="allAccess">All Access</h2>
                                                <p className="textxlrg">
                                                    Get full membership to:
                                                </p>
                                                <ul>
                                                    <li>Ancestry</li>
                                                    <li>Newspapers.com Basic<sup>‡</sup></li>
                                                    <li>Fold3.com</li>
                                                </ul>
                                            </th>
                                            <td className="ancCol1 colWrap half320 monthCol worldPlusRow w30">
                                                <div className="priceLabel">
                                                    <label htmlFor="worldPlusMonthly">
                                                        <h3 className="bold show320 textlrg">Monthly membership</h3>
                                                        <input type="radio" name="offers" value="O-25410" id="worldPlusMonthly" aria-labelledby="allAccess monthly" />
                                                        <span className="bold greenTxt text4xlrg">$49.99</span>
                                                        {props.pageSettings.elligibility === `freetrial` && <p>after free trial</p>}
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="ancCol1 bestCol colWrap half320 worldPlusRow w30">
                                                <div className="priceLabel">
                                                    <label htmlFor="worldPlusSixMonth">
                                                        <h3 className="bold show320 textlrg">6-month membership</h3>
                                                        <p className="bold redTxt coloralt2 textxlrg">SAVE $100*</p>
                                                        <input type="radio" name="offers" value="O-24567" id="worldPlusSixMonth" aria-labelledby="allAccess sixMonth" />
                                                        <span className="bold greenTxt text4xlrg">$199</span>
                                                        {props.pageSettings.elligibility === `freetrial` && <p>after free trial</p>}
                                                    </label>
                                                </div>
                                                <div className="bottomRow bestCol w100"></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="ancCol ctaCol full480 w25">
                                <div className="arrow hide480"></div>
                                <div className="ctaBox">
                                    <input type="submit" className="ancBtn orange lrg subBtn" value={props.pageSettings.elligibility === `freetrial` ? `Start FREE trial` : `Get started`} />
                                    <div id="myAccountInfo">
                                        <div className="oldphone"></div>
                                        <p className="textsml">Subscribe or cancel any time by calling <span className="bold greenTxt textlrg phoneNumb">1-800-ANCESTRY</span></p>
                                        <p className="greenTxt"><small>(7 days a week, 9am-11pm ET)</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </form>
        </div>
    )
})


const OfferStyles = connect(mapStateToProps)((props) => {

    return <BonsaiOfferings/>
});

export default OfferStyles;