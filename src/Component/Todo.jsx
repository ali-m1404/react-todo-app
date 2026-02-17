export default function Todo({ todo, onRemove, onEdite }) {
    const { id, title } = todo;


    return (
        <div className="flex -space-x-0.5 m-1">
            
            <div
                className={`w-[420px] px-5 py-3 bg-gray-200 
                flex items-center mr-0.5
                ${todo.isCompleted 
                ? 'line-through text-gray-400' 
                : 'text-gray-700'}`}
            >
                {title}
            </div>

            <button
                className={`w-14 text-white transition
                ${todo.isCompleted
                ? 'bg-green-500'
                : 'bg-blue-400 hover:bg-blue-500'}`}
                onClick={() => onEdite(id)}
            >
                ✓
            </button>

            <button
                className="w-14 bg-sky-700 text-white 
                hover:bg-sky-900 transition"
                onClick={() => onRemove(id)}
            >
                🗑
            </button>

        </div>

    );
}
