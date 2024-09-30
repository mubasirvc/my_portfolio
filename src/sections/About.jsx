import { useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";
import Tech from "../components/Tech.jsx";
import BorderMagicButton from "../components/ui/BorderMagicButton.jsx";
import linkedIn from "../assets/linkedin.png";
import leetcode from "../assets/leetcode.svg";
import github from "../assets/github.png";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("mubasirumbi@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/mubasir.jpg"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Mubasir v c</p>
              <p className="grid-subtext">
                With 2 years of experience, I have honed my skills in both
                frontend and backend dev, creating dynamic and responsive
                websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/* techstack  image */}
            <img
              src="assets/grid3.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Why I Love Coding</p>
              <p className="grid-subtext">
                I enjoy figuring out problems and creating things with code.
                Coding isn&apos;t just my job—it&apos;s something I really like
                doing.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <p className="grid-headtext">Let's Connect!</p>
            <div className="sub-grid-container">
              <p className="grid-subtext2">
                Let's grow our professional network and share insights
              </p>
              <BorderMagicButton
                name={"LinkedIn"}
                icon={linkedIn}
                link={"https://www.linkedin.com/in/mubasir-vc/"}
              />
            </div>
            <div className="sub-grid-container">
              <p className="grid-subtext2">
                Check out my projects and open-source contributions.
              </p>
              <BorderMagicButton
                name={"GitHub"}
                icon={github}
                link={"https://github.com/mubasir-umbi"}
              />
            </div>
            <div className="sub-grid-container">
              <p className="grid-subtext2">
                Explore my coding journey and problem-solving strategies.
              </p>
              <BorderMagicButton
                name={"LeetCode"}
                icon={leetcode}
                link={"https://leetcode.com/u/mubasirvc/"}
              />
            </div>
            <div className="sub-grid-container">
              <p className="grid-subtext2">
                Want to know more? Download my resume to see how I can help your
                team.
              </p>
              <BorderMagicButton
                name={"Download"}
                // icon={leetcode}
                link={""}
              />
            </div>

            {/* <div className=" rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 12.9716,
                    lng: 77.5946,
                    text: "Banglore, India",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div> */}
            {/* <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Banglore, India and open to remote work
                worldwide.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div> */}
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            {/* <img
              src="assets/grid2.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            /> */}
            <Tech />

            {/* <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div> */}
            <div className="mt-auto mb-5">
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  mubasirumbi@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;