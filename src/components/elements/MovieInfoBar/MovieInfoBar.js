import React from 'react'
import FontAwesome from 'react-fontawesome'
import { calcTime, convertMoney } from '../../../helpers';
import './MovieInfoBar.css';
export default function MovieInfoBar(props) {
    return (
        <div className="rmdb-movieinfobar">
            < div className = "container rmdb-movieinfobar-content" >
                < div className = "container rmdb-movieinfobar-content-col" >
                    <FontAwesome className="fa-time" name="clock-o" size="2x" />
                    <span className="rmdb-movieinfobar-info">
                        Running Time: {calcTime(props.time)}
                    </span>
                </div>
                < div className = "rmdb-movieinfobar-content-col" >
                    <FontAwesome className="fa-budget" name="money" size="2x" />
                    <span className="rmdb-movieinfobar-info">
                        Budget: {convertMoney(props.budget)}
                    </span>
                </div>
                < div className = "rmdb-movieinfobar-content-col" >
                    <FontAwesome className="fa-revenue" name="ticket" size="2x" />
                    <span className="rmdb-movieinfobar-info">
                        Revenue: {convertMoney(props.revenue)}
                    </span>
                </div>
            </div>
        </div>
    )
}
