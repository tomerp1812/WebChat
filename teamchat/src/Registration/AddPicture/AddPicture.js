import React, { useState } from 'react';

function AddPicture({onChange}) {
    const [imageSrc, setImageSrc] = useState('pictureImage.png');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImageSrc(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }

        onChange(event);
    };

    return (
        <div>
            <input accept="image/*" onChange={handleFileChange} className="form-control marginMedium" type="file" id="formFileDisabled"></input>
            <img src={imageSrc} className="marginMedium rounded mx-auto d-block"></img>
        </div>
    );
}

export default AddPicture;
