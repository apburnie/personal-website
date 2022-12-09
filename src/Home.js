import profileImage from "./assets/profile.jpg";
import GitHubIcon from "./assets/GitHub.png";
import LinkedInIcon from "./assets/LinkedIn.png";

export default function Home() {
  return (
    <div className="info">
      <img src={profileImage} alt="profile" className="mx-auto" />
      <h2 className="text-2xl mt-5">Senior UI Engineer</h2>
      <h3 className="text-xl mt-5">Frontend - Fullstack</h3>
      <h4 className="text-base mt-5">PhD in Computer Science</h4>
      <p className="mt-5">
        <b>Email:</b> apburnie@hotmail.co.uk
      </p>
      <table className="w-full bg-gray-50 mx-auto mt-5">
        <tr>
          <th>
            <a href="https://github.com/Andrew47">
              <img
                className="h-8 object-contain mx-auto"
                src={GitHubIcon}
                alt="GitHub"
              />
            </a>
          </th>
          <th>
            <a href="https://www.linkedin.com/in/apburnie/">
              <img
                className="h-8 object-contain mx-auto"
                src={LinkedInIcon}
                alt="LinkedIn"
              />
            </a>
          </th>
        </tr>
      </table>
    </div>
  );
}
