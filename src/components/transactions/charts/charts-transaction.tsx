import React from "react";
import Chart from 'react-apexcharts'
interface value {
    expenses: number,
    influence: number
}

export const ChartsTransaction = ({expensesValue, getStartWallet}:any | value)=>{
    console.log(getStartWallet)
    return(
        <>
            <Chart
            type="bar"
            width={400}
            height={400}
            series={[{
                name: 'Expenses',
                data: [expensesValue.expenses],
            }, {
                name: 'Influence',
                data: [expensesValue.influence]
            }
            ]}
            options={{
                colors:['#3E5CC5',"#60DC64"],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: [''],
                },

                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return " " + val
                        }
                    }
                }
            }}
            >

            </Chart>
        </>
    )
}