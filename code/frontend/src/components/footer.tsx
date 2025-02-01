import React from 'react';
import Link from "next/link";

export default function Footer() {
    return(
        <React.Fragment>
            <footer className="container border-t">
                <div className="child">
                    <div className="text-center">
                        <h2>www by Techit Thawiang</h2>
                        <p className="text-[12px]">Powered by <a className="link">dailitation.xyz</a></p>
                    </div>
                </div>
                <div className="child">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-x-[0px] md:divide-x divide-y lg:divide-y-[0px] divide-dashed border border-auto divide-auto">
                        <div className="grid-card">
                            <h3>Pages</h3>
                            <div className="text-sm flex flex-col w-fit">
                                <Link href="/" className="link">Home</Link>
                                <Link href="/photography" className="link">Photography</Link>
                                <Link href="/projects" className="link">Projects</Link>
                                <Link href="/about" className="link">About</Link>
                            </div>
                        </div>
                        <div className="grid-card">
                            <h3>Links</h3>
                            <div className="text-sm flex flex-col w-fit">
                            <Link href="/collections" className="link">Collections</Link>
                            <Link href="/collections/people" className="link">People</Link>
                            </div>
                        </div>
                        <div className="grid-card">
                            <h3>External Links</h3>
                            <div className="text-sm flex flex-col w-fit">
                                <a href="https://giskette.dailitation.xyz" className="link">Giskette (Git)</a>
                                <a href="https://files.techit.win" className="link">Files</a>
                                <a href="https://uptime.dailitation.xyz" className="link">Uptime Status</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="child">
                    <div className="text-center">
                        <p className="text-[12px]">© 2023-{(new Date().getFullYear())} Techit Thawiang, Some rights reserved.<br/>
                        <a target="_blank" className="link" href="https://giskette.dailitation.xyz/techit/www">Get Source Code</a> | <a target="_blank" className="link" href="https://keys.openpgp.org/vks/v1/by-fingerprint/32321602C7B57839F6F800434931394BAB824F2A">GPG/PGP Public Key</a></p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}