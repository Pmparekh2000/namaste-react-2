import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <User name={"Prerak"} location={"Mumbai"} />
      <UserClass
        name={"Prerak class"}
        location={"Mumbai class"}
        userName={"Pmparekh2000 class"}
      />
    </div>
  );
};

export default About;
