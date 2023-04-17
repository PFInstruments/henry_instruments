import { prefixDetail } from "../../../Utils/variables";

export default function DetailUserModal({ user }) {
    return (
        <div
            className="modal fade "
            id={prefixDetail + user.nickname.split(".").join("")}
            tabIndex="-1"
            aria-labelledby="detailUserModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1
                            className="modal-title fs-5"
                            id="detailUserModalLabel"
                        >
                            {user.name}
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body ">
                        <img
                            className="img-fluid"
                            src={user.picture}
                            alt="userimage"
                        />
                        <br />
                        <span>ID: {user.id} </span>
                        <br />
                        <span>Name: {user.name} </span>
                        <br />
                        <span>Username: {user.nickname} </span>
                        <br />
                        <span>Email: {user.email} </span>
                        <br />
                        <span>Phone Number: {user.phone_number} </span>
                        <br />
                        <span>Address: ${user.adress} </span>
                        <br />
                        <span>City: {user.city} </span>
                        <br />
                        <span>Province: {user.province} </span>
                        <br />
                        <span>Country: {user.country} </span>
                        <br />
                        <span>Zip: {user.zip} </span>
                        <br />
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
