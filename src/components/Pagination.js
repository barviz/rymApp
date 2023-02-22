import React from 'react'

export const Pagination = ({ prev, next, onPrev, onNext }) => {

    const handlePrev = () => {
        onPrev();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <div>
            <div>
                <ul className="pagination justify-content-center mt-4">
                    {prev ? (
                        <li className="page-item">
                            <button className="page-link" onClick={handlePrev}>Prev</button>
                        </li>
                    ) : null

                    }
                    {next ? (
                        <li className="page-item">
                            <button className="page-link" onClick={handleNext}>Next</button>
                        </li>
                    ) : null}
                </ul>
            </div>
        </div>
    )
}

export default Pagination;