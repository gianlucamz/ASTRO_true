import Icon from "./Icon";
import LogoTitle from "../assets/astro.jpeg";

export default function Footer() {
  return (
    <footer
      className="w-full bg-white relative z-10 p-8"
      style={{ boxShadow: "0 -4px 16px rgba(0,0,0,0.18)" }}
    >
      <div>
        <div>
          <img src={LogoTitle} className="w-40 ml-5" />
        </div>

        <div className="ml-6 flex gap-2 mt-2">
            <h1 className="font-bold">
            Siga-nos
          </h1>
          <Icon name="logo-instagram" className="text-2xl" />
          <Icon name="logo-facebook" className="text-2xl" />
        </div>

        <div>
            
        </div>
      </div>
    </footer>
  );
}
