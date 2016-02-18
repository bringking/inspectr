import isObject from 'lodash.isobject';
import isStatelessComponent from './isStatelessComponent';

const isComponent = ( component ) =>
component
&& component.prototype
&& !!component.prototype.isReactComponent;

export default ( modExport, componentName )=> {
    let foundComponent;

    if ( isComponent(modExport) || isStatelessComponent(modExport) ) {
        foundComponent = modExport;
    } else if ( isObject(modExport) && componentName && modExport[componentName] ) {
        foundComponent = modExport[componentName];
    } else if ( isObject(modExport) && modExport['default'] ) {
        foundComponent = modExport['default'];
    }

    // check if it is a component or stateless function and throw
    if ( !isComponent(foundComponent) && !isStatelessComponent(foundComponent) ) {
        return null;
    }

    return foundComponent;

};