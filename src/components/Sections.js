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
    return (
        <div className={classesMaker('bonsaigrid')}>
            <section id="benefitListCon">
                {props.pageSettings.elligibility === `freetrial` && <div id="testimonials">
                    <p className="quote textalt">“I tried a 2-week free trial membership and I'm so glad I did. I can't believe how much I discovered.”</p>
                    <p className="source"><strong>Mary D.</strong> – Ancestry Member</p>
                </div>}
                
                <table id="compareTable2">
                    <tbody>
                        <tr className="tableHeadingWrap rounded topright">
                            <th scope="col"></th>
                            <th scope="col" id="usTab" className="tableHeading rounded topleft">U.S. Discovery</th>
                            <th scope="col" id="worldTab" className="tableHeading">World Explorer</th>
                            <th scope="col" id="worldPlusTab" className="tableHeading rounded topright">All<br />Access</th>
                        </tr>
                        <tr className="compareTxt">
                            <th scope="row" className="noTopSpacing">Find stories among 142 million plus articles on Newspapers.com<br /><span className="textsml"><sup>‡</sup> Other subscriptions to Newspapers.com may be available but are not included in the All Access package</span></th>
                            <td className="leafCol usCol"><span className="screenReaderText">no</span></td>
                            <td className="leafCol worldCol"><span className="screenReaderText">no</span></td>
                            <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                        </tr>
                        <tr className="compareTxt">
                            <th scope="row" className="noTopSpacing">Explore more than 537 million records on Fold3, our historical military records website</th>
                            <td className="leafCol usCol"><span className="screenReaderText">no</span></td>
                            <td className="leafCol worldCol"><span className="screenReaderText">no</span></td>
                            <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                        </tr>
                        <tr className="compareTxt">
                            <th scope="row" className="noTopSpacing">Enjoy unlimited access to more than 3 billion international birth, marriage, death, census, military, church and other records</th>
                            <td className="leafCol usCol"><span className="screenReaderText">no</span></td>
                            <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                        </tr>
                        <tr className="compareTxt">
                            <th scope="row" className="noTopSpacing">Discover your immigrant ancestors and learn more about your family’s homeland in detailed passenger lists, border crossings and more</th>
                            <td className="leafCol usCol"><span className="screenReaderText">no</span></td>
                            <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                        </tr>
                        <tr className="compareTxt">
                            <th scope="row" className="noTopSpacing">Travel back to the 16th century in popular UK birth, marriage and death records and see original hand-written documents</th>
                            <td className="leafCol usCol"><span className="screenReaderText">no</span></td>
                            <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                        </tr>
                        <tr className="compareTxt">
                            <th scope="row" className="noTopSpacing">Learn about your ancestors in more than 80 countries outside the U.S., including the UK, Ireland, Canada, Germany, Australia, France, Denmark, Norway, Sweden and more</th>
                            <td className="leafCol usCol"><span className="screenReaderText">no</span></td>
                            <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                        </tr>
                        <tr className="compareTxt">
                            <th scope="row" className="noTopSpacing">Explore all our U.S. record collections including birth, marriage, death and census records detailing occupations, ages, siblings, birthplaces, addresses, and more – even maiden names</th>
                            <td className="leafCol usCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                        </tr>
                        <tr className="compareTxt">
                            <th scope="row" className="noTopSpacing">Connect with millions of other Ancestry members to ask for help, share ideas, make discoveries and possibly discover living relatives you never knew you had</th>
                            <td className="leafCol usCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                        </tr>
                        <tr className="compareTxt">
                            <th scope="row" className="noTopSpacing">Organize, preserve and share your family tree online with advanced tools that help you grow your tree and upload photos and stories</th>
                            <td className="leafCol usCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                        </tr>
                        <tr className="compareTxt">
                            <th scope="row" className="noTopSpacing">Learn from our exclusive Ancestry Hints – where we do the searching for you to expand your family tree</th>
                            <td className="leafCol usCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                        </tr>
                        <tr className="compareTxt">
                            <th scope="row" className="noTopSpacing">Make discoveries in Ancestry special collections with records and help focusing on African-American and Jewish family history</th>
                            <td className="leafCol usCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldPlusCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                        </tr>
                        <tr className="compareTxt rounded bottom">
                            <th scope="row" className="noTopSpacing">Get simple-to-understand guidance every step of the way so you can start making discoveries on day one</th>
                            <td className="leafCol usCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldCol"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                            <td className="leafCol worldPlusCol rounded bottomright"><span className="icon iconLeaf"><span className="screenReaderText">yes</span></span></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
})


const SectionStyles = connect(mapStateToProps)((props) => {
    return <BonsaiSections/>
});

export default SectionStyles;