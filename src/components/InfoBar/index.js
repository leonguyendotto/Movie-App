import React from "react";
//Helpers
import { calcTime, convertMoney } from "../../helpers";
//Styles
import { Wrapper,Content } from "./InfoBar.styles";

const InfoBar = ({time, budget, revenue}) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Duration: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)

export default InfoBar