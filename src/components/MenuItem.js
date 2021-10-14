import React from 'react'


const MenuItem = ({title,price,img,desc}) => {

    return (
        <div className="menuItem card col-sm-12 col-md-6 me-auto mt-5" style={{maxWidth: "540px", height:"30vh"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body pt-0">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title text-capitalize">{title}</h5>
                            <span className="price">${price}</span>
                        </div>
                        <div className="u"></div>
                        <p className="card-text">{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItem;
