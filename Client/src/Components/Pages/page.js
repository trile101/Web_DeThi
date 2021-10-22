import React from 'react'
import {Switch, Route} from 'react-router-dom'
import mainPage from './MainPage/mainPage'
import DocuPage from './DocuPage/DocuPage'
import DetailPage from './DetailPage/DetailPage'
import DisPage from './DisPage/DisPage'


function Pages() {
    return (
        <Switch>
            <Route path="/contribute" extract component={DisPage} />
            <Route path="/:subject/:_Id" extract component={DetailPage}/>
            <Route path="/:subject" exact component={DocuPage} />
            <Route path="/" extract component={mainPage} />
        </Switch>
    )
}

export default Pages