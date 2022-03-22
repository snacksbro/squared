import React, {Component} from 'react'
import store_img_1 from "../../styletheme/theme/web/assets/img/store/1.png"
import store_img_2 from "../../styletheme/theme/web/assets/img/store/2.png"

import shape_1 from "../../styletheme/theme/web/assets/img/shape/1.png"
import shape_2 from "../../styletheme/theme/web/assets/img/shape/2.png"
import shape_3 from "../../styletheme/theme/web/assets/img/shape/3.svg"
import shape_4 from "../../styletheme/theme/web/assets/img/shape/4.svg"
import shape_5 from "../../styletheme/theme/web/assets/img/shape/5.png"


class HomePage extends React.Component{
    state = {

    }


    async componentDidMount(){
        //called when the page is loaded
    }

    componentDidMount(){
        //called immediately after a component is mounted (created)

    }

    componentWillUnmount() {
         //called immediately before a component is unmounted (destroyed)


    }

    render(){

        return(
            <React.Fragment>
                {/*Please place your HTML5 within the React.Fragment block  */}
              <h1>Home Page will go right here</h1>


        {/* Start Main Banner Area */}
        <div id="home"  className="main-banner">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="banner-content">
                                    <h1>Best Mobile App Template For Your Business</h1>
                                    <p>App ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
                                    <div className="banner-holder">
                                        <a href="#">
                                            <img src={store_img_1} alt="image"/>
                                        </a>
                                        <a href="#">
                                            <img src={store_img_2} alt="image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-image">
                                    <img src="assets/img/mobile.png" alt="image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="default-shape">
                <div className="shape-1">
                    <img src={shape_1} alt="image"/>
                </div>

                <div className="shape-2 rotateme">
                    <img src={shape_2} alt="image"/>
                </div>

                <div className="shape-3">
                    <img src={shape_3} alt="image"/>
                </div>

                <div className="shape-4">
                    <img src={shape_4} alt="image"/>
                </div>

                <div className="shape-5">
                    <img src={shape_5} alt="image"/>
                </div>
            </div>
        </div>
        {/* End Main Banner Area */}
            </React.Fragment>
        )
    }

}

export default HomePage