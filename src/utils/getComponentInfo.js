import Table from 'cli-table';
import getPropTypeAsString from './getPropTypeAsString';
import getDefaultPropValue from './getDefaultPropValue';

export default ( component )=> {

    const table = new Table({
        head: ['Property', 'Type', 'Default Value']
    });

    if ( component.propTypes ) {
        Object.keys(component.propTypes).forEach(k => {
            table.push([k, getPropTypeAsString(component.propTypes[k], k), getDefaultPropValue(component, k)]);
        });
    }


    return table.toString();
};