import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  return <h1>{`Signed ${currentUser ? 'in' : 'out'}`}</h1>
};

LandingPage.getInitialProps = async context => {
  console.log('LANDING PAGE!!');
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');

  return data;
};

export default LandingPage;
