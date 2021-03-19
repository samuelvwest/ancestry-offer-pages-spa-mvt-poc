import React from 'react'
import { connect } from 'react-redux' 

export const ColorColumns = (props) => {
    return (
        <div id="updated-offer-page">
            <div className="membershipOptions hide480">
                <div className="page">
                    <h1 className="light text6xlrg textCenter">Find your family story with an Ancestry® membership—FREE for 14 days.<sup>†</sup></h1>
                    <div className="swithContainer textCenter">
                        <span className="text2xlrg">Monthly</span>
                        <div className="switchCon">
                            <input className="switch" type="checkbox" id="switch1" checked  />
                            <label htmlFor="switch1"><span aria-hidden="true" className="switchHandle" data-label-on="6 month membership options" data-label-off="Monthly membership options"><span></span></span> <span className="hideVisually">6 months or Monthyl memberships</span></label>
                        </div>
                        <span className="text3xlrg"><strong>6 months - <span className="greenTxt">Save up to $100*</span></strong></span>
                    </div>
                    <div className="tabs tabsConnected noDisplay" id="membershipTabs" role="tablist">
                        <button className="tab" role="tab" type="button">Monthly membership options</button>
                        <button className="tab" role="tab" type="button">6 month membership options</button>
                    </div>
                    <div id="membershipOptionTabs">
                        <div className="tabContent monthTab active" role="tabpanel">
                            <div className="ancGrid ancGridEqual">
                                <section className="ancCol w33 textCenter membersipOptionCon usDiscoveryOption">
                                    <h2>U.S. Discovery</h2>
                                    <div className="optionContent">
                                        <p className="text2xlrg">Monthly membership</p>
                                        <p className="text2xlrg noTopSpacing"><span className="membershipPrice bold"><sup>$</sup>24.99</span>/month<br/> after 14-day free trial</p>
                                        <p className="freeTrialBtn"><a href="##AncestryUrlPrefix##/checkout/MLI?direct=1&rtype=14&flow=3&offers=O-25401&quantities=1" className="ancBtn lrg">Start free trial</a></p>
                                        <p className="text2xlrg">Uncover the incredible journeys of your ancestors’ American history with access to all U.S. records on Ancestry.</p>
                                    </div>
                                    <div className="membershipDescription">
                                        <h3 className="bold textxlrg">Access all U.S. records </h3>
                                        <ul className="bulleted textxlrg">
                                            <li>Search over 15 billion U.S. records</li>
                                            <li>Find records dating back to the 13th century</li>
                                            <li>Build your family tree </li>
                                            <li>Make quick discoveries with Ancestry Hints®</li>
                                            <li>Use our advanced search tools to help grow your tree</li>
                                            <li>Upload photos and stories to your tree</li>
                                            <li>Special collections on Jewish and African-American family history</li>
                                            <li>Connect and share stories with millions of other Ancestry members</li>
                                        </ul>
                                    </div>
                                </section>
                                <section className="ancCol w33 textCenter membersipOptionCon worldExplorerOption">
                                    <h2>World Explorer</h2>
                                    <div className="optionContent">
                                        <p className="text2xlrg">Monthly membership</p>
                                        <p className="text2xlrg noTopSpacing"><span className="membershipPrice bold"><sup>$</sup>39.99</span>/monthly<br/> after 14-day free trial</p>
                                        <p className="freeTrialBtn"><a href="##AncestryUrlPrefix##/checkout/MLI?direct=1&rtype=14&flow=3&offers=O-25405&quantities=1" className="ancBtn lrg">Start free trial</a></p>
                                        <p className="text2xlrg">Travel around the world to discover your family’s global history with full access to U.S. and international record collections on Ancestry.</p>
                                    </div>
                                    <div className="membershipDescription">
                                        <h3 className="bold textxlrg">Everything in U.S. Discovery, plus...</h3>
                                        <ul className="bulleted textxlrg">
                                            <li>Search over 3 billion international records</li>
                                            <li>Discover records from over 80 countries</li>
                                            <li>Find immigration details in passenger lists, border crossings, and more</li>
                                        </ul>
                                    </div>
                                </section>
                                <section className="ancCol w33 textCenter membersipOptionCon allAccessOption">
                                    <h2>All Access</h2>
                                    <div className="optionContent">
                                        <p className="text2xlrg">Monthly membership</p>
                                        <p className="text2xlrg noTopSpacing"><span className="membershipPrice bold"><sup>$</sup>49.99</span>/montlhy<br/> after 14-day free trial</p>
                                        <p className="freeTrialBtn"><a href="##AncestryUrlPrefix##/checkout/MLI?direct=1&rtype=14&flow=3&offers=O-25410&quantities=1" className="ancBtn lrg">Start free trial</a></p>
                                        <p className="text2xlrg">Discover your family story in rich detail with three amazing subscriptions for the <br/>price of one.</p>
                                    </div>
                                    <div className="membershipDescription">
                                        <h3 className="bold textxlrg">Everything on Ancestry, plus Fold3® and Newspapers.com™ Basic<sup>‡</sup></h3>
                                        <ul className="bulleted textxlrg">
                                            <li>Search 500+ million military records on Fold3®</li>
                                            <li>Browse military records by wars</li>
                                            <li>Read over 1 billion articles from 11,500+ newspapers on Newspapers.com™ Basic<sup>‡</sup></li>
                                            <li>Find stories and articles dating back to the 1700s</li>
                                            <li>Search newspapers from small towns to large cities across the U.S. and world</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="tabContent sixMonthTab" role="tabpanel">
                            <div className="ancGrid ancGridEqual">
                                <section className="ancCol w33 textCenter membersipOptionCon usDiscoveryOption">
                                    <h2>U.S. Discovery</h2>
                                    <div className="optionContent">
                                        <p className="text2xlrg">6-month membership– <span className="greenTxt">Save&nbsp;$50*</span></p>
                                        <p className="text2xlrg noTopSpacing"><span className="membershipPrice bold"><sup>$</sup>99</span><br/> after 14-day free trial</p>
                                        <p className="membershipBtn freeTrialBtn"><a href="##AncestryUrlPrefix##/checkout/MLI?direct=1&rtype=14&flow=3&offers=O-23590&quantities=1" className="ancBtn lrg">Start free trial</a></p>
                                        <p className="text2xlrg">Uncover the incredible journeys of your ancestors’ American history with access to all U.S. records on Ancestry.</p>
                                    </div>
                                    <div className="membershipDescription">
                                        <h3 className="bold textxlrg">Access all U.S. records </h3>
                                        <ul className="bulleted textxlrg">
                                            <li>Search over 15 billion U.S. records</li>
                                            <li>Find records dating back to the 13th century</li>
                                            <li>Build your family tree </li>
                                            <li>Make quick discoveries with Ancestry Hints®</li>
                                            <li>Use our advanced search tools to help grow your tree</li>
                                            <li>Upload photos and stories to your tree</li>
                                            <li>Special collections on Jewish and African-American family history</li>
                                            <li>Connect and share stories with millions of other Ancestry members</li>
                                        </ul>
                                    </div>
                                </section>
                                <section className="ancCol w33 textCenter membersipOptionCon worldExplorerOption">
                                    <h2>World Explorer</h2>
                                    <div className="optionContent">
                                        <p className="text2xlrg">6-month membership– <span className="greenTxt">Save&nbsp;$90*</span></p>
                                        <p className="text2xlrg noTopSpacing"><span className="membershipPrice bold"><sup>$</sup>149</span><br/> after 14-day free trial</p>
                                        <p className="membershipBtn freeTrialBtn"><a href="##AncestryUrlPrefix##/checkout/MLI?direct=1&rtype=14&flow=3&offers=O-22056&quantities=1" className="ancBtn lrg">Start free trial</a></p>
                                        <p className="text2xlrg">Travel around the world to discover your family’s global history with full access to U.S. and international record collections on Ancestry.</p>
                                    </div>
                                    <div className="membershipDescription">
                                        <h3 className="bold textxlrg">Everything in U.S. Discovery, plus...</h3>
                                        <ul className="bulleted textxlrg">
                                            <li>Search over 3 billion international records</li>
                                            <li>Discover records from over 80 countries</li>
                                            <li>Find immigration details in passenger lists, border crossings, and more</li>
                                        </ul>
                                    </div>
                                </section>
                                <section className="ancCol w33 textCenter membersipOptionCon allAccessOption">
                                    <h2>All Access</h2>
                                    <div className="optionContent">
                                        <p className="text2xlrg">6-month membership– <span className="greenTxt">Save&nbsp;$100*</span></p>
                                        <p className="text2xlrg noTopSpacing"><span className="membershipPrice bold"><sup>$</sup>199</span><br/> after 14-day free trial</p>
                                        <p className="membershipBtn freeTrialBtn"><a href="##AncestryUrlPrefix##/checkout/MLI?direct=1&rtype=14&flow=3&offers=O-24567&quantities=1" className="ancBtn lrg">Start free trial</a></p>
                                        <p className="text2xlrg">Discover your family story in rich detail with three amazing subscriptions for the <br/>price of one.</p>
                                    </div>
                                    
                                    <div className="membershipDescription">
                                        <h3 className="bold textxlrg">Everything on Ancestry, plus Fold3® and Newspapers.com™ Basic<sup>‡</sup></h3>
                                        <ul className="bulleted textxlrg">
                                            <li>Search 500+ million military records on Fold3®</li>
                                            <li>Browse military records by wars</li>
                                            <li>Read over 1 billion articles from 11,500+ newspapers on Newspapers.com™ Basic<sup>‡</sup></li>
                                            <li>Find stories and articles dating back to the 1700s</li>
                                            <li>Search newspapers from small towns to large cities across the U.S. and world</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    
                    <p className="textCenter textxlrg">*Savings based on a 6-month membership versus monthly.</p>
                </div>
            </div>
            <div className="show480 mobileMembershipOptions">
                <form id="mobileOfferForm" className="form" action="/checkout/mli?">
                    <input type="hidden" name="direct" value="1" />
                    <input type="hidden" name="rtype" value="11" />
                    <input type="hidden" name="quantities" value="1" />
                    <input type="hidden" name="flow" value="3" />
                        <section className="pricingCon">
                            <section id="memOptions" className="aboveFoldCon">
                                <p className="chooseMemText" elementtiming="ancestry_meaningful_paint">Choose a membership to try&mdash;<strong>FREE for 14 days.</strong></p>
                                <div className="buttonPill">
                                    <button type="button" id="newMonthPill" className="activePill icon iconCheck">MONTHLY</button>
                                    <button type="button" id="newMonth6Pill" className="inactivePill">6 MONTHS</button>
                                </div>
                            </section>
                            <section id="services" className="allOptionsCon">
                                <div className="usRecordsCon ">
                                    <div className="annualPriceCon priceCon ancGrid up">
                                        <label className="priceLink clearfix" htmlFor="us6Month">
                                            <input id="us6Month" className="newRadioBtn" type="radio" name="offers" value="O-23590" />
                                            <div className="usImg ancCol w25"><div className="usColorOver"></div></div>
                                            <div className="ancCol w75">
                                                <span className="ancCol durationTxt">All U.S. records</span>
                                                <span className="ancCol linkArrow icon iconArrowRight"></span>
                                                <span className="ancCol w60 priceTextCon"><span className="daysFree">14 DAYS FREE</span><br /><span className="priceTxt">then $99</span></span>
                                                <span className="ancCol w40 cancelText saveText"><strong>SAVE $50*</strong></span>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="monthlyPriceCon priceCon ancGrid">
                                        <label className="priceLink clearfix" htmlFor="us1Month">
                                            <input id="us1Month" className="newRadioBtn" type="radio" name="offers" value="O-25401" />
                                            <div className="usImg ancCol w25"><div className="usColorOver"></div></div>
                                            <div className="ancCol w75">
                                                <span className="ancCol durationTxt">All U.S. records</span>
                                                <span className="ancCol linkArrow icon iconArrowRight"></span>
                                                <span className="ancCol w60 priceTextCon"><span className="daysFree">14 DAYS FREE</span><br /><span className="priceTxt">then $24.99/month</span></span>
                                                <span className="ancCol w40 cancelText">Cancel anytime</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="uaRecordsCon">
                                    <div className="annualPriceCon priceCon ancGrid up">
                                        <label className="priceLink clearfix" htmlFor="ua6Month">
                                            <input id="ua6Month" className="newRadioBtn" type="radio" name="offers" value="O-22056" />
                                            <div className="uaImg ancCol w25"><div className="uaColorOver"></div></div>
                                            <div className="ancCol w75">
                                                <span className="ancCol durationTxt">Everything on Ancestry</span>
                                                <span className="ancCol linkArrow icon iconArrowRight"></span>
                                                <span className="ancCol w60 priceTextCon"><span className="daysFree">14 DAYS FREE</span><br /><span className="priceTxt">then $149</span></span>
                                                <span className="ancCol w40 cancelText saveText"><strong>SAVE $90**</strong></span>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="monthlyPriceCon priceCon ancGrid">
                                        <label className="priceLink clearfix" htmlFor="ua1Month">
                                            <input id="ua1Month" className="newRadioBtn" type="radio" name="offers" value="O-25405" />
                                            <div className="uaImg ancCol w25"><div className="uaColorOver"></div></div>
                                            <div className="ancCol w75">
                                                <span className="ancCol durationTxt">Everything on Ancestry</span>
                                                <span className="ancCol linkArrow icon iconArrowRight"></span>
                                                <span className="ancCol w60 priceTextCon"><span className="daysFree">14 DAYS FREE</span><br /><span className="priceTxt">then $39.99/month</span></span>
                                                <span className="ancCol w40 cancelText">Cancel anytime</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="wepRecordsCon">
                                    <div className="annualPriceCon priceCon ancGrid up">
                                    <label className="priceLink clearfix" htmlFor="wep6Month">
                                        <input id="wep6Month" className="newRadioBtn" type="radio" name="offers" value="O-24567" />
                                        <div className="wepImg ancCol w25"><div className="wepColorOver"></div></div>
                                        <div className="ancCol w75">
                                        <span className="ancCol durationTxt">Everything above,<br /><strong>plus Fold3 and Newspapers.com™ Basic<sup>‡</sup></strong></span>
                                        <span className="ancCol linkArrow icon iconArrowRight"></span>
                                        <span className="ancCol w60 priceTextCon"><span className="daysFree">14 DAYS FREE</span><br /><span className="priceTxt">then $199</span></span>
                                        <span className="ancCol w40 cancelText saveText"><strong>SAVE $100§</strong></span>
                                        </div>
                                    </label>
                                    </div>
                                    <div className="monthlyPriceCon priceCon ancGrid">
                                    <label className="priceLink clearfix" htmlFor="wep1Month">
                                        <input id="wep1Month" className="newRadioBtn" type="radio" name="offers" value="O-25410" />
                                        <div className="wepImg ancCol w25"><div className="wepColorOver"></div></div>
                                        <div className="ancCol w75">
                                        <span className="ancCol durationTxt">Everything above,<br /><strong>plus Fold3 and Newspapers.com™ Basic<sup>‡</sup></strong></span>
                                        <span className="ancCol linkArrow icon iconArrowRight"></span>
                                        <span className="ancCol w60 priceTextCon"><span className="daysFree">14 DAYS FREE</span><br /><span className="priceTxt">then $49.99/month</span></span>
                                        <span className="ancCol w40 cancelText">Cancel anytime</span>
                                        </div>
                                    </label>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </form>
                <div className="compareCon">
                    <table className="compareTable">
                        <caption className="textCenter bold">Compare memberships</caption>
                        <thead>
                            <tr className="">
                                <th scope="col" abbr="U.S. Discovery" className="greenTxt bold text2xlrg w33">U.S. Discovery</th>
                                <th scope="col" abbr="World Explorer" className="blueTxt bold text2xlrg w33">World Explorer</th>
                                <th scope="col" abbr="All Access" className="purpleTxt bold text2xlrg w33">All Access</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="U.S. Discovery" className="textsml greenTxt">15 billion US records</td>
                                <td data-label="World Explorer" className="textsml blueTxt">20 billion global records</td>
                                <td data-label="All Access" className="textsml purpleTxt">20 billion global records <br/>500 million military records on Fold3® <br/>1 billion articles on Newspapers.com™ Basic</td>
                            </tr>
                            <tr>
                                <th colSpan="3">Build your family tree</th>
                            </tr>
                            <tr>
                                <td data-label="U.S. Discovery"><span className="icon iconCheck greenTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                                <td data-label="World Explorer"><span className="icon iconCheck blueTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                                <td data-label="All Access"><span className="icon iconCheck purpleTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                            </tr>
                            <tr>
                                <th colSpan="3">Discover new details with Ancestry Hints®</th>
                            </tr>
                            <tr>
                                <td data-label="U.S. Discovery"><span className="icon iconCheck greenTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                                <td data-label="World Explorer"><span className="icon iconCheck blueTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                                <td data-label="All Access"><span className="icon iconCheck purpleTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                            </tr>
                            <tr>
                                <th colSpan="3">Search over 3 billion international historical&nbsp;records</th>
                            </tr>
                            <tr>
                                <td data-label="U.S. Discovery"><span className="greenTxt text2xlrg"><span className="hideVisually">Not Included</span></span></td>
                                <td data-label="World Explorer"><span className="icon iconCheck blueTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                                <td data-label="All Access"><span className="icon iconCheck purpleTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                            </tr>
                            <tr>
                                <th colSpan="3">Read over 1 billion historical articles with Newspapers.com™&nbsp;Basic</th>
                            </tr>
                            <tr>
                                <td data-label="U.S. Discovery"><span className="greenTxt text2xlrg"><span className="hideVisually">Not Included</span></span></td>
                                <td data-label="World Explorer"><span className="blueTxt text2xlrg"><span className="hideVisually">Not Included</span></span></td>
                                <td data-label="All Access"><span className="icon iconCheck purpleTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                            </tr>
                            <tr>
                                <th colSpan="3">Discover more than 500 million military records on&nbsp;Fold3.com®</th>
                            </tr>
                            <tr>
                                <td data-label="U.S. Discovery"><span className="greenTxt text2xlrg"><span className="hideVisually">Not Included</span></span></td>
                                <td data-label="World Explorer"><span className="blueTxt text2xlrg"><span className="hideVisually">Not Included</span></span></td>
                                <td data-label="All Access"><span className="icon iconCheck purpleTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bottom-legal-text">
                <p className="textxsml topSpacingBlock"><sup>†</sup>One free trial per user. Free trial requires registration with a valid credit or debit card. You will be charged the full amount of your chosen membership price on expiry of the free trial, unless you cancel at least 2 days before the end of your free trial by visiting your My Account section or by calling 1-800-ANCESTRY.  Memberships auto-renew at the end of your subscription period and your payment method will be debited the then applicable rate.  To avoid auto-renewing cancel at least 2 days before your renewal date by visiting My Account or calling 1-800-ANCESTRY.</p>
                <p className="textxsml topSpacingBlock"><sup>‡</sup>Other subscriptions to Newspapers.com may be available but are not included in the All Access package</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        assets: state.assets
    }
};

export default connect(mapStateToProps)(ColorColumns);






{/* <style>
    .membershipOptions { background-color:#fff; }
    .membershipOptions .page { width:1400px; padding:20px; }
    .membershipOptions .greenTxt { color:#6ba410; }
    .swithContainer { margin-top:40px; visibility: hidden;}
    .switchCon { display:inline-block; width:110px; vertical-align:bottom; margin-left:10px; }
    #membershipOptionTabs { margin-top:40px; }
    .membershipOptions .switchHandle { min-width:100px; }
    .membershipOptions .switchHandle:before,
    .membershipOptions .switchHandle:after { content:""; }
    .membersipOptionCon { border-radius:5px; border:1px #a9a9a9 solid; background-color:#f5f5f5; }
    .membersipOptionCon.usDiscoveryOption { border:1px #6ba410 solid; }
    .membersipOptionCon h2 { font-size:32px; padding:10px; color:#fff; }
    .membersipOptionCon.usDiscoveryOption h2 { background-color:#6ba410;  }
    .membersipOptionCon.worldExplorerOption h2 { background-color:#71b6ce; }
    .membersipOptionCon.allAccessOption h2 { background-color:#655586; }
    .membersipOptionCon .optionContent { padding:10px 15px 40px; background-color:#fff  }
    .membersipOptionCon .membershipPrice { font-size:60px; }
    .membersipOptionCon .membershipPrice sup { font-size:.5em; }
    .membersipOptionCon .freeTrialBtn { margin:20px 0; }
    .membersipOptionCon .membershipDescription { text-align:left; background-color:#f5f5f5; padding:20px 40px; }
    @media only screen and (max-width:1005px) {
    .membersipOptionCon .text2xlrg,
    .membersipOptionCon .textxlrg { font-size:16px; }
    .membersipOptionCon .membershipDescription { padding:15px; }
    .membersipOptionCon .membershipPrice { font-size:48px; }
    .membersipOptionCon h2 { font-size:28px; }
    .membersipOptionCon .membershipBtn { margin-top:30px; }
        
    }
    @media only screen and (max-width:767px) {  
        .mobileMembershipOptions { position:relative; }
        .membershipBtnsCon { margin-top:20px; }
        .membershipBtn {  background-repeat:no-repeat; background-position:10px center; width:100%; position:relative; margin-top:5px; border:none; }
        .usMemebershipBtn.membershipBtn { background-color:#b8d94c; background-image:url("https://www.ancestrycdn.com/mars/landing/offer/us/2020/us-2392070-crm-longtail-offerpage-us-icon.png");  }
        .worldMemebershipBtn.membershipBtn { background-color:#aee1f5; background-image:url("https://www.ancestrycdn.com/mars/landing/offer/us/2020/us-2392070-crm-longtail-offerpage-world-icon.png"); }
        .allAccessMemebershipBtn.membershipBtn { background-color:#bbb4cc; background-image:url("https://www.ancestrycdn.com/mars/landing/offer/us/2020/us-2392070-crm-longtail-offerpage-world-plus-icon.png"); }
        .membershipBtn .membershipBtnContent { margin-left:80px; padding:15px 50px 15px 10px; text-align:left; width:calc(100% - 80px); }
        .usMemebershipBtn.membershipBtn .membershipBtnContent { background-color:#9cbe30; }
        .worldMemebershipBtn.membershipBtn .membershipBtnContent { background-color:#0079a3; }
        .allAccessMemebershipBtn.membershipBtn .membershipBtnContent { background-color:#584d70; }
        .membershipBtn .iconArrowRightAfter:after { position:absolute; right:10px; top:20px; font-size:1.4em; }
        .membershipBtn .membershipBtnContent h2 { border-bottom:1px solid; max-width:185px; padding-bottom:5px; }
        .compareCon { padding:20px 10px; background-color:#fff; }
        .compareTable { margin-top:20px; text-align:center; margin-bottom:40px; }
        .compareTable caption { text-transform:uppercase; color:#5e6770;  }
        .compareTable th { text-align:center; padding:20px 2px; }
        .compareTable td { padding:4px; }
        .compareTable td:not(:last-child) { border-right:1px #dedede solid; }
        .compareTable .greenTxt { color:#6ba410; }
        .compareTable .blueTxt { color:#71b6ce; }
        .compareTable .purpleTxt { color:#655586; }
        #btnSelectionCon { background-color:#fff; padding:20px; position:absolute;  top:0; bottom:0; left:0; right:0; display:none; z-index:1; }
        #btnSelectionCon.showCon { display:block; -webkit-animation: slide-in .4s ease-out; -moz-animation: slide-in .4s ease-out; }
        #btnSelectionCon .mobileLenghtnewRadioBtn { width:100%; padding:15px 20px 20px 40px; border:1px #dedede solid; border-radius:10px; box-shadow:3px 2px 6px 1px rgba(91,91,91,0.23); margin-top:20px; }
        #btnSelectionCon .mobileLenghtnewRadioBtn div { display:inline-block; padding-left:20px; line-height:1.2; float:left; }
        #btnSelectionCon .mobileLenghtnewRadioBtn .saveTxt { color:#6ba410; border-left:1px #dedede solid; margin-left:20px; padding-top:15px; padding-bottom:15px;  }
        #btnSelectionCon .radio+label:before { margin-top:22px; width:25px; height:25px; }
        #btnSelectionCon .radio:checked+label:before { box-shadow:inset 0 0 0 0px rgba(0,0,0,.25), inset 0 0 0 0px #fff, inset 0 0 0 7px #6ba410; }
        #btnSelectionCon .underline  { text-decoration:underline; margin-top:20px; }
        label.priceLink span.icon {margin: 0;}
    }
    @media only screen and (max-width:480px) {
    }
    @-webkit-keyframes slide-in {
        0% { opacity: 0; -webkit-transform: translateX(100%); }   
    100% { opacity: 1; -webkit-transform: translateX(0); }
    }
    @-moz-keyframes slide-in {
            0% { opacity: 0; -moz-transform: translateX(100%); }   
        100% { opacity: 1; -moz-transform: translateX(0); }
    }
    .bottom-legal-text { padding: 20px; max-width: 1400px; text-align: center; display: block; margin: auto; }
    .usRecordsCon, .uaRecordsCon, .wepRecordsCon { margin-top: 5px; }
    .usRecordsCon { background-color: #9cbe30; }
    .uaRecordsCon { background-color: #0079a3; }
    .wepRecordsCon { background-color: #584d70; }
    .buttonPill #newMonthPill { left:0; }
    .buttonPill #newMonth6Pill { right:0; }
    .usImg, .uaImg, .wepImg { height: 150px; background-repeat: no-repeat;}
    .usImg { background-color: #b8d94c; background-image: url(https://www.ancestrycdn.com/mars/landing/offer/us/2020/us-2392070-crm-longtail-offerpage-us-icon.png); background-position: 27px 20px;}
    .uaImg { background-color: #aee1f5;background-image: url(https://www.ancestrycdn.com/mars/landing/offer/us/2020/us-2392070-crm-longtail-offerpage-world-icon.png); background-position: 27px 20px;}
    .wepImg { background-color: #bbb4cc; background-image: url(https://www.ancestrycdn.com/mars/landing/offer/us/2020/us-2392070-crm-longtail-offerpage-world-plus-icon.png); background-position: 27px 40px;}
</style> */}