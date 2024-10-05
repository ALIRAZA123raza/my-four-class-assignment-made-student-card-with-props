interface CardType {
    Name: string,
    Age: number,
    RollNO: number,
    Day: string,
    Timing: string
}

const Card = (props: CardType) => {
    return (
        <div className="rounded-xl bg-slate-300 p-4 h-22 w-60 transition-transform transform hover:scale-105 hover:bg-slate-400 cursor-pointer">
            <h1 className="underline p-5">GIAIC Student Card</h1>
            
            <div className="flex justify-center mb-2">
                <span className="text-3xl">🙎🏻‍♂</span>
            </div>

            <h1><b>Name: </b> {props.Name}</h1>
            <h1><b>Age:</b> {props.Age}</h1>
            <h1><b>Roll NO: </b> {props.RollNO}</h1>
            <h1><b>Day: </b> {props.Day}</h1>
            <h1><b>Timing: </b> {props.Timing}</h1>
        </div>
    )
}
export default Card



