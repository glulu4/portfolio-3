import {Dialog, Transition} from "@headlessui/react";
import {Fragment} from "react";

export default function ContactModal({
    isOpen,
    setIsOpen,
    children,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    children: React.ReactNode;
}) {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 flex items-center justify-center px-10 sm:px-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full  max-w-sm p-6 bg-modalbg rounded-lg shadow-lg transform transition-all">
                            {/* Left Section: Placeholder for Image (can be customized) */}
                            <div className="relative flex items-center justify-center  mb-4">
                                <h2 className="text-whitesmoke text-xl sm:text-2xl font-bold">
                                    Contact 
                                </h2>
                            </div>

                            {/* Right Section: Content with Children */}
                            <div className="flex flex-col justify-center">
                                {/* Close Button */}
                                <button
                                    className="absolute top-2 right-2 text-hoverColor text-3xl hover:text-gray-800"
                                    onClick={() => setIsOpen(false)}
                                >
                                    ×
                                </button>

                                {/* Render children here */}
                                <div className="mt-8">{children}</div> {/* Adjusted margin-top for smaller modal */}
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}