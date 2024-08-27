"use client"
import { useTheme } from "next-themes";
import { Popover, PopoverTrigger } from "../ui/popover";
import { SmileIcon } from "lucide-react";
import { PopoverContent } from "@radix-ui/react-popover";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";


interface EmojiPickerProps {
	onChange: (emoji: string) => void;
}

const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
    const {theme}=useTheme();
  return (
    <Popover>
          <PopoverTrigger>
          <SmileIcon className='h-5 w-5 text-muted-foreground hover:text-foreground transition' />
          </PopoverTrigger>
          <PopoverContent className="w-full">
            <Picker
                emojiSize={18}
                data={data}
                maxFrequentRows={1}
                theme={theme=="dark" ? "dark" : "light"}
                onEmojiSelect={(emoji:any)=> onChange(emoji.native)}
            />
          </PopoverContent>
    </Popover>
  )
}

export default EmojiPicker