import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid gap-10 space-y-5 bg-slate-400 py-20 px-10">
      <div className="rounded-3xl bg-white p-6 shadow-2xl">
        <div className="mb-1 text-2xl font-semibold">Select Item</div>
        <div className="flex justify-between">
          <span className="text-gray-400">Grey Chair</span>
          <span className="font-semibold">$800</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-gray-400">Tooly Table</span>
          <span className="font-semibold">$170</span>
        </div>
        <div className="flex justify-between border-t-2 border-dashed p-1">
          <span className="">Total</span>
          <span className="font-semibold">$970</span>
        </div>
        <div className="mx-auto w-1/2 rounded-lg bg-blue-400 p-2 text-center text-white">
          Checkout
        </div>
      </div>
      <div className="rounded-2xl bg-white p-10 shadow-2xl"></div>
      <div className="rounded-2xl bg-white p-10 shadow-2xl"></div>
      <div className="rounded-2xl bg-white p-10 shadow-2xl"></div>
    </div>
  );
};

export default Home;
