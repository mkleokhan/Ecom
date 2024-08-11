import { useState } from "react";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, SetUser] = useState("Muhammad Kamran");
  return (
    <>
      <center>
        <button
          className="mt-2 ml-1 bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          id="loginLogout"
          onClick={() => {
            let button = document.getElementById("loginLogout");
            console.log(button);
            if (isLoggedIn === false) {
              button.textContent = "Log In";

              setIsLoggedIn(true);
              button.textContent = "Log Out";
            } else {
              button.textContent = "Log In";
              setIsLoggedIn(false);
            }
          }}
        >
          Log in
        </button>
      </center>
      {isLoggedIn ? (
        <>
          <div>
            <h1 className="text-lg font-bold mt-4">
              <center>Welcome {user} </center>
            </h1>
            <form className="w-ful">
              <label htmlFor="name">Name</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="name"
                placeholder="Name"
              />
              <label htmlFor="email">Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                placeholder="something@something.com"
              />
              <label htmlFor="phone">Phone</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="tel"
                id="phone"
                placeholder="phone number"
              />
              <label htmlFor="password">Password</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                placeholder="password"
              />
              <label htmlFor="dob">Date of Birth</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                id="dob"
              />
              <label htmlFor="profilePic">Profile Picture</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
              />
              <button className="mt-2 ml-1 bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <center>
            <h1 className="text-lg font-bold mt-4">You Must log in first...</h1>
          </center>
        </>
      )}
    </>
  );
};

export default Profile;
