import * as React from "react";

export function ChatActions() {
  return (
    <div className="flex flex-col pl-7 mt-1.5 w-full">
      <div className="flex gap-1.5 max-w-full text-xs md:text-sm lg:text-base font-medium text-sky-500 w-[170px] md:w-[200px] lg:w-[240px]">
        <button 
          className="gap-1 self-stretch rounded-md bg-sky-500 bg-opacity-20 min-h-[22px] w-[60px] md:w-[80px] lg:w-[100px] hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-sky-500"
          aria-label="Get a hint"
        >
          Need a hint?
        </button>
        <button 
          className="gap-1 self-stretch rounded-md bg-sky-500 bg-opacity-20 min-h-[22px] hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-sky-500"
          aria-label="View example problems"
        >
          View examples
        </button>
      </div>
      <div className="flex gap-5 justify-between items-start mt-1 w-full">
        <button 
          className="gap-1 self-stretch text-xs md:text-sm lg:text-base font-medium text-sky-500 rounded-md bg-sky-500 bg-opacity-20 min-h-[22px] px-3 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-sky-500"
          aria-label="Learn more about this topic"
        >
          Learn more
        </button>
        <div className="flex flex-col mt-1">
          <div className="text-xs md:text-sm lg:text-base font-semibold text-stone-500">
            Rate this response
          </div>
          <div className="flex gap-4 self-center w-[45px] md:w-[60px] lg:w-[75px]">
            <button 
              className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-full p-1"
              aria-label="Like this response"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eeb71fcff3b183921371651dc6b716cbe966843c9f6aa8f1b948e8886a2cc3d0?placeholderIfAbsent=true&apiKey=b84dd30bad284682bdd2468de5480c9b"
                alt=""
                className="object-contain shrink-0 aspect-square w-[15px] md:w-[20px] lg:w-[25px]"
              />
            </button>
            <button 
              className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-full p-1"
              aria-label="Dislike this response"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/375745a1989e26f3f2aed813b6cbbbaa609538ae1e322d7b8a898988d7f6cb45?placeholderIfAbsent=true&apiKey=b84dd30bad284682bdd2468de5480c9b"
                alt=""
                className="object-contain shrink-0 aspect-square w-[15px] md:w-[20px] lg:w-[25px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}