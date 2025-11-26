import "./App.css";
import iconEmail from "./assets/icons/icon-email.svg";
// import linkdinIcon from "./assets/icons/icon-linkedin.svg";
import logo from "./assets/logos/logo.png";

function App() {
  return (
    <main>
      <section className="min-h-[80vh] px-4 md:px-6 lg:px-8 flex flex-col items-center text-center">
        <img src={logo} alt="Udyoga Access Logo" style={{ width: "500px" }} />
        <h2 className="text-xl mb-4 max-w-[45ch]">
          Udyoga Access is on its way — a platform designed to connect talent
          with meaningful opportunities. We’re building something powerful,
          simple, and accessible for everyone.
        </h2>
      </section>

      <Footer />
    </main>
  );
}

export default App;

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 px-4 md:px-6 lg:px-8 pb-8 flex-wrap justify-between items-end text-white footer">
      <section className=" md:flex justify-between w-full">
        <section className="mb-4 md:mb-0">
          <p className="font-bold mb-2">Udyoga Access</p>
          <p className="max-w-[25ch] text-xs">
            2nd Floor, No. 17, 20th Main Road, Ward No. 67, 1st R Block, W.O.C.
            Road, Rajajinagar, Bengaluru, Karnataka - 560010.
          </p>
        </section>
        <section className="md:text-right">
          <p className="font-bold mb-2">Contact Us</p>
          <ul className="">
            <li>
              <SocialIcon
                alt="mail"
                imgPath={iconEmail}
                label="Mail"
                link="mailto:udyogaaccess@gmail.com"
              />
            </li>
            {/* <li>
              <SocialIcon
                alt="linkedin"
                imgPath={linkdinIcon}
                label="linkedin"
                link="mailto:admin@udyoga-access.com"
              />
            </li> */}
          </ul>
        </section>
      </section>
    </footer>
  );
};

type Props = {
  link: string;
  imgPath: string;
  alt: string;
  label: string;
};

const SocialIcon = ({ link, label, imgPath, alt }: Props) => {
  return (
    <a
      href={link}
      aria-label={label}
      title={label}
      className="bg-white inline-block p-2 rounded-full hover:scale-50 transition-transform "
    >
      <img src={imgPath} width={24} height={24} alt={alt} />
    </a>
  );
};
