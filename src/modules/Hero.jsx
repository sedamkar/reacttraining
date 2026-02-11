import Profile from "./Profile";

const Hero = () => {
  return (
    <>
      <div className="App container">
        <h1 className="my-4">Web development Training FOR FDP demo </h1>

        <div className="row justify-content-center">
          <div className="col-md-4">
            <Profile
              name="Shyam"
              title="Web developemtn"
              profilepic="./profile.jpeg"
            ></Profile>
          </div>
          <div className="col-md-6">
            No Description- Testing
          </div>
        </div>
        {/* <ItemList items={items} /> */}
      </div>
    </>
  );
};
export default Hero;
