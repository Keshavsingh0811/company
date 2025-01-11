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
            Ready to Create Something Amazing?
          </h3>
          <p className="call-to-action-text">
            Every great project begins with a conversation. Share your vision
            with us, and let's start building a solution that's perfectly
            aligned with your needs.
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
