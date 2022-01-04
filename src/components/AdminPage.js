import React, { Fragment }from "react";
import { Button } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";


const AdminPage = () => {
  
    return (
        <Fragment>
        {/* <MetaData title="Update User" /> */}
        <div className="dashboard">

          <div className="newProductContainer">
              <form
                className="createProductForm"
                // onSubmit={updateUserSubmitHandler}
              >
                <h1>Update User</h1>
  
                <div>
                  <PersonIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
  
                <div>
                  <VerifiedUserIcon />
                  <select>
                  {/* <select value={role} onChange={(e) => setRole(e.target.value)}> */}
                    <option value="">Choose Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
  
                <Button
                  id="createProductBtn"
                  type="submit"
                //   disabled={
                //     updateLoading ? true : false || role === "" ? true : false
                //   }
                >
                  Update
                </Button>
              </form>
          </div>
        </div>
      </Fragment>
    );
};
export default AdminPage;
