import { Dropzone, FileMosaic } from "@files-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ServiceContext } from "../contexts/ServiceContext";
import toast from "react-hot-toast";

function EditService() {
  const { id } = useParams();
  const { getServiceFromHisId, Service } = useContext(ServiceContext);
  const [images, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getServiceFromHisId(id);
  }, [id]);

  useEffect(() => {
    if (Service) {
      console.log("Service data:", Service);
      setTitle(Service.title || "");
      setDescription(Service.description || "");

      setFiles(Service?.images?.name || []);
    }
  }, [Service]);

  const updateFiles = (incomingFiles) => {
    setFiles(incomingFiles);
  };

  const removeFile = (fileName) => {
    setFiles(images.filter((file) => file !== fileName));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    images.forEach((image) => {
      formData.append("images", image.file);
    });

    try {
      const res = await axios.put(
        `http://localhost:4500/api/service/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data) {
        toast.success("Service updated successfully");
        console.log(res.data);
      } else {
        throw new Error("Update failed");
      }
    } catch (error) {
      toast.error("Error updating service");
      console.log(error);
    }
  }

  return (
    <div className="px-64 my-24">
      <div className="bg-white border border-zinc-300 p-4 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Edit Your Service</h2>
        <form onSubmit={handleSubmit}>
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
              placeholder="Enter the title of the service"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Images of the Service
            </label>
            <Dropzone
              accept={"image/*"}
              maxFileSize={50 * 1024 * 1024}
              maxFiles={4}
              onChange={updateFiles}
            >
              {images.map((file, index) => (
                <FileMosaic
                  key={index} // Assuming `file.id` might not be available
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
            placeholder="Enter your description here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="mb-6 my-4">
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Update Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditService;
