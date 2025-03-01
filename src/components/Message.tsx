export const Message = () => {
    const name = "Nastya"
    return (
        <>
            {name ? (<>Hello {name}</>) : (<>Hello World</>)}
        </>
    )

}