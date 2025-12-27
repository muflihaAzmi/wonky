"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SearchIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function product() {
    
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [CompanyToDelete, setCompanyToDelete] = useState(0);
  return (
    <div className="bg-gray-100 dark:bg-zinc-900 min-h-screen py-6">
      <div className=" mx-auto w-full md:max-w-[1430px] px-6 ">
        <h1 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50 ">
          products
        </h1>
<button
            onClick={() => router.push(`/productaddd`)}
            className="w-full bg-[#E55329] text-white py-2 rounded text-sm font-medium hover:opacity-90 transition"
          >
            Confirm & Pay
          </button>        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm ">
          <div className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"></div>

          <div className="rounded-xl w-full border dark:border-zinc-900 border-gray-300 overflow-x-auto">
            <Table className="w-full text-sm dark:bg-zinc-900 bg-white">
              <TableHeader className="bg-gray-100 dark:bg-zinc-800 text-blue-800">
                <TableRow>
                  <TableHead>sl.no</TableHead>
                  <TableHead className="">Image</TableHead>
                  <TableHead className="">Product Name</TableHead>
                  <TableHead className="">Description</TableHead>
                  <TableHead className="text-right">price</TableHead>
                  <TableHead className="text-right">colour Name</TableHead>
                  <TableHead className="text-right">Delete</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="group dark:hover:bg-zinc-700 hover:bg-gray-50">
                  <TableCell
                    onClick={() =>
                      router.push(`/dash/company-dashboard/company-event/`)
                    }
                  ></TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            size="sm"
                            className="bg-red-600 text-white hover:bg-red-700 px-3"
                          >
                            Delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This will permanently delete{" "}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel
                              onClick={() => setCompanyToDelete(0)}
                            >
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              className="bg-red-600 hover:bg-red-700"
                              //   onClick={() => {
                              //     if (companyToDelete) {
                              //       handleDelete(companyToDelete.id);
                              //     }
                              //     setCompanyToDelete(null);
                              //   }}
                            >
                              Confirm Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>

                {/* )} */}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default product;
