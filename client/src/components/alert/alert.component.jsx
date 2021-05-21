import React from 'react'; 
import {connect} from 'react-redux'; 

const Alert = ({alerts}) => {
    return (
        alerts.map(alert => (
            <div> 
                {alert.msg}
            </div>   
        ))
    )
}

// map redux state to props by using connect 
const mapStateToProps = (state) => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert)