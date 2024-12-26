const Story: React.FC = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          My story <span data-number={1} />
        </h5>
        {/* quote */}
        <blockquote
          className="trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
         I am a Computer Engineer specializing in React and Next.js development, with a future aim to enhance my professional development and build a successful career as a developer.
        </blockquote>
        {/* quote end */}
      </div>
    </div>
  );
};

export default Story;