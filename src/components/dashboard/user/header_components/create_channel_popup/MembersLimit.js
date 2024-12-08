import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function MembersLimit() {
    return (
        <Select>
            <SelectTrigger className="w-full text-sm font-normal justify-between capitalize bg-second-bg-color p-2 h-auto border-border-color rounded-md outline-none active:outline-none focus:border-primary-color focus:shadow-none focus:!outline-none focus-visible:outline-none hover:bg-second-bg-color hover:text-white">
                <SelectValue placeholder="Max People" />
            </SelectTrigger>
            <SelectContent className="!min-w-24 text-sm capitalize bg-second-bg-color border border-border-color text-white">
                <SelectItem value="1" className="">1</SelectItem>
                <SelectItem value="2" className="">2</SelectItem>
                <SelectItem value="3" className="">3</SelectItem>
            </SelectContent>
        </Select>

    )
}