import { useContext, useEffect, useState } from "react";
import AppContext from "../../services/context";
import Image from "next/image";

export const LogoNavabar = () => {
  const context = useContext(AppContext);
  const [logo, setLogo] = useState('');
  const [nameLogo, setNameLogo] = useState(null);

  useEffect(() => {
    if (context.infos) {
      setLogo(context.infos.logo.ImageLogo.src);
      setNameLogo(context.infos.name);
    }
  }, []);

  return (
    <div className="flex-shrink-0 flex items-center">
      {logo && <Image src={logo} width={40} height={40} className="flex justify-center items-center p-5 mx-5" alt="logo imagen"/>}
      <h1 className="text-2xl font-bold">{nameLogo}</h1>
    </div>
  );
};
