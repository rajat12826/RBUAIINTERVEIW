"use client";
import { LoaderCircle, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import supabase from "@/utils/supabaseClients";

function Addresume({ resumelist, setResumeList }) {
  const [loading, setLoading] = useState(false);
  const [resumetitle, setResumetitle] = useState("");
  const { user } = useUser();
  const [open, setOpen] = useState(false); // State to manage the dialog open/close

  async function onCreate() {
    setLoading(true);
    const id = uuidv4();
    console.log(resumetitle);

    const { data, error } = await supabase
      .from("userResume")
      .insert({
        title: resumetitle,
        resumeid: id,
        useremail: user?.primaryEmailAddress?.emailAddress,
        username: user?.fullName,
       
      })
      .select();

    if (data) {
      // Add the new resume to the list
      setResumeList((prev) => [
        {
          title: resumetitle,
          resumeid: id,
          useremail: user?.primaryEmailAddress?.emailAddress,
          username: user?.fullName,
        },
        ...prev,
      ]);
      toast("User data created successfully");
    }

    if (error) {
      toast("Error creating user data");
    }

    setLoading(false);
    setOpen(false); // Close the dialog after creating the resume
  }

  return (
    <div className="">
      <div className="text-white">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className=" m-5 cursor-pointer h-[120px] w-[120px] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] lg:h-[220px] lg:w-[220px] text-black bg-zinc-100 rounded-lg flex justify-center items-center hover:scale-105 ">
              <div className="">
                <div>
                  <div >
                    <PlusSquare />
                  </div>
                </div>
              </div>
            </button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md p-8 dark:bg-zinc-900">
            <DialogHeader>
              <DialogTitle>Create New Resume</DialogTitle>
            </DialogHeader>
            <div className="grid items-center">
              <Label
                htmlFor="link"
                className="my-2 font-semibold text-zinc-600 dark:text-white"
              >
                Add Title For Your Resume
              </Label>
              <Input
                id="link"
                placeholder="Ex. Full Stack Developer"
                className="bg-zinc-100 border-2 dark:text-black"
                required
                onChange={(e) => {
                  setResumetitle(e.target.value);
                }}
              />
            </div>

            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>

              <Button
                type="submit"
                disabled={loading || !resumetitle}
                onClick={onCreate} // Call onCreate when the button is clicked
                className="px-3 dark:text-white bg-[#304ffe] hover:bg-[#4258d2]"
              >
                {loading ? (
                  <>
                    <LoaderCircle className="animate-spin" /> Create
                  </>
                ) : (
                  "Create"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Addresume;
