import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function ChannelLanguage(){
    return (
        <Select>
            <SelectTrigger className="w-full text-sm font-normal justify-between capitalize bg-second-bg-color p-2 h-auto border-border-color rounded-md outline-none active:outline-none focus:border-primary-color focus:shadow-none focus:!outline-none focus-visible:outline-none hover:bg-second-bg-color hover:text-white">
                <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent className="text-sm capitalize bg-second-bg-color border border-border-color text-white">
                <SelectItem value="english" className="">english</SelectItem>
                <SelectItem value="urdu" className="">urdu</SelectItem>
                <SelectItem value="punjabi" className="">punjabi</SelectItem>
            </SelectContent>
        </Select>

    )
}