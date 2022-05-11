//import react, axios & simple components
import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

//variable to store api url
const api_url = "http://jsonplaceholder.typicode.com";

//main app function
const App = () => {
  //useState hook for api data and loading state
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState (true);

  //useEffect hook to call data asynchronously & catch error if applicable
  useEffect(() => {
    const url = `${api_url}/users/`;
    axios.get(url)
      .then(response => response.data)
      .then((data) => setUsers(data))
      .then(setIsLoading(false))
      .catch(error => {
        setIsLoading(false);
        console.log("an error happened", error);
      });
    }, []
  );
//log user data
  console.log(users);

  //function to map user data
  const renderUsers = users.map((user) => (
    <div className="card" key={user.id}>
    <div className="card-body">
      <h5 className="card-title">{user.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
      <p className="card-text">{user.address.suite}
      <br />{user.address.street}
      <br />{user.address.city},
      <br />{user.address.zipcode}
      </p>
    </div>
  </div>
  ));

  //conditional loading state function
  const content = isLoading ? <div>Loading...</div> :   <main><div className="container">
          <h2>Our Team - Contact Us</h2>
          <div className="col-xs-8">
            {renderUsers}
          </div>
      </div>
    </main>

   //return the components 
  return (
  <>
    <Header />
    {content}
    <Footer />
  </>
  )
}

export default App;
