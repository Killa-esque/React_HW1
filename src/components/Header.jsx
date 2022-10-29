import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container px-lg-5'>
                    <a href="#" className='navbar-brand'>Start Boostrap</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                            <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
