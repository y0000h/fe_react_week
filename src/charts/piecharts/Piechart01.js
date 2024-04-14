import React from 'react'
import { Legend, Pie, PieChart, Tooltip } from 'recharts'

const Piechart01 = () => {
 
    const data =[
        {
            subject:"html",
            value1 : 90, 
            value2 : 50
        },
        {
            subject:"css",
            value1 : 80, 
            value2 : 90
        },
        {
            subject:"javascript",
            value1 : 75, 
            value2 : 30
        },
    ]

  return (
    <div>
      <PieChart width={500} height={500}>
        <Pie dataKey="value1"  data={data}
             startAngle={0}
             endAngle={180}
             outerRadius={150}
             fill="#ff0000"
             cy="30%"
             cx="30%"
             label
        />
        <Tooltip />
      </PieChart>
      <PieChart width={500} height={500}>
        <Pie dataKey="value2"  data={data}
             startAngle={0}
             endAngle={180}
             outerRadius={150}
             fill="#0000ff"
             cy="50%"
             cx="50%"
             label
        />
        <Legend/>
      </PieChart>
    </div>
  )
}

export default Piechart01
