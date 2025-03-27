import React from 'react'

const ChatList = () => {
    return (
        <aside className="w-80 h-screen bg-gray-900 border-r border-gray-800">
            <div className="p-4">
                <div className="relative">
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full bg-gray-800 rounded-xl py-2 pl-10 pr-4 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <svg
                        className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-5rem)]">
                <div className="px-2 space-y-1">
                    <div className="p-3 rounded-xl bg-primary bg-opacity-20 flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-2xl font-bold">
                            DC
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-primary">Design chat</h3>
                                <span className="text-xs text-gray-400">4m</span>
                            </div>
                            <p className="text-sm text-gray-400 truncate">i love you mahn</p>
                        </div>
                    </div>
                    {/* More chat items */}
                    <div className="p-3 rounded-xl hover:bg-gray-800 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden">
                            <img
                                src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1737831467/abhiraj_tdwxdf.webp"
                                alt="User"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">Abhi</h3>
                                <span className="text-xs text-gray-400">20m</span>
                            </div>
                            <p className="text-sm text-gray-400 truncate">
                                Hey! We are ready to start...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default ChatList
