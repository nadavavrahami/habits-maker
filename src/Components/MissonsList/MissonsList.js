import React from 'react';
import TimeUnit from './TimeUnit/TimeUnit'

const MissonsList = ({myMissons}) => {
   	const TimeUnitsArray = Object.entries(myMissons).map((item) => {
      return ( 
    	   	<TimeUnit 
          TimeUnitMissons = {item[1]}
          TimeUnitName = {item[0]}
          persistedMissons = {item[1]}
          persistedDaysAmount = {item[1].length} />
        )
   	})
   return (
     <div>
     {TimeUnitsArray}
     </div>
  )
}

export default MissonsList;
