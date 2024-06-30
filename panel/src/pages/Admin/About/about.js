import React, { useState, useEffect, useRef } from 'react';
import { addAbout, getAbout, updateAbout, deleteAbout } from "../../../api/about";
import { toast } from 'react-toastify';
import { FiCamera } from 'react-icons/fi';
import Header from '../../../components/header';
import bottomlogo from '../../../assets/wave.svg';
import './about.css';
import { getAdminId } from '../../../utils/Storage';
import { uploadFile } from '../../../utils/FileUpload'; // Ensure this is correctly imported

const About = () => {
    const profileRef = useRef(null);
    const resumeRef = useRef(null);

    const initialStateInputs = {
        userId: getAdminId(),
        image: '',
        description1: '',
        description2: '',
        skills: '',
        resume: '',
    };

    const initialStateErrors = {
        image: { required: false },
        description1: { required: false },
        description2: { required: false },
        skills: { required: false },
        resume: { required: false },
    };

    const [inputs, setInputs] = useState(initialStateInputs);
    const [errors, setErrors] = useState(initialStateErrors);
    const [submitted, setSubmitted] = useState(false);
    const [selectedAbout, setSelectedAbout] = useState(null);
    const [abouts, setAbouts] = useState([]);

    const handleValidation = (data) => {
        let error = { ...initialStateErrors };
        if(data.image === "") {
            error.image.required = true;
        }
        if(data.description1 === "") {
            error.description1.required = true;
        }
        if(data.description2 === "") {
            error.description2.required = true;
        }
        if(data.skills === "") {
            error.skills.required = true;
        }
        if(data.resume === "") {
            error.resume.required = true;   
        }
        return error;
    };

    const handleInputs = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
        if (submitted) {
            setErrors(handleValidation({ ...inputs, [name]: value }));
        }
    };

    const handleFileInputs = (event) => {
        const file = event.target.files[0];
        const folder = event.target.name === "image" ? "Intro/" : "Resumes/";
        if (file) {
            uploadFile(file, folder)
                .then((res) => {
                    setInputs({ ...inputs, [event.target.name]: res.Location });
                    if (event.target.name === "resume") {
                        resumeRef.current.value = ''; // Reset file input
                    }
                    if (event.target.name === "image") {
                        profileRef.current.value = ''; // Reset file input
                    }
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("File upload failed. Please try again.");
                });
        }
    };

    const getAboutList = async () => {
        try {
            const res = await getAbout();
            setAbouts(res.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    const addAbouts = (event) => {
        event.preventDefault();
        const newError = handleValidation(inputs);
        setErrors(newError);
        setSubmitted(true);
        const allInputValid = Object.values(newError).every((x) => !x.required);
        if (allInputValid) {
            addAbout(inputs)
                .then((res) => {
                    toast.success(res?.data?.message);
                    setInputs(initialStateInputs);
                    setSubmitted(false);
                    getAboutList();
                })
                .catch((err) => {
                    toast.error(err?.response?.data?.message);
                });
        }
    };

    const handleEdit = (about) => {
        setSelectedAbout(about);
        setInputs({
            userId: getAdminId(),
            _id: about._id,
            image: about.image,
            description1: about.description1,
            description2: about.description2,
            skills: about.skills,
            resume: about.resume,
        });
    };

    const updateAbouts = (event) => {
        event.preventDefault();
        const newError = handleValidation(inputs);
        setErrors(newError);
        setSubmitted(true);
        const allInputValid = Object.values(newError).every((x) => !x.required);
        if (allInputValid) {
            updateAbout(inputs)
                .then((res) => {
                    toast.success(res?.data?.message);
                    setInputs(initialStateInputs);
                    setSubmitted(false);
                    getAboutList();
                })
                .catch((err) => {
                    toast.error(err?.response?.data?.message);
                });
        }
    };

    const handleCancelEdit = () => {
        setSelectedAbout(null);
        setInputs(initialStateInputs);
    };

    const deleteAbouts = async (id) => {
        try {
            await deleteAbout(id);
            toast.success('About deleted successfully!');
            getAboutList();
        } catch (error) {
            console.error('Error deleting about:', error);
            toast.error(error.message || 'Failed to delete about. Please try again.');
        }
    };

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            getAboutList();
        }
        return () => { isMounted = false; };
    }, []);

    return (
        <div className='back_table'>
            <Header />
            <div className="container-fluid mb-5 p-5 m-3">
                <h1 style={{ textAlign: 'center', color: '#7333D5' }}>About Management</h1>
                <form onSubmit={selectedAbout ? updateAbouts : addAbouts}>
                    <label className="text-black">
                        Upload About Image
                        <span className="text-danger">*</span>&nbsp;
                    </label><br />
                    <label
                        htmlFor="fileInputImage"
                        className="file-upload btn rounded-circle image_notify"
                    >
                        {inputs.image ? (
                            <img
                                src={inputs.image}
                                width="100"
                                height="100"
                                alt="Preview"
                                className="preview-image rounded-circle"
                                name="image"
                            />
                        ) : (
                            <FiCamera size={60} />
                        )}
                    </label>
                    <input
                        ref={profileRef}
                        className="file-upload"
                        onChange={handleFileInputs}
                        name="image"
                        id="fileInputImage"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                    />
                    {errors.image.required && (
                        <span className="text-danger form-text">This field is required.</span>
                    )}

                    <div className="form-group">
                        <label htmlFor="description1">Description1</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description1"
                            name="description1"
                            value={inputs.description1}
                            onChange={handleInputs}
                            required
                        />
                        {errors.description1.required && (
                            <span className="text-danger form-text">This field is required.</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="description2">Description2</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description2"
                            name="description2"
                            value={inputs.description2}
                            onChange={handleInputs}
                            required
                        />
                        {errors.description2.required && (
                            <span className="text-danger form-text">This field is required.</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="skills">Skills</label>
                        <input
                            type="text"
                            className="form-control"
                            id="skills"
                            name="skills"
                            value={inputs.skills}
                            onChange={handleInputs}
                            required
                        />
                        {errors.skills.required && (
                            <span className="text-danger form-text">This field is required.</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="resume">Resume</label>
                        <input
                            ref={resumeRef}
                            className="form-control"
                            onChange={handleFileInputs}
                            name="resume"
                            id="fileInputResume"
                            type="file"
                            accept="application/pdf"
                            
                        />
                        {errors.resume.required && (
                            <span className="text-danger form-text">This field is required.</span>
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">
                        {selectedAbout ? 'Update' : 'Add'}
                    </button>
                    {selectedAbout && (
                        <button type="button" className="btn btn-danger mt-3" onClick={handleCancelEdit}>
                            Cancel
                        </button>
                    )}
                </form>

                <div className="table-responsive">
                    <table className="table mt-5 mb-5 table-bordered border-primary">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Description1</th>
                                <th>Description2</th>
                                <th>Skills</th>
                                <th>Resume</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {abouts.map((about) => (
                                <tr key={about._id}>
                                    <td><img src={about.image} alt="Intro Image" width="100" height="100" /></td>
                                    <td>{about.description1}</td>
                                    <td>{about.description2}</td>
                                    <td>{about.skills}</td>
                                    <td>{about.resume}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary mr-2" onClick={() => handleEdit(about)}>
                                            Edit
                                        </button>
                                        <button type="button" className="btn btn-danger" onClick={() => deleteAbouts(about._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bt">
                <img className="bottom" src={bottomlogo} alt="Bottom Logo" />
            </div>
        </div>
    );
};

export default About;
