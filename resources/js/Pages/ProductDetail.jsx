import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

const ProductDetail = ({ product }) => {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD', // Or your desired currency
        }).format(amount);
    };

    return (
        <>
            <Head title={product.name} />

            <nav className="text-sm mb-4 text-gray-600">
                <Link href="/" className="hover:underline">Home</Link> &gt;
                <Link href="/products" className="hover:underline">Products</Link> &gt;
                <span className="font-semibold">{product.name}</span>
            </nav>

            <div className="bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        {product.images && product.images.length > 0 ? (
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md mb-4"
                            />
                        ) : (
                            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg shadow-md mb-4 text-gray-500">
                                No Image Available
                            </div>
                        )}
                    </div>
                    <div>
                        <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: product.long_description }}></p>
                        <p className="text-2xl font-semibold text-indigo-600 mb-2">{formatCurrency(product.price)}</p>

                        <div className="mb-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                product.stock_status === 'in_stock' ? 'bg-green-100 text-green-700' :
                                product.stock_status === 'out_of_stock' ? 'bg-red-100 text-red-700' :
                                'bg-yellow-100 text-yellow-700'
                            }`}>
                                {product.stock_status.replace(/_/g, ' ')}
                            </span>
                        </div>

                        {product.sku && (
                            <p className="text-sm text-gray-500 mb-4">SKU: {product.sku}</p>
                        )}

                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {product.specifications && Object.entries(product.specifications).length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-700 mb-3">Specifications</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-md">
                                <tbody className="divide-y divide-gray-200">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <tr key={key} className="hover:bg-gray-50">
                                            <td className="px-6 py-3 text-sm font-medium text-gray-800 capitalize w-1/3">{key.replace(/_/g, ' ')}</td>
                                            <td className="px-6 py-3 text-sm text-gray-600">{String(value)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {product.variations && product.variations.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-700 mb-3">Available Variations</h3>
                        {product.variations.map((variation, index) => (
                            <div key={index} className="mb-3 p-3 bg-gray-50 rounded-md border border-gray-100">
                                <h4 className="font-medium text-gray-700 capitalize">{variation.type}</h4>
                                <p className="text-sm text-gray-600">{Array.isArray(variation.options) ? variation.options.join(', ') : String(variation.options)}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

ProductDetail.layout = page => <Layout children={page} title={`Product Details: ${page.props.product.name}`} />;

export default ProductDetail;
