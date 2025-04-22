"use client"
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Edit, Trash2 } from 'lucide-react'
import { Input } from "@/components/ui/input"

const demoData = [
    { id: 1, title: "Payment for hosting service", status: "Pending" },
    { id: 2, title: "Subscription renewal", status: "Completed" },
    { id: 3, title: "Freelance payment", status: "Pending" },
    { id: 4, title: "Book purchase", status: "Failed" },
    { id: 5, title: "App Store transaction", status: "Completed" },
    { id: 6, title: "Course enrollment", status: "Pending" },
    { id: 7, title: "Grocery payment", status: "Completed" },
    { id: 8, title: "Gym membership", status: "Pending" },
    { id: 9, title: "Netflix subscription", status: "Completed" },
    { id: 10, title: "Donation to NGO", status: "Completed" },
]

function History() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredData = demoData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="flex-1 p-4 max-w-full overflow-x-auto">
            <div className="mb-4">
                <Input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm bg-white"
                />
            </div>

            <Table className="bg-white min-w-[600px]">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader className="bg-blue-500 text-white">
                    <TableRow>
                        <TableHead className="text-white">SL</TableHead>
                        <TableHead className="text-white">Title</TableHead>
                        <TableHead className="text-white">Status</TableHead>
                        <TableHead className="text-right text-white">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{String(index + 1).padStart(2, '0')}</TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.status}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end items-center gap-2">
                                        <Trash2 size={20} className="text-red-400 cursor-pointer" />
                                        <Edit size={20} className="text-green-400 cursor-pointer" />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center py-4 text-gray-500">
                                No results found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default History
