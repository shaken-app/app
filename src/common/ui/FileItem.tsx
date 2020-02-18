import React from "react";

const uploadFile = (file: any) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", 'shaken_thumbnail');

  fetch("https://api.cloudinary.com/v1_1/shaken/auto/upload", {
    method: "POST",
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      // if (data.secure_url !== "") {
      //   this.setState({
      //     uploadedFileCloudinaryUrl: data.secure_url,
      //   });
      // }
      console.log(data);
    })
    .catch(err => console.error(err));
};

const uploadToCloudinary = (event: any) => {
  Array.from(event.target.files).forEach(uploadFile);
};

const FileItem = () => <input type="file" onChange={uploadToCloudinary} multiple />;

export default FileItem;
