"use client";

import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

import { useState, useEffect } from "react";
export default function Home() {
  const [current, setCurrent] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const data = [
    {
      title: "USA",
      description: "A Land of Opportunities",
      image:
        "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2575&q=80",
    },

    {
      title: "Germany",
      description: "A Land of Histories",
      image:
        "https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    },
    {
      title: "India",
      description: "A Land of Rich Histories And Wonders",
      image:
        "https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2575&q=80",
    },
  ];

  const selected = data[current];

  return (
    <main>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          <section className="flex h-screen overflow-hidden flex-shrink-0 w-screen p-2 gap-6 items-end justify-center">
            <m.div
              animate={{
                zIndex: triggered ? 10 : 20,
                scale: triggered ? 0.95 : 1,
              }}
              className="grid absolute inset-0 w-screen h-screen  items-center justify-items-center"
            >
              <div className="col-start-1 inline-flex flex-col items-center text-center row-start-1 relative z-10">
                <m.h1
                  animate={{
                    height: triggered ? 0 : "auto",
                  }}
                  className="text-white font-sans overflow-hidden text-9xl uppercase font-light"
                >
                  {selected.title}
                </m.h1>
                <m.h2
                  animate={{
                    opacity: triggered ? 0 : 1,
                    y: triggered ? 0 : -5,
                  }}
                  className="text-stone-200 font-serif max-w-[12rem]"
                >
                  {selected.description}
                </m.h2>
              </div>
              <div className="col-start-1 row-start-1 relative z-0 h-screen w-screen">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className={`cursor-pointer h-full w-full object-cover`}
                />
              </div>
            </m.div>

            {data.map((item: any, key: number) => {
              const selected = current === key;

              if (!selected) {
                return (
                  <img
                    key={key}
                    onClick={() => {
                      if (current === key) return null;
                      setTriggered(true);
                      setTimeout(() => {
                        setCurrent(key);
                        setTriggered(false);
                      }, 500);
                    }}
                    src={item.image}
                    alt={item.title}
                    className={`top-0 w-[14rem] z-50 h-[18rem] rounded-[25px] relative left-0 cursor-pointer`}
                  />
                );
              }
            })}
          </section>
        </AnimatePresence>
      </LazyMotion>
    </main>
  );
}
