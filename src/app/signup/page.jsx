import AuthForm from './AuthForm';

export default function Page() {
    return (
        // h-screen and overflow-hidden prevent the body scrollbar
        <div className="bg-[#f9f9f7] h-screen overflow-hidden flex items-center justify-center p-4 md:p-8 font-sans"
            style={{
                backgroundImage: `radial-gradient(#e2e3e1 1px, transparent 1px)`,
                backgroundSize: '24px 24px'
            }}>
            <main className="w-full max-w-6xl h-full max-h-[850px] grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-white rounded-2xl shadow-sm border border-[#e2e3e1]">

                {/* Left Side: Auth Logic */}
                <div className="lg:col-span-7 p-6 md:p-10 lg:px-14 flex flex-col h-full overflow-y-auto custom-scrollbar">
                    <div className="mb-6 flex-shrink-0">
                        <h1 className="text-xl font-medium tracking-tighter text-[#005440]">DonateConnect</h1>
                    </div>

                    <AuthForm />
                </div>

                {/* Right Side: Editorial Panel */}
                <div className="lg:col-span-5 hidden lg:block relative bg-[#005440] h-full overflow-hidden">
                    <img
                        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC29q6WFiQs9eTsX6-Y-rKD_cujDXV8DquEHD-Z0FxtBiyEBBmG0q1gwb_uZm3cXOUEbQT_a3k_ccxSpb_zwMB-Livk79NCLF4m0vujoDuzBOCOUOh_DEduxLA6kdqxaF__nDgwK5QdoTw3dpP6vD3JmCj002BQyGAh_S20fudRnfYEvfoLHhTDzfNV20Mh0RXggvPDY8rfjmKqzIyn3x2yplNnTHEUdXs9yBscI1S1e71YJ1tuto746ktspqnQSkD-KTahIDjLteo"
                        alt="Unity background"
                    />
                    <div className="relative h-full flex flex-col justify-between p-12 text-white">
                        <div className="space-y-8">
                            <div className="w-12 h-1 bg-[#a0f3d4]"></div>
                            <h3 className="text-5xl leading-[1.1] font-medium tracking-tight">Curation <br />for Good.</h3>
                        </div>
                        <p className="text-base font-light leading-relaxed opacity-90 italic">
                            "Philanthropy is not just about giving; it is about the intentional connection between human stories and collective action."
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}