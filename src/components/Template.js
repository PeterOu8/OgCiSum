import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

/**
 * The template component
 * @param title the title of the template
 * @param children the children of the component
 * @returns The template component
 */
export default function Template({ title, children }) {
    return (
        <>
            <Header />
            <main>
                <h2>{title}</h2>
                {children}
            </main>
            <Footer />
        </>
    );
}

Template.propTypes = {
    title: PropTypes.string.isRequired,
};

