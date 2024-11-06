import React from "react";
import { Popover,PopoverContent,PopoverTrigger } from "@radix-ui/react-popover";

import { Button } from "../ui/button";
const Navbar = () => {
    const user = true;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {
            !user ? (
                            <div className='flex items-center gap-2'>
                                <Button variant="outline">Login</Button>
                                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button>
                            </div>
            ): 
          (
          <Popover>
                                <PopoverTrigger asChild>
                                <Button variant="outline">OPen</Button>
                                    
                                </PopoverTrigger>
                                <PopoverContent>
                                {/* <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                    </Avatar> */}
                                    <h1>Hello</h1>
                                </PopoverContent>
   </Popover>
   )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
