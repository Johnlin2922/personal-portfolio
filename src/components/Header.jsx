const Header = () => {
    return (
        <div
            id="Header"
            className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify mb-96"
        >
            <div className="flex flex-col">
                <code className="text-lightblue_vs">Hi, my name is</code>
                <code className="text-[#e6f1ff] text-7xl mt-5">John Lin</code>
            </div>
            <button
                onClick={() => {
                    window.location.href = "https://github.com/johnlin2922";
                }}
                className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
            >
                <code href="https://github.com">Check out my Projects!</code>
            </button>
        </div>
    );
};

export default Header;
