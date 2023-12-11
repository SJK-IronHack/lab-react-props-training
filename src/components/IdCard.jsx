
function idCard(obj) {
    return (
        <div className="singleCard">
            <div className="pic"><img src={obj.picture} alt="" srcset="" /></div>
           <div className="objData">
             <div><b>First Name:</b> {obj.firstName}</div>
            <div><b>Last Name: </b>F{obj.lastName}</div>
            <div><b>Gender: </b>F{obj.gender}</div>
            </div>

        </div>
    )
}
export default idCard;