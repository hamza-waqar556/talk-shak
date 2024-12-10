"use client";

// icons
import { PiGifBold } from "react-icons/pi";
import { RiEmojiStickerLine } from "react-icons/ri";
import { IoImageOutline } from "react-icons/io5";
import { GrEmoji } from "react-icons/gr";
import { HiOutlineDocumentAdd } from "react-icons/hi";




export default function MessageToolbar() {
    return (
        <div className="flex items-center gap-2">
            <span className="text-xl">
                <GrEmoji />
            </span>
            <span className="text-xl">
                <PiGifBold />
            </span>
            <span className="text-xl">
                <RiEmojiStickerLine />
            </span>
            <span className="text-xl">
                <IoImageOutline />
            </span>
            <span className="text-xl">
                <HiOutlineDocumentAdd  />
            </span>
        </div>
    )
}