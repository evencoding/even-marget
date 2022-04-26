import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen gap-10 space-y-5 bg-slate-400 py-20 px-20">
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
      <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="bg-blue-500 p-6 pb-20">
          <span className="text-xl font-medium text-white">Profile</span>
        </div>
        <div className="relative -top-6 -mb-10 rounded-3xl bg-white px-6 pt-4">
          <div className="flex justify-between">
            <div className="flex flex-col text-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="relative -top-16 h-24 w-24 rounded-full bg-red-500" />
            <div className="flex flex-col text-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-semibold">$2,310</span>
            </div>
          </div>
          <div className="relative -top-10 flex flex-col text-center">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <span>←</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="rounded-md p-2 shadow-xl">❤️</span>
          </div>
        </div>
        <div className="mb-5 h-72 bg-zinc-400" />
        <div className="flex flex-col">
          <span className="-mb-1 text-xl font-medium">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex items-center justify-between">
            <div className="">
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-medium">$450</span>
            <button className="rounded-lg bg-blue-500 py-2 px-8 text-center text-xs text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-6 shadow-2xl"></div>
    </div>
  );
};

export default Home;
