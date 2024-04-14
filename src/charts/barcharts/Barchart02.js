import React from 'react'
import { BarChart, XAxis, Bar, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts'

const Barchart01 = () => {
  const data = [
    {
        "name" : "pageA",
        "first" : 4200, 
        "second" : 3000
    },
    {
        "name" : "pageB",
        "first" : 4000, 
        "second" : 3500
    },
    {
        "name" : "pageC",
        "first" : 3900, 
        "second" : 4500
    }
  ]
  return (
    <div style={{ margin:"50px"}}>
      <BarChart width={600} height={350} data={data} 
      >
        <CartesianGrid strokeDasharray="3 3 15 3"/>
        <XAxis dataKey="name" />
        <YAxis  />
        <Tooltip separator='-' coordinate={{x:0, y:0}}/>
        <Legend />
        <Bar dataKey="first" fill="#8884d8" >
            <LabelList dataKey="first"  position="top" offset="20"/>
        </Bar>

        <Bar dataKey="second" fill="#82ca9d"  label={{ fill: 'red', fontSize: 20,  position:"top"}} >
            {/* <LabelList dataKey="second" position="insideBottom" /> */}
        </Bar>
      </BarChart>
    </div>
  )
}

export default Barchart01
