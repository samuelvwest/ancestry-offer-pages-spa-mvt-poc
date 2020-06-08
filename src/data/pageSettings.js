import { showSettingsTest, getPageSettingsLocal, pageTest, elligibilityTest, denyType } from '../actions/pageSettings';



export const pageSettings = getPageSettingsLocal() || {
        location: pageTest(),
        elligibility: elligibilityTest(),
        showSettings: showSettingsTest(),
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        breaks: {
            control: {
                tablet: 601,
                desktop: 769
            }
        }
    }

pageSettings.denyType = denyType(pageSettings.location, window.deniedTo);

export default pageSettings;