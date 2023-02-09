import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  // console.log(currentUser);
  // axios.get('/api/users/currentuser').catch((err) => {
  //   console.log(err.message);
  // });

  console.log(currentUser);
 
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
  if(typeof window === 'undefined'){

  }else {
    const { data } = await axios.get('/api/users/currentuser');

    return data;
  }

  return {}
};
 
export default LandingPage;