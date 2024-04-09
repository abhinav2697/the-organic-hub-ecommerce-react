import { footer } from "../../dB/footer";

const Footer = () => {
  
  
    return (
      <footer className="footer d-flex direction-column align-center">
        <p>
          Made with{" "}
          <span role="img" aria-label="Love">
            ❤️
          </span>{" "}
          by Abhinav Kulkarni
        </p>
        <div className="d-flex gap align-center padding-all-16">
          {footer.map(({imgUrl, alt, link, _id}) => {
            return (
              <a key={_id}
            href={link}
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="source-image"
              src={imgUrl}
              alt={alt}
            />
          </a>
            )
          })}
        </div>
      </footer>
    );
  };
    
    export { Footer };