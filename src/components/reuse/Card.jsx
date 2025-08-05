import orc from "../../resource/images/orchids.jpg"

function Card() {
    return (
        <div className="flex justify-center m-20 items-stretch shadow-lg rounded-lg overflow-hidden">
            <div className="w-1/2 bg-slate-200 flex flex-col justify-center items-center p-6">
                <p className="text-lg md:text-2xl mb-2">Welcome</p>
                <p>Come in and get your massage</p>
            </div>
            <div className="w-1/2 bg-slate-500">
                <img src={orc} className="w-full h-full object-cover" alt="orchids" />
            </div>
        </div>
    );
}

export default Card;
