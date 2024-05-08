import {useState} from "react"

const HogTiles = ({image, name, specialty, weight, greased, "heighest medal achieved": medal}) => {
const [showDetails, setShowDetails] = useState(false)

    const handleToggleDetails = () => {
     //const clickedImage= event.target.value
        setShowDetails(currentShowDetails => !currentShowDetails)
    }

return (
<div className="pigTile" onClick={handleToggleDetails}>
    <h3>{name}</h3>
    <img src={image} alt={name} className="minHogCard maxHogCard" />
    {showDetails ? (
        <>
        <br />
        <span>Specialty: {specialty}</span><br />
        <span> Weight: {weight}lbs</span><br />
        <span> Medal: {medal}</span><br />
        <span> {greased ? "Grease" : "Not Greased"}</span><br />
        </>
    ) : null}
</div>
    )
}
export default HogTiles