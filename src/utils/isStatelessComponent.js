import isFunction from 'lodash.isfunction';

/**
 *
 * @param func
 * @returns {boolean}
 */
const isStatelessComponent = ( func ) => {
    if ( !isFunction(func) ) {
        return false;
    }
    try {
        let element = func();
        return element.hasOwnProperty('$$typeof') && element.$$typeof === Symbol.for('react.element');
    } catch ( e ) {
        return false;
    }
};

export default isStatelessComponent;
