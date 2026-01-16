import orc from "../../resource/images/orchids.jpg"

function Card(props) {
    return (
        <div className="flex justify-center m-20 items-stretch shadow-lg rounded-lg overflow-hidden">
            <div className="w-1/2 bg-slate-200 flex flex-col justify-center items-center p-6 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-emerald-700">{props.companyName}</h2>
                <p className="text-lg md:text-xl mb-2">Welcome</p>
                <p className="whitespace-pre-line text-center">{props.text}</p>
            </div>
            <div className="w-1/2 bg-slate-500">
                <img src={orc} className="w-full h-full object-cover" alt="orchids" />
            </div>
        </div>
    );
}

export default Card;
