import React from "react";
import BallIcon from "./BallIcon";
import { HomeIcon } from "@heroicons/react/24/solid";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {
    pageTitle: string,
    returnPage: string,
};

const PageHeader = ({ pageTitle, returnPage }: Props) => {
  return (
    <div>
      <div
        className="flex items-center justify-between 
          shorter:pt-4
            px-8 pt-8
            xs:px-10
            minism:px-12
            sm:px-16
            md:px-20
            lg:px-24 lg:pt-8
      "
      >
        <BallIcon />
        <a href="/">
          <HomeIcon className="short:h-8 h-10 drop-shadow-light" />
        </a>
      </div>
      <h3 className="uppercase text-center mt-4 text-3xl font-semibold drop-shadow-light">
        {pageTitle}
      </h3>
      <Link
        href={returnPage}
        className="flex text-xs px-4 items-center py-2 justify-center"
      >
        <ArrowUturnLeftIcon className="h-4 px-2 drop-shadow-light" />
        <p className="drop-shadow-light">Return to Previous Page</p>
      </Link>
    </div>
  );
};

export default PageHeader;
