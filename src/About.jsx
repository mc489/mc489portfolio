function About() {
    return (
        <>
            {/* Added 'max-w-md' to limit the width and 'mx-auto' to center the div */}
            <div className="rounded-[16px] mx-0 max-w-80 p-[13px] mt-[10px] text-left border-1 border-gray-300">

                <h1 className="text-xl font-semibold mb-2">About</h1>
                
                <p className="text-black">
                    Motivated BSIT student with skills in digital design, video editing, and front-end
                    development. Eager to contribute creativity and technical knowledge to real-world
                    projects while continuing to grow professionally.
                </p>
            </div>
        </>
    )
}

export default About;