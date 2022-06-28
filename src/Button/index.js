const Button =({children,onclick} )=> {
    return (
        <button
            type= 'button'
            className="btn btn-success"
            onClick= {onclick}
            >

            {children}
        </button>
    
    )
}

export default Button;