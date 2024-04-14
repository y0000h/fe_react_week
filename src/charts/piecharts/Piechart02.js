import React from 'react'
import { Legend, Pie, PieChart, Cell } from 'recharts'

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
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  COLORS.map((color)=>console.log(color))
  return (
    <div>
      <PieChart width={500} height={500}>
        <Pie dataKey="value2"  data={data}
             startAngle={0}
             endAngle={180}
             outerRadius={150}
            //  fill="#0000ff"
             cy="50%"
             cx="50%"
             label
        >
            {
                data.map((item,index)=>{
                    <Cell fill={COLORS[index]} key={COLORS[index]}/>
                })
            }
        </Pie>
        <Legend/>
      </PieChart>
    </div>
  )
}

export default Piechart01
