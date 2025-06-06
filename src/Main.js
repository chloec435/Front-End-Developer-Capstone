import React from 'react';
function Main() {
    return (
        <main className="main">
            <section className="spotlight">
                <article id="spotlight">
                    <h1>Spotlight</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sit quae? 
                        Fugit magnam culpa, labore reiciendis dolores accusamus doloribus, minus, 
                        facilis pariatur animi optio iure omnis aliquam sequi quidem dolore.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloribus 
                        nam excepturi illo minus. Blanditiis tempora quae quia quo, quis, sit 
                        reiciendis libero veniam suscipit ipsa minima est eligendi rerum.
                    </p>
                </article>
            </section>
            <section className="information">
                <article id="menu">
                    <h2>Our New Menu</h2>
                    <img src="src\images\circle_bread.jpg" alt="Bruschetta" id="article_images" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque, 
                        provident deserunt id, quae vero explicabo quisquam libero itaque voluptatem 
                        unde odio, officiis magni odit fuga molestiae velit possimus. Rerum!
                    </p>
                    <p><a href="menu.html">Check out our menu!</a></p>
                </article>
                <article id="book">
                    <h2>Book A Table</h2>
                    <img src="Images\Book a Table.jpg" alt="Little Lemon Logo" id="article_images" />
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem aspernatur 
                        veritatis quam qui sequi suscipit, culpa illo similique numquam exercitationem 
                        ducimus beatae, soluta dolore id alias. Asperiores rem totam excepturi!
                    </p>
                    <p><a href="book.html">Book a table now!</a></p>
                </article>
                <article id="hours">
                    <h2>Open Hours</h2>
                    <img src="Images\Open Hours.jpg" alt="Little Lemon Logo" id="article_images" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p>Mon to Thurs: 11 AM—11 PM</p>
                    <p>Fri to Sat: 11 AM—12 AM</p>
                    <p>Sunday: Closed</p>
                </article>
            </section>
        </main>
    );
}

export default Main;