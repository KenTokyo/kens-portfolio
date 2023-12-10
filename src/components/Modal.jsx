import { useContext } from "react";
import { AppContext } from "../App";
import { modals } from "./../constants/index";

const Modal = () => {
  const { setOpen, open, id } = useContext(AppContext);
  const modalClass = open ? "modal-open" : "modal-closed";

  let modal;
  for (let i = 0; i < modals.length; i++) {
    if (modals[i].id == id) {
      modal = modals[i];
    }
  }

  return (
    <div onClick={() => setOpen(false)} className={`z-10 px-5 ${modalClass}`}>
      <ModalCard modal={modal} />
    </div>
  );
};

const ModalCard = ({ modal }) => {
  const { setOpen, open } = useContext(AppContext);
  const cardClass = open ? "card-open" : "card-closed";
  if (!modal) return null;
  return (
    <div className={cardClass} onClick={(e) => e.stopPropagation()}>
      <div>
        <button
          onClick={() => {
            setOpen(false);
          }}
          className="x"
        >
          X
        </button>
        <div className="px-6 pt-4 mx-auto lg:flex">
          <div className="lg:pr-5 lg:mr-5 gap-5 flex flex-col">
            {modal.image1 ? (
              <img
                className="object-cover w-full h-[20rem] rounded-lg shadow-[0_10px_20px_rgba(240,_46,_170,_0.4)]"
                src={modal.image1}
                alt=""
              />
            ) : null}
            {modal.image2 ? (
              <img
                className="object-cover object-center w-full h-[20rem] rounded-lg shadow-[0_10px_20px_rgba(240,_46,_170,_0.4)]"
                src={modal.image2}
                alt=""
              />
            ) : null}
          </div>
          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 ">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
              {modal.name}
            </h1>

            <p className="mt-6 text-gray-500 dark:text-gray-400 whitespace-pre-line">
              {modal.undertitle}
            </p>

            <p className="mt-6 text-gray-500 dark:text-gray-400 whitespace-pre-line text-sm">
              {modal.description}
            </p>
            {modal.weblink ? (
              <div className="mt-5">
                <a
                  className="text-lg font-medium text-cyan-500"
                  href={modal.weblink}
                >
                  Link zur Webseite
                </a>
              </div>
            ) : null}

            {modal.playlink ? (
              <div className="mt-3">
                <a
                  className="text-lg font-medium text-yellow-500"
                  href={modal.playlink}
                >
                  Link zum Playstore
                </a>
              </div>
            ) : null}

            <h3 className="mt-6 text-lg font-medium text-blue-500">
              Release - {modal.release}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {modal.tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>

            <div className="flex items-center justify-between mt-12 lg:justify-start"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
