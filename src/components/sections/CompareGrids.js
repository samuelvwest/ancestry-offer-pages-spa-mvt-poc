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
    return `container container--${styleName} grid-style grid-style--${styleName}`
}

const BonsaiSections = connect(mapStateToProps)((props) => {
    if (props.variables.gridStyle === 'sparkly-dragon') {
        const emptyFunction = () => {
            console.log('emptyFunction')
        }
        return (
            <div className={classesMaker('sparklydragon')}>
            <section className="plan-comparison-chart hide480" id="plan-comparision">
            <table>
                <tbody>
                    <tr className="table-title">
                        <th className="rec-acc bold text2xlrg">
                            <span className="text3xlrg">Plan Comparison</span>
                            <br /><div className="topSpacingBlock">Record Access</div>
                        </th>
                        <th className="bold textxlrg bamboo3 textCenter align-base rel-pos triangle-start">
                            <div className="least-rec-txt">Least Records</div>
                            <span className="show768 hidden-lg-up">
                                <img className="usrecords-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/us.svg" />
                                <br />U.S
                                <br />Discovery
                            </span> 
                            <span className="tb-plan-head hide768">
                                U.S. Discovery 
                                <img className="usrecords-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/us.svg" />
                            </span>
                        </th>
                        <th className="bold textxlrg Wave3 textCenter align-base">
                            <span className="show768 hidden-lg-up">
                                <img className="usnintrecords-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/world.svg" />
                                <br />World
                                <br />Explorer
                            </span>
                            <span className="tb-plan-head hide768">
                                World Explorer<img className="usnintrecords-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.11/images/world.svg" />
                            </span>
                        </th>
                        <th className="bold textxlrg allaccess-color textCenter align-base rel-pos">
                            <div className="most-rec-txt">
                                Most
                                <br /><span>Records</span>
                            </div>
                            <span className="show768 hidden-lg-up">
                                <svg width="38" height="35" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="allaccess-img">
                                    <circle cx="17" cy="20" r="16" fill="white" stroke="white" strokeWidth="2"></circle>
                                    <path d="M17 5C8.73846 5 2 11.7385 2 20C2 28.3077 8.73846 35 17 35C25.2615 35 32 28.3077 32 20C32 11.7385 25.2615 5 17 5ZM16.9077 6.8L18.2462 7.35385L17.6 8.87692C16.8615 9.24615 16.1231 9.47692 15.3385 9.75385L14.8769 10.5846L14.4615 10.7692L13.8615 9.61538L14.2769 9.15385V8.69231L13.1231 7.86154L13.4923 7.53846L15.3846 6.98462L16.9077 6.8ZM13.3077 6.89231L13.4923 7.21538C13.1231 7.35385 12.8 7.49231 12.4308 7.63077L11.8769 7.76923L11.6462 8L11 7.90769L11.1385 7.72308L11.3692 7.63077L11.7846 7.4L12.2923 7.35385L12.6154 6.98462L13.3077 6.89231ZM10.2615 8.32308L10.5385 8.78462L10.7231 8.41538L11.1846 8.32308L11.2308 8.6L12.2 8.69231L12.4308 9.24615L13.0308 9.47692L12.4769 9.89231C12.1538 9.66154 11.7846 9.47692 11.4615 9.24615L11 9.01539C10.7692 9.15385 10.5846 9.33846 10.3538 9.47692L10.0308 10.0769H9.56923L9.70769 9.61538L9.15385 10.1692L7.90769 10.9077L8.04615 11.4154L9.01539 11.8308L9.15385 12.4769L9.52308 11.6923L10.0308 11.5077L9.98461 11.1385L10.5846 10.1692L11.2769 10.5385L11.1846 11L11.7846 10.7692L12.0615 11.3231L11.9692 11.6923L12.3385 11.8308L12.6615 12.1077L12.5231 12.4308L11.6462 12.7538H11.0462L10.1692 13.1231H11.5538L11.0923 13.8154L10.2154 14L9.8 14.6L9.06154 14.8769L8.73846 15.7538L7.76923 16.5846L7.63077 17.6923L7.07692 17L6.29231 16.8615L6.15385 17.2308H5.50769L4.81538 17.7846L4.67692 18.4769L4.72308 19.1231L5.27692 19.4L5.64615 19.2615L6.01539 18.7538H6.38462C6.33846 19.1692 6.29231 19.5846 6.24615 20L6.89231 19.9538V20.5538L7.07692 21.1538C7.30769 21.2923 7.67692 21.2923 7.95385 21.3846V21.2462L8.83077 20.4154L9.70769 21.0615L10.7231 20.9231L11.1385 22.0308L11.8769 22.1692L12.2923 23C13.1231 23.4154 13.9538 23.8769 14.7846 24.2923L14.6923 25.1231L14.0462 26L14.1385 27.2L13.7692 28.0769L12.9846 28.2615L12.6154 28.7692L12.7538 29.1385L12.2923 30.3846L11.6462 30.6615L11.4615 31.0308L11.0923 31.4462L11.2308 31.7231C11.2308 31.7231 11.0923 31.8154 11 31.8615C10.9077 31.9538 9.29231 31.0769 9.24615 30.9385C9.2 30.8 9.24615 30.8 9.24615 30.8L9.61538 29.4154L9.2 28.7692L9.24615 27.5692L8.87692 27.0154L8 26.1846L7.07692 24.5231L7.35385 23.6462L7.21538 23.4154L7.58462 22.9538L7.95385 21.8462V21.7077L7.63077 21.5692L7.21538 21.6154L6.52308 21.1077L6.06154 20.5077L5 20.2308L3.89231 19.5846C3.89231 19.5846 3.43077 18.8923 3.43077 18.7538C4.03077 13.5846 6.84615 10.7692 8.23077 9.47692C8.32308 9.43077 8.78462 9.33846 8.78462 9.33846L9.01539 8.69231L9.43077 8.73846L9.75385 8.92308L9.70769 9.56923L9.8 9.43077L10.2154 9.06154L10.1692 8.46154L10.2615 8.32308ZM23.3231 8.73846L23.9692 8.96923L25.1692 9.2L24.8923 9.56923H24.2L24.8923 10.2615L25.4 9.66154L25.5385 9.38462C25.5385 9.38462 27.4769 11.1385 28.5846 13.0769C29.6923 15.0154 30.2462 17.2769 30.2462 17.7385L29.9231 18.1538C29.6923 17.8769 29.4154 17.6462 29.1385 17.4154L28.5385 17.5077L28.0769 16.8615V17.6462L28.4923 17.9692L28.8615 18.3385L29.2308 17.8308C29.3231 18.0154 29.4154 18.2462 29.5077 18.4308V19.0308L29.0923 19.5385L28.2154 20.1385L27.6154 20.7385C27.8923 20.7385 28.1692 20.6462 28.4923 20.6V21.0154L27.8462 22.5385L27.2923 23.1385L26.8308 24.1077V25.7692L26.9692 26.4154L26.7385 26.6923L26.2308 27.0615L25.6308 27.5231L26.0923 28.0769L25.4462 28.6769L25.5846 29.0462L24.5692 30.1538H23.9231L23.3231 30.5231H23V30.0154L22.8615 29.1385C22.6769 28.5385 22.4462 27.9385 22.2154 27.3846C22.2154 26.9692 22.2154 26.5538 22.2615 26.1385L22.4923 25.5385L22.1231 24.8462L22.1692 23.9231L21.7077 23.3231L21.9385 22.5846L21.5231 22.1231H20.8769L20.6462 21.8923L20 22.2615L19.6769 21.9846L19.0769 22.5385C18.6615 22.0308 18.2 21.5231 17.7385 21.0615L17.1846 19.8615L17.6462 19.1692L17.4154 18.8462L17.9692 17.5538C18.4308 17 18.9385 16.4462 19.4 15.8923L20.2769 15.6615L21.2462 15.5231L21.8923 15.7077L22.8154 16.6308L23.1385 16.2615L23.6462 16.1231L24.5231 16.4462H25.1692L25.6308 16.0308L25.8154 15.7538L25.4 15.4769L24.6154 15.4308C24.3846 15.1538 24.2 14.8308 23.9692 14.5538L23.7385 14.6462L23.6 15.4308L23.1385 14.8769L23.0462 14.2769L22.4923 13.9077H22.3077L22.8615 14.5077L22.6769 15.0154L22.2615 15.1538L22.4923 14.6462L22.0769 14.3692L21.6154 13.9538L20.8769 14.0923L20.6923 14.3231L20.2769 14.6462L20.0462 15.2923L19.4 15.6154L19.1231 15.2923H18.8V14.2308L19.4462 13.9077H20L19.8615 13.4923L19.4462 13.0769L20.1385 12.9385L20.5077 12.5231L20.6462 12.2462L20.2769 12.6154L19.6769 12.7538L19.8154 12.0615V11.5538L19.6308 11.3231V11H19.9077C20.0462 11.3231 20.2308 11.6 20.3231 11.8769L20.6923 12.2462L20.8769 12.0154H21.4308L21.2923 11.6L21.6615 11.4154V11.8769L22.4 12.0154L23.1846 11.3692L23.2308 11.0462L23.8769 10.5846C23.6462 10.6308 23.4154 10.6308 23.1846 10.7231V10.2154L23.4154 9.61538H23.1846L22.5385 10.1692L22.4 10.4462L22.5385 10.8154L22.3077 11.5077L21.9385 11.2769L21.5692 10.9077L21.0615 11.2769L20.8308 10.3538L21.8 9.70769V9.38462L22.4 9.01539L23.3231 8.73846ZM18.2923 9.47692L18.6154 9.84615L17.9692 10.2615L17.6 10.0308L17.6462 9.66154L17.8308 9.70769L18.2923 9.47692ZM11.5538 9.61538L12.0615 9.84615V10.2615H11.6462L11.1846 9.89231L11.5538 9.61538ZM19.4 11.6462L19.5846 12.1538L19.1692 12.3846L19.0308 11.7385L19.4 11.6462ZM12.3385 12.7077L12.8462 13.0308L12.4769 13.4923L12.3385 12.7077Z" fill="#61527E"></path>
                                    <circle cx="32.5" cy="9.5" r="8.5" fill="#61527E" stroke="white" strokeWidth="2"></circle>
                                    <rect x="28.75" y="8.79688" width="7.5" height="1.40625" rx="0.703125" fill="white"></rect>
                                    <rect x="31.7969" y="13.25" width="7.5" height="1.40625" rx="0.703125" transform="rotate(-90 31.7969 13.25)" fill="white"></rect>
                                </svg>
                                <br />All Access
                            </span> 
                            <span className="tb-plan-head hide768">
                                All Access
                                <svg width="38" height="35" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="allaccess-img">
                                    <circle cx="17" cy="20" r="16" fill="white" stroke="white" strokeWidth="2"></circle>
                                    <path d="M17 5C8.73846 5 2 11.7385 2 20C2 28.3077 8.73846 35 17 35C25.2615 35 32 28.3077 32 20C32 11.7385 25.2615 5 17 5ZM16.9077 6.8L18.2462 7.35385L17.6 8.87692C16.8615 9.24615 16.1231 9.47692 15.3385 9.75385L14.8769 10.5846L14.4615 10.7692L13.8615 9.61538L14.2769 9.15385V8.69231L13.1231 7.86154L13.4923 7.53846L15.3846 6.98462L16.9077 6.8ZM13.3077 6.89231L13.4923 7.21538C13.1231 7.35385 12.8 7.49231 12.4308 7.63077L11.8769 7.76923L11.6462 8L11 7.90769L11.1385 7.72308L11.3692 7.63077L11.7846 7.4L12.2923 7.35385L12.6154 6.98462L13.3077 6.89231ZM10.2615 8.32308L10.5385 8.78462L10.7231 8.41538L11.1846 8.32308L11.2308 8.6L12.2 8.69231L12.4308 9.24615L13.0308 9.47692L12.4769 9.89231C12.1538 9.66154 11.7846 9.47692 11.4615 9.24615L11 9.01539C10.7692 9.15385 10.5846 9.33846 10.3538 9.47692L10.0308 10.0769H9.56923L9.70769 9.61538L9.15385 10.1692L7.90769 10.9077L8.04615 11.4154L9.01539 11.8308L9.15385 12.4769L9.52308 11.6923L10.0308 11.5077L9.98461 11.1385L10.5846 10.1692L11.2769 10.5385L11.1846 11L11.7846 10.7692L12.0615 11.3231L11.9692 11.6923L12.3385 11.8308L12.6615 12.1077L12.5231 12.4308L11.6462 12.7538H11.0462L10.1692 13.1231H11.5538L11.0923 13.8154L10.2154 14L9.8 14.6L9.06154 14.8769L8.73846 15.7538L7.76923 16.5846L7.63077 17.6923L7.07692 17L6.29231 16.8615L6.15385 17.2308H5.50769L4.81538 17.7846L4.67692 18.4769L4.72308 19.1231L5.27692 19.4L5.64615 19.2615L6.01539 18.7538H6.38462C6.33846 19.1692 6.29231 19.5846 6.24615 20L6.89231 19.9538V20.5538L7.07692 21.1538C7.30769 21.2923 7.67692 21.2923 7.95385 21.3846V21.2462L8.83077 20.4154L9.70769 21.0615L10.7231 20.9231L11.1385 22.0308L11.8769 22.1692L12.2923 23C13.1231 23.4154 13.9538 23.8769 14.7846 24.2923L14.6923 25.1231L14.0462 26L14.1385 27.2L13.7692 28.0769L12.9846 28.2615L12.6154 28.7692L12.7538 29.1385L12.2923 30.3846L11.6462 30.6615L11.4615 31.0308L11.0923 31.4462L11.2308 31.7231C11.2308 31.7231 11.0923 31.8154 11 31.8615C10.9077 31.9538 9.29231 31.0769 9.24615 30.9385C9.2 30.8 9.24615 30.8 9.24615 30.8L9.61538 29.4154L9.2 28.7692L9.24615 27.5692L8.87692 27.0154L8 26.1846L7.07692 24.5231L7.35385 23.6462L7.21538 23.4154L7.58462 22.9538L7.95385 21.8462V21.7077L7.63077 21.5692L7.21538 21.6154L6.52308 21.1077L6.06154 20.5077L5 20.2308L3.89231 19.5846C3.89231 19.5846 3.43077 18.8923 3.43077 18.7538C4.03077 13.5846 6.84615 10.7692 8.23077 9.47692C8.32308 9.43077 8.78462 9.33846 8.78462 9.33846L9.01539 8.69231L9.43077 8.73846L9.75385 8.92308L9.70769 9.56923L9.8 9.43077L10.2154 9.06154L10.1692 8.46154L10.2615 8.32308ZM23.3231 8.73846L23.9692 8.96923L25.1692 9.2L24.8923 9.56923H24.2L24.8923 10.2615L25.4 9.66154L25.5385 9.38462C25.5385 9.38462 27.4769 11.1385 28.5846 13.0769C29.6923 15.0154 30.2462 17.2769 30.2462 17.7385L29.9231 18.1538C29.6923 17.8769 29.4154 17.6462 29.1385 17.4154L28.5385 17.5077L28.0769 16.8615V17.6462L28.4923 17.9692L28.8615 18.3385L29.2308 17.8308C29.3231 18.0154 29.4154 18.2462 29.5077 18.4308V19.0308L29.0923 19.5385L28.2154 20.1385L27.6154 20.7385C27.8923 20.7385 28.1692 20.6462 28.4923 20.6V21.0154L27.8462 22.5385L27.2923 23.1385L26.8308 24.1077V25.7692L26.9692 26.4154L26.7385 26.6923L26.2308 27.0615L25.6308 27.5231L26.0923 28.0769L25.4462 28.6769L25.5846 29.0462L24.5692 30.1538H23.9231L23.3231 30.5231H23V30.0154L22.8615 29.1385C22.6769 28.5385 22.4462 27.9385 22.2154 27.3846C22.2154 26.9692 22.2154 26.5538 22.2615 26.1385L22.4923 25.5385L22.1231 24.8462L22.1692 23.9231L21.7077 23.3231L21.9385 22.5846L21.5231 22.1231H20.8769L20.6462 21.8923L20 22.2615L19.6769 21.9846L19.0769 22.5385C18.6615 22.0308 18.2 21.5231 17.7385 21.0615L17.1846 19.8615L17.6462 19.1692L17.4154 18.8462L17.9692 17.5538C18.4308 17 18.9385 16.4462 19.4 15.8923L20.2769 15.6615L21.2462 15.5231L21.8923 15.7077L22.8154 16.6308L23.1385 16.2615L23.6462 16.1231L24.5231 16.4462H25.1692L25.6308 16.0308L25.8154 15.7538L25.4 15.4769L24.6154 15.4308C24.3846 15.1538 24.2 14.8308 23.9692 14.5538L23.7385 14.6462L23.6 15.4308L23.1385 14.8769L23.0462 14.2769L22.4923 13.9077H22.3077L22.8615 14.5077L22.6769 15.0154L22.2615 15.1538L22.4923 14.6462L22.0769 14.3692L21.6154 13.9538L20.8769 14.0923L20.6923 14.3231L20.2769 14.6462L20.0462 15.2923L19.4 15.6154L19.1231 15.2923H18.8V14.2308L19.4462 13.9077H20L19.8615 13.4923L19.4462 13.0769L20.1385 12.9385L20.5077 12.5231L20.6462 12.2462L20.2769 12.6154L19.6769 12.7538L19.8154 12.0615V11.5538L19.6308 11.3231V11H19.9077C20.0462 11.3231 20.2308 11.6 20.3231 11.8769L20.6923 12.2462L20.8769 12.0154H21.4308L21.2923 11.6L21.6615 11.4154V11.8769L22.4 12.0154L23.1846 11.3692L23.2308 11.0462L23.8769 10.5846C23.6462 10.6308 23.4154 10.6308 23.1846 10.7231V10.2154L23.4154 9.61538H23.1846L22.5385 10.1692L22.4 10.4462L22.5385 10.8154L22.3077 11.5077L21.9385 11.2769L21.5692 10.9077L21.0615 11.2769L20.8308 10.3538L21.8 9.70769V9.38462L22.4 9.01539L23.3231 8.73846ZM18.2923 9.47692L18.6154 9.84615L17.9692 10.2615L17.6 10.0308L17.6462 9.66154L17.8308 9.70769L18.2923 9.47692ZM11.5538 9.61538L12.0615 9.84615V10.2615H11.6462L11.1846 9.89231L11.5538 9.61538ZM19.4 11.6462L19.5846 12.1538L19.1692 12.3846L19.0308 11.7385L19.4 11.6462ZM12.3385 12.7077L12.8462 13.0308L12.4769 13.4923L12.3385 12.7077Z" fill="#61527E"></path>
                                    <circle cx="32.5" cy="9.5" r="8.5" fill="#61527E" stroke="white" strokeWidth="2"></circle>
                                    <rect x="28.75" y="8.79688" width="7.5" height="1.40625" rx="0.703125" fill="white"></rect>
                                    <rect x="31.7969" y="13.25" width="7.5" height="1.40625" rx="0.703125" transform="rotate(-90 31.7969 13.25)" fill="white"></rect>
                                </svg>
                            </span>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Access to all <span className="bold">U.S. records</span> on Ancestry <a href="#examples-head-md-up" className="example-right-align" onClick={emptyFunction}>See example</a>
                            <br />
                            <div className="topSpacing plan-para-color">Explore the billions of records in our U.S. record collection including birth, marriage, death and census records.</div>
                        </td>
                        <td>
                            <div className="check-wrapper usdiscovery-bg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="plan-comp-check-icon">
                                    <path className="icon-check-fill-usdis" fillRule="evenodd" clipRule="evenodd" d="M4.3125 6.23975C3.7002 5.62744 2.47559 4.40283 1.86328 3.79053C1.39746 4.25635 0.46582 5.18799 0 5.65381C1.05762 6.71436 3.17285 8.83545 4.23047 9.896C6.17285 7.95361 10.0576 4.06885 12 2.12646C11.5547 1.67822 10.6641 0.781738 10.2188 0.333496C8.74219 1.81006 5.78906 4.76318 4.3125 6.23975V6.23975Z" fill="white"></path>
                                </svg>
                            </div>
                        </td>
                        <td>
                            <div className="check-wrapper worldexplorer-bg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="plan-comp-check-icon">
                                    <path className="icon-check-fill-worldex" fillRule="evenodd" clipRule="evenodd" d="M4.3125 6.23975C3.7002 5.62744 2.47559 4.40283 1.86328 3.79053C1.39746 4.25635 0.46582 5.18799 0 5.65381C1.05762 6.71436 3.17285 8.83545 4.23047 9.896C6.17285 7.95361 10.0576 4.06885 12 2.12646C11.5547 1.67822 10.6641 0.781738 10.2188 0.333496C8.74219 1.81006 5.78906 4.76318 4.3125 6.23975V6.23975Z" fill="white"></path>
                                </svg>
                            </div>
                        </td>
                        <td>
                            <div className="check-wrapper allaccess-bg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="plan-comp-check-icon">
                                    <path className="icon-check-fill-allacc" fillRule="evenodd" clipRule="evenodd" d="M4.3125 6.23975C3.7002 5.62744 2.47559 4.40283 1.86328 3.79053C1.39746 4.25635 0.46582 5.18799 0 5.65381C1.05762 6.71436 3.17285 8.83545 4.23047 9.896C6.17285 7.95361 10.0576 4.06885 12 2.12646C11.5547 1.67822 10.6641 0.781738 10.2188 0.333496C8.74219 1.81006 5.78906 4.76318 4.3125 6.23975V6.23975Z" fill="white"></path>
                                </svg>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="flex-container">
                                <span>Access to all <span className="bold">international records</span> on Ancestry</span> <a href="#examples-head-md-up" className="flex-auto" onClick={emptyFunction}>See example</a>
                            </span>
                            <div className="topSpacing plan-para-color">Access more than 3 billion international birth, marriage, death, census, military, religious, and other records.</div>
                        </td>
                        <td>
                            <div className="check-wrapper usdiscovery-bg cross-bg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 12" fill="none" className="plan-comp-cross-icon">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.81641C11.5488 1.3623 10.6465 0.454102 10.1953 0C9.14648 1.04883 7.04883 3.14648 6 4.19531C4.9541 3.14648 2.8623 1.04883 1.81641 0C1.3623 0.454102 0.454102 1.3623 0 1.81641C1.04883 2.8623 3.14648 4.9541 4.19531 6C3.14648 7.04883 1.04883 9.14648 0 10.1953C0.454102 10.6465 1.3623 11.5488 1.81641 12C2.8623 10.9512 4.9541 8.85352 6 7.80469C7.04883 8.85352 9.14648 10.9512 10.1953 12C10.6465 11.5488 11.5488 10.6465 12 10.1953C10.9512 9.14648 8.85352 7.04883 7.80469 6C8.85352 4.9541 10.9512 2.8623 12 1.81641V1.81641Z" fill="#d6d5d5"></path>
                                </svg>
                            </div>
                        </td>
                        <td>
                            <div className="check-wrapper worldexplorer-bg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="plan-comp-check-icon">
                                    <path className="icon-check-fill-worldex" fillRule="evenodd" clipRule="evenodd" d="M4.3125 6.23975C3.7002 5.62744 2.47559 4.40283 1.86328 3.79053C1.39746 4.25635 0.46582 5.18799 0 5.65381C1.05762 6.71436 3.17285 8.83545 4.23047 9.896C6.17285 7.95361 10.0576 4.06885 12 2.12646C11.5547 1.67822 10.6641 0.781738 10.2188 0.333496C8.74219 1.81006 5.78906 4.76318 4.3125 6.23975V6.23975Z" fill="white"></path>
                                </svg>
                            </div>
                        </td>
                        <td>
                            <div className="check-wrapper allaccess-bg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="plan-comp-check-icon">
                                    <path className="icon-check-fill-allacc" fillRule="evenodd" clipRule="evenodd" d="M4.3125 6.23975C3.7002 5.62744 2.47559 4.40283 1.86328 3.79053C1.39746 4.25635 0.46582 5.18799 0 5.65381C1.05762 6.71436 3.17285 8.83545 4.23047 9.896C6.17285 7.95361 10.0576 4.06885 12 2.12646C11.5547 1.67822 10.6641 0.781738 10.2188 0.333496C8.74219 1.81006 5.78906 4.76318 4.3125 6.23975V6.23975Z" fill="white"></path>
                                </svg>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="table-row-head">
                                <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.17/images/newspapers.svg" className="table-newspapers-img" /> 
                                <a href="#examples-head-md-up" onClick={emptyFunction}>See example</a>
                            </span>
                            <div className="tooltip">
                                <span className="textsml basicsubs-wrap">
                                    <span className="mr-1">Basic subscription</span>
                                    <img className="align-middle" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.10/images/question.png" />
                                </span>
                                <span className="tooltiptext tooltip-top normal">Other subsciptions to Newspapers.com may be available, but are not included in the All Access package</span>
                            </div>
                            <div className="topSpacing plan-para-color">Search for family stories in more than 142 million U.S. and world articles on Newspapers.com™.</div>
                        </td>
                        <td>
                            <div className="check-wrapper usdiscovery-bg cross-bg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 12" fill="none" className="plan-comp-cross-icon">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.81641C11.5488 1.3623 10.6465 0.454102 10.1953 0C9.14648 1.04883 7.04883 3.14648 6 4.19531C4.9541 3.14648 2.8623 1.04883 1.81641 0C1.3623 0.454102 0.454102 1.3623 0 1.81641C1.04883 2.8623 3.14648 4.9541 4.19531 6C3.14648 7.04883 1.04883 9.14648 0 10.1953C0.454102 10.6465 1.3623 11.5488 1.81641 12C2.8623 10.9512 4.9541 8.85352 6 7.80469C7.04883 8.85352 9.14648 10.9512 10.1953 12C10.6465 11.5488 11.5488 10.6465 12 10.1953C10.9512 9.14648 8.85352 7.04883 7.80469 6C8.85352 4.9541 10.9512 2.8623 12 1.81641V1.81641Z" fill="#d6d5d5"></path>
                                </svg>
                            </div>
                        </td>
                        <td>
                            <div className="check-wrapper usdiscovery-bg cross-bg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 12" fill="none" className="plan-comp-cross-icon">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.81641C11.5488 1.3623 10.6465 0.454102 10.1953 0C9.14648 1.04883 7.04883 3.14648 6 4.19531C4.9541 3.14648 2.8623 1.04883 1.81641 0C1.3623 0.454102 0.454102 1.3623 0 1.81641C1.04883 2.8623 3.14648 4.9541 4.19531 6C3.14648 7.04883 1.04883 9.14648 0 10.1953C0.454102 10.6465 1.3623 11.5488 1.81641 12C2.8623 10.9512 4.9541 8.85352 6 7.80469C7.04883 8.85352 9.14648 10.9512 10.1953 12C10.6465 11.5488 11.5488 10.6465 12 10.1953C10.9512 9.14648 8.85352 7.04883 7.80469 6C8.85352 4.9541 10.9512 2.8623 12 1.81641V1.81641Z" fill="#d6d5d5"></path>
                                </svg>
                            </div>
                        </td>
                        <td>
                            <div className="check-wrapper allaccess-bg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="plan-comp-check-icon">
                                    <path className="icon-check-fill-allacc" fillRule="evenodd" clipRule="evenodd" d="M4.3125 6.23975C3.7002 5.62744 2.47559 4.40283 1.86328 3.79053C1.39746 4.25635 0.46582 5.18799 0 5.65381C1.05762 6.71436 3.17285 8.83545 4.23047 9.896C6.17285 7.95361 10.0576 4.06885 12 2.12646C11.5547 1.67822 10.6641 0.781738 10.2188 0.333496C8.74219 1.81006 5.78906 4.76318 4.3125 6.23975V6.23975Z" fill="white"></path>
                                </svg>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="table-row-head">
                                <img src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.17/images/fold-3.svg" className="table-fold-img"/> 
                                <a href="#examples-head-md-up" onClick={emptyFunction}>See example</a>
                            </span>
                            <span className="textsml">Additional military records</span>
                            <div className="topSpacing plan-para-color">Search for family stories in more than 537 million U.S. military records on Fold3®.</div>
                        </td>
                        <td>
                            <div className="check-wrapper usdiscovery-bg cross-bg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 12" fill="none" className="plan-comp-cross-icon">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.81641C11.5488 1.3623 10.6465 0.454102 10.1953 0C9.14648 1.04883 7.04883 3.14648 6 4.19531C4.9541 3.14648 2.8623 1.04883 1.81641 0C1.3623 0.454102 0.454102 1.3623 0 1.81641C1.04883 2.8623 3.14648 4.9541 4.19531 6C3.14648 7.04883 1.04883 9.14648 0 10.1953C0.454102 10.6465 1.3623 11.5488 1.81641 12C2.8623 10.9512 4.9541 8.85352 6 7.80469C7.04883 8.85352 9.14648 10.9512 10.1953 12C10.6465 11.5488 11.5488 10.6465 12 10.1953C10.9512 9.14648 8.85352 7.04883 7.80469 6C8.85352 4.9541 10.9512 2.8623 12 1.81641V1.81641Z" fill="#d6d5d5"></path>
                                </svg>
                            </div>
                        </td>
                        <td>
                            <div className="check-wrapper usdiscovery-bg cross-bg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 12" fill="none" className="plan-comp-cross-icon">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.81641C11.5488 1.3623 10.6465 0.454102 10.1953 0C9.14648 1.04883 7.04883 3.14648 6 4.19531C4.9541 3.14648 2.8623 1.04883 1.81641 0C1.3623 0.454102 0.454102 1.3623 0 1.81641C1.04883 2.8623 3.14648 4.9541 4.19531 6C3.14648 7.04883 1.04883 9.14648 0 10.1953C0.454102 10.6465 1.3623 11.5488 1.81641 12C2.8623 10.9512 4.9541 8.85352 6 7.80469C7.04883 8.85352 9.14648 10.9512 10.1953 12C10.6465 11.5488 11.5488 10.6465 12 10.1953C10.9512 9.14648 8.85352 7.04883 7.80469 6C8.85352 4.9541 10.9512 2.8623 12 1.81641V1.81641Z" fill="#d6d5d5"></path>
                                </svg>
                            </div>
                        </td>
                        <td>
                            <div className="check-wrapper allaccess-bg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="plan-comp-check-icon">
                                    <path className="icon-check-fill-allacc" fillRule="evenodd" clipRule="evenodd" d="M4.3125 6.23975C3.7002 5.62744 2.47559 4.40283 1.86328 3.79053C1.39746 4.25635 0.46582 5.18799 0 5.65381C1.05762 6.71436 3.17285 8.83545 4.23047 9.896C6.17285 7.95361 10.0576 4.06885 12 2.12646C11.5547 1.67822 10.6641 0.781738 10.2188 0.333496C8.74219 1.81006 5.78906 4.76318 4.3125 6.23975V6.23975Z" fill="white"></path>
                                </svg>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <div className="plan-inclusions-container">
            <div id="plan-inclusion">
                <div className="plan-inclusions mt-0">
                    <header className="conHeader plan-inc-head">
                        <h1 className="conTitle planTitle inclusions-title">Included in All Plans</h1>
                        <button type="button" className="link iconAfter iconArrowDownAfter textlrg btn-pointer iconArrowUpAfter showall-btn showall-plan-inc hide show-md-up" aria-expanded="false" aria-controls="faqAnswer1" id="toggle-plan-inclusions" onClick={emptyFunction}>
                            <span id="toggle-plan-inclusions-txt" className="mr-1 textlrg toggle-plan-inclusions-txt">Show All</span>
                        </button>
                    </header>
                    <div className="features-wrapper-new">
                        <div className="hide show-md-up">
                            <div className="feature-wrap-new flex-container">
                                <img className="feature-img-new mobile-support-img" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/phone1.png" />
                                <div className="feature-description-new">
                                    <p className="feature-title-new">Support</p>
                                    <strong className="textlrg bamboo4">Need help?</strong>
                                    <span className="bamboo4 help-contact">1-800-ANCESTRY</span>
                                    <br /><span className="support-timings-txt">7 days a week, 9am–11pm ET</span>
                                </div>
                            </div>
                        </div>
                        <div className="hidden-md-up" id="plan-inclusions-new">
                            <div className="feature-wrap-new anc-hints flex-container">
                                <img className="feature-img-new" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/Leaf Solid.png" />
                                <div className="feature-description-new">
                                    <p className="feature-title-new">Ancestry Hints®</p>
                                    <p className="feature-subtitle-new">Where we do the searching for you to expand your family tree.</p>
                                </div>
                            </div>
                            <div className="feature-wrap-new anc-hints flex-container">
                                <img className="feature-img-new" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/iconTree.png" />
                                <div className="feature-description-new">
                                    <p className="feature-title-new">Family Tree Building Tools</p>
                                    <p className="feature-subtitle-new">See how you're related to family members across generations.</p>
                                </div>
                            </div>
                            <div className="feature-wrap-new anc-hints flex-container">
                                <img className="feature-img-new" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/tree_plus.png" />
                                <div className="feature-description-new">
                                    <p className="feature-title-new">Family Tree Sharing</p>
                                    <p className="feature-subtitle-new">Invite other family and friends to view or edit your tree.</p>
                                </div>
                            </div>
                            <div className="feature-wrap-new anc-hints flex-container">
                                <img className="feature-img-new" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/pictures.png" />
                                <div className="feature-description-new">
                                    <p className="feature-title-new">Family Media Upload</p>
                                    <p className="feature-subtitle-new">Save and preserve family records, stories, and photos to your account.</p>
                                </div>
                            </div>
                            <div className="feature-wrap-new anc-hints flex-container">
                                <img className="feature-img-new" src="https://www.ancestrycdn.com/pro-treeinteractions/prototypes/plan-select-mobile/0.0.36/images/people_man_comment.png" />
                                <div className="feature-description-new">
                                    <p className="feature-title-new">Ancestry Member Community</p>
                                    <p className="feature-subtitle-new">Connect with millions of other Ancestry© members to ask for help, share ideas, and make discoveries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    } else 
    // if (props.variables.gridStyle === 'control') 
    {
        if (window.innerWidth < props.pageSettings.breaks.control.tablet) {    
            return (
                <div className={classesMaker('bonsaigrid')}>
                    <div className="compareCon">
                        <table className="compareTable">
                            <caption className="textCenter bold">Compare memberships</caption>
                            <thead>
                                <tr className="">
                                    <th scope="col" abbr="U.S. Discovery" className="blueTxt bold text2xlrg w33">U.S. Discovery</th>
                                    <th scope="col" abbr="World Explorer" className="greenTxt bold text2xlrg w33">World Explorer</th>
                                    <th scope="col" abbr="All Access" className="orangeTxt bold text2xlrg w33">All Access</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="U.S. Discovery" className="textsml blueTxt">15 billion US records</td>
                                    <td data-label="World Explorer" className="textsml greenTxt">20 billion global records</td>
                                    <td data-label="All Access" className="textsml orangeTxt">20 billion global records <br/>500 million military records on Fold3® <br/>1 billion articles on Newspapers.com™ Basic</td>
                                </tr>
                                <tr>
                                    <th colSpan="3">Build your family tree</th>
                                </tr>
                                <tr>
                                    <td data-label="U.S. Discovery"><span className="icon iconCheck blueTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                                    <td data-label="World Explorer"><span className="icon iconCheck greenTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                                    <td data-label="All Access"><span className="icon iconCheck orangeTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                                </tr>
                                <tr>
                                    <th colSpan="3">Discover new details with Ancestry Hints®</th>
                                </tr>
                                <tr>
                                    <td data-label="U.S. Discovery"><span className="icon iconCheck blueTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                                    <td data-label="World Explorer"><span className="icon iconCheck greenTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                                    <td data-label="All Access"><span className="icon iconCheck orangeTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                                </tr>
                                <tr>
                                    <th colSpan="3">Search over 3 billion international historical&nbsp;records</th>
                                </tr>
                                <tr>
                                    <td data-label="U.S. Discovery"><span className="blueTxt text2xlrg"><span className="hideVisually">Not Included</span></span></td>
                                    <td data-label="World Explorer"><span className="icon iconCheck greenTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                                    <td data-label="All Access"><span className="icon iconCheck orangeTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                                </tr>
                                <tr>
                                    <th colSpan="3">Read over 1 billion historical articles with Newspapers.com™&nbsp;Basic</th>
                                </tr>
                                <tr>
                                    <td data-label="U.S. Discovery"><span className="blueTxt text2xlrg"><span className="hideVisually">Not Included</span></span></td>
                                    <td data-label="World Explorer"><span className="greenTxt text2xlrg"><span className="hideVisually">Not Included</span></span></td>
                                    <td data-label="All Access"><span className="icon iconCheck orangeTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                                </tr>
                                <tr>
                                    <th colSpan="3">Discover more than 500 million military records on&nbsp;Fold3.com®</th>
                                </tr>
                                <tr>
                                    <td data-label="U.S. Discovery"><span className="blueTxt text2xlrg"><span className="hideVisually">Not Included</span></span></td>
                                    <td data-label="World Explorer"><span className="greenTxt text2xlrg"><span className="hideVisually">Not Included</span></span></td>
                                    <td data-label="All Access"><span className="icon iconCheck orangeTxt text2xlrg"><span className="hideVisually">Included</span></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } 
        // else if (props.pageSettings.location === 'join') {
        //     // Green Top for Tablet & Desktop for CARE pages
        // } else if (window.innerWidth < props.pageSettings.breaks.control.desktop) {
        //     // Color Grid for Tablet on FTLP & HOLP
        // } 
        else {
            // Bonsai Grid for Desktp on FTLP & HOLP
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
        }
    }
    
    
})


const ComparegridStyles = connect(mapStateToProps)((props) => {
    return <BonsaiSections/>
});

export default ComparegridStyles;