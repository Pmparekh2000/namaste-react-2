import { useGetGithubUserByNameQuery } from "../redux/slices/userSlice";

const About = () => {
  const { data, error, isLoading } =
    useGetGithubUserByNameQuery("pmparekh2000");

  return (
    <div>
      <button onClick={() => dispatch(resetUserInfo())}>Reset user info</button>
      {isLoading ? (
        <p>Loading</p>
      ) : data ? (
        <div>
          <p>Hello</p>
          <p>{data?.name}</p>
        </div>
      ) : (
        <p>Error: {error}</p>
      )}
    </div>
  );
};

export default About;
