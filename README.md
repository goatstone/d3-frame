# D3 and React

Methodologies for using the D3 visualization library with ReactJS

[![CircleCI](https://circleci.com/gh/goatstone/d3-frame.svg?style=svg)](https://circleci.com/gh/goatstone/d3-frame)

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
npm run start
```    
### Build
```
npm run build
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
### Test
```    
npm run test
npm run test:watch
```    

## Overview

D3 Frame is intended to illustrate strategies for approaching data visualization issues on the web and explores issues that arise when using D3 with other frameworks, such as React. 

D3 Frame demonstrates these strategies with a sampling of visualizations: Line, Pie, Bar, Icon Layout. A series of controls give the user the ability to set a chart type, characteristics of the chart, and modify data.

D3 is an extensive library and comes with many utilities that become redundant when working with a modern web framework. Fortunately, as of D3 version 4.0, one can strategically use the parts of D3 as needed.

### A Higher Level of Abstraction

React is a web development tool that enables the creation of a higher level of abstraction. In the case of charts, these higher levels of abstraction will take the form of components and declarative tag syntax. A chart may be represented in JSX like this:

`"
      <ChartFrame
        cssClasses={cssSheet}
      >
        <XAxis
          data={state.data.bar}
          xScale={xScale}
        />
        <YAxis
          data={state.data.bar}
          yScale={yScale}
        />
        <Bars
          data={state.data.bar}
          xScale={xScale}
          yScale={yScale}
        />
      </ChartFrame>
```

The higher level of abstraction is created and enables a clear view of what the code is intended to represent. Developers will work with this level of abstraction, without having to change it. Building upon these methodologies should enable the establishment of a representation that fits the specific needs of any given project. 

### Some Issues To Consider

#### A unified DOM update system

Since D3 interacts with the browsers' Document Object Model, there are potential conflicts when both libraries try to change it. To address this issue, I will not be using the D3 DOM manipulation and use only React to update the DOM. 

#### A unified event system

DIfferent libraries come with varying notions of how an event system will be implemented. D3 Frame uses Reacts'  Synthetic Events. For global state Reacts' Context and Hooks are used.

### Strategies for Library usage

#### Scales
Scales for converting abstract data into a visual representation are an essential tool for working with data. D3s' scale tools are ideal for this and function as the core tool for many of the visualization tasks.

#### Generation of Axis
The D3 axis tools can generate HTML DOM axis according to the specifications given.

#### Color Generation
Theme generation, color control, and color selection. D3s' collection of color-related tools have a wide range of applications.

#### Styles
More than one way of using styles can be useful in an application.
One tool D3 Frame uses is [JSS](https://cssinjs.org). This tool is used with style definitions generated with D3s Color Interpolator to create a variety of themes.

## Links to relevant sites

* [D3](https://d3js.org/)
* [React](https://reactjs.org/)
* [JSS](https://cssinjs.org)

The starter kit used for this application

[Create React App](https://github.com/facebookincubator/create-react-app)



