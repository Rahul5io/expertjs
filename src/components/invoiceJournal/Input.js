export default function Input(props) {
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium" htmlFor="date">
               {props.name}
            </label>
            <input className="border-gray-300 rounded-lg p-2"
                type={props.type}
                name={props.name}
                defaultValue={props.defaultValue}
               
            />
        </div>
    )
}