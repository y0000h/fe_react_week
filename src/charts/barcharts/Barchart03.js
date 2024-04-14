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
            layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis  type="number"/>
        <YAxis  dataKey="name"  type="category"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="first" fill="#8884d8" />
        <Bar dataKey="second" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}

export default Barchart01
