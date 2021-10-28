import React from 'react'
import Switch from './switch/Switch'

function Marker() {
    return (
        <div className="marker">
            <div className="switch__container">
                <div className="switch__container__boxGroup">

                    <div className="container__box100">
                        <Switch/>
                    </div>
                    <div className="container__box100">
                        <Switch/>
                    </div>
                    <div className="container__box100">
                        <Switch/>
                    </div>
                    <div className="container__box100">
                        <Switch/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'space-between'}}>
                        <div style={{display: 'flex'}}>
                            500<Switch/>
                        </div>
                        <div style={{display: 'flex'}}>
                            1k<Switch/>
                        </div>
                   </div>
                </div>

                <span style={{alignSelf: 'center', marginTop: '-22px'}}>100</span>
                
                <div className="switch__container__box50">
                    <Switch/>50
                </div>
            </div>
            
            
        </div>
    )
}

export default Marker
