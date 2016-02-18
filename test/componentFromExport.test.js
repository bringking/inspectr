import {expect} from 'chai';
import componentFromExport from '../src/utils/componentFromExport';
import isStatelessFunction from '../src/utils/isStatelessComponent';

const isComponent = ( component ) => !!component.prototype.isReactComponent;

describe('componentFromExport', ()=> {
    it('will extract a component from a es6 React.createClass export', ()=> {
        let componentInstance = componentFromExport(require('../example/components/test_create_class_es6_default'));
        expect(isComponent(componentInstance)).to.equal(true);
    });

    it('will extract a component from a es5 default export', ()=> {
        let componentInstance = componentFromExport(require('../example/components/test_default_export_es5'));
        expect(isComponent(componentInstance)).to.equal(true);
    });

    it('will extract a component from a es6 default export', ()=> {
        let componentInstance = componentFromExport(require('../example/components/test_default_export_es6'));
        expect(isComponent(componentInstance)).to.equal(true);
    });

    it('will extract a component from a named export in es5', ()=> {
        let componentInstance = componentFromExport(require('../example/components/test_named_export_es5'), 'TestComponent');
        expect(isComponent(componentInstance)).to.equal(true);
    });

    it('will extract a component from a named export in es6', ()=> {
        let componentInstance = componentFromExport(require('../example/components/test_named_export_es6'), 'TestComponent');
        expect(isComponent(componentInstance)).to.equal(true);
    });

    it('will extract a stateless function from a default export es5', ()=> {
        let componentInstance = componentFromExport(require('../example/components/test_stateless_default_es5'));
        expect(componentInstance).to.be.a('function');
        expect(isStatelessFunction(componentInstance)).to.equal(true);
    });
    it('will extract a stateless function from a default export es6', ()=> {
        let componentInstance = componentFromExport(require('../example/components/test_stateless_default_es6'));
        expect(componentInstance).to.be.a('function');
        expect(isStatelessFunction(componentInstance)).to.equal(true);
    });
});