interface Props {
    onClose: () => void;
}


export const Alert2 = ({ onClose }: Props) => {
    return (
        <div className="bg-purple-200 text-white rounded text-3xl relative">
            Hey!
            <button onClick={onClose} className="absolute right-1 bottom-1">x</button>
        </div>
    )
}

