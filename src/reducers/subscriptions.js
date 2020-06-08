import subscriptions from '../data/subscriptions';

export default (state = subscriptions, action) => {
    switch (action.type) {
        case 'SET_SUBSCRIPTIONS':
            // return action.assets || assetsReducerDefaultState;
            return action.subscriptiions;
        default: 
            return subscriptions;
    }
}
