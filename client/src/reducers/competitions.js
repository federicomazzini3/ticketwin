export default (competitions = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return competitions;
        default:
            return competitions;
    }
}