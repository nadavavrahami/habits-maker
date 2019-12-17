import React , { Component } from 'react';

const DateComponent = () => {
    const today = new Date()
    const DaysNamesArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const DateString = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + ' ' + DaysNamesArray[today.getDay()]
    return(
    	<p>
    	{DateString}
    	</p>
    )
};

export default DateComponent; 