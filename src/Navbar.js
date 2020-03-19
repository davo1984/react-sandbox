import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.navbarLinks = ['Home', 'Awesome Bootcamp Blog', 'Projects', 'Links', 'Contact', 'About']
    }

    render() {
        const navLinksinHTML = this.navbarLinks.map((link, idx) => {
            return (
                <a onClick={() => this.props.updatePage(link)}
                className = 'pl-2'
                href = '#'
                key = {idx}
                >
                    {link}
                </a>
            )
        })
        return (
            <h3>
                {navLinksinHTML}
            </h3>
        )
    }
}

export default Navbar