import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Pagination } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { getHospiLinkFilenames } from "@/utils/fileUtils";

export interface IProjectCard {
  title: string;
  description: string;
  imgUrl: string;
  type: string;
  tags: string[];
  link: string;
  images: string[];
}

const ProjectCard: React.FC<IProjectCard> = ({
  title,
  description,
  imgUrl,
  type,
  tags,
  link,
  images,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpen() {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  };

  // console.log(getHospiLinkFilenames());

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full my-16 max-w-2xl transform overflow-hidden bg-white p-8 text-left align-middle shadow-xl transition-all">
                  {/* <div className="rounded-[20px] bg-yellow-500"> */}
                  <div className="flex justify-center items-center h-[150px] sm:h-96 w-full p-2 bg-yellow-500">
                    {/* <div className="h-[280px] w-full bg-yellow-500"> */}
                    {/* <Swiper
                      className="h-full w-full "
                      pagination={{
                        clickable: true,
                        renderBullet: function (index, className) {
                          return (
                            '<span class="' +
                            className +
                            '">' +
                            (index + 1) +
                            "</span>"
                          );
                        },
                      }}
                      modules={[Pagination]}
                      slidesPerView={1}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                    > */}
                    <Swiper
                      className="h-full w-full"
                      loop={true}
                      spaceBetween={10}
                      navigation={false}
                      thumbs={{ swiper: thumbsSwiper }}
                      // thumbs={
                      //   thumbsSwiper ? { swiper: thumbsSwiper } : undefined
                      // }
                      modules={[FreeMode, Navigation, Thumbs]}
                    >
                      {images.map((img, i) => (
                        <SwiperSlide className="rounded-2xl" key={i}>
                          <div className="flex items-start justify-start h-full w-full">
                            <img
                              className="absolute object-contain h-full w-full"
                              src={img}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* </div> */}
                    {/* <Swiper
                      className="h-[280px] w-full rounded-2xl -top-1"
                      pagination={{
                        clickable: true,
                        renderBullet: function (index, className) {
                          return (
                            '<span class="' +
                            className +
                            '">' +
                            (index + 1) +
                            "</span>"
                          );
                        },
                      }}
                      modules={[Pagination]}
                      slidesPerView={1}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                      {images.map((img, i) => (
                        <FlatShadowCard key={i}>
                          <SwiperSlide className="">
                            <div className="flex items-center justify-center w-full h-full yellow-slide my-auto">
                              <img
                                className="absolute object-contain w-full h-full"
                                src={img}
                              />
                            </div>
                          </SwiperSlide>
                        </FlatShadowCard>
                      ))}
                    </Swiper> */}
                  </div>
                  <div className="">
                    {/* <div className="bg-yellow-500 mt-2"> */}
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      loop={true}
                      spaceBetween={10}
                      slidesPerView={5}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper"
                    >
                      {images.map((img, i) => (
                        <SwiperSlide className="" key={i}>
                          <img
                            className="object-contain h-16 w-full"
                            src={img}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  {/* </div> */}
                  <div className="text-yellow-900 text-2xl font-medium mt-4">
                    {title}
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-yellow-900 leading-7">
                      {description}
                    </p>
                  </div>

                  <div className="flex flex-wrap mt-4 gap-y-2 group-hover:animate-grow animate-grow_transition">
                    <span className="bg-yellow-900 text-white text-xs mr-2 px-2.5 py-0.5 rounded">
                      {type}
                    </span>
                    {tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-yellow-500 text-yellow-100 text-xs mr-2 px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {link == "null" ? (
                    <div></div>
                  ) : (
                    <div className="mt-4 flex justify-start relative w-[88px]">
                      <a href={link} target="_blank">
                        <button className="inline-flex items-center gap-x-1 group text-yellow-500 font-semibold hover:scale-105">
                          <p className="text-sm ">Visit Link</p>
                          <BsArrowRight size={18} />
                          <span
                            className={`group-hover:w-full group-hover:left-0 group-hover:bg-yellow-500 block absolute -bottom-1 right-0 h-[2px] active:w-full active:left-0 active:bg-yellow-500 w-0 bg-yellow-500`}
                          ></span>
                        </button>
                      </a>
                    </div>
                  )}

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                      onClick={handleClose}
                    >
                      Done
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <button onClick={handleOpen}>
        <div className="flex flex-col min-w-[200px] sm:w-[500px] w-full my-8 group">
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: -50 }}
            whileInView={{ opacity: 10, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <div className="cursor-pointer relative">
              <div className="absolute inset-0 bg-yellow-500 h-[300px] w-full sm:h-[400px] sm:w-full group-hover:animate-rotate animate-rotate_transition group-hover:rotate-3 group-hover:animate-grow animate-grow_transition"></div>
              <div className="relative h-[300px] w-full sm:h-[400px] sm:w-full z-0 group-hover:animate-grow animate-grow_transition">
                <img
                  className="absolute object-cover w-full h-full -top-4 -left-4"
                  src={imgUrl}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 10, y: 0 }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-start">
              <div className="font-semibold text-xl sm:text-2xl mt-4 text-yellow-900 group-hover:animate-grow animate-grow_transition text-start">
                {title}
              </div>

              <div className="line-clamp-2 text-xs sm:text-sm leading-5 sm:leading-6 font-light text-yellow-900 mt-2 group-hover:animate-grow animate-grow_transition text-start">
                {/* without leading */}
                {/* <div className="text-xs sm:text-sm font-light text-yellow-700 mt-2 group-hover:animate-grow animate-grow_transition"> */}
                {description}
              </div>
              <div className="flex flex-wrap mt-4 gap-y-2 group-hover:animate-grow animate-grow_transition">
                <span className="bg-yellow-900 text-white text-xs mr-2 px-2.5 py-0.5 rounded">
                  {type}
                </span>
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-yellow-500 text-yellow-100 text-xs mr-2 px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </button>
    </>
  );
};

export default ProjectCard;
