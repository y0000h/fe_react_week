import React from 'react'
import { Line, LineChart, YAxis , XAxis} from 'recharts'

const LineChartComp = ({lineData}) => {
  return (
    <div>
      <LineChart width={500} height={300} data={lineData}>
         <XAxis dataKey="name" />
         <YAxis />
         <Line type="monotone" dataKey="value" />
      </LineChart>
    </div>
  )
}

export default LineChartComp
