import React from "react"
import {Row, Col, Card, ProgressBar} from "react-bootstrap"
// import ProgressBar from 'react-bootstrap/ProgressBar';

export default (data) => {
   console.log('stat data : ',data)
   // const {base_stat,stat,effort} = data
   const {point} = data
   console.log('point : ',point)
   return (
      <div className="p-2">       
         <Row>
            <Col xs={4}>
            <b>{point.stat.name}</b> 
            </Col>
            <Col xs={8}>
               {/* {point.base_stat}
               {point.effort}
               */}
               <ProgressBar  variant="info" now={point.base_stat} label={`${point.base_stat}`}  />
            {/* <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow={point.base_stat} aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: {point.base_stat}%">{point.base_stat}</div>
            </div> */}
            </Col>
         </Row>
      </div>
   )
}