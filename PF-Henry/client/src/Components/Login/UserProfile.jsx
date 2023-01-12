import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getUserId} from '../../Redux/actions'
import axios from 'axios'
import { useReducer } from 'react';
import Swal from 'sweetalert2'

function UserProfile() {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.userId)
    const {id} = useParams()

   useEffect(() => {
        dispatch(getUserId(id))
    }, [dispatch, id])

    const alert = () => {
      const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
      })

      Toast.fire({
          icon: 'success',
          title: 'save information'
      })
  }

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert()
        await axios.put("/users/db/"+id, contactForm);
        setContactForm({ type: "SUBMIT" });
      };
    
  let initialState = {
    name: userId.nickname,
    phone_number: userId.phone_number,
    adress: userId.adress,
    city: userId.city,
    province: userId.province,
    country: userId.country,
    zip: userId.zip,
  };

  const dataEnvioFormReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "SET_NAME": {
        return {
          ...state,
          name: action.payload,
        };
      }
      case "SET_ADDRESS": {
        return {
          ...state,
          adress: action.payload,
        };
      }
      case "SET_PHONENUM": {
        return {
          ...state,
          phone_number: action.payload,
        };
      }
      case "SET_CITY": {
        return {
          ...state,
          city: action.payload,
        };
      }
      case "SET_STATE": {
        return {
          ...state,
          state: action.payload,
        };
      }
      case "SET_ZIP": {
        return {
          ...state,
          zip: action.payload,
        };
      }
      case "SET_COUNTRY": {
        return {
          ...state,
          country: action.payload,
        };
      }
      case "SET_PROVINCE": {
        return {
          ...state,
          province: action.payload,
        };
      }

      case "SUBMIT": {
        console.log(initialState);
        return {
          ...state,
        };
      }
    }
  };
  const [contactForm, setContactForm] = useReducer(
    dataEnvioFormReducer,
    initialState
  );
  console.log(userId)
    return (
    
        <div className="tw-container  tw-mx-auto tw-p-4">
          <hr />
        <div className="tw-grid tw-grid-cols-2">
          <div class="">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src={userId.picture}/>{userId.name}<span class="text-black-50">{userId.email}</span><span> </span></div>
        </div>
        <div class="tw-flex tw-flex-col md:tw-w-full">
      
        <form
        onSubmit={handleSubmit}
        className="tw-justify-center tw-w-full tw-mx-auto"
      >
          <div className="tw-mt-4">
                <div className="tw-w-full">
                  <label
                    htmlFor="inputName"
                    className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                  >
                   Full name:
                  </label>
                  <input
                    placeholder="Your Name"
                    required
                    type="name"
                    name="name"
                    id="inputName"
                    className="tw-w-full tw-px-4 tw-py-3 tw-text-sm tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600 "
                    value={contactForm.name}
                    onChange={(e) => {
                      setContactForm({
                        type: "SET_NAME",
                        payload: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div className="tw-w-full">
                <div className="tw-w-full">
                  <div className="tw-space-x-0 lg:tw-flex lg:tw-space-x-4">
                    <div class="tw-w-full lg:tw-w-1/2">
                      <label
                        htmlFor="inputCity"
                        className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                      >
                        Country:
                      </label>
                      <input
                        placeholder="Country"
                        type="text"
                        className="tw-w-full tw-px-4 tw-py-3 tw-text-xs tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
                        id="inputCountry"
                        value={contactForm.country}
                        onChange={(e) => {
                          setContactForm({
                            type: "SET_COUNTRY",
                            payload: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="tw-w-full lg:tw-w-1/2">
                      <label
                        htmlFor="inputProvince"
                        className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                      >
                        Province:
                      </label>
                      <input
                        placeholder="Province"
                        type="text"
                        className="tw-w-full tw-px-4 tw-py-3 tw-text-xs tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
                        id="inputProvince"
                        value={contactForm.province}
                        onChange={(e) => {
                          setContactForm({
                            type: "SET_PROVINCE",
                            payload: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="tw-mt-4">
                    <div className="tw-w-full">
                      <label
                        htmlFor="inputAddress"
                        className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                      >
                        Adress:
                      </label>
                      <input
                        placeholder="adress"
                        required
                        type="text"
                        name="adress"
                        value={contactForm.adress}
                        className="tw-w-full tw-px-4 tw-py-3 tw-text-xs tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
                        onChange={(e) => {
                          setContactForm({
                            type: "SET_ADDRESS",
                            payload: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tw-space-x-0 lg:tw-flex lg:tw-space-x-4">
                <div class="tw-w-full lg:tw-w-1/2">
                  <label
                    htmlFor="inputCity"
                    className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                  >
                    City:
                  </label>
                  <input
                    type="text"
                    placeholder="City"
                    className="tw-w-full tw-px-4 tw-py-3 tw-text-sm tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
                    id="inputCity"
                    value={contactForm.city}
                    onChange={(e) => {
                      setContactForm({
                        type: "SET_CITY",
                        payload: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="tw-w-full lg:tw-w-1/2">
                  <label
                    htmlFor="inputZip"
                    className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                  >
                    Postal Code:
                  </label>
                  <input
                    placeholder="zip"
                    type="number"
                    className="tw-w-full tw-px-4 tw-py-3 tw-text-sm tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
                    id="inputZip"
                    value={contactForm.zip}
                    onChange={(e) => {
                      setContactForm({
                        type: "SET_ZIP",
                        payload: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="tw-mt-4">
                <div className="tw-w-full">
                  <label
                    htmlFor="inputAddress"
                    className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                  >
                    Phone number:
                  </label>
                  <input
                    placeholder="phone number"
                    type="number"
                    className="tw-w-full tw-px-4 tw-py-3 tw-text-xs tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
                    id="inputPhoneNumber"
                    value={contactForm.phone_number}
                    onChange={(e) => {
                      setContactForm({
                        type: "SET_PHONENUM",
                        payload: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="tw-mt-4">
                <button
                  type="submit"
                  class="tw-w-full tw-px-6 tw-py-2 tw-text-blue-200 tw-bg-blue-600 hover:tw-bg-blue-900 tw-border-none"
                >
                  save
                </button>
              </div>
        </form>
        
        </div>
        
        </div>
        <hr />
        </div>
      
    )
}

export default UserProfile
