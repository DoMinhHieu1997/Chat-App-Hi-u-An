import React from 'react'

const SidebarRight = () => {
    return (
        <aside className="w-80 bg-gray-900 border-l border-gray-800 p-4">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Group Info</h2>
                <button className="text-gray-400 hover:text-gray-300">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <a
                            href="https://abhirajk.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </a>
                    </svg>
                </button>
            </div>
            <div className="space-y-6">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">Files</h3>
                        <span className="text-xs text-primary">
                            <a
                                href="https://abhirajk.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary"
                            >
                                See all
                            </a>
                        </span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 p-2 bg-gray-800 rounded-lg">
                            <div className="w-10 h-10 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center text-primary">
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
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium truncate">265 photos</p>
                                <p className="text-xs text-gray-400">123.5 MB</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Members</h3>
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp"
                                alt="Member"
                                className="w-10 h-10 rounded-xl"
                            />
                            <div>
                                <p className="font-medium">Tanisha Combs</p>
                                <p className="text-xs text-primary">admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default SidebarRight
