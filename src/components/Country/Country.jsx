import "./country.css"
const Country=({data})=>{
    const {name:{common},name:{official}}=data
    return (
        <div>
            <div className="country">
            <p><span style={{fontWeight:'bold'}}>Common Name:</span>{common} </p>
            <p><span  style={{fontWeight:'bold'}}>Official Name:</span> {official} </p>
            </div>
        </div>
    )
}
export default Country