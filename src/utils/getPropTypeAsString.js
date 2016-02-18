export default ( type, propName ) => {


    let result = 'unknown',
        allowsArray,
        allowsBool,
        allowsFunc,
        allowsNumber,
        allowsObject,
        allowsString;

    if ( type({ [propName]: [] }, propName) === null ) {
        result = 'React.PropTypes.array';
        allowsArray = true;
    }
    if ( type({ [propName]: true }, propName) === null ) {
        result = 'React.PropTypes.bool';
        allowsBool = true;
    }

    if ( type({ [propName]: () => false }, propName) === null ) {
        result = 'React.PropTypes.func';
        allowsFunc = true;
    }
    if ( type({ [propName]: 1 }, propName) === null ) {
        result = 'React.PropTypes.number';
        allowsNumber = true;
    }
    if ( type({ [propName]: {} }, propName) === null ) {
        result = 'React.PropTypes.object';
        allowsObject = true;
    }

    if ( type({ [propName]: 'test' }, propName) === null ) {
        result = 'React.PropTypes.string';
        allowsString = true;
    }

    if ( allowsArray && allowsBool && allowsFunc && allowsNumber && allowsObject && allowsString ) {
        result = '(inferred) React.PropTypes.any';
    }


    return result;

};