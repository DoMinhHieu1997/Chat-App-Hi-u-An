import React from 'react'

const Home = () => {
    return (
        <>
            <div className="flex h-full">

                {/* Chat List */}
                <aside className="w-80 bg-gray-900 border-r border-gray-800">
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
                {/* Main Chat */}
                <main className="flex-1 flex flex-col bg-gray-900">
                    <header className="p-4 border-b border-gray-800 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <h1 className="text-xl font-bold">Design chat</h1>
                            <span className="text-sm text-gray-400">23 members, 10 online</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-primary">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </button>
                            <button className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-primary">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </header>
                    <div className="flex-1 overflow-y-auto p-4 space-y-6">
                        {/* Messages */}
                        <div className="flex gap-4 max-w-2xl">
                            <img
                                src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1737831467/abhiraj_tdwxdf.webp"
                                alt="User"
                                className="w-10 h-10 rounded-xl"
                            />
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-semibold">ARK</span>
                                    <span className="text-xs text-gray-400">09:20</span>
                                </div>
                                <div className="bg-gray-800 rounded-xl p-4">
                                    <p>
                                        I added new flows to our design system. Now you can use them for
                                        your projects!
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <button className="px-2 py-1 bg-gray-800 rounded-lg text-xs flex items-center gap-1">
                                        👍 <span>4</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* More messages */}
                        <div className="flex gap-4 max-w-2xl ml-auto">
                            <div className="flex-1">
                                <div className="flex items-center justify-end gap-2 mb-1">
                                    <span className="font-semibold">You</span>
                                    <span className="text-xs text-gray-400">09:27</span>
                                </div>
                                <div className="bg-primary bg-opacity-20 rounded-xl p-4">
                                    <p>
                                        Abhi, my congratulations! I will be glad to work with you on a
                                        new project 😊
                                    </p>
                                </div>
                            </div>
                            <img
                                src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp"
                                alt="You"
                                className="w-10 h-10 rounded-xl"
                            />
                        </div>
                    </div>
                    <footer className="p-4 border-t border-gray-800">
                        <div className="flex items-center gap-2 bg-gray-800 rounded-xl p-2">
                            <button className="p-2 hover:bg-gray-700 rounded-lg text-primary">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                    />
                                </svg>
                            </button>
                            <input
                                type="text"
                                placeholder="Your message"
                                className="flex-1 bg-transparent focus:outline-none text-gray-100 placeholder-gray-400"
                            />
                            <button className="p-2 hover:bg-gray-700 rounded-lg text-primary">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </button>
                            <button className="p-2 hover:bg-gray-700 rounded-lg text-primary">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                    />
                                </svg>
                            </button>
                            <button className="p-2 hover:bg-gray-700 rounded-lg text-primary">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                            </button>
                        </div>
                    </footer>
                </main>           
            </div>
            {/* Author Attribution */}
            <div className="fixed bottom-4 right-4 text-sm text-gray-400">
                <a
                    href="https://abhirajk.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                >
                    Created by @nguyenan.184
                </a>
            </div>
        </>

    )
}

export default Home
