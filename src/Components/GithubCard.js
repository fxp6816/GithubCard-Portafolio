import React from "react";
import "../Style/main.css";
const GithubCard = ({
  name,
  description,
  lastUpdated,
  url,
  language,
  watchers,
}) => {
  const languageTag = (language) => {
    switch (language) {
      case "Java":
        return (
          <div className="bg-yellow-900 inline  rounded py-1 px-3  text-white">
            Java
          </div>
        );
      case "JavaScript":
        return (
          <div className="bg-yellow-400 inline-block  rounded py-1 px-3 text-black">
            JavaScript
          </div>
        );
      case "Php":
        return (
          <div className="bg-blue-600 inline-block  rounded py-1 px-3  text-white">
            PHP
          </div>
        );
      case "C":
        return (
          <div className="bg-gray-500 inline-block  rounded py-1 px-3  text-white">
            C
          </div>
        );

      default:
        return (
          <div className="bg-black inline-block  rounded py-1 px-3  text-white">
            No Language Asg.
          </div>
        );
    }
  };

  return (
    <div className="my-2 md:w-3/4 mx-auto">
      <div className=" space-y-2 items-center justify-end flex-1 h-full p-4 rounded-xl filter drop-shadow-lg border-gray-200 border">
        <p className="w-full text-2xl">{name}</p>
        {languageTag(language)}
        <p className=" w-full text-xs  text-gray-400">
          <svg
            className="w-6 h-6 inline m-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Last Updated: {lastUpdated}
        </p>
        <p className="w-full  text-xs text-gray-400">
          <svg
            className="w-6 h-6 inline m-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          Number of Watchers: {watchers}
        </p>
        <p className="my-2 w-full pb-8 text-sm tracking-wide leading-tight ">
          {description}
        </p>

        <div className="rounded mr-auto">
          <div className="bg-blue-600 inline-block rounded py-1 px-3 hover:bg-blue-900">
            <a className="text-sm  text-white" href={url}>
              <svg
                className="w-6 h-6 inline m-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubCard;
