import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        pageSettings: state.pageSettings,
        variables: state.variables
    }
};

const classesMaker = (styleName) => {
    return `container container--${styleName} offer-style offer-style--${styleName}`
}

const ControlOfferings = connect(mapStateToProps)((props) => {
    if (window.innerWidth < props.pageSettings.breaks.control.tablet) {
        // Color Stack for Phone on all offer pages
        const show6Months = (e) => {
            e.preventDefault();
            var monthPill = document.getElementById('monthPill'),
                month6Pill = document.getElementById('month6Pill'),
                priceCons = Array.prototype.slice.call(document.querySelectorAll('.annualPriceCon'));
				month6Pill.classList.remove('inactivePill');
				month6Pill.classList.add('activePill','icon','iconCheck');
				monthPill.classList.remove('activePill','icon','iconCheck');
				monthPill.classList.add('inactivePill');
				priceCons.forEach(function(el){
						el.classList.remove('up');
				});
        }
        const showAnnual = () => {
            var monthPill = document.getElementById('monthPill'),
                month6Pill = document.getElementById('month6Pill'),
                priceCons = Array.prototype.slice.call(document.querySelectorAll('.annualPriceCon'));
				monthPill.classList.remove('inactivePill');
				monthPill.classList.add('activePill','icon','iconCheck');
				month6Pill.classList.remove('activePill','icon','iconCheck');
				month6Pill.classList.add('inactivePill');
				priceCons.forEach(function(el){
						el.classList.add('up');
				});
        }
        return (
            <div className={classesMaker('bonsai--mobile')}>
                <section className="pricingCon">
                    <section id="" className="aboveFoldCon">
                        <div className="buttonPill">
                            <button type="button" id="monthPill" className="activePill icon iconCheck" onClick={showAnnual}>MONTHLY</button>
                            <button type="button" id="month6Pill" className="inactivePill" onClick={show6Months}>6 MONTHS</button>
                        </div>
                    </section>
                    <section id="services" className="allOptionsCon">
                        <div className="usRecordsCon ">
                            <div className="annualPriceCon priceCon ancGrid up">
                                <label className="priceLink clearfix" htmlFor="us6Month">
                                    <input id="us6Month" className="radioBtn" type="radio" name="offers" value="O-23590"/>
                                    <div className="usImg ftlpMobileSprite lazyBgImg ancCol w25 loadedBgImg"><div className="usColorOver"></div></div>
                                    <div className="ancCol w75">
                                        <span className="ancCol durationTxt">All U.S. records</span>
                                        <span className="ancCol linkArrow icon iconArrowRight"></span>
                                        <span className="ancCol w60 priceTextCon"><span className="daysFree">14 DAYS FREE</span><br/><span className="priceTxt">then $99</span></span>
                                        <span className="ancCol w40 cancelText saveText"><strong>SAVE $50*</strong></span>
                                    </div>
                                </label>
                            </div>
                            <div className="monthlyPriceCon priceCon ancGrid">
                                <label className="priceLink clearfix" htmlFor="us1Month">
                                    <input id="us1Month" className="radioBtn" type="radio" name="offers" value="O-25401"/>
                                    <div className="usImg ftlpMobileSprite lazyBgImg ancCol w25 loadedBgImg"><div className="usColorOver"></div></div>
                                    <div className="ancCol w75">
                                        <span className="ancCol durationTxt">All U.S. records</span>
                                        <span className="ancCol linkArrow icon iconArrowRight"></span>
                                        <span className="ancCol w60 priceTextCon"><span className="daysFree">14 DAYS FREE</span><br/><span className="priceTxt">then $24.99/month</span></span>
                                        <span className="ancCol w40 cancelText">Cancel anytime</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="uaRecordsCon">
                            <div className="annualPriceCon priceCon ancGrid up">
                                <label className="priceLink clearfix" htmlFor="ua6Month">
                                    <input id="ua6Month" className="radioBtn" type="radio" name="offers" value="O-22056"/>
                                    <div className="uaImg ftlpMobileSprite lazyBgImg ancCol w25 loadedBgImg"><div className="uaColorOver"></div></div>
                                    <div className="ancCol w75">
                                        <span className="ancCol durationTxt">Everything on Ancestry</span>
                                        <span className="ancCol linkArrow icon iconArrowRight"></span>
                                        <span className="ancCol w60 priceTextCon"><span className="daysFree">14 DAYS FREE</span><br/><span className="priceTxt">then $149</span></span>
                                        <span className="ancCol w40 cancelText saveText"><strong>SAVE $90*</strong></span>
                                    </div>
                                </label>
                            </div>
                            <div className="monthlyPriceCon priceCon ancGrid">
                                <label className="priceLink clearfix" htmlFor="ua1Month">
                                        <input id="ua1Month" className="radioBtn" type="radio" name="offers" value="O-25405"/>
                                        <div className="uaImg ftlpMobileSprite lazyBgImg ancCol w25 loadedBgImg"><div className="uaColorOver"></div></div>
                                        <div className="ancCol w75">
                                            <span className="ancCol durationTxt">Everything on Ancestry</span>
                                            <span className="ancCol linkArrow icon iconArrowRight"></span>
                                            <span className="ancCol w60 priceTextCon"><span className="daysFree">14 DAYS FREE</span><br/><span className="priceTxt">then $39.99/month</span></span>
                                            <span className="ancCol w40 cancelText">Cancel anytime</span>
                                        </div>
                                </label>
                            </div>
                        </div>
                        <div className="wepRecordsCon">
                            <div className="annualPriceCon priceCon ancGrid up">
                                <label className="priceLink clearfix" htmlFor="wep6Month">
                                    <input id="wep6Month" className="radioBtn" type="radio" name="offers" value="O-24567"/>
                                    <div className="wepImg ftlpMobileSprite lazyBgImg ancCol w25 loadedBgImg"><div className="wepColorOver"></div></div>
                                    <div className="ancCol w75">
                                        <span className="ancCol durationTxt">Everything above,<br/><strong>plus Fold3 and Newspapers.com™ Basic<sup>‡</sup></strong></span>
                                        <span className="ancCol linkArrow icon iconArrowRight"></span>
                                        <span className="ancCol w60 priceTextCon"><span className="daysFree">14 DAYS FREE</span><br/><span className="priceTxt">then $199</span></span>
                                        <span className="ancCol w40 cancelText saveText"><strong>SAVE $100*</strong></span>
                                    </div>
                                </label>
                            </div>
                            <div className="monthlyPriceCon priceCon ancGrid">
                                <label className="priceLink clearfix" htmlFor="wep1Month">
                                    <input id="wep1Month" className="radioBtn" type="radio" name="offers" value="O-25410"/>
                                    <div className="wepImg ftlpMobileSprite lazyBgImg ancCol w25 loadedBgImg"><div className="wepColorOver"></div></div>
                                    <div className="ancCol w75">
                                        <span className="ancCol durationTxt">Everything above,<br/><strong>plus Fold3 and Newspapers.com™ Basic<sup>‡</sup></strong></span>
                                        <span className="ancCol linkArrow icon iconArrowRight"></span>
                                        <span className="ancCol w60 priceTextCon"><span className="daysFree">14 DAYS FREE</span><br/><span className="priceTxt">then $49.99/month</span></span>
                                        <span className="ancCol w40 cancelText">Cancel anytime</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        )
    // } else if (props.pageSettings.location === 'join') {
        // Green Top for Tablet & Desktop for CARE pages
    } else if (window.innerWidth < props.pageSettings.breaks.control.desktop) {
        // Color Grid for Tablet on FTLP & HOLP
        return (
            <div className={classesMaker('bonsaigrid--tablet')}>
                <section id="formCon">
                    <form className="form clearfix" id="newOfferStyle" action="/checkout/mli?">
                        <input type="hidden" name="direct" value="1"/>
                        <input type="hidden" name="rtype" value="14"/>
                        <input type="hidden" name="quantities" value="1"/>
                        <input type="hidden" name="flow" value="3"/>
                        <div className="ancGrid ancGridNoGutters" id="priceGrid">
                            <div className="priceCol ancCol w40" id="priceFirstCol">
                                <div className="priceRow priceHeadRow"></div>
                                <div className="priceRow priceSecondRow" id="monthlyMem"><strong className="text2xlrg">Monthly membership</strong><br/><span className="textxlrg">Cancel anytime</span></div>
                                <div className="priceRow priceThirdRow" id="sixMonthMem"><strong className="text2xlrg">6-month membership</strong></div>
                            </div>
                            <div className="priceCol ancCol w20" id="standardPriceCol">
                                <div className="priceRow priceHeadRow">
                                    <h2 className="text3xlrg" id="usDiscovery">U.S. Discovery</h2>
                                    <p className="textlrg">Uncover your family story in U.S. records</p>
                                </div>
                                <label className="priceRow priceSecondRow clearfix" htmlFor="standardMonthly">
                                    <input type="radio" className="radio" id="standardMonthly" name="offers" checked="checked" value="O-25401" aria-labelledby="usDiscovery monthlyMem"/>
                                    <div className="checkSelectCon ancCol icon iconCheck"></div>
                                    <div className="priceCon ancCol">
                                        <span className="priceText text4xlrg">$24.99</span><br/>
                                        {props.pageSettings.elligibility === `freetrial` && <span className="freeTrialText textlrg">after free trial</span>}
                                    </div>
                                </label>
                                <label className="priceRow priceThirdRow clearfix" htmlFor="standardSemi">
                                    <input type="radio" className="radio" id="standardSemi" name="offers" value="O-23590" aria-labelledby="usDiscovery sixMonthMem"/>
                                    <div className="checkSelectCon ancCol"></div>
                                    <div className="priceCon ancCol">
                                        <span className="saveText textxlrg">SAVE $50*</span>
                                        <span className="priceText text4xlrg">$99</span><br/>
                                        {props.pageSettings.elligibility === `freetrial` && <span className="freeTrialText textlrg">after free trial</span>}
                                    </div>
                                </label>
                            </div>
                            <div className="priceCol ancCol w20" id="plusPriceCol">
                                <div className="priceRow priceHeadRow">
                                    <h2 className="text3xlrg" id="worldExplorer">World Explorer</h2>
                                    <p className="textxlrg">Unlock global content &amp; collections</p>
                                </div>
                                <label className="priceRow priceSecondRow clearfix plus" htmlFor="plusMonthly">
                                    <input type="radio" className="radio" id="plusMonthly" name="offers" value="O-25405" aria-labelledby="worldExplorer monthlyMem"/>
                                    <div className="checkSelectCon ancCol"></div>
                                    <div className="priceCon ancCol">
                                        <span className="priceText text4xlrg">$39.99</span><br/>
                                        {props.pageSettings.elligibility === `freetrial` && <span className="freeTrialText textlrg">after free trial</span>}
                                    </div>
                                </label>
                                <label className="priceRow priceThirdRow clearfix plus" htmlFor="plusSemi">
                                    <input type="radio" className="radio" id="plusSemi" name="offers" value="O-22056" aria-labelledby="worldExplorer sixMonthMem"/>
                                    <div className="checkSelectCon ancCol"></div>
                                    <div className="priceCon ancCol">
                                        <span className="saveText textxlrg">SAVE $90*</span>
                                        <span className="priceText text4xlrg">$149</span><br/>
                                        {props.pageSettings.elligibility === `freetrial` && <span className="freeTrialText textlrg">after free trial</span>}
                                    </div>
                                </label>
                            </div>
                            <div className="priceCol ancCol w20" id="allPriceCol">
                                <div className="priceRow priceHeadRow">
                                    <h2 className="text3xlrg" id="allAccess">All Access</h2>
                                    <p className="textxlrg">All of Ancestry, Fold3, Newspapers.com Basic**</p>
                                </div>
                                <label className="priceRow priceSecondRow clearfix" htmlFor="allMonthly">
                                    <input type="radio" className="radio" id="allMonthly" name="offers" value="O-25410" aria-labelledby="allAccess monthlyMem"/>
                                    <div className="checkSelectCon ancCol"></div>
                                    <div className="priceCon ancCol">
                                        <span className="priceText text4xlrg">$49.99</span><br/>
                                        {props.pageSettings.elligibility === `freetrial` && <span className="freeTrialText textlrg">after free trial</span>}
                                    </div>
                                </label>
                                <label className="priceRow priceThirdRow clearfix" htmlFor="allSemi">
                                    <input type="radio" className="radio" id="allSemi" name="offers" value="O-24567" aria-labelledby="allAccess sixMonthMem"/>
                                    <div className="checkSelectCon ancCol"></div>
                                    <div className="priceCon ancCol">
                                        <span className="saveText textxlrg">SAVE $100*</span>
                                        <span className="priceText text4xlrg">$199</span><br/>
                                        {props.pageSettings.elligibility === `freetrial` && <span className="freeTrialText textlrg">after free trial</span>}
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div id="priceGridCtaCon" className="ancGrid">
                            <div className="ancCol w40"></div>
                            <div className="ancCol w60">
                                <input type="submit" className="ancBtn orange lrg ancBtnRnd" id="priceGridCta" value={props.pageSettings.elligibility === `freetrial` && "Start your FREE trial" || "Get started"}/>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        )
    } else {
        // Bonsai Grid for Desktp on FTLP & HOLP
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
    }
    
})


const BonsaiOfferStyles = connect(mapStateToProps)((props) => {
    return <ControlOfferings/>
});

export default BonsaiOfferStyles;