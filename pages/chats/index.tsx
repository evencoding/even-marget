import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="divide-y-[1px] py-10">
      {[1, 2, 3, 4, 5, 1, 1, 1, 1].map((_, i) => (
        <div key={i} className="flex cursor-pointer items-center space-x-3 p-3">
          <div className="h-10 w-10 rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-sm font-medium text-gray-500">
              See you tomorrow in the corner at 2pm!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
