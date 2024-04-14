import React from 'react'
import { BarChart, XAxis, Bar, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

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
                // margin={{
                //     top: 50,
                //     left:50
                // }}
                // barCategoryGap={50}
                // barGap={70}
                barSize={2}
      >
        <CartesianGrid strokeDasharray="3 3 15 3"/>
        <XAxis dataKey="name" />
        <YAxis  />
        <Tooltip />
        <Legend />
        <Bar dataKey="first" fill="#8884d8"/>
        <Bar dataKey="second" fill="#2284d8"/>
      </BarChart>
    </div>
  )
}

export default Barchart01
