import React from 'react'

export const Characters = ({ characters = [] }) => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-2">
                {characters.map((item, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-1">
                        <div className="card h-100">
                            <h3 className="card-header text-center">{item.name}</h3>
                            <img className="card-img-top" src={item.image} alt="character" />
                            <div className="card-body">
                                <h5 className="card-title">Species: {item.species}</h5>
                                <h6 className="card-subtitle text-muted">Location: {item.location.name}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Characters;