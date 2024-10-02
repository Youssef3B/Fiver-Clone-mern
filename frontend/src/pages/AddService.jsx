import { Dropzone, FileMosaic } from "@files-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { ServiceContext } from "../contexts/ServiceContext";

function AddService() {
  const { getAllServices } = useContext(ServiceContext); // Access the refresh function

  const [images, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const user = localStorage.getItem("userId");

  const updateFiles = (incomingFiles) => {
    setFiles(incomingFiles);
  };

  const removeFile = (id) => {
    setFiles(images.filter((x) => x.id !== id));
  };

  async function handleCreateService(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user", user);
    formData.append("title", title);
    formData.append("description", description);
    images.forEach((image) => {
      formData.append("images", image.file);
    });

    try {
      const result = await axios.post(
        "http://localhost:4500/api/service",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (result) {
        toast.success("Service created successfully");
        setFiles([]);
        setTitle("");
        setDescription("");
        getAllServices(); // Refresh the services list
      }
    } catch (error) {
      toast.error("Service creation failed try again");
    }
  }

  return (
    <div className="px-64 my-24">
      <div className="bg-white border border-zinc-300 p-4 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Create Your Service</h2>
        <form onSubmit={handleCreateService}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Title Of The Service
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 focus:outline-none"
              placeholder="enter Your title of the service"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Images of the Service
            </label>
            <Dropzone
              onChange={updateFiles}
              value={images}
              accept={"image/*"}
              maxFileSize={50 * 1024 * 1024}
              maxFiles={4}
            >
              {images.map((file) => (
                <FileMosaic
                  key={file.id}
                  {...file}
                  onDelete={removeFile}
                  info
                  preview
                />
              ))}
            </Dropzone>
          </div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 focus:outline-none"
            placeholder="Enter Your description here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="mb-6 my-4">
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Create Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddService;
