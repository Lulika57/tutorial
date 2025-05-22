interface Props {
    onClick: () => void;
}

export const Button2 = ({ onClick }: Props) => {

    return (
        <button className="bg-purple-300 rounded px-2.5 py-2 text-white text-3xl" onClick={onClick}>
            My Button
        </button>

    )
}