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
    return `benefits-style benefits-style--${styleName}`
}

const BonsaiSections = connect(mapStateToProps)((props) => {
    // if (window.innerWidth < props.pageSettings.breaks.control.tablet) {
    //     // Color Stack for Phone on all offer pages
    // } else if (props.pageSettings.location === 'join') {
    //     // Green Top for Tablet & Desktop for CARE pages
    // } else if (window.innerWidth < props.pageSettings.breaks.control.desktop) {
    //     // Color Grid for Tablet on FTLP & HOLP
    // } else {
    //     // Bonsai Grid for Desktp on FTLP & HOLP
    // }
    const handleChooseMem = (e) => {
        e.preventDefault();
        const targetEl = document.getElementById('memOptions');
        targetEl.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <div className={classesMaker('bonsaigrid')}>
            <section className="otherBenefitsCon">
                <section className="guaranteeCon">
                    <img src="https://www.ancestrycdn.com/mars/landing/offer/us/ftlp-mobile/gaurantee-seal.png" data-src="https://www.ancestrycdn.com/mars/landing/offer/us/ftlp-mobile/gaurantee-seal.png" alt="Ancestry 100% Guarantee" className="guaranteeSealImg"/>
                    <div className="needHelpTextCon">
                        <p><strong className="textlrg">Need help?</strong><br/><span className="icon iconPhone">1-800-ANCESTRY</span></p>
                    </div>
				</section>
				<section className="exploreCon">
                    <div className="fullPgImgSprite lazyBgImg exploreImg loadedBgImg"></div>
                    <h3 className="text5xlrg">Explore records</h3>
                    <p className="text3xlrg">Discover your family story in billions of records—the largest collection online.</p>
				</section>
				<section className="growCon bgDark bgTexture1 bgColor4">
                    <div className="fullPgImgSprite lazyBgImg growImg loadedBgImg"></div>
                    <h3 className="text5xlrg">Grow your family tree</h3>
                    <p className="text3xlrg">We find new information about your family and help you discover more.</p>
				</section>
				<section className="goCon">
                    <div className="fullPgImgSprite lazyBgImg goImg loadedBgImg"></div>
                    <h3 className="text5xlrg">Go anywhere</h3>
                    <p className="text3xlrg">Take family history along with free mobile apps.</p>
				</section>
				<section className="getCon bgDark bgTexture1 bgColor3">
                    <div className="fullPgImgSprite lazyBgImg getImg loadedBgImg"></div>
                    <h3 className="text5xlrg">Get help</h3>
                    <p className="text3xlrg">Collaborate with the largest family history community—and even find new relatives.</p>
				</section>
                {props.pageSettings.elligibility === `freetrial` && (<section className="quoteCon">
                    <div className="quote">
                        <p>“I tried a 2-week free trial membership and I'm so glad I did. I can't believe how much I discovered.”</p>
                        <div className="quoteArrow"></div>
                    </div>
                    <div className="quoteNameCon">
                        <div className="fullPgImgSprite lazyBgImg quoteImg loadedBgImg"></div>
                        <p className="textalt coloralt text2xlrg">Mary D.<br/><span className="textxsml">ANCESTRY MEMBER</span></p>
                    </div>
				</section>)}
				
				<section className="finalCTACon">
                    <div className="btnCon">
                        <a href="#memOptions" className="ancBtn lrg" onClick={handleChooseMem}>Choose a membership</a>
                    </div>
				</section>
		    </section>
        </div>
    )
})


const OtherBenefitsStyles = connect(mapStateToProps)((props) => {
    return <BonsaiSections/>
});

export default OtherBenefitsStyles;