// any JS is executed automatically for app

// import React
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

// create a component
const App = () => {
  return (
    <div>
        <ImageList />
    </div>
  );
};

// render component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
