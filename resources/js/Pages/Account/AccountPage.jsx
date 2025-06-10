// resources/js/Pages/Account/AccountPage.jsx
import UserProfile from '@/Pages/Account/UserProfile';
import ChangePasswordForm from '@/Pages/Account/ChangePasswordForm';
import Layout from '@/Layouts/Layout'; // Assuming a general layout
import { Head } from '@inertiajs/react';

export default function AccountPage({ auth }) { // auth prop passed by Inertia
    return (
        <Layout>
            <Head title="My Account" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UserProfile />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <ChangePasswordForm />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
