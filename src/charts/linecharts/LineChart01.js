import React from 'react'
import { CartesianAxis, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const LineChart01 = () => {
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
      <LineChart width={600}
                height={350}
                data={data}
      >
        <CartesianGrid strokeDasharray={"3 3"} />
        <Tooltip />
        <XAxis dataKey={"subject"} />
        <YAxis />
        <Line dataKey="value1" fill="#00ff00" 
              type="step"
              dot={{ stroke: 'blue', strokeWidth: 2 }} 
              activeDot={{ stroke: 'purple', strokeWidth: 2, r: 10 }} 
              stroke="#ff0ff0"
              strokeWidth={3}
        />
        <Line dataKey="value2" fill="#ff0000" />
      </LineChart>
    </div>
  )
}

export default LineChart01
