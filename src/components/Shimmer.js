const FakeCard = () => {
  return <div className="shimmer-card"></div>;
};

const Shimmer = () => {
  return (
    <div>
      <div className="shimmer-screen">
        <FakeCard />
        <FakeCard />
        <FakeCard />
        <FakeCard />
        <FakeCard />
        <FakeCard />
      </div>
      <div className="shimmer-screen">
        <FakeCard />
        <FakeCard />
        <FakeCard />
        <FakeCard />
        <FakeCard />
        <FakeCard />
      </div>
    </div>
  );
};

export default Shimmer;
