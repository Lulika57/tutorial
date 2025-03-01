interface Props {
    onClose: () => void;

}

export const ExampleAlert = ({ onClose }: Props) => {
    return (
        <div className="bg-purple-300 px-7 py-2 rounded-b-sm text-white">
            Have a good day, beautiful!
            <button onClick={onClose} className="absolute right-1 size-4">x</button>
        </div>
    )
}