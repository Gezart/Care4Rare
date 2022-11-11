import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Container from './Container'

const PlainText = ({ content, images, button }) => {
    const myLoader = ({ src, width, quality }) => {
        return `${process.env.NEXT_PUBLIC_WORDPRESS_API_NEXT}/wp-content/uploads/${images?.mediaDetails?.file}`
      }

    console.log("test", `${process.env.NEXT_PUBLIC_WORDPRESS_API_NEXT}/wp-content/uploads/${images?.mediaDetails?.file}`);
    return (
        <Container>
            <div className="plain-text">
                <div className="image">
                    {/* <Image
                        fill
                        loader={myLoader}
                        src="me.png"
                        alt="Picture of the author"
                        width={481}
                        height={554}
                    /> */}
                    <img src={`${process.env.NEXT_PUBLIC_WORDPRESS_API_NEXT}/wp-content/uploads/${images?.mediaDetails?.file}`} alt="" />
                </div>
                <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
            {/* <Link to={link}>{linkText}</Link> */}
            {/* {button.url + "--" + button.title} */}


        </Container>
    )
}

export default PlainText