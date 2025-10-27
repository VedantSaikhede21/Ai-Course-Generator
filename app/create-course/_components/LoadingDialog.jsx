import React from 'react'
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  
  
} from "@/components/ui/alert-dialog"

function LoadingDialog({loading}) {
  return (
    <AlertDialog open={loading}>  
  
  <AlertDialogContent>
    <AlertDialogHeader className="flex flex-col items-center py-10">
      <img src="/Loader.gif" width={100} height={100} alt="Loading..." />
      <AlertDialogTitle className="mt-4 text-xl">
        Generating Course Layout...
      </AlertDialogTitle>
      <AlertDialogDescription className="text-center">
        Please wait
      </AlertDialogDescription>
    </AlertDialogHeader>
  </AlertDialogContent>
</AlertDialog>
  )
}

export default LoadingDialog