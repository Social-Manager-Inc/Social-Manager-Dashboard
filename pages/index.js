/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
    <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="index-header font-semibold text-4xl">
                Social-Manager
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Keep up your discord community with Social Manager!<br/>
                Youtube, twitch, twitter alerts, advanced moderation and reaction roles!{" "}
              </p>
              <div className="mt-12">
                <a
                  href="https://guide.social-manager.app"
                  target="_blank"
                  className="nav-login get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="/invite"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Invite
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="index-img"
          src="/img/logo_3.png"
          alt="..."
        />
      </section>

      <section className="index-main mt-48 md:mt-40 pb-40 relative">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="index-fill fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="/img/logo_2.png"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Great for your awesome server
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Invite and setup the bot in 3 easy steps.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa-solid fa-1"></i>
                      </div>
                      <h6 className="text-blueGray-100 text-xl mb-1 font-semibold">
                        Invite Social-Manager
                      </h6>
                      <p className="mb-4 text-blueGray-400">
                      <a
                        href="/invite"
                        target="_blank"
                        className="font-bold text-blueGray-350 hover:text-blueGray-500 ease-linear transition-all duration-150"
                      >
                        <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                        {" "}Invite
                      </a> Social-Manger to your server.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa-solid fa-3"></i>
                      </div>
                      <h6 className="text-blueGray-100 text-xl mb-1 font-semibold">
                        Ready
                      </h6>
                      <p className="mb-4 text-blueGray-400">
                        Now you can test the bot in your server.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa-solid fa-2"></i>
                      </div>
                      <h6 className="text-blueGray-100 text-xl mb-1 font-semibold">Setup</h6>
                      <p className="mb-4 text-blueGray-400">
                        Login to the dashboard and go to the settings to setup the bot.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-blueGray-100 text-xl mb-1 font-semibold">
                        Documentation
                      </h6>
                      <p className="mb-4 text-blueGray-400">
                        If you need help read the
                        <a
                        href="/invite"
                        target="_blank"
                        className="font-bold text-blueGray-350 hover:text-blueGray-500 ease-linear transition-all duration-150"
                      >
                        {" "}docs{" "}
                      </a>or join our 
                      <a
                        href="/invite"
                        target="_blank"
                        className="font-bold text-blueGray-350 hover:text-blueGray-500 ease-linear transition-all duration-150"
                      >
                        {" "}support server
                      </a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-blueGray-100 text-3xl mb-2 font-semibold leading-normal">
                Connect Social Media
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Connect Youtube, twitch, twitter and more with only one bot.
                You can easily setup it with the dashboard.
              </p>
              <a
                href="https://guide.social-manager.app/alerts"
                target="_blank"
                className="font-bold text-blueGray-500 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                View All{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src="/img/component-btn.png"
                  className="index-github align-middle shadow-lg z-3"
                />
                <img
                  alt="..."
                  src="/img/youtube-logo.webp"
                  className="index-youtube align-middle shadow-lg"
                />
                <img
                  alt="..."
                  src="/img/twitch-logo.jpeg"
                  className="index-twitch align-middle shadow-lg z-2"
                />
                <img
                  alt="..."
                  src="/img/twitter-logo.jpeg"
                  className="index-twitter align-middle shadow-2xl"
                />
                <img
                  alt="..."
                  src="/img/instagram-logo.jpeg"
                  className="index-instagram align-middle shadow-lg"
                />
                <img
                  alt="..."
                  src="/img/component-btn-pink.png"
                  className="index-regular align-middle shadow-xl"
                />
                <img
                  alt="..."
                  src="/img/reddit-logo.jpeg"
                  className="index-reddit align-middle"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="index-moderation shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="index-moderation-img shadow-md mx-auto p-2 bg-white"
                        src="https://cdn.discordapp.com/attachments/969141055511466025/972397658968850442/Moderator.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Moderation
                      </p>
                    </div>
                  </a>
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="index-logging shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="index-logging-img shadow-md mx-auto p-2 bg-white"
                        src="https://cdn.discordapp.com/attachments/969141055511466025/973578214842695690/unknown.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Logging
                      </p>
                    </div>
                  </a>
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="index-chat shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="index-chat-img shadow-md mx-auto p-2 bg-white"
                        src="https://cdn2.iconfinder.com/data/icons/chat-23/512/Chat-13-512.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Chat Bot
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="index-alerts shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="index-alerts-img shadow-md mx-auto p-2 bg-white"
                        src="https://whatemoji.org/wp-content/uploads/2020/07/Alarm-Clock-Emoji.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Alerts
                      </p>
                    </div>
                  </a>
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="index-suggestion shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="index-suggestion-img shadow-md mx-auto p-2 bg-white"
                        src="https://cdn3.iconfinder.com/data/icons/object-emoji/50/Lightbulb-512.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Suggestion
                      </p>
                    </div>
                  </a>
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="index-more shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="index-more-img shadow-md mx-auto p-2 bg-white"
                        src="https://cdn.discordapp.com/emojis/853530935004626954.webp"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        More...
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-blueGray-100 text-3xl mb-2 font-semibold leading-normal">
                Features
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Discover all bot Features with prefix & slash commands or at the dashboard.
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
                target="_blank"
                className="font-bold text-blueGray-500 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                View all{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-blueGray-100 text-3xl font-semibold">
                  Documentation
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-400">
                  This bot comes with a lot of open source code snippets that help
                  Developers to get started faster with discord.js.
                  A complex Documentation can help and you can find other Features.  
                </p>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/help.png"
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="text-blueGray-300 font-semibold text-4xl">Important Pages</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-300">

            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-blueGray-400 text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/login.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-blueGray-400 text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/profile.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-blueGray-400 text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/landing.jpg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Open Source
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Since{" "}
                <a
                  href="https://tailwindcss.com/?ref=creative"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  Tailwind CSS
                </a>{" "}
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code!
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                Get it free on Github and please help us spread the news with a
                Star!
              </p>
              <a
                href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Do you love this Starter Kit?
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Cause if you do, it can be yours now. Hit the buttons below to
                navigate to get the Free version for your next project. Build a
                new web app or give an old project a new look!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Help With a Star</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
