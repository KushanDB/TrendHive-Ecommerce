export default function Header() {
    return (
        <div className="w-full bg-accent h-[100px] text-gray-500 px-[40px] flex items-center justify-between">
            <div className="w-full h-full flex relative">
                <img src="/img_12.png" className="h-[100%] absolute object-cover left-0" />
                <div className="h-full flex justify-center items-center gap-[30px] ml-[50px] text-lg font-semibold w-full">
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>

        </div>
    )
}