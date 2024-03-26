import React  from "react"

const ProduckItem = ({img, title ,text}) =>{
    return(
        <div className="col-3 mt-5 w51">
            <img className="border-radius" src={img} alt=""/>
            <h4 className="text-center text-light mt-4">{title}</h4>
            <p className="text-center text-secondary">{text}</p>
        </div>
    )
}

export default ProduckItem