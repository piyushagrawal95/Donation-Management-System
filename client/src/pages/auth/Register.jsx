import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify"; // Import toast
import Spinner from "../../components/shared/Spinner";
import Form from "../../components/shared/Form/Form";
import banner1 from "../../assets/banner2.jpg"; // Placeholder image 1
import banner2 from "../../assets/banner4.jpg"; // Placeholder image 2
import Navbar from "../Navbar";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);

  // Display error message using Toastify
  if (error) {
    toast.error(error); // This will show a toast notification for the error
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
      <>
      <Navbar/>
        <div className="container-fluid g-0">
          <div className="row g-0">
            {/* Bootstrap Carousel for Image Slides */}
            <div className="col-lg-8 col-12 p-0">
              <div
                id="imageCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="5000" // Change image every 5 seconds
              >
                <div className="carousel-inner">
                  {/* First Image (Generic UI) */}
                  <div className="carousel-item active">
                    <img
                      src={banner1}
                      alt="Generic UI"
                      className="d-block w-100"
                    />
                  </div>
                  {/* Second Image (Authenticated UI) */}
                  <div className="carousel-item">
                    <img
                      src={banner2}
                      alt="Authenticated UI"
                      className="d-block w-100"
                    />
                  </div>
                </div>

                {/* Carousel Controls (Optional, for manual navigation) */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#imageCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#imageCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            {/* Form Section */}
            <div className="col-lg-4 col-12 p-4 d-flex justify-content-center align-items-center">
              <Form
                formTitle={"Register"}
                submitBtn={"Register"}
                formType={"register"}
              />
            </div>
          </div>
        </div>
      </>
      )}
    </>
  );
};

export default Register;
