import { useToaster } from 'react-hot-toast/headless';
import React from "react";


const ChatNotification : React.FC = () => {
    const { toasts } = useToaster();
    return (
        <div>
            {toasts
                .filter((toast) => toast.visible)
                .map((toast: any) => (
                    <div key={toast.id} {...toast.ariaProps}>
                        <div className={`${toast.visible ? 'animate-enter' : 'animate-leave'
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 absolute z-20 translate-y-20 translate-x-[50rem]`}
                        >
                            <div className="flex-1 w-0 p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 pt-0.5">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="/bg/bot-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3 flex-1">
                                        <p className="text-sm font-medium text-gray-900">
                                            Fashion-flair
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500"
                                            dangerouslySetInnerHTML={{ __html: toast.message }}>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}
export default ChatNotification;