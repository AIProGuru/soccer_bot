import { Footer } from "./partials/Footer.comp"
import { Header } from "./partials/Header.comp"
import React from "react";



export const DefaultLayout = ({children}) => {
    return (
        <div className="default-layout">
            <header className="header mb-2">
                <Header />
            </header>
            <main className="main">
                {children}
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}