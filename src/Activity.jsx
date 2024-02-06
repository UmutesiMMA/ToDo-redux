import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line react/prop-types
export default function Activity({ detail, index, handleDelete }) {
  return (
    <div className="flex gap-4 border border-red-100 rounded-3xl p-4 text-2xl font-serif relative bg-[#75975e] bg-opacity-54">
      <div className="flex gap-2 text-[#faf6f0]">
        <input type="radio" name="" id="done" className="w-4" />
        <label htmlFor="done">{detail}</label>
      </div>
      <FontAwesomeIcon
        icon={faTrash}
        className="p-2 absolute right-6 text-green-50"
        onClick={() => handleDelete(index)}
      />
    </div>
  );
}
