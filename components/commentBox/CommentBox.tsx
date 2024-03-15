/* eslint-disable @next/next/no-img-element */
import { YouBadge } from "@/public/asset/icon/Badge";
import { DeleteIcon } from "@/public/asset/icon/Delete";
import { EditIcon } from "@/public/asset/icon/Edit";
import { ReplyIcon } from "@/public/asset/icon/reply";
import Image from "next/image";

interface Props {
  name?: string;
  date?: string;
  reply?: string;
  remove?: string;
  edit?: string;
  image?: string;
  voteCount?: number;
  content?: string;
  isSmall?: boolean;
}

export const CommentBox = ({
  name,
  date,
  reply,
  image,
  voteCount,
  edit,
  remove,
  content,
  isSmall = false,
}: Props) => {
  const dynamicWidthClass = isSmall ? "w-[700px]" : "w-[50%]";
  return (
    <div
      className={`${dynamicWidthClass} flex gap-4 p-4 bg-white  mx-auto h-[122px] rounded-md mb-4`}
    >
      <div>
        <div className="bg-primary w-[35px] h-[100%] rounded-lg flex-row ">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-lg text-[#c9c8e2]">+</p>
            <p className="text-brand font-semibold text-md">{voteCount}</p>
            <p className="font-bold text-lg text-[#c9c8e2]">-</p>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="flex justify-between mb-2">
          <div className="flex gap-2 align-middle items-center">
            <img
              width={30}
              height={30}
              className="rounded-full object-cover"
              src={image}
              alt="abc"
              style={{ borderRadius: "50%", width: "30px", height: "30px" }}
            />
            <p className="font-semibold text-text_primary text-sm">{name}</p>
            {remove ? (
              <>
                <div>
                  <YouBadge />
                </div>
              </>
            ) : null}
            <p className="font-semibold text-text_secondary text-sm">{date}</p>
          </div>
          <div className="flex gap-2 items-center">
            {reply ? (
              <>
                <ReplyIcon />
                <p className="font-semibold text-brand text-sm">{reply}</p>
              </>
            ) : (
              <>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <DeleteIcon />
                    <p className="font-semibold text-red-500 text-sm ">
                      {remove}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <EditIcon />
                    <p className="font-semibold text-brand text-sm">{edit}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div>
          <div className="text-sm text-text_secondary">
            {isSmall ? (
              <>
                <p>
                  <span className="text-brand font-semibold">@mxbounty</span>
                  {" " + content}
                </p>
              </>
            ) : (
              content
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
