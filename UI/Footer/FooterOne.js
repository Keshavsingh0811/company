import { useRouter } from "next/router";

const FooterOne = (props) => {
  const router = useRouter();

  const redirectToAnotherPage = () => {
    router.push("/contact");
  };
  return (
    <div>
      <div className="call-to-action-wrapper">
        <div className="call-to-action-card">
          <h3 className="call-to-action-title">
            Ready to Bring Your Vision to Life?
          </h3>
          <p className="call-to-action-text">
            Every successful project starts with a conversation. Tell us your
            vision, and let's create a solution tailored to your needs.
            Together, we’ll explore innovative approaches, overcome challenges,
            and build something that not only meets but exceeds your
            expectations. Let’s turn your ideas into reality and drive lasting
            success.
          </p>
          <div className="call-to-action-button-wrapper">
            <button className="btn btn-warning" onClick={redirectToAnotherPage}>
              Reach us now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
