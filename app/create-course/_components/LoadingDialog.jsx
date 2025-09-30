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
    <AlertDialogTitle>
         <AlertDialogHeader>
            <AlertDialogDescription>
                <div className='flex flex-col justify-center items-center py-10'>
                <Image src={"/Loader.gif"} width={100} height={100} alt="Loading..." />
                    <h2>
                        Generating Course Layout...Please wait
                    </h2>
                </div>
            </AlertDialogDescription>
        </AlertDialogHeader>
    </AlertDialogTitle>
  </AlertDialogContent>
</AlertDialog>
  )
}

export default LoadingDialog