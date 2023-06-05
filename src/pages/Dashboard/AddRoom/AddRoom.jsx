import { useContext, useState } from "react";
import saveImageOnDatabase from "../../../api/Utils";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { AuthContext } from "../../../providers/AuthProvider";

const AddRoom = () => {
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    const { user } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        const location = event.target.location.value
        const title = event.target.title.value
        const from = dates.startDate
        const to = dates.endDate
        const price = event.target.price.value
        const guests = event.target.total_guest.value
        const bedrooms = event.target.bedrooms.value
        const bathrooms = event.target.bathrooms.value
        const description = event.target.description.value
        const category = event.target.category.value

        // const image upload
        const image = event.target.image.files[0]
        saveImageOnDatabase(image)
            .then(res => {
                const imageURL = res.data.display_url;
                console.log(imageURL)
                const roomData = {
                    location,
                    title,
                    from,
                    to,
                    price: parseFloat(price),
                    guests,
                    bedrooms,
                    bathrooms,
                    description,
                    image: imageURL,
                    host: {
                        name: user?.displayName,
                        image: user?.photoURL,
                        email: user?.email,
                    },
                    category,
                }
                console.log(roomData)
            })
            .catch(err => {
                console.log(err.message)
            })


        setLoading(false)
    }
    const handleImageChange = (image) => {
        console.log(image)
        setUploadButtonText(image.name)
    }

    const handleDates = (range) => {
        setDates(range.selection)
    }
    return (
        <div>
            <AddRoomForm handleSubmit={handleSubmit} loading={loading} uploadButtonText={uploadButtonText} handleImageChange={handleImageChange} handleDates={handleDates} dates={dates} />
        </div>
    );
};

export default AddRoom;