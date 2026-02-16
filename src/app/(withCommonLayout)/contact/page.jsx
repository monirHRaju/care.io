import Container from '@/components/shared/Container';
import React from 'react';

const Contact = () => {
    return (
        <div className='py-7'>
           <Container>
            <h1 className='text-4xl font-bold mb-6'>Contact Us</h1>
            <p>For any inquiries, please contact us at:</p>
            <p>Email: contact@care.io</p>
            <p>Phone: +1 234 567 890</p>
           </Container>
        </div>
    );
};

export default Contact;