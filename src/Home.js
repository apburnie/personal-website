import profileImage from "./assets/profile.jpg";
import GitHubIcon from "./assets/GitHub.png";
import LinkedInIcon from "./assets/LinkedIn.png";

export default function Home() {
  return (
    <div className="info">
      <img
        src={profileImage}
        alt="what Andrew looks like"
        className="mx-auto"
      />
      <p className="text-xl my-2 ">Senior UI Engineer</p>
      <p className="text-lg my-1">Frontend - Fullstack</p>
      <p className="text-base ">PhD in Computer Science</p>
      <p className="mt-5">
        <b>Email:</b> apburnie@hotmail.co.uk
      </p>
      <div className="w-full bg-gray-50 mx-auto mt-5 flex justify-around">
        <div>
          <a href="https://github.com/Andrew47">
            <img
              className="h-8 object-contain mx-auto"
              src={GitHubIcon}
              alt="GitHub"
            />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/apburnie/">
            <img
              className="h-8 object-contain mx-auto"
              src={LinkedInIcon}
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
