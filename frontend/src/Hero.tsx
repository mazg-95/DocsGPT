import { useMediaQuery } from './hooks';
import DocsGPT3 from './assets/cute_docsgpt3.svg';

export default function Hero({ className = '' }: { className?: string }) {
  // const isMobile = window.innerWidth <= 768;
  const { isMobile } = useMediaQuery();
  const isDarkTheme = document.documentElement.classList.contains('dark');
  console.log(isDarkTheme)
  return (
    <div className={`mt-14 ${isMobile ? 'mb-2' : 'mb-12'}flex flex-col text-black-1000 dark:text-bright-gray`}>
      <div className=" mb-2 flex items-center justify-center sm:mb-10">
        <p className="mr-2 text-4xl font-semibold">DocsGPT</p>
        <img className="mb-2 h-14" src={DocsGPT3} alt="DocsGPT" />
      </div>
      {isMobile ? (
        <p className="mb-3 text-center leading-6">
          Welcome to <span className="font-bold ">DocsGPT</span>, your technical
          documentation assistant! Start by entering your query in the input
          field below, and we&apos;ll provide you with the most relevant
          answers.
        </p>
      ) : (
        <>
          <p className="mb-3 text-center leading-6">
            Welcome to DocsGPT, your technical documentation assistant!
          </p>
          <p className="mb-3 text-center leading-6">
            Enter a query related to the information in the documentation you
            selected to receive
            <br /> and we will provide you with the most relevant answers.
          </p>
          <p className="mb-3 text-center leading-6">
            Start by entering your query in the input field below and we will do
            the rest!
          </p>
        </>
      )}
      <div
        className={`sections ${isMobile ? '' : 'mt-1'
          } flex flex-wrap items-center justify-center gap-2 sm:gap-1 md:gap-0`}
      >
        {/* first */}
        <div className="h-auto md:h-60 rounded-[50px] bg-gradient-to-l  from-[#6EE7B7]/70 dark:from-[#D16FF8] via-[#3B82F6] dark:via-[#48E6E0] to-[#9333EA]/50 dark:to-[#C85EF6] p-1  md:rounded-tr-none md:rounded-br-none">
          <div
            className={`h-full rounded-[45px] bg-white dark:bg-dark-charcoal p-${isMobile ? '3.5' : '6 py-8'
              }  md:rounded-tr-none md:rounded-br-none`}
          >
            {/* Add Mobile check here */}
            {isMobile ? (
              <div className="flex justify-center">
                <img
                  src={isDarkTheme ? "/message-text-dark.svg" : "/message-text.svg"}
                  alt="lock"
                  className="h-[24px] w-[24px] "
                />
                <h2 className="mb-0 pl-1 text-lg font-bold">
                  Chat with Your Data
                </h2>
              </div>
            ) : (
              <>
                <img
                  src={isDarkTheme ? "/message-text-dark.svg" : "/message-text.svg"}
                  alt="lock"
                  className="h-[24px] w-[24px]"
                />
                <h2 className="mt-2 mb-3 text-lg font-bold">
                  Chat with Your Data
                </h2>
              </>
            )}
            <p
              className={
                isMobile
                  ? `w-[250px] text-center text-xs text-gray-500 dark:text-bright-gray`
                  : `w-[250px] text-xs text-gray-500 dark:text-bright-gray`
              }
            >
              DocsGPT will use your data to answer questions. Whether its
              documentation, source code, or Microsoft files, DocsGPT allows you
              to have interactive conversations and find answers based on the
              provided data.
            </p>
          </div>
        </div>
        {/* second */}
        <div className="h-auto md:h-60 rounded-[50px] bg-gradient-to-r from-[#6EE7B7]/70 dark:from-[#D16FF8] via-[#3B82F6] dark:via-[#48E6E0] to-[#9333EA]/50 dark:to-[#C85EF6] p-1  md:rounded-none  md:py-1 md:px-0">
          <div
            className={`h-full rounded-[45px] bg-white dark:bg-dark-charcoal p-${isMobile ? '3.5' : '6 py-6'
              }  md:rounded-none`}
          >
            {/* Add Mobile check here */}
            {isMobile ? (
              <div className="flex justify-center ">
                <img src={isDarkTheme ? "/lock-dark.svg" : "/lock.svg"} alt="lock" className="h-[24px] w-[24px]" />
                <h2 className="mb-0 pl-1 text-lg font-bold">
                  Secure Data Storage
                </h2>
              </div>
            ) : (
              <>
                <img src={isDarkTheme ? "/lock-dark.svg" : "/lock.svg"} alt="lock" className="h-[24px] w-[24px]" />
                <h2 className="mt-2 mb-3 text-lg font-bold">
                  Secure Data Storage
                </h2>
              </>
            )}
            <p
              className={
                isMobile
                  ? `w-[250px] text-center text-xs text-gray-500 dark:text-bright-gray`
                  : `w-[250px] text-xs text-gray-500 dark:text-bright-gray`
              }
            >
              The security of your data is our top priority. DocsGPT ensures the
              utmost protection for your sensitive information. With secure data
              storage and privacy measures in place, you can trust that your
              data is kept safe and confidential.
            </p>
          </div>
        </div>
        {/* third */}
        <div className="h-auto md:h-60 rounded-[50px] bg-gradient-to-l  from-[#6EE7B7]/70 dark:from-[#D16FF8] via-[#3B82F6] dark:via-[#48E6E0] to-[#9333EA]/50 dark:to-[#C85EF6] p-1 md:rounded-tl-none md:rounded-bl-none ">
          <div
            className={`h-full firefox rounded-[45px] bg-white dark:bg-dark-charcoal p-${isMobile ? '3.5' : '6 px-6 '
              } lg:rounded-tl-none lg:rounded-bl-none`}
          >
            {/* Add Mobile check here */}
            {isMobile ? (
              <div className="flex justify-center">
                <img
                  src={isDarkTheme ? "message-programming-dark.svg" : "/message-programming.svg"}
                  alt="lock"
                  className="h-[24px] w-[24px]"
                />
                <h2 className="mb-0 pl-1 text-lg font-bold">
                  Open Source Code
                </h2>
              </div>
            ) : (
              <>
                <img
                  src={isDarkTheme ? "/message-programming-dark.svg" : "/message-programming.svg"}
                  alt="lock"
                  className="h-[24px] w-[24px]"
                />
                <h2 className="mt-2 mb-3 text-lg font-bold">
                  Open Source Code
                </h2>
              </>
            )}
            <p
              className={
                isMobile
                  ? `w-[250px] text-center text-xs text-gray-500 dark:text-bright-gray`
                  : `w-[250px] text-xs text-gray-500 dark:text-bright-gray`
              }
            >
              DocsGPT is built on open source principles, promoting transparency
              and collaboration. The source code is freely available, enabling
              developers to contribute, enhance, and customize the app to meet
              their specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
