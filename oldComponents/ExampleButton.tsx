interface Props {

    onClick: () => void;

}

export const ExampleButton = ({ onClick }: Props) => {

    return (
        <div>

            <button className="bg-purple-400 rounded-2xl text-white shadow-2xl px-4 py-2.5" onClick={onClick}>
                Pretty Button

            </button>
        </div>
    )
}