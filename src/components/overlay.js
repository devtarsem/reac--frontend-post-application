import { Fragment } from 'react';
import './../App.css'

function Overlay(props){
    const classesone = props.overlayLoginStatus ? 'overlay' : 'overlay hidden'
    const classestwo = props.overlaySignUpStatus ? 'overlay' : 'overlay hidden'
    

    return (
        <Fragment>
            <div className={classesone}></div>
            <div className={classestwo}></div>
        </Fragment>

    )
}

export default Overlay;
