import React from 'react'
import { Card, Stack, CardActionArea } from '@mui/material'
import {
    Bar,
    Line,
    XAxis,
    YAxis,
    Legend,
    Tooltip,
    BarChart,
    LineChart,
    CartesianGrid,
} from 'recharts'

function HomeCharts() {
    const data = [
        {
            name: 'Noutbooks',
            uv: 100,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Telephones',
            uv: 400,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Accessories',
            uv: 200,
            pv: 2400,
            amt: 2400,
        },
    ]

    return (
        <div className="HomeCharts">
            <Stack
                direction="row"
                spacing={5}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '10px 0 25px 240px',
                }}
            >
                <Card sx={{ width: '500px' }}>
                    <CardActionArea>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 20,
                                bottom: 5,
                                left: 0,
                            }}
                        >
                            <Line
                                type="monotone"
                                dataKey="uv"
                                stroke="#8884d8"
                            />
                            <CartesianGrid
                                stroke="#ccc"
                                strokeDasharray="5 5"
                            />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: '500px' }}>
                    <CardActionArea>
                        <BarChart width={450} height={300} data={data}>
                            <XAxis dataKey="name" stroke="#8884d8" />
                            <YAxis />
                            <Tooltip
                                wrapperStyle={{
                                    width: 100,
                                    backgroundColor: '#ccc',
                                }}
                            />
                            <Legend
                                width={70}
                                wrapperStyle={{
                                    top: 40,
                                    right: -30,
                                    backgroundColor: '#f5f5f5',
                                    border: '1px solid #d5d5d5',
                                    borderRadius: 3,
                                    lineHeight: '40px',
                                }}
                            />
                            <CartesianGrid
                                stroke="#ccc"
                                strokeDasharray="5 5"
                            />
                            <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                        </BarChart>
                    </CardActionArea>
                </Card>
            </Stack>
        </div>
    )
}

export default HomeCharts
