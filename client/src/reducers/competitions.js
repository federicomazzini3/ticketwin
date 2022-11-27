export default (competitions = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...competitions, action.payload];
        default:
            return competitions;
    }
}