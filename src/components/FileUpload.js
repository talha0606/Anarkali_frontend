import { React, useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

function FileUpload() {
  const [filename, setfilename] = useState("");

  const onChangeFile = (event) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.files[0]);

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // setfilename(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);

    setfilename(event.target.files[0]);
  };

  const onChangeClick = (event) => {
    event.preventDefault();

    const fd = new FormData();
    fd.append("shopImage", filename);

    axios
      .post("/postImage", fd)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <img
        style={{ width: "100px", height: "100px" }}
        src={filename}
        alt="previewimage"
      />
      <form
        onSubmit={onChangeClick}
        className="mx-auto main-form"
        encType="multipart/form-data"
      >
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Choose Shop Image
          </label>
          <div className="col-sm-10">
            <input
              type="file"
              name="shopImage"
              filename="shopImage"
              className="form-control w-75 p-3 h-50 d-inline-block"
              id="image"
              placeholder="Choose Image"
              onChange={onChangeFile}
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <input
              type="submit"
              value="Sign in"
              name="signup"
              id="signup"
              className="btn btn-sign-in"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default FileUpload;
