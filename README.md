[![Build Status](https://travis-ci.org/RinconStrategies/inspectr.svg?branch=master)](https://travis-ci.org/RinconStrategies/inspectr)

# inspectr
A CLI for inspecting React components to reveal propTypes and defaultProps values.

##Installation
```bash
npm install -g inspectr
```
##Usage
inspectr takes two arguments 
```bash
inspectr <module> [component] 
```
inspectr takes the -f option to specify a specific file path to inspect
```bash
inspectr <module-path> [component] -f 
```
###module
The `module` argument is the name of the module to search for a React Component to inspect or if you pass `-f` the relative file path to a module to inspect. 

###component
The `component` argument is optional if you are inspecting default exports, however to inspect named exports, you need to pass the name of the export here. 

##Examples
###Inspecting node modules
Assuming you want to inspect react-router and are in your project root, run -
```bash
inspectr react-router

┌──────────────────┬────────────────────────┬────────────────────────────────────────────┐
│ Property         │ Type                   │ Default Value                              │
├──────────────────┼────────────────────────┼────────────────────────────────────────────┤
│ history          │ React.PropTypes.object │ N/A                                        │
├──────────────────┼────────────────────────┼────────────────────────────────────────────┤
│ children         │ React.PropTypes.object │ N/A                                        │
├──────────────────┼────────────────────────┼────────────────────────────────────────────┤
│ routes           │ React.PropTypes.object │ N/A                                        │
├──────────────────┼────────────────────────┼────────────────────────────────────────────┤
│ RoutingContext   │ React.PropTypes.func   │ function RoutingContext() {                │
│                  │                        │     _classCallCheck(this, RoutingContext); │
│                  │                        │                                            │
│                  │                        │     _Component.apply(this, arguments);     │
│                  │                        │   }                                        │
├──────────────────┼────────────────────────┼────────────────────────────────────────────┤
│ createElement    │ React.PropTypes.func   │ N/A                                        │
├──────────────────┼────────────────────────┼────────────────────────────────────────────┤
│ onError          │ React.PropTypes.func   │ N/A                                        │
├──────────────────┼────────────────────────┼────────────────────────────────────────────┤
│ onUpdate         │ React.PropTypes.func   │ N/A                                        │
├──────────────────┼────────────────────────┼────────────────────────────────────────────┤
│ parseQueryString │ React.PropTypes.func   │ N/A                                        │
├──────────────────┼────────────────────────┼────────────────────────────────────────────┤
│ stringifyQuery   │ React.PropTypes.func   │ N/A                                        │
└──────────────────┴────────────────────────┴────────────────────────────────────────────┘
```
If you want to inspect the `Link` component, you could run
```bash
inspectr react-router Link

┌───────────────────┬────────────────────────┬───────────────┐
│ Property          │ Type                   │ Default Value │
├───────────────────┼────────────────────────┼───────────────┤
│ to                │ React.PropTypes.string │ N/A           │
├───────────────────┼────────────────────────┼───────────────┤
│ query             │ React.PropTypes.object │ N/A           │
├───────────────────┼────────────────────────┼───────────────┤
│ hash              │ React.PropTypes.string │ N/A           │
├───────────────────┼────────────────────────┼───────────────┤
│ state             │ React.PropTypes.object │ N/A           │
├───────────────────┼────────────────────────┼───────────────┤
│ activeStyle       │ React.PropTypes.object │ N/A           │
├───────────────────┼────────────────────────┼───────────────┤
│ activeClassName   │ React.PropTypes.string │ N/A           │
├───────────────────┼────────────────────────┼───────────────┤
│ onlyActiveOnIndex │ React.PropTypes.bool   │ N/A           │
├───────────────────┼────────────────────────┼───────────────┤
│ onClick           │ React.PropTypes.func   │ N/A           │
└───────────────────┴────────────────────────┴───────────────┘

```
###Inspecting file paths
To inspect your own components you can use file paths with the `-f` option.

```bash
inspectr app/javascripts/components/button.jsx -f
```

##Limitations
Currently inspectr can only determine PropTypes through evaluting the `checkType` returned from the React PropTypes definition. So this means it supports the following propTypes-
* React.PropTypes.array
* React.PropTypes.bool
* React.PropTypes.func
* React.PropTypes.number
* React.PropTypes.object
* React.PropTypes.string
* React.PropTypes.any


