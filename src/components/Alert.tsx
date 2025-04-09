
interface Props {
  onClose: () => void;
  title: string
}

const Alert = ({ title, onClose }: Props) => {

  return (
    <div className="bg-pink-200 p-4 text-white flex justify-between mb-4">
      {title}{' 👸👑'}
      <button type="button" className="btn-close bg-pink-100" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert