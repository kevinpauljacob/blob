import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  const truncateAddress = (address: string, characters: number) => {
    if (!address || address.length <= 16) {
      return address;
    }
    const start = address.slice(0, characters);
    const end = address.slice(-characters);
    return `${start}...${end}`;
  };

  const percentage = 76;
  return (
    <main
      className={`${nunito.className} max-w-[1152px] mx-auto my-[60px] px-4`}
    >
      <h1 className="text-4xl">blob</h1>
      <section className="flex gap-6 mt-9 mb-10">
        <p className="text-[#B7ACDF] text-sm">
          base fee: <span className="text-white">{12345} wei</span>
        </p>
        <p className="text-[#B7ACDF] text-sm">
          pending blobs: <span className="text-white">{30}</span>
        </p>
      </section>
      <section className="flex sm:gap-4 w-full mb-10">
        <div className="bg-[#171031] rounded-md overflow-hidden h-[512px] w-full sm:w-1/2 py-4 pl-4">
          <h2 className="text-lg font-semibold">Bids</h2>
          <div className="overflow-y-scroll pr-4 my-3 h-full">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className="flex justify-between text-xs bg-[#171031] border border-[#382d63] border-l-2 border-l-[#10b981] p-2 mb-2"
              >
                <p className="flex gap-1">
                  <span>{12345}</span>
                  <span className="text-[#B7ACDF]">bytes</span>
                </p>
                <p>
                  {truncateAddress(
                    "0x696d8d3bda41797e13578e85b8954c9bc82c401a",
                    4
                  )}
                </p>
                <p>{} wei</p>
              </div>
            ))}
            <div className="flex items-center gap-2 my-2">
              <div className="flex grow bg-[#382d63] h-[1px]"></div>
              <div className="flex items-center gap-2 text-[#B7ACDF] text-sm text-right">
                <div>base fee: </div>
                <div className="text-white">{12345} wei</div>
              </div>
            </div>
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex justify-between text-xs bg-[#171031] border border-[#382d63] p-2 mb-2"
              >
                <p className="flex gap-1">
                  <span>{12345}</span>
                  <span className="text-[#B7ACDF]">bytes</span>
                </p>
                <p>
                  {truncateAddress(
                    "0x696d8d3bda41797e13578e85b8954c9bc82c401a",
                    4
                  )}
                </p>
                <p>{} wei</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden sm:block bg-[#171031] rounded-md h-[512px] w-1/2 p-4">
          <h2 className="text-lg font-semibold">Value over Time</h2>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-lg font-semibold">Latest Blobs</h2>
        <div className="flex justify-between text-[#b7acdf] text-base p-4 my-2">
          <p>Hash</p>
          <p className="hidden sm:block">Blobs Filled</p>
          <p>Fee</p>
        </div>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex justify-between bg-[#171031] rounded-md p-4 mb-4"
          >
            <p>
              {truncateAddress("0x696d8d3bda41797e13578e85b8954c9bc82c401a", 8)}
            </p>
            <div className="hidden sm:flex items-center gap-2">
              <div className="relative bg-[#374151] rounded-md w-40 h-[10px]">
                <span
                  className="absolute bg-[#10b981] rounded-md z-10 h-[10px]"
                  style={{ width: `${percentage}%` }}
                ></span>
              </div>
              <div className="text-[#22c55e] text-sm">{percentage}%</div>
            </div>
            <p>{12345} wei</p>
          </div>
        ))}
      </section>
      <section className="text-center text-xs">blob ©2024</section>
    </main>
  );
}
