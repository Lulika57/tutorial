interface props {
    onClick: any;
}

export const Button2 = ({ onClick }: props) => {
    const handleClick = () => {
        alert('Hey!')
    }
    // variables and logic (JS)


    return (<>
        <button className="bg-pink-400 rounded px-8 py-8 text-white"
            onClick={onClick}>
            <p className="text-5xl">My button</p></button>
        {/* Fwebsite content (CSS/HTML) */}
    </>)
}

export const Button3 = () => {
    return (<>
    </>)
}

export const Button4 = () => {
    return (<>
    </>)
}

export default Button2;