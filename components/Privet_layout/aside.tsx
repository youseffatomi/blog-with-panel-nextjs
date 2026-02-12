import { Card } from "flowbite-react";
import Logo from "./../../assets/images/SVG/logo.svg";

export default function Aside() {
  return (
    <Card className="bg-light min-h-50">
      <div>
        <img src={Logo} className="mx-auto block h-20" />
      </div>
    </Card>
  );
}
