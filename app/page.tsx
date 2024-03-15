"use client";
import { CommentBox } from "@/components/commentBox/CommentBox";
import { CommentInput } from "@/components/commentInput/CommentInput";

export default function Home() {
  return (
    <div className="w-full bg-primary h-screen py-6">
      <CommentBox
        name="Khalisur"
        voteCount={12}
        date="1 month ago"
        reply="Reply"
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        content="Free Download Reply SVG vector file in monocolor and multicolor type for Sketch and Figma from Reply Vectors svg vector collection. Reply Vectors SVG vector illustration graphic art"
      />
      <CommentBox
        name="Bappy"
        voteCount={11}
        date="2 weeks ago"
        reply="Reply"
        image="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
        content="Free Download Reply SVG vector file in monocolor and multicolor type for Sketch and Figma from Reply Vectors svg vector collection. Reply Vectors SVG vector illustration graphic art"
      />
      <div className="flex gap-4 w-[760px] mx-auto">
        <div className="pl-8 flex justify-between  w-[100%]">
          <div className="mt-[2px] w-[1.5px] h-[250px] bg-[#c9c8e2]"></div>
          <div className="">
            <CommentBox
              name="Akram"
              isSmall={true}
              voteCount={9}
              date="3 hours ago"
              reply="Reply"
              image="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              content="Free Download Reply SVG vector file in monocolor and multicolor type for Sketch and Figma from Reply Vectors svg vector collection. Reply Vectors SVG vector illustration graphic art"
            />
            <CommentBox
              name="Sagor"
              remove="Delete"
              edit="Edit"
              isSmall={true}
              voteCount={2}
              date="21 mintues ago"
              image="https://images.unsplash.com/photo-1688572865439-be9cd43b6986?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              content="Free Download Reply SVG vector file in monocolor and multicolor type for Sketch and Figma from Reply Vectors svg vector collection. Reply Vectors SVG vector illustration graphic art"
            />
          </div>
        </div>
      </div>
      <CommentInput image="https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  );
}
