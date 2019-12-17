import React from 'react';
import Misson from './Misson/Misson'

const TimeUnit = ({TimeUnitMissons ,TimeUnitName, persistedMissons, persistedDaysAmount }) => {
   	const missonsArray = TimeUnitMissons.map((item, i) => {
   		return <Misson misson={TimeUnitMissons[i]}/>
   	})
   	const persistedMissonsString = ''
   	persistedMissons.forEach(item => persistedMissonsString + item + ' ')

   	return (
   		<div>
		    <div className = "d-flex justify-content-center">
		        <p class="text-capitalize" > 
		        	{TimeUnitName + ' missons : '}
		        </p>
		        {missonsArray}
		    </div>
		    <p>{'You have persisted for ' + persistedDaysAmount + ' days in the following habits: ' + persistedMissons} </p>
		</div>
  );
}

export default TimeUnit;