import "./styles.scss";
import { SelectedPage } from "../../shared/types";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/solid";
import Link from "./Link";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1300px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <>
      <div className={`${navbarBackground} container`}>
        <div className="left-nav">CalcTS</div>
        {isAboveMediumScreens ? (
          <div className="right-nav">
            <Link
              page="Numbers"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Currency"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Temperature"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="open-menu"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <ChevronDoubleDownIcon />
          </button>
        )}

        {!isAboveMediumScreens && isMenuToggled && (
          <div className="container-mobile-menu">
            <div className="mobile-menu">
              <button
                className="open-menu"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <ChevronDoubleUpIcon />
              </button>
            </div>
            <div className="mobile-nav">
              <Link
                page="Numbers"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Currency"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Temperature"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
