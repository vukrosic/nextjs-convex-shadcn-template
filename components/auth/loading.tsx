import Image from "next/image";

export const Loading = () => {
    return (
        <main className="flex flex-col w-full h-full items-center justify-center">
            <Image
                src="/logo.svg"
                alt="logo"
                width={200}
                height={200}
                className="animate-pulse duration-700"
            />
        </main>
    );
}