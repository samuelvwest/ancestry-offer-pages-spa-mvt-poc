import { showSettingsTest } from '../actions/pageSettings';
import { getVariablesLocal } from '../actions/variables';

export const variables = getVariablesLocal() || {
        headerStyle: `control`,
        headerText: `control`,
        timeline: false,
        offerStyle: `control`,
        gridStyle: `control`,
        // currentPlan options: us 1month, us 6month, we 1month, we 6month, aa 1month, aa 6month
        currentPlan: `unset` 
    }

export default variables;