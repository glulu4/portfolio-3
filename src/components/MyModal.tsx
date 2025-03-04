

import {Dialog, Transition} from "@headlessui/react";
import {Fragment} from "react";

export default function Modal({
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
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 flex items-center justify-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="fixed inset-0 grid grid-cols-2 bg-white">
                            {/* Left Section: Placeholder for Image (can be customized) */}
                            <div className="relative flex items-center justify-center bg-gray-200">
                                {/* Add an image or content here if needed */}
                            </div>

                            {/* Right Section: Content with Children */}
                            <div className="p-8 flex flex-col justify-center">
                                {/* Close Button */}
                                <button
                                    className="absolute top-4 right-4 text-gray-600 text-6xl hover:text-gray-800"
                                    onClick={() => setIsOpen(false)}
                                >
                                    ×
                                </button>

                                {/* Render children here */}
                                <div className="mt-12">{children}</div> {/* Added margin-top for spacing */}
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}