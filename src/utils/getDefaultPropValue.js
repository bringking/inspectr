export default ( component, propName ) => {

    let result = 'N/A';
    if ( !component.defaultProps ) {
        return result;
    }

    const prop = component.defaultProps[propName];
    if ( prop ) {
        result = component.defaultProps[propName].toString();
    }
    return result;

};