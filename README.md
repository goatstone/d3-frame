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
yarn
```
### Development

```    
yarn run dev
yarn run watch
```    

### Lint

```    
yarn run lint
yarn run lint:watch
```    

### Build

```    
yarn run build
```    

### Test
```    
yarn run test
yarn run test:watch
```    

## Overview

The following are strategies for approaching some of the issues that arise when using D3 with other frameworks, specifically ReactJS. In the future I will be exploring D3 integration with other frameworks and libraries in this location. Ultimately, the objective is to clearly separate the functionality of D3 from any framework that you may be using in the future. 

D3 is a very large library and comes with many utilities that become redundant when working with a modern client side web framework. Fortunately, as of D3 version 4.0, one can strategically use libraries as needed.

### Some Issues To Consider

#### A unified DOM update system

Since D3 interacts with the DOM there are potential conflicts when both libraries try to change the DOM. To address this I will simply not be using the D3 DOM manipulation and use only ReactJS to update the DOM. 

#### A unified event system

DIfferent libraries come with different notions of how an event system should be done. A single eventing system with the same form of event objects being sent is crucial to a successful application.

#### The implementation

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

## Links to relevant sites

[D3](https://d3js.org/)
 , [React](https://reactjs.org/)
 , [ReactJS refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)

The starter kits used for this application

[React, Webpack, Babel, Jest, ESLint Starter](https://github.com/oscarmorrison/react-webpack-starter)
 ,[Create React App](https://github.com/facebookincubator/create-react-app)



