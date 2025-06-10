import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { Head } from "@inertiajs/react";
import { createColumnHelper, useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { L as Layout } from "./Layout-BPNmPupJ.js";
const addIdsToProducts = (products) => {
  return products.map((product, index) => ({
    ...product,
    id: product.id || `mock-${index + 1}`
    // Use existing id or generate mock
  }));
};
const Products = ({ products: initialProducts }) => {
  const products = useMemo(() => addIdsToProducts(initialProducts), [initialProducts]);
  const columnHelper = createColumnHelper();
  const columns = useMemo(() => [
    columnHelper.accessor("id", {
      header: () => "ID",
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("name", {
      header: () => "Name",
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("short_description", {
      header: () => "Description",
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("price", {
      header: () => "Price",
      cell: (info) => `$${info.getValue().toFixed(2)}`
    })
  ], [columnHelper]);
  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel()
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Products" }),
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-6 text-gray-700", children: "Products List" }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto bg-white shadow-lg rounded-lg", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full", children: [
      /* @__PURE__ */ jsx("thead", { className: "bg-gray-200 text-gray-600 uppercase text-sm leading-normal", children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx("tr", { children: headerGroup.headers.map((header) => /* @__PURE__ */ jsx("th", { className: "py-3 px-6 text-left", children: header.isPlaceholder ? null : flexRender(
        header.column.columnDef.header,
        header.getContext()
      ) }, header.id)) }, headerGroup.id)) }),
      /* @__PURE__ */ jsx("tbody", { className: "text-gray-700 text-sm font-light", children: table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx("tr", { className: "border-b border-gray-200 hover:bg-gray-100", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx("td", { className: "py-3 px-6", children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) })
    ] }) }),
    products.length === 0 && /* @__PURE__ */ jsx("p", { className: "mt-6 text-center text-gray-500", children: "No products found." })
  ] });
};
Products.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page, title: "Products" });
export {
  Products as default
};
