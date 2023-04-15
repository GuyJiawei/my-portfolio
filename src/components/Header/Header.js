import React from "react";
import "./Header.css";
import NavTabs from "../NavTabs/NavTabs";

export default function Header(props) {
    const { currentPage, handlePageChange } = props
    return (
        <div className="header">
            <h1>Guy's Portfolio</h1>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}