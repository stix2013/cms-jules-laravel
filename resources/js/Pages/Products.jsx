import React, { useMemo } from 'react';
import { Head } from '@inertiajs/react';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import Layout from '../Layouts/Layout';

// Helper to generate mock IDs if products don't have them (since we use make())
const addIdsToProducts = (products) => {
    return products.map((product, index) => ({
        ...product,
        id: product.id || `mock-${index + 1}`, // Use existing id or generate mock
    }));
};

const Products = ({ products: initialProducts }) => {
    // Add IDs to products if they are missing
    const products = useMemo(() => addIdsToProducts(initialProducts), [initialProducts]);

    const columnHelper = createColumnHelper();

    const columns = useMemo(() => [
        columnHelper.accessor('id', {
            header: () => 'ID',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('name', {
            header: () => 'Name',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('short_description', {
            header: () => 'Description',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('price', {
            header: () => 'Price',
            cell: info => `$${info.getValue().toFixed(2)}`,
        }),
    ], [columnHelper]);

    const table = useReactTable({
        data: products,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            <Head title="Products" />
            <h1 className="text-3xl font-bold mb-6 text-gray-700">Products List</h1>
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="min-w-full">
                    <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} className="py-3 px-6 text-left">
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-100">
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className="py-3 px-6">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {products.length === 0 && (
                <p className="mt-6 text-center text-gray-500">No products found.</p> // Adjusted margin and alignment
            )}
        </>
    );
}

Products.layout = page => <Layout children={page} title="Products" />; // Use PersistentLayout if you want the persistent layout

export default Products;
