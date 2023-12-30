import '../src/App.css'


const Second = () => {
    return (
        <>
            <div className="card mb-0 firstdiv" >
                <div className="row g-0">
                    <div className="col-md-6 carddiv"  >
                        <div className="card-body">
                            <h3 className="card-title">Full Responsive Design</h3>
                            <small className="card-text">When you use a theme created by Start Bootstrap,you know that the theme will look <br /> great on any device,whether it`s a phone,tablet, or desktop the page will behave <br /> responively!  </small>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="images\First_image.jpg" className="img-fluid pictures" alt="..." />
                    </div>
                </div>
            </div>


            <div className="card mb-0 seconddiv" >
                <div className="row g-0">
                    <div className="col-md-6 ">
                        <img src="images\Second_image.jpg" className="img-fluid pictures" alt="..." />
                    </div>
                    <div className="col-md-6 carddiv"  >
                        <div className="card-body">
                            <h3 className="card-title">Updated For Bootstrap 5</h3>
                            <small className="card-text">Newly improved,and full of great utility classes, Bootstrap 5 is leading the way in <br /> mobile responsive web development! All of the themes on Start Bootstrap are now <br /> using Bootstrap 5!   </small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-0 thirddiv" >
                <div className="row g-0">
                    <div className="col-md-6 carddiv"  >
                        <div className="card-body">
                            <h3 className="card-title">Full Responsive Design</h3>
                            <small className="card-text">When you use a theme created by Start Bootstrap,you know that the theme will look <br /> great on any device,whether it`s a phone,tablet, or desktop the page will behave <br /> responively!  </small>
                        </div>
                    </div>
                    <div className="col-md-6 thirddivas">
                        <img src="images\third_image.jpg" className="img-fluid pictures" alt="..." />
                    </div>
                </div>
            </div>
            <div className="container-fluid asasas ">
                <div className="row ">
                    <div class="col-4">
                        <img width={"50%"} src="images\Review_image.jpg" className="reviewimages" alt="" />
                        <h5 className="reviewheadss">Margaret E.</h5>
                    </div>
                    <div class="col-4">
                        <img width={"50%"} src="images\Review_image2.jpg" className="reviewimages" alt="" />
                        <h5 className="reviewhead">Fred S.</h5>
                    </div>
                    <div class="col-4">
                        <img width={"50%"} src="images\Review__image3.jpg" className="reviewimages" alt="" />
                        <h5 className="reviewheads">Sarah W</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Second 