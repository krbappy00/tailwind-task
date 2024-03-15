/* eslint-disable @next/next/no-img-element */
import { ReplyIcon } from "@/public/asset/icon/reply";
interface Props {
  image: string;
}
export const CommentInput = ({ image }: Props) => {
  return (
    <div className="flex gap-4 p-4 w-[50%] bg-white  mx-auto h-[120px] rounded-md mb-4">
      <div className="flex gap-2 align-middle">
        <img
          width={30}
          height={30}
          className="rounded-full object-cover"
          src={image}
          alt="abc"
          style={{ borderRadius: "50%", width: "30px", height: "30px" }}
        />
      </div>
      <div>
        <textarea
          className="w-[100%] h-[100%] border outline-none rounded-md min-w-[580px] p-4 placeholder:text-sm"
          name="comment"
          id=""
          placeholder="Add a comment..."
        ></textarea>
      </div>
      <div>
        <button className="bg-brand text-sm font-semibold text-white p-2 px-6 rounded-md w-full">
          SEND
        </button>
      </div>
    </div>
  );
};
