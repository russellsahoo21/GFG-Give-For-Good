import React from 'react';

export default function LeaderboardPage() {
    return (
        <div className="bg-background text-on-surface min-h-screen font-sans">
            {/* SideNavBar */}
            <aside className="h-screen w-[220px] fixed left-0 top-0 z-40 bg-surface-container-low flex flex-col pt-4 pb-10 px-0">
                <div className="px-6 flex items-center mb-8">
                    <img src="/logo.png" alt="GFG Logo" className="h-30 w-auto object-contain" />
                </div>
                <div className="mb-10 px-6">
                    <p className="font-['Inter'] font-normal text-sm leading-6 text-slate-400">Welcome back</p>
                    <p className="font-['Inter'] font-medium text-sm text-primary">The Digital Curator</p>
                </div>
                <nav className="flex-1 flex flex-col">
                    {/* Dashboard */}
                    <a className="text-slate-600 pl-5 py-3 font-['Inter'] font-normal text-sm hover:bg-surface-container transition-all duration-300 flex items-center gap-3" href="#">
                        <span className="material-symbols-outlined text-lg" data-icon="dashboard">dashboard</span> Dashboard
                    </a>
                    {/* My Donations */}
                    <a className="text-slate-600 pl-5 py-3 font-['Inter'] font-normal text-sm hover:bg-surface-container transition-all duration-300 flex items-center gap-3" href="#">
                        <span className="material-symbols-outlined text-lg" data-icon="volunteer_activism">volunteer_activism</span> My Donations
                    </a>
                    {/* Leaderboard (Active) */}
                    <a className="text-primary border-l-4 border-primary pl-4 py-3 font-['Inter'] font-medium text-sm bg-transparent flex items-center gap-3" href="/leaderboard">
                        <span className="material-symbols-outlined text-lg" data-icon="leaderboard" style={{ fontVariationSettings: "'FILL' 1" }}>leaderboard</span> Leaderboard
                    </a>
                    {/* Matches */}
                    <a className="text-slate-600 pl-5 py-3 font-['Inter'] font-normal text-sm hover:bg-surface-container transition-all duration-300 flex items-center gap-3" href="#">
                        <span className="material-symbols-outlined text-lg" data-icon="handshake">handshake</span> Matches
                    </a>
                    {/* Messages */}
                    <a className="text-slate-600 pl-5 py-3 font-['Inter'] font-normal text-sm hover:bg-surface-container transition-all duration-300 flex items-center gap-3" href="#">
                        <span className="material-symbols-outlined text-lg" data-icon="chat_bubble">chat_bubble</span> Messages
                    </a>
                    {/* Settings */}
                    <a className="text-slate-600 pl-5 py-3 font-['Inter'] font-normal text-sm hover:bg-surface-container transition-all duration-300 flex items-center gap-3" href="#">
                        <span className="material-symbols-outlined text-lg" data-icon="settings">settings</span> Settings
                    </a>
                </nav>
                <div className="mt-auto px-6 space-y-4">
                    <button className="w-full bg-primary text-on-primary py-2 px-4 rounded-lg font-medium text-sm transition-all active:opacity-80 scale-95">Start a Donation</button>
                    <div className="pt-6 space-y-3">
                        <a className="text-slate-600 flex items-center gap-3 text-sm hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined text-lg" data-icon="help">help</span> Support
                        </a>
                        <a className="text-slate-600 flex items-center gap-3 text-sm hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined text-lg" data-icon="logout">logout</span> Logout
                        </a>
                    </div>
                </div>
            </aside>

            {/* TopNavBar */}
            <header className="fixed top-0 ml-[220px] w-[calc(100%-220px)] bg-surface/80 backdrop-blur-md z-30 flex justify-between items-center px-12 py-6">
                <div className="flex items-center flex-1">
                    <div className="relative w-full max-w-md">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" data-icon="search">search</span>
                        <input className="w-full pl-10 pr-4 py-2 bg-surface-container border-none rounded-full text-sm focus:ring-1 focus:ring-primary/20 transition-all" placeholder="Search NGO impact..." type="text" />
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <button className="relative hover:opacity-70 transition-opacity">
                        <span className="material-symbols-outlined text-primary" data-icon="notifications">notifications</span>
                        <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full"></span>
                    </button>
                    <button className="hover:opacity-70 transition-opacity">
                        <span className="material-symbols-outlined text-primary text-3xl" data-icon="account_circle">account_circle</span>
                    </button>
                </div>
            </header>

            {/* Main Content Canvas */}
            <main className="ml-[220px] pt-24 min-h-screen">
                <div className="max-w-7xl mx-auto px-12 py-8">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl font-medium tracking-tighter text-primary mb-4">Impact Leaderboard</h2>
                            <p className="text-body-lg text-on-surface-variant leading-relaxed opacity-80">Celebrating the community of curators driving global change. Every point represents a life touched, a mission fueled, and a future secured.</p>
                        </div>
                        {/* Toggle */}
                        <div className="inline-flex bg-surface-container p-1 rounded-lg">
                            <button className="px-6 py-2 bg-surface-container-lowest text-primary font-medium text-sm rounded-md transition-all">Monthly</button>
                            <button className="px-6 py-2 text-on-surface-variant hover:text-primary font-medium text-sm transition-all">All time</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-12">
                        {/* Central Column */}
                        <div className="col-span-12 lg:col-span-8 space-y-12">
                            {/* Podium Bento */}
                            <div className="grid grid-cols-3 gap-6 items-end">
                                {/* 2nd Place */}
                                <div className="bg-surface-container-low p-8 rounded-2xl flex flex-col items-center text-center space-y-4">
                                    <div className="relative">
                                        <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xl text-slate-500">MK</div>
                                        <div className="absolute -bottom-2 -right-2 bg-surface-container-highest w-8 h-8 rounded-full flex items-center justify-center border-2 border-surface-container-low font-bold text-xs">2</div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-on-surface">Marcus K.</h4>
                                        <p className="text-xs text-on-surface-variant">Berlin, DE</p>
                                    </div>
                                    <div className="text-xl font-bold text-primary">12,450</div>
                                </div>

                                {/* 1st Place */}
                                <div className="bg-primary p-10 rounded-2xl flex flex-col items-center text-center space-y-6 transform -translate-y-4 shadow-xl shadow-primary/10">
                                    <div className="relative">
                                        <img className="w-28 h-28 rounded-full border-4 border-primary-fixed shadow-lg object-cover" data-alt="portrait of a confident philanthropist woman with warm lighting and high-end editorial aesthetic" alt="Elena Vance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIQzR9A5cnAnXDeu9DbNvpNwd3djpJzWnFXgitRXMvfGysyIfLr-uPhCuvd0OUrXtOcoCKmvBdzmx5pVLArab1eRfakOeXHZm4jgzdx881_B2NmrDpJKXRXRqz526tzw1Ib-65FXgopRC6Gn7zkZ3EXpgAqT7O_m6hSdiS_xvuMAf5M6QoI9-k21tJ-Ffy7htdFEtZUhuwhlLTVvY3rOm4p67ubKMhxQn4xRDG3_U05-DuolzDGe8Z6zrWDn0r7LugB17YX_1gaSY" />
                                        <div className="absolute -bottom-3 -right-3 bg-secondary text-on-primary w-10 h-10 rounded-full flex items-center justify-center border-4 border-primary font-bold text-sm">1</div>
                                    </div>
                                    <div className="text-on-primary">
                                        <h4 className="font-bold text-2xl tracking-tight">Elena Vance</h4>
                                        <p className="text-sm opacity-80">Geneva, CH</p>
                                    </div>
                                    <div className="text-3xl font-extrabold text-primary-fixed">18,920 <span className="text-xs font-normal opacity-70 block mt-1 uppercase tracking-widest text-on-primary">Total Points</span></div>
                                </div>

                                {/* 3rd Place */}
                                <div className="bg-surface-container-low p-8 rounded-2xl flex flex-col items-center text-center space-y-4">
                                    <div className="relative">
                                        <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xl text-slate-500">JP</div>
                                        <div className="absolute -bottom-2 -right-2 bg-surface-container-highest w-8 h-8 rounded-full flex items-center justify-center border-2 border-surface-container-low font-bold text-xs">3</div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-on-surface">Julian P.</h4>
                                        <p className="text-xs text-on-surface-variant">Austin, USA</p>
                                    </div>
                                    <div className="text-xl font-bold text-primary">10,800</div>
                                </div>
                            </div>

                            {/* Ranking Table */}
                            <div className="space-y-4">
                                <div className="flex items-center px-8 text-label-md text-on-surface-variant font-medium opacity-60 uppercase tracking-widest mb-6">
                                    <div className="w-12 text-center">Rank</div>
                                    <div className="flex-1 ml-10">Donor</div>
                                    <div className="w-32">City</div>
                                    <div className="w-24 text-right">Points</div>
                                </div>

                                <div className="space-y-2">
                                    {/* User Row */}
                                    <div className="bg-primary-fixed/30 flex items-center px-8 py-5 rounded-2xl group transition-all">
                                        <div className="w-12 text-center font-bold text-primary">14</div>
                                        <div className="flex-1 flex items-center gap-4 ml-10">
                                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-medium text-on-primary text-xs">TC</div>
                                            <div>
                                                <h5 className="font-semibold text-on-surface flex items-center gap-2">
                                                    The Digital Curator
                                                    <span className="material-symbols-outlined text-secondary text-sm" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                                </h5>
                                                <div className="flex gap-1 mt-1">
                                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                                    <span className="w-2 h-2 bg-primary-fixed rounded-full"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-32 text-on-surface-variant text-sm">London, UK</div>
                                        <div className="w-24 text-right font-bold text-primary">4,205</div>
                                    </div>

                                    {/* List Items */}
                                    <div className="flex items-center px-8 py-5 rounded-2xl hover:bg-surface-container-high transition-all">
                                        <div className="w-12 text-center font-medium text-on-surface-variant">4</div>
                                        <div className="flex-1 flex items-center gap-4 ml-10">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-medium text-slate-500 text-xs">SR</div>
                                            <h5 className="font-medium text-on-surface">Sarah Reed</h5>
                                        </div>
                                        <div className="w-32 text-on-surface-variant text-sm">Toronto, CA</div>
                                        <div className="w-24 text-right font-medium text-on-surface">9,410</div>
                                    </div>

                                    <div className="flex items-center px-8 py-5 rounded-2xl hover:bg-surface-container-high transition-all">
                                        <div className="w-12 text-center font-medium text-on-surface-variant">5</div>
                                        <div className="flex-1 flex items-center gap-4 ml-10">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-medium text-slate-500 text-xs">DM</div>
                                            <h5 className="font-medium text-on-surface">David Miller</h5>
                                        </div>
                                        <div className="w-32 text-on-surface-variant text-sm">Paris, FR</div>
                                        <div className="w-24 text-right font-medium text-on-surface">8,820</div>
                                    </div>

                                    <div className="flex items-center px-8 py-5 rounded-2xl hover:bg-surface-container-high transition-all">
                                        <div className="w-12 text-center font-medium text-on-surface-variant">6</div>
                                        <div className="flex-1 flex items-center gap-4 ml-10">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-medium text-slate-500 text-xs">AL</div>
                                            <h5 className="font-medium text-on-surface">Anna Liang</h5>
                                        </div>
                                        <div className="w-32 text-on-surface-variant text-sm">Singapore, SG</div>
                                        <div className="w-24 text-right font-medium text-on-surface">8,150</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar column */}
                        <div className="col-span-12 lg:col-span-4 space-y-12">
                            {/* Category Champions */}
                            <section className="space-y-6">
                                <h3 className="text-xl font-medium text-primary">Category Champions</h3>
                                <div className="space-y-4">
                                    <div className="bg-surface-container p-6 rounded-2xl">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 bg-primary-fixed rounded-lg">
                                                <span className="material-symbols-outlined text-primary" data-icon="eco">eco</span>
                                            </div>
                                            <span className="text-xs font-bold text-secondary tracking-widest uppercase">Environment</span>
                                        </div>
                                        <p className="text-sm font-medium text-on-surface">Champion: Leo Grant</p>
                                        <p className="text-xs text-on-surface-variant mt-1">45 Impact Points this week</p>
                                    </div>

                                    <div className="bg-surface-container p-6 rounded-2xl">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 bg-primary-fixed rounded-lg">
                                                <span className="material-symbols-outlined text-primary" data-icon="school">school</span>
                                            </div>
                                            <span className="text-xs font-bold text-secondary tracking-widest uppercase">Education</span>
                                        </div>
                                        <p className="text-sm font-medium text-on-surface">Champion: Maria Chen</p>
                                        <p className="text-xs text-on-surface-variant mt-1">32 Impact Points this week</p>
                                    </div>
                                </div>
                            </section>

                            {/* Badges Section */}
                            <section className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-medium text-primary">Your Badges</h3>
                                    <a className="text-xs font-bold text-primary underline underline-offset-4" href="#">View All</a>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="aspect-square bg-surface-container-low rounded-xl flex items-center justify-center group hover:bg-primary transition-all">
                                        <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-3xl" data-icon="workspace_premium" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                                    </div>
                                    <div className="aspect-square bg-surface-container-low rounded-xl flex items-center justify-center group hover:bg-primary transition-all">
                                        <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-3xl" data-icon="local_fire_department" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                                    </div>
                                    <div className="aspect-square bg-surface-container-low rounded-xl flex items-center justify-center group hover:bg-primary transition-all">
                                        <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-3xl" data-icon="diversity_1" style={{ fontVariationSettings: "'FILL' 1" }}>diversity_1</span>
                                    </div>
                                    <div className="aspect-square bg-surface-container-low rounded-xl flex items-center justify-center group opacity-40 grayscale">
                                        <span className="material-symbols-outlined text-primary text-3xl" data-icon="rocket_launch">rocket_launch</span>
                                    </div>
                                    <div className="aspect-square bg-surface-container-low rounded-xl flex items-center justify-center group opacity-40 grayscale">
                                        <span className="material-symbols-outlined text-primary text-3xl" data-icon="favorite">favorite</span>
                                    </div>
                                    <div className="aspect-square bg-surface-container-low rounded-xl flex items-center justify-center group opacity-40 grayscale">
                                        <span className="material-symbols-outlined text-primary text-3xl" data-icon="public">public</span>
                                    </div>
                                </div>
                            </section>

                            {/* Call to Action Card */}
                            <div className="bg-secondary-container p-8 rounded-2xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h4 className="text-on-secondary-container text-2xl font-bold tracking-tight mb-4 leading-tight">Climb higher. Impact more.</h4>
                                    <p className="text-on-secondary-container text-sm opacity-90 mb-6">Connect with a recurring donation today and earn double impact points for the next 30 days.</p>
                                    <button className="bg-on-secondary-container text-white py-3 px-6 rounded-lg font-bold text-sm transition-all active:scale-95">Set Recurring Donation</button>
                                </div>
                                <div className="absolute -right-4 -bottom-4 opacity-10">
                                    <span className="material-symbols-outlined text-[120px]" data-icon="trending_up">trending_up</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-surface-container-low py-20 mt-24 text-center">
                    <div className="max-w-7xl mx-auto px-8 flex flex-col items-center space-y-8">
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" alt="GFG Logo" className="w-6 h-6 object-contain" />
                            <h2 className="font-medium text-primary text-xl">GFG | Give For Good</h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8">
                            <a className="text-primary opacity-60 hover:opacity-100 transition-all font-['Inter'] text-[13px]" href="#">Privacy Policy</a>
                            <a className="text-primary opacity-60 hover:opacity-100 transition-all font-['Inter'] text-[13px]" href="#">Terms of Service</a>
                            <a className="text-primary opacity-60 hover:opacity-100 transition-all font-['Inter'] text-[13px]" href="#">NGO Partners</a>
                            <a className="text-primary opacity-60 hover:opacity-100 transition-all font-['Inter'] text-[13px]" href="#">Contact</a>
                        </div>
                        <p className="text-primary opacity-60 font-['Inter'] text-[13px] leading-relaxed">© 2024 GFG | Give For Good. All missions reserved.</p>
                    </div>
                </footer>
            </main>
        </div>
    );
}
