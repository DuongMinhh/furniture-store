import React from 'react';
import Footer from '../../components/footer/Footer';
import AdminNavBar from '../navbar/AdminNavBar';

export default function AdminLayout({ childComponent }) {
    return (
        <>
            <AdminNavBar />
            {childComponent}
            <Footer />
        </>
    )
}
