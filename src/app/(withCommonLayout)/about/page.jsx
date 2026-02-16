import Container from '@/components/shared/Container';
import React from 'react';

const AboutPage = () => {
    return (
        <div className='py-7'>
            <Container>
                <h1 className='text-4xl font-bold mb-6'>About Us</h1>
                <p className='mb-4'>
                    Welcome to Care.IO, your number one source for all things car cleaning. We're dedicated to providing you the very best of Care.IO services, with an emphasis on quality, convenience, and customer satisfaction.      
                </p>
                <p className='mb-4'>
                    Founded in 2023, Care.IO has come a long way from its beginnings. When we first started out, our passion for clean cars drove us to start our own business.
                </p>
                <p className='mb-4'>
                    We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                </p>
                <p>
                    Sincerely,
                    <br />
                    The Care.IO Team
                </p>
            </Container>
        </div>
    );
};

export default AboutPage;