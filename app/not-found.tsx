import Transition from "../components/Transition";

const NotFound = () => {
  return (
    <Transition mode="slide-right">
      <p style={{ marginTop: "12rem" }}>Page not found</p>
    </Transition>
  );
};

export default NotFound;
