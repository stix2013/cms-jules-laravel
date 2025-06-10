// resources/js/Pages/Account/AccountPage.jsx
import UserProfile from '@/Pages/Account/UserProfile';
import ChangePasswordForm from '@/Pages/Account/ChangePasswordForm';
import OrderHistory from '@/Pages/Account/OrderHistory'; // Import
import AddressBook from '@/Pages/Account/AddressBook'; // Import
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';

export default function AccountPage({ auth }) {
    return (
        <Layout> {/* Ensure Layout is correctly used; it might need props like `auth` or `header` */}
            <Head title="My Account" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UserProfile />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <ChangePasswordForm />
                    </div>

                    {/* Add placeholder sections */}
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <OrderHistory />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <AddressBook />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
