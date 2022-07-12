import '../../styles/not-found-screen.css';

export default function NotFoundScreen(): JSX.Element {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <p className="error-text">Oopsie! Page is not found</p>
        <a className="home-link" href="#">Back to home page</a>
      </div>
    </div>
  );
}
