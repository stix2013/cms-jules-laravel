// resources/js/Pages/Account/OrderHistory.jsx
import React from 'react';

export default function OrderHistory() {
    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Order History</h2>
                <p className="mt-1 text-sm text-gray-600">
                    View your past orders here. (This feature is coming soon!)
                </p>
            </header>
            <div className="mt-6">
                {/* Placeholder content, e.g., a message or an empty state graphic */}
                <p className="text-gray-500">You have no orders yet, or this section is under construction.</p>
            </div>
        </section>
    );
}
