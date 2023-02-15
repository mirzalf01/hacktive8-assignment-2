import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Currency = () => {
    const [currency, setcurrency] = useState({});
  
    useEffect(() => {
        axios.get(`https://api.currencyfreaks.com/latest?apikey=c1b72ba11d5f4e6a8ff80b9824b9117b&symbols=CAD,IDR,JPY,CHF,EUR,GBP`).then(res => {
            console.log(res.data.rates);
            setcurrency(res.data.rates)
        })
    }, []);
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Currency</th>
                    <th>We Buy</th>
                    <th>Exchange Rate</th>
                    <th>We Sell</th>
                </tr>
                </thead>
                <tbody>
                {
                JSON.stringify(currency) === '{}' ?
                (<>
                    <tr>
                    <td colSpan={4}>No Data</td>
                    </tr>
                </>)
                :
                
                    Object.keys(currency).map((key, i) => 
                    (
                        <tr key={key}>
                        <td>{key}</td>
                        <td>{parseFloat((currency[key] * 105 / 100).toFixed(4))}</td>
                        <td>{parseFloat((currency[key] * 1).toFixed(4))}</td>
                        <td>{parseFloat((currency[key] * 95 / 100).toFixed(4))}</td>
                        </tr>
                    )
                    )
                }
                </tbody>
            </table>
            <p>Rates are based from 1 USD. <br />
            This application uses API from https://currencyfreaks.com</p>
        </div>
    )
}

export default Currency