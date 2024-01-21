"use client";

import { UploadButton } from "@/app/utils/uploadthing";
import { METHODS } from "http";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";

export default function ImageUpload() {
  const { toast } = useToast();
  const updateLogo = async (url: string) => {
    try {
      const response = await fetch("api/updateLogo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
    } catch (error) {
      toast({
        title: "Error updating logo",
        variant: "destructive",
      });
    }
  };
  return (
    <main className=" bg-purple-500 text-black">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={async (res) => {
          // Do something with the response

          updateLogo(res[0].url);

          window.location.reload();
          toast({
            title: "Logo updated Successfully",
          });
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
