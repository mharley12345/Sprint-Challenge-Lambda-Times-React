import React from 'react';
<<<<<<< HEAD

 

=======
import PropTypes from 'prop-types'
>>>>>>> 7f239638287052ebc293c4bdcda88adb5fc1ab7a

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
  return (
    <div
      className = {
        `${props.tab === props.selectedTab ? "tab active-tab" : "tab" }`
      }
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props
         you'll need to pass the `tab` in as an argument to this handler. */
         props.selectedTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

<<<<<<< HEAD

  


export default Tab;
=======
Tab.propTypes = {
  tabObject: PropTypes.shape({
   tab: PropTypes.string,
   selectedTab: PropTypes.string,
  })
  };
export default Tab;
>>>>>>> 7f239638287052ebc293c4bdcda88adb5fc1ab7a
