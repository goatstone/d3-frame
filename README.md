# D3 and React

Methodologies for using the D3 visualization library with ReactJS

## Website
    
[d3-frame.goatstone.com](http://d3-frame.goatstone.com)
    
## Usage

### Clone the GitHub repo.

```    
git clone git@github.com:goatstone/d3-frame.git
```

### Install
```
cd d3-frame/
npm install
```
### Development

```    
npm run watch
```    

### Run Browswersync
```
cd dist/

browser-sync start --server --files "*" 
```

### Lint

```    
npm run lint
npm run lint:watch
```    

### Build

```    
npm run build
```    

### Test
```    
npm run test
npm run test:watch
```    

## Overview

The following outlines strategies for approaching data visualization issues on the web.

There are many ways to visualize data. I am going to explore issues, specifically, that arise when using D3 with other frameworks, such as ReactJS. 

Ultimately, the objective is to clearly separate the functionality of D3 from any framework that you may be using in the future. 

D3 is a very large library and comes with many utilities that become redundant when working with a modern client side web framework. Fortunately, as of D3 version 4.0, one can strategically use libraries as needed.


### A Higher Level of Abstraction

The tools React brings enable the creation of a higher level of abstraction. In the case of charts these higher levels of abstraction will represent a chart. A chart may be represented in JSX like this:

```
<ChartFrame width=”300” color=”red”>
<Bars color=”blue” / >
<XAxis / >
<YAxis />
</ChartFrame>
```

Once this higher level of abstraction is created, ideally it will enable the open/closed principle. Developers can work with this level of abstraction, without having to change the underlying implementation. There are libraries that offer this type of abstraction out of the box such as the Vicotry library. These methodologies should enable the building of an abstraction that fits the specific needs of your project. In this way one can potentially build a higher level of abstraction that implements the open/closed principle more effectively.


### Some Issues To Consider

#### A unified DOM update system

Since D3 interacts with the DOM there are potential conflicts when both libraries try to change the DOM. To address this I will simply not be using the D3 DOM manipulation and use only ReactJS to update the DOM. 

#### A unified event system

DIfferent libraries come with different notions of how an event system should be done. A single eventing system with the same form of event objects being sent is crucial to a successful application.

### The implementation

The application to demonstrate these strategies will consist of a sampling of some basic chart types: 
 - Line 
 - Pie 
 - Bar 

A series of controls will be presented. The controls will give the user the ability to 

 - Set a chart type, 
 - Characteristics of the chart 
 - Such as colors or symbol type. 
 - Data can be modified in order to demonstrate the variations of the chart.
 - Control self modifies, depending on given settings

### Strategies
#### Library usage

#### Scale: D3
Convert abstract data into a visual representation. An essential and fundamental task for representing data. D3s’ scale tool is ideal for this and functions as the core tool for many of the visualization tasks that would be undertaken.

#### Generation of Axis: D3
D3 provides tools that make the process of creating visualizations less tedious. The Axis tools are such.

#### Color Generation: D3
Theme generation, color control

#### Text Formatting: NumeralJS MomentJS 
Format text to properly display values according to region

#### Styles
Currently the strategy for applying styles is to use SCSS. There are many ways to apply style. SCSS provides a well tested solution that enables a packaging of the style with the component itself.


## Links to relevant sites

[D3](https://d3js.org/)
 , [React](https://reactjs.org/)
 , [ReactJS refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)

The starter kits used for this application

[React, Webpack, Babel, Jest, ESLint Starter](https://github.com/oscarmorrison/react-webpack-starter)
 ,[Create React App](https://github.com/facebookincubator/create-react-app)



