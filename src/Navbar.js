import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.navbarLinks = ['Home', 'Awesome Bootcamp Blog', 'Projects', 'Links', 'Contact', 'About']
    }

    render() {
        const navLinksinHTML = this.navbarLinks.map((link, idx) => {
            return (
                <React.Fragment key={idx}>
                    <a onClick={() => this.props.updatePage(link)}
                        className = 'pl-2'
                        href = '#'
                    >
                        {link}
                    </a>
				{ this.navbarLinks.length - 1 === index ? null : (<p>-</p>) }
				</React.Fragment >
            )
        })
        return (
            <h2>
                {navLinksinHTML}
            </h2>
        )
    }
}

export default Navbar